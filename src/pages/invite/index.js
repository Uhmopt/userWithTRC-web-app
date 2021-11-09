import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import notification from 'lib/notification'
import React, { useState } from 'react'
import { useEffect } from 'react'
import QRCode from 'react-qr-code'
import generateQR from 'lib/qrgenerator'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import copy from 'copy-to-clipboard';
import { saveAs } from 'file-saver'
import Layout from '../../layouts'

export default function Invite() {
  const history = useHistory()
  const [currentState, setCurrentState] = useState({
    inviteLink: '',
  })
  const user = useSelector((state) => state?.auth?.user ?? {})
  useEffect(() => {
    const tmpLink = `${window.origin}/register/` + Buffer.from(user?.user_email ??"");
    setCurrentState((prevState = {}) => ({
      ...(prevState ?? {}),
      inviteLink: tmpLink,
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (Number(user?.user_level) === 0) {
    history.push('upgrade');
    notification('error', 'Please upgrade your level first!')
  }
  const handleChange = (e) => {
    setCurrentState((prevState = {}) => ({
      ...(prevState ?? {}),
      [e.target.name]: e.target.value,
    }))
  }
  const handleCopy = () => {
    // navigator.clipboard.writeText(currentState?.inviteLink ?? '')
    
    // console.log( navigator.clipboard )
    // window.clipboardData.setData("Text", currentState?.inviteLink ?? '');

    // if (navigator.clipboard !== undefined) {//Chrome
    //     navigator.clipboard.writeText(currentState?.inviteLink ?? '').then(function () {
    //         console.log('Async: Copying to clipboard was successful!');
    //     }, function (err) {
    //         console.error('Async: Could not copy text: ', err);
    //     });
    // }
    // else if(window.clipboardData) { // Internet Explorer
    //     window.clipboardData.setData("Text", currentState?.inviteLink ?? '');
    // }
    copy( currentState?.inviteLink ?? '' );
  }
  const handleClick = async () => {
    const tmpLink = await generateQR(currentState?.inviteLink ?? '')
    console.log( tmpLink );
    saveAs(tmpLink, 'invite.png');
  }
  return (
    <Layout isLogin={true} title="Invite Friend" before="home" menuIndex={3}>
      <Box className="bg-white rounded-md shadow-md p-8 pb-28 ">
        <Box className="pt-8 flex justify-center">
          <QRCode value={currentState.inviteLink} />
        </Box>
        <Box className="py-8">
          <Link to={`#`}>
            <Button
              onClick={handleClick}
              type="button"
              variant="contained"
              size="large"
              autoCapitalize="true"
              fullWidth
              className="capitalize"
            >
              Save
            </Button>
          </Link>
        </Box>
        <MainTitle />
        <Box className="pt-8 w-full">
          <CustomInput
            name="inviteLink"
            value={currentState.inviteLink}
            endIcon={
              <IconButton onClick={handleCopy}>
                <ContentCopyIcon className="text-main" />
              </IconButton>
            }
            placeholder="This is invitation link"
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Layout>
  )
}
