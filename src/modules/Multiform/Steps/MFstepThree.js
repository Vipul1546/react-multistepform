import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import Input from '../Fields/input.js'
import InputFile from '../Fields/InputFile'
import Select from 'react-select'
import countryList from 'react-select-country-list'

class MFstepThree extends React.Component{
    constructor(props) {
        super(props);
            this.options = countryList().getData()

            this.state = {
                value : 2,
                newUser: {
                    name: '',
                    website: '',
                    country:'',
                    file:''
                },
             	options: this.options,
      			value: null,
            };
            this.nextBlock = this.nextBlock.bind(this);
            this.handleInput = this.handleInput.bind(this);
    }

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

  	handleInput(e) {
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
    nextBlock(e){
    	e.preventDefault();
    	const {dataCallback} = this.props;
    	dataCallback(this.state.newUser);
    }
    render(){
    	return (
            <Fragment>
               	<div className="row formHeader stepTwo">
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
	               	<div className="form-group row">
                        <label className="col-sm-2 col-form-label">Country</label>
                        <div className="col-sm-10">
                            	<Select
							        options={this.state.options}
							        value={this.state.value}
							        onChange={this.changeHandler}
							      />
                        </div>
                    </div>

                     <InputFile type={'file'}
	                   title= {'Avatar'} 
	                   name= {'avatar'}
	                   value={this.state.newUser.avatar} 
	                   handleChange = {this.handleavatar}
	               	/>

	                <div className="form-group row fsubmit">
	                	<button type="submit" onClick={this.nextBlock} className="btn btn-primary">Register</button>
	            	</div>
            	</div>
            </Fragment>
    		)
    }
}

export default MFstepThree