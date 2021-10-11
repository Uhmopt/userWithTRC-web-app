import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import GB from 'assets/images/svgs/GB.svg'
import CN from 'assets/images/svgs/CN.svg'
import { ClickAwayListener, Collapse } from '@mui/material'
import { useState } from 'react'
import { Box } from '@mui/system'

export default function FlagSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [lang, setLang] = useState('GB')

  const handleSelect = (language) => {
    setLang(language);
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <div
        className="flex border-2 border-main rounded-md h-10 p-2 drop-shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <img src={lang === "GB" ? GB : CN} alt={lang} />
        <label className="self-center">{lang === "GB" ?"English":"Chinese"}</label>
        <ArrowDropDownIcon className="self-center" />
      </div>
      {/* dropdown list */}
      <Collapse in={isOpen}>
        {isOpen && (
          <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <Box className="bg-white border-2 border-title h-20 w-full absolute rounded-md z-10 transition ">
              <div
                className="flex h-10 active:bg-light"
                onClick={() => handleSelect("GB")}
              >
                <img src={GB} alt="GB" className="m-2 w-5" />
                <label className="self-center">English</label>
              </div>
              <div
                className="flex h-10 active:bg-light"
                onClick={() =>  handleSelect("CN")}
              >
                <img src={CN} alt="CN" className="m-2 w-5" />
                <label className="self-center">Chinese</label>
              </div>
            </Box>
          </ClickAwayListener>
        )}
      </Collapse>
    </div>
  )
}
