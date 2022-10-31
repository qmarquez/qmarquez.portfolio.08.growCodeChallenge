import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/loading.jsx';
import { getPlanetByUrl } from '../service/planet.service.js';
import { getResidentById } from '../service/resident.service.js';
import styles from './resident.module.scss';

export default function Resident() {
  const { residentId } = useParams();
  const [resident, setResident] = useState();

  useEffect(() => {
    if (!resident) {
      getResidentById(residentId)
        .then(setResident);
    } else if (!resident.homeworldName) {
      getPlanetByUrl(resident.homeworld)
        .then(data => {
          setResident({ ...resident, homeworldName: data.name });
        });
    }
  }, [resident, residentId]);

  return <>
    {!resident
      ? <Loading entity='resident' />
      : <div>
        <h1 className={styles.title}> {resident.name}</h1>
        <div><b>Name: </b>{resident.name}</div>
        <div><b>Birth year: </b>{resident.birth_year}</div>
        <div><b>Eye color: </b>{resident.eye_color}</div>
        <div><b>Gender: </b>{resident.gender}</div>
        <div><b>Hair color: </b>{resident.hair_color}</div>
        <div><b>Height: </b>{resident.height}</div>
        <div><b>Mass: </b>{resident.mass}</div>
        <div><b>Skin color: </b>{resident.skin_color}</div>
        <div><b>Homeworld: </b>{resident.homeworldName}</div>
      </div>
    }
  </>
}