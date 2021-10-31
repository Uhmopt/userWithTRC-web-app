import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import notification from 'lib/notification'
import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Layout from '../../layouts'

export default function Invite() {
  const history = useHistory()
  const [currentState, setCurrentState] = useState({
    inviteLink: '',
  })
  const user = useSelector((state) => state?.auth?.user ?? {})
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
    navigator.clipboard.writeText(currentState?.inviteLink ?? '')
  }
  const handleClick = () => {
    const tmpLink = `${window.origin}/register/` + Buffer.from(user?.user_email ??"").toString('base64');
    setCurrentState((prevState = {}) => ({
      ...(prevState ?? {}),
      inviteLink: tmpLink,
    }))
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
              Submit
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
