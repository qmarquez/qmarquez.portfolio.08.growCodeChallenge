import React from 'react';
import { Avatar, Card, CardActionArea, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from '../utils/routes.js';

export default function ResidentCard({ resident, planetId }) {
  const navigate = useNavigate();
  const { name } = resident;
  const residentId = resident.url.split('/').filter(s => s).reverse()[0];

  return <Card sx={{ width: '300px', margin: '7px 5px' }}>
    <CardActionArea onClick={() => navigate(routes.resident.buildPath(planetId, residentId))}>
      <CardHeader
        avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
        title={name}
      />
    </CardActionArea>
  </Card>
}