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
  const onChange = (e) => {
    setCurrentState({
      ...currentState,
      [e.target.name]: e.target.value,
    })
  } 
  return (
    <Layout isLogin={true} title="Invite Friend" before="home" menuIndex={3}>
      <div className="py-10"></div>
      <Box className="bg-white rounded-md shadow-md p-8 pb-24 mb-32">
        <div className="pt-8 flex justify-center">
          <QRCode value={currentState.inviteLink} />
        </div>
        <MainTitle />
        <div className="pt-8">
          <Link to={`#`}>
            <Button type="button" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Link>
        </div>
        <div className="pt-8 w-full">
          <CustomInput
            name="inviteLink"
            value={currentState.inviteLink}
            endIcon={<ContentCopyIcon className="text-main" />}
            placeholder="This is invitation link"
            onChange={onChange}
          />
        </div>
      </Box>
    </Layout>
  )
}
