import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { getResident } from '../service/resident.service.js';
import styles from './residents.module.scss'
import Loading from '../components/loading.jsx';
import { values } from 'mobx';
import ResidentCard from '../components/residentCard.jsx';

const Residents = observer(props => {
  const { planetId } = useParams();
  const [planetResidents, setPlanetResidents] = useState([]);
  const [residentsFetched, setResidentsFetched] = useState(false);
  const [residents, setResidents] = useState([]);
  const planets = values(props.store.planets);

  useEffect(() => {
    if (!residentsFetched && planets && planets.length && !residents.length) {
      setResidents(planets[planetId].residents);
    }
  }, [planets, planetId, residents, residentsFetched]);

  useEffect(() => {
    if (!residentsFetched && residents.length) {
      setResidentsFetched(true);
      const requests = residents.map(getResident);
      Promise.all(requests).then(setPlanetResidents);
    }
  }, [residents, residentsFetched]);

  if (!planets || !planets.length) {
    return <Loading entity='planets' />;
  }

  return <>
    <h1 className={styles.centeredTitle}>Want to discover who is in {props.store.planets[planetId].name}?</h1>
    <h2 className={styles.centeredTitle}>Let's go for it!</h2>

    {
      !planetResidents.length
        ? <Loading entity='residents' />
        : <div className={styles.residentsContainer}>
          {
            planetResidents
              .map((resident, i) => <ResidentCard key={i} resident={resident} planetId={planetId} />)
          }
        </div>
    }
  </>
}
);

export default Residents;