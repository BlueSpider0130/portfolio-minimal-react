import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
// layouts
import HomeLayout from '../layouts/home';

// ----------------------------------------------------------------------

const HomeRoutes = {
  path: '*',
  layout: HomeLayout,
  routes: [
    {
      exact: true,
      path: '/',
      component: lazy(() => import('../views/LandingPage'))
    },
    {
      exact: true,
      path: '/service',
      component: lazy(() => import('../views/ServicePage'))
    },
    {
      exact: true,
      path: '/process',
      component: lazy(() => import('../views/ProcessPage'))
    },
    {
      exact: true,
      path: '/careers',
      component: lazy(() => import('../views/CareersPage'))
    },
    {
      exact: true,
      path: '/aboutus',
      component: lazy(() => import('../views/AboutusPage'))
    },
    {
      exact: true,
      path: '/contact',
      component: lazy(() => import('../views/ContactPage'))
    },

    // ----------------------------------------------------------------------

    {
      component: () => <Redirect to="/404" />
    }
  ]
};

export default HomeRoutes;
