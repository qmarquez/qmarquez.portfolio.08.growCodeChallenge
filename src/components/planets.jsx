import { CircularProgress } from '@mui/material';
import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Planet from './planet.jsx';
import styles from './planets.module.scss';

const Planets = observer(props => {
  return <div className={styles.planetsContainer}>
    {
      props.store.fetchingPlanets
        ? <div className={styles.loadingContainer}>
          <CircularProgress sx={{ marginTop: '15px' }} />
          loading planets...
        </div>
        : values(props.store.planets)
          .map(planet => <Planet planet={planet} />)
    }
  </div>
}
);

export default Planets;