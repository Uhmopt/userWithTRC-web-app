import LockIcon from '@mui/icons-material/Lock';
import { Card, CardActions } from '@mui/material';
import React from 'react';

export default function LevelAuthorityCard({ startIcon = '', levelNum = 0 }) {
  return (
    <div className="pt-4">
      <Card className="bg-white rounded-md flex justify-between p-2">
        <div className="flex justify-between">
          {startIcon}
          <div className="self-center pl-2">
            <div className="text-lg font-bold text-title">{`${levelNum ?? 0} Star member`}</div>
            <div className="text-xs">{`Unlock level ${levelNum ?? 0} Friend`}</div>
          </div>
        </div>
        
        <CardActions className="text-main">
          <LockIcon />
        </CardActions>
        {/* <Link to="level-users">
          <CardActions className="bg-light text-main rounded-full self-center shadow-sm">
            <NavigateNext />
          </CardActions>
        </Link> */}
      </Card>
    </div>
  )
}
