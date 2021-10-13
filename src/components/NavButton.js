import * as React from 'react';
import { Card } from '@mui/material';

export default function SimpleBottomNavigation() {

  return (
    <Card className="shadow-md mt-12 flex items-center justify-around p-0">
        <div className="bg-main text-white w-full h-12 flex justify-center items-center">All Users</div>
        <div className="w-full h-12 flex justify-center items-center">Upgraded</div>
    </Card>
  );
}