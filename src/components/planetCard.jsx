import { Avatar, Card, CardActionArea, CardContent, CardHeader } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../utils/routes.js';

export default function PlanetCard({ planet: { name, gravity, terrain, population, id } }) {
  const navigate = useNavigate();

  return <Card sx={{ width: '300px', margin: '7px 5px' }}>
    <CardActionArea sx={{ height: '100%' }} onClick={() => navigate(routes.allResidents.buildPath(id))}>
      <CardHeader
        avatar={<Avatar sx={{ backgroundColor: `#EEDB00` }}>{name[0].toUpperCase()}</Avatar>}
        title={name}
        subheader={`${population} habitants`}
      />
      <CardContent>
        <div>Gravity: {gravity}</div>
        <div>Terrain: {terrain}</div>
      </CardContent>
    </CardActionArea>
  </Card>
}