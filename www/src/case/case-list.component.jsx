import React, { Component } from 'react';
import { render } from 'react-dom';
import { Layout, Panel } from 'react-toolbox';
import ReactDataGrid from 'react-data-grid';
import Header from '../common/header.component.jsx';
var Config = require('Config')

class CaseList extends React.Component {
  constructor() {
    super();
    this.state = {
         Cases: [],
         columns: [
          {
            key: 'dName',
            name: 'Deceased Name',
            resizable: true
          },
          {
            key: 'dSurname',
            name: 'Deceased Surname',
            resizable: true
          },
          {
            key: 'dod',
            name: 'Date of Death',
            resizable: true
          },
          {
            key: 'cPhone',
            name: 'Customer Phone',
            resizable: true
          },
          {
            key: 'cName',
            name: 'Name',
            resizable: true
          },
          {
            key: 'cSurname',
            name: 'Surname',
            resizable: true
          },
          {
            key: 'funeralType',
            name: 'Funeral Type',
            resizable: true
          }
        ],
        rowCount : 0
      };
    this.rowGetter = this.rowGetter.bind(this);
  }
  //call express js app API to get dynamic data
  componentDidMount() {    
    var that = this;
    var url = Config.serverUrl + 'getcases'

    fetch(url)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function(data) {
      that.setState({ Cases: data.cases });
      that.setState({ rowCount: data.cases.length });
    });
  }
  rowGetter(i) {
    return this.state.Cases[i];
  }
  render() {
    return (
      <Layout>
        <Panel>
          <Header/>
          <div style={{ position:'relative', flex: 1, padding: '1.8rem' }}>
            <h1>All Cases </h1>
            <ReactDataGrid
              columns={this.state.columns}
              rowGetter={this.rowGetter}
              rowsCount={this.state.rowCount}
              minHeight={500} />
          </div>
        </Panel>
      </Layout>
    );
  }
}

export default CaseList;
