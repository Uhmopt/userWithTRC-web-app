import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'

export default function Invite() {
  const [currentState, setCurrentState] = useState({
    inviteLink: '',
  })
  const handleChange = (e) => {
    setCurrentState((prevState = {}) => ({
      ...(prevState ?? {}),
      [e.target.name]: e.target.value,
    }))
  }
  const handleClick = () => {
    navigator.clipboard.writeText(currentState?.inviteLink ?? '')
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
              type="button"
              variant="contained"
              size="large"
              autoCapitalize="true"
              fullWidth
              className="capitalize"
            >
              Save to phone
            </Button>
          </Link>
        </Box>
        <MainTitle />
        <Box className="pt-8 w-full">
          <CustomInput
            name="inviteLink"
            value={currentState.inviteLink}
            endIcon={
              <IconButton onClick={handleClick}>
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
