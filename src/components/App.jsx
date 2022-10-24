import React from 'react';
import { CssBaseline } from '@mui/material';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
} from 'react-router-dom';

import useStyles from './styles';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

const router = createBrowserRouter([
  {
    path: '/movie/:id',
    element: <MovieInformation />,
  },
  {
    path: '/actors/:id',
    element: <Actors />,
  },
  {
    path: '/',
    element: <Movies />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
]);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RouterProvider router={router} />
      </main>
    </div>
  );
};

export default App;
