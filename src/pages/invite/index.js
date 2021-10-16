import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import CustomInput from 'components/CustomInput'
import MainTitle from 'components/MainTitle'
import QRCode from "react-qr-code";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layouts'

export default function Invite() {
  const [currentState, setCurrentState] = useState({
    inviteLink: '',
  })
  const handleChange = (e) => {
    setCurrentState((prevState = {})=>({
      ...(prevState ?? {}),
      [e.target.name]: e.target.value,
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
            <Button type="button" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Link>
        </Box>
        <MainTitle />
        <Box className="pt-8 w-full">
          <CustomInput
            name="inviteLink"
            value={currentState.inviteLink}
            endIcon={<ContentCopyIcon className="text-main" />}
            placeholder="This is invitation link"
            onChange={handleChange}
          />
        </Box>
      </Box>
    </Layout>
  )
}
