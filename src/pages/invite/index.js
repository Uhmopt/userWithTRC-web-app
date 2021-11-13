import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import copy from 'copy-to-clipboard'
import { saveAs } from 'file-saver'
import generateQR from 'lib/qrgenerator'
import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'
import { useTranslation } from 'react-i18next'

export default function Invite() {
  const { t } = useTranslation()
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
  const handleChange = (e) => {
    setCurrentState((prevState = {}) => ({
      ...(prevState ?? {}),
      [e.target.name]: e.target.value,
    }))
  }
  const handleCopy = () => {
    copy( currentState?.inviteLink ?? '' );
  }
  const handleClick = async () => {
    const tmpLink = await generateQR(currentState?.inviteLink ?? '')
    saveAs(tmpLink, 'invite.png');
  }
  return (
    <Layout isLogin={true} title={t('inviteFriend')} before="home" menuIndex={3}>
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
              {t('save')}
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
