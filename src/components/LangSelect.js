import * as React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputBase from '@mui/material/InputBase';

import GB from 'assets/images/svgs/GB.svg'
import CN from 'assets/images/svgs/CN.svg'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 6,
    border: '1px solid #ced4da',
    padding: '4px',
  },
}));

export default function LangSelect() {
  const [lang, setLang] = React.useState('GB')
  const handleChange = (event) => {
    setLang(event.target.value)
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={lang}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={'GB'}>
            <div className="flex">
              <img src={GB} alt="GB" className="m-2 w-5" />
              <label className="self-center">English</label>
            </div>
          </MenuItem>
          <MenuItem value={'CN'}>
            <div className="flex">
              <img src={CN} alt="CN" className="m-2 w-5" />
              <label className="self-center">Chinese</label>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
