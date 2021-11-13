import * as React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputBase from '@mui/material/InputBase';

import en from 'assets/images/svgs/GB.svg'
import cn from 'assets/images/svgs/CN.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { setLanguage } from 'store/actions/home'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 6,
    border: '1px solid #ced4da',
    padding: '4px',
  },
}));

export default function LangSelect({ lang='en', onChange=()=>{} }) {
  const { i18n } = useTranslation();
  const home = useSelector((state) => state?.home ?? {})
  const dispatch = useDispatch()
  const onClick = (e) => {
    i18n.changeLanguage(e.target.value ?? "en");
    dispatch( setLanguage(e.target.value) )
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <Select
          value={home?.lang ?? "en"}
          onChange={onClick}
          input={<BootstrapInput />}
        >
          <MenuItem value={'en'}>
            <div className="flex items-center justify-between max-h-9">
              <img src={en} alt="en" className="m-2 w-5" />
              <label className="self-center">English</label>
            </div>
          </MenuItem>
          <MenuItem value={'cn'}>
            <div className="flex items-center justify-between max-h-9">
              <img src={cn} alt="cn" className="m-2 w-5" />
              <label className="self-center">中文</label>
            </div>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
