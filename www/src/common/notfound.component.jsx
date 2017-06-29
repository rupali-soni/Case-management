import React from 'react';
import { render } from 'react-dom';
import { Layout, Panel } from 'react-toolbox';
import Header from './header.component.jsx';

const NotFoundPage = () => {
  return (
    <Layout>
      <Panel>
        <Header/>
        <div style={{ position:'relative', flex: 1, padding: '1.8rem' }}>
          <h1>404 Page not found!</h1>
        </div>
      </Panel>
    </Layout>
  );
};

export default NotFoundPage;
