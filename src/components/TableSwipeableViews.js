import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'
import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>
            <div>{children}</div>
          </div>
        </Box>
      )}
    </div>
  )
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
export default function TableSwipeableViews({ contentOne="Content One", contentTwo="Content Two",  contentNumber=0 }) {
  const theme = useTheme()
  return (
    <Box className="rounded-md p-0">
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={contentNumber}
      >
        <TabPanel value={contentNumber} index={0} dir={theme.direction}>
          {contentOne ?? ''}
        </TabPanel>
        <TabPanel value={contentNumber} index={1} dir={theme.direction}>
          {contentTwo ?? ''}
        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}
