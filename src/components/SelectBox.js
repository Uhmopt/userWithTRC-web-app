import { InputLabel } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { makeStyles } from '@mui/styles'
import * as React from 'react'

const useStyles = makeStyles({
  root: {
    '.MuiMenu-list': {
      height: '300px',
    }
  },
})

export default function SelectBox({
  label = '',
  itemList = [],
  value = '',
  onChange = () => {},
}) {
  const style = useStyles()
  console.log( itemList, 'Selectbox' )
  return (
    <FormControl required sx={{minWidth: 120 }}>
      <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
      <Select
        className={style.root}
        variant="standard"
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value ?? ''}
        onChange={
          typeof onChange === 'function' ? onChange : console.log('error')
        }
      >
        <MenuItem value="">
          <em>All</em>
        </MenuItem>
        {itemList.map((item, index) => {
          return (
            <MenuItem key={index} value={item?.value}>
              {item?.label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
