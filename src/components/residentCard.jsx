import React from 'react';
import { Avatar, Card, CardActionArea, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../utils/routes.js';

export default function ResidentCard({ resident: { name }, planetId }) {
  const navigate = useNavigate();
  const residentId = 0;

  return <Card sx={{ width: '300px', margin: '7px 5px' }}>
    <CardHeader
      avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
      title={name}
    />
  </Card>
}