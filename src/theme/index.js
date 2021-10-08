import { createTheme } from '@material-ui/core'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2F80ED',
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
})
