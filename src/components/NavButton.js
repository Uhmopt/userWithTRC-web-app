import React from 'react'
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
    '&.Mui-selected': {
      background: '#2F80ED',
      color: 'white',
    },
  },
})

export default function NavButton({ tabLabelOne="", tabLabelTwo="", tabNumber=0, onChange }) {
  const classes = useStyles()
  const handleChange = (event, newValue) => {
    if( typeof onChange === 'function' )
    onChange(newValue);
  }
  return (
    <Paper square className="rounded-md overflow-hidden">
      <Tabs
        value={tabNumber}
        // TabIndicatorProps={{ style: { background: 'green' } }}
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab className={classes.root} label={tabLabelOne ?? 'TabOne'} />
        <Tab className={classes.root} label={tabLabelTwo ?? 'TabTwo'} />
      </Tabs>
    </Paper>
  )
}
