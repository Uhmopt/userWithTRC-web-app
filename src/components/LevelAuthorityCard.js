import { LockOpen } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import { Card, CardActions } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LevelAuthorityCard({ startIcon = '', levelNum = 0, userLevel }) {
  const {t} = useTranslation()
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between p-2">
        <div className="flex justify-between">
          {startIcon}
          <div className="self-center pl-2">
            <div className="text-lg font-bold text-title">{`${levelNum ?? 0} ${t("starMember")}`}</div>
            <div className="text-xs">{`${t('unlockLevel')} ${levelNum ?? 0} ${t('friend')}`}</div>
          </div>
        </div>
        <CardActions className="text-main">
          {userLevel < levelNum ? (<LockIcon />) : (<LockOpen />)}
        </CardActions>
      </Card>
    </div>
  )
}
