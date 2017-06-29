import React, { Component } from 'react';
import { render } from 'react-dom';
import {Button, IconButton} from 'react-toolbox/lib/button';
import {DatePicker, Layout, Panel, Snackbar, Dropdown, Checkbox} from 'react-toolbox';
import Input from 'react-toolbox/lib/input';
import Header from '../common/header.component.jsx';
import theme from '../theme/theme.css';
var Config = require('Config')

const datetime = new Date();
const timings = [
  {value: '', label: 'Contact Time'},
  {value: 'Morning', label: 'Morning'},
  {value: 'Afternoon', label: 'Afternoon'},
  {value: 'Evening', label: 'Evening'}
];
const funeralType = [
  {value: 'Burial', label: 'Burial'},
  {value: 'Cremantion', label: 'Cremantion'},
  {value: 'Sea', label: 'Sea'},
  {value: 'Tree', label: 'Tree'}
];
class CaseAdd extends React.Component {
   constructor() {
    super();
    this.state = {
        date1: datetime, 
        dfname: '', 
        dlname: '', 
        daddress: '', 
        dpin: '', 
        cfname: '', 
        clname: '', 
        phone: '',
        contacttime: '', 
        funeraltype: 'Burial', 
        phone: '', 
        snackbr: false, 
        dcerti:true, 
        ismarried: false, 
        bcerti:true
    };
    this.handleChange = this.handleChange.bind(this);
    this.addCase = this.addCase.bind(this);
    this.handleSnackbarClick = this.handleSnackbarClick.bind(this);
  }
  
   handleChange(key, value) {
      var obj  = {}
      obj[key] = value;
      this.setState(obj);
   };
   addCase() {
      var that = this;
      var curState = this.state;
      //validation
      if(!curState.dfname || !curState.dlname 
          || !curState.daddress || !curState.dpin
          || !curState.cfname || !curState.clname
          || !curState.phone) {
        alert("Please fill all the required fields");
        return;
      }
      //Send data to server
      var postData = JSON.stringify(this.state);
      fetch(Config.serverUrl + 'savecase',{
        method: 'POST',
        body: postData,
        headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
      })
      .then(function(response) {
        if (response.status >= 400) {
          alert("Something went wrong, please try again later");
        }
        return response.json();
      })
      .then(function(response) {
        if(response.data == 1) {
          that.setState({snackbr: true});
          that.setState({
              date1: datetime, 
              dfname: '', 
              dlname: '', 
              daddress: '', 
              dpin: '', 
              cfname: '', 
              clname: '', 
              phone: '',
              contacttime: '', 
              funeraltype: 'Burial', 
              phone: '',
              dcerti:true, 
              ismarried: false, 
              bcerti:true
          });
        } else {
          alert("Something went wrong, please try again later");
        }
      });
   };
   handleSnackbarClick() {
    this.setState({snackbr: false});
   }
   render() {
      return (
         <Layout>
            <Header/>
            <section style={{ position:'relative', flex: 1, padding: '1.8rem' }}>
              <h1>Add New Case </h1>
              <Snackbar
                action='Nice'
                label='Data Saved successfully, Please see the list'
                onClick={this.handleSnackbarClick}
                ref='snackbar' active={this.state.snackbr}
                type='accept'/>

                <div className={theme.wrapDiv}>
                  <h3 className={theme.h3Style}>Deceased Details</h3>
                  <div className={theme.inputWrapper}>
                    <Input required type='text' className={theme.inputElem} label='First Name' name='dfname' value={this.state.dfname} onChange={this.handleChange.bind(this, 'dfname')} maxLength={16 } />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Input required type='text' className={theme.inputElem} label='Last Name' name='dlname' value={this.state.dlname} onChange={this.handleChange.bind(this, 'dlname')} maxLength={16 } />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Input required type='text' className={theme.inputElem} label='Address' name='daddress' value={this.state.daddress} onChange={this.handleChange.bind(this, 'daddress')} maxLength={50 } />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Input required type='tel' className={theme.inputElem} label='Pincode' name='dpin' value={this.state.dpin} onChange={this.handleChange.bind(this, 'dpin')} maxLength={5} />
                  </div>
                  <div style={{padding: '10px', 'paddingTop': '2rem'}}>
                    <DatePicker maxDate={datetime} label='Date of Death' sundayFirstDayOfWeek onChange={this.handleChange.bind(this, 'date1')} value={this.state.date1} />
                  </div>
                  <div style={{padding: '8px'}}>
                    <Checkbox
                      checked={this.state.dcerti}
                      label="Death Certificate Available!"
                      onChange={this.handleChange.bind(this, 'dcerti')}
                    />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Checkbox
                      checked={this.state.ismarried}
                      label="Person is married"
                      onChange={this.handleChange.bind(this, 'ismarried')}
                    />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Checkbox
                      checked={this.state.bcerti}
                      label="Birth Certificate Available!"
                      onChange={this.handleChange.bind(this, 'bcerti')}
                    />
                  </div>

                  <h3 className={theme.h3Style}>Customer Details</h3>
                  <div className={theme.inputWrapper}>
                    <Input required type='text' className={theme.inputElem} label='First Name' name='cfname' value={this.state.cfname} onChange={this.handleChange.bind(this, 'cfname')} maxLength={16 } />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Input required type='text' className={theme.inputElem} label='Last Name' name='clname' value={this.state.clname} onChange={this.handleChange.bind(this, 'clname')} maxLength={16 } />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Input required type='tel' className={theme.inputElem} label='Phone' name='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} maxLength={10 } />
                  </div>
                  <div className={theme.inputWrapper}>
                    <Dropdown
                        className={theme.inputElem}
                        auto
                        onChange={this.handleChange.bind(this, 'contacttime')}
                        source={timings}
                        value={this.state.contacttime}
                      />
                  </div>
                  <h3 className={theme.h3Style}>Funeral Type</h3>
                  <div className={theme.inputWrapper}>
                    <Dropdown
                        className={theme.inputElem}
                        auto
                        onChange={this.handleChange.bind(this, 'funeraltype')}
                        source={funeralType}
                        value={this.state.funeraltype}
                      />
                  </div>

                  <div className={theme.inputWrapper}>
                    <Button icon='add' floating raised label="SAVE" onClick={this.addCase.bind()} />
                  </div> 
              </div>
            </section>
         </Layout>
      );
   }
}

export default CaseAdd;
