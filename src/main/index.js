import React from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';
import Layout from './Layout';

export default function Main() {

  return (
    <div id='transport-main' style={{display: 'flex'}}>
      <Layout>
        {routes.map(route => (
          <Route key={route.path} path={`${route.path}`}  component={route.component}/>
        ))}
      </Layout>
    </div>
  );
}
