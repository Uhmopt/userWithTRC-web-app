import * as React from 'react';
import { Card } from '@mui/material';

export default function NavButton() {

  return (
    <Card className="shadow-md mt-12 flex items-center justify-around p-0">
        <div className="bg-main text-white w-full h-12 flex justify-center items-center">All Users</div>
        <div className="w-full h-12 flex justify-center items-center">Upgraded</div>
    </Card>
  );
}
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <div><div>{children}</div></div>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default function NavButton() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     console.log( newValue );
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper' }} className="mt-10 rounded-lg">
//       <AppBar position="static" className="rounded-lg">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="All Users" {...a11yProps(0)} />
//           <Tab label="Upgraded" {...a11yProps(1)} />
//         </Tabs>
//       </AppBar>
//       {/* <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Item Two
//         </TabPanel>
//       </SwipeableViews> */}
//     </Box>
//   );
// }

