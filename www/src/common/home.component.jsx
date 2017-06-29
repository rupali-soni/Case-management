import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout, Panel } from 'react-toolbox';
import Header from './header.component.jsx';


class Home extends React.Component {

    render() {
        return (
            <Layout>
              <Panel>
                <Header/>
                <div style={{ position:'relative', flex: 1, padding: '1.8rem' }}>
                  <h1>Welcome to Case Management System</h1>
                  <p>Please select the option from left Menu.</p>
                </div>
              </Panel>
            </Layout>
        );
    }
}

export default Home;
