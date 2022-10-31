import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './loading.module.scss';

export default function Loading({ entity }) {
  return <div className={styles.loadingContainer}>
    <CircularProgress sx={{ marginTop: '15px' }} />
    loading {entity}...
  </div>
}