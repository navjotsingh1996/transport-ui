import React from 'react';
import { Route } from 'react-router-dom';
import routes from '../routes';
import Layout from './Layout';

class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id='transport-main' style={{display: 'flex'}}>
        <Layout>
          {routes.map(route => (
            <Route path={`${route.path}`}  component={route.component}/>
          ))}
        </Layout>
      </div>
    );
  }
}

export default Main;