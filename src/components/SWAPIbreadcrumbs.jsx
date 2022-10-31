import React from 'react';
import { Breadcrumbs } from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '../utils/routes.js';

export default function SWAPIBreadcrumbs({ crumbs }) {
  /*
  I thought the breadcrumbs functionality like if it was able to share a planet residents
  and to share resident details information, so I need to assume that someone can get in
  a URL directly without passing for the home screen.
  If I force the users to fall into the home screen i can simplify this a lot because the
  locations could be not so dynamic
  */

  return <Breadcrumbs>
    <Link underline="hover" color="inherit" to={routes.allPlanets.path}>
      All planets
    </Link>
    {
      crumbs && crumbs.map(
        ({ url, label }) => <Link underline="hover" color="inherit" to={url} key={url}>
          {label}
        </Link>
      )
    }
  </Breadcrumbs>
}