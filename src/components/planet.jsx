import { Avatar, Card, CardContent, CardHeader } from '@mui/material';
import React from 'react';

export default function Planet({ planet: { name, gravity, terrain, population } }) {
  const bgColorR = Math.floor(Math.random() * 256).toString(16);
  const bgColorG = Math.floor(Math.random() * 256).toString(16);
  const bgColorB = Math.floor(Math.random() * 256).toString(16);

  return <Card sx={{ width: '300px', margin: '7px 5px' }}>
    <CardHeader
      avatar={<Avatar sx={{ backgroundColor: `#${bgColorR}${bgColorG}${bgColorB}` }}>{name[0].toUpperCase()}</Avatar>}
      title={name}
      subheader={`${population} habitants`}
    />
    <CardContent>
      <div>Gravity: {gravity}</div>
      <div>Terrain: {terrain}</div>
    </CardContent>
  </Card>
}