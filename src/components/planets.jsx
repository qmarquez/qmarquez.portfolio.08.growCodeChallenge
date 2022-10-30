import { CircularProgress, TextField } from '@mui/material';
import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Planet from './planet.jsx';
import styles from './planets.module.scss';

const Planets = observer(props => {
  const [search, setSearch] = useState('');

  return <>
    <h1 className={styles.title}>
      STAR WARS PLANETS!
    </h1>
    <div className={styles.searchPlanet}>
      Are you looking for a particular planet? <TextField sx={{ marginLeft: '7px' }} label='try your luck!' variant='outlined' onChange={e => setSearch(e.target.value)} />
    </div>
    <div className={styles.planetsContainer}>

      {
        props.store.fetchingPlanets
          ? <div className={styles.loadingContainer}>
            <CircularProgress sx={{ marginTop: '15px' }} />
            loading planets...
          </div>
          : values(props.store.planets)
            .filter(({ name }) => search ? RegExp(search,'ig').exec(name) : true)
            .map(planet => <Planet planet={planet} />)
      }
    </div>
  </>
}
);

export default Planets;