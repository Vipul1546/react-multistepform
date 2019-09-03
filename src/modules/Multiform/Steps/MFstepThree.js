import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import Input from '../Fields/input.js'
import InputFile from '../Fields/InputFile'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import axios from 'axios';


class MFstepThree extends React.Component{
    constructor(props) {
        super(props);
            this.options = countryList().getData()
            let getObject = JSON.parse(localStorage.getItem('ID-3'));
            this.state = {
                value : 2,
                stageNo : 3,
                newUser: {
                    name: (getObject === null) ? '' : getObject.name,
                    website: (getObject === null) ? '' : getObject.website,
                    country: (getObject === null) ? '' : getObject.country,
                    avatar:'',
                    avatarName:''
                },
             	options: this.options,
      			   value: null,
            };
            // binding the function
            this.nextBlock = this.nextBlock.bind(this);
            this.handleInput = this.handleInput.bind(this);
            this.handleFile = this.handleFile.bind(this);
    }

    // handing country and saving to user object state
    changeHandler = value => {
	    this.setState({ value });
	    this.setState( prevState => {
            return { 
               newUser : {
                        ...prevState.newUser, 'country': value.label
                       }
            }
         }//, () => console.log(this.state.newUser)
         )
  	}

    // handing input and saving to user object state
  	handleInput = (e) => {
         let value = e.target.value;
         let name = e.target.name;
         this.setState( prevState => {
            return { 
               newUser : {
                        ...prevState.newUser, [name]: value
                       }
            }
         }//, () => console.log(this.state.newUser)
         )
    }

    // handing file and saving to node server using post API
    handleFile = event =>{
      let name = event.target.name;
      let value = event.target.files[0];
      let fileName = event.target.files[0].name;
      const data = new FormData()
      data.append('avatar', value);

      axios.post('http://127.0.0.1:8000/upload/single/',data)
        .then(res => {
          this.setState( prevState => {
            return { 
               newUser : {
                        ...prevState.newUser, avatarName: 'http://localhost:8000/'+res.data.path
                       }
            }
         })
        });

    console.log(value);
    }

    // submitting the value and validation
    nextBlock = (e) => {
    	e.preventDefault();
    	const {dataCallback} = this.props;
    	let { stageNo } = this.state;
    	let { newUser } = this.state
        let error = '';
        let eCount = 0;

        if (typeof newUser.name === "undefined" || newUser.name === '') {
            error += 'Name Coded is Invalid.\n'
            eCount++
        } 
        if (typeof newUser.website === "undefined" || newUser.website === '') {
            error += 'Website Coded is Invalid.\n'
            eCount++
        } 
        if (typeof newUser.country === "undefined" || newUser.country === '') {
            error += 'Country Coded is Invalid.\n'
            eCount++
        } 
        // if (typeof newUser.avatar === "undefined" || newUser.avatar === '') {
        //     error += 'Avatar Coded is Invalid.\n'
        //     eCount++
        // } 
        if(eCount !== 0) {
            dataCallback(this.state.newUser, stageNo, error);
        } else {
            dataCallback(this.state.newUser, stageNo, error);
        }
    }

    render(){
    	return (
            <Fragment>
               	<div className="container stepTwo">
                	<h5>Create your user profile</h5>
                	<small></small>
	                <Input type={'text'}
	                   title= {'Name'} 
	                   showTitle = { true }
	                   name= {'name'}
	                   value={this.state.newUser.name} 
	                   placeholder = {'Enter your name'}
	                   handleChange = {this.handleInput}
	               	/>
	               	 <Input type={'text'}
	                   title= {'Website'} 
	                   showTitle = { true }
	                   name= {'website'}
	                   value={this.state.newUser.website} 
	                   placeholder = {'website url'}
	                   handleChange = {this.handleInput}
	               	/>
	               	<div className="form-group">
                	   <Select
  							        options={this.state.options}
  							        value={this.state.value}
  							        onChange={this.changeHandler}
  							      />
                      <label className="form-control-placeholder-tel">Country</label>
                    </div>

                     <InputFile type={'file'}
	                   title= {'Avatar'} 
	                   name= {'avatar'}
	                   //value={'sdfvsdfvsd'} 
	                   handleChange = {this.handleFile}
                     imgSrc= {this.state.newUser.avatarName}
	               	/>

	                <div className="form-group row fsubmit">
	                	<button type="submit" onClick={this.nextBlock} className="btn btn-primary">Create your Profile</button>
	            	</div>
            	</div>
            </Fragment>
    		)
    }
}

export default MFstepThree