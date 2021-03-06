import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import HideShowPassword from '../HideShowPassword'
import Input from '../Fields/input.js'
import Select from '../Fields/Select.js'
import Checkbox from '../Fields/Checkbox.js'

class MFstepOne extends React.Component{
    constructor(props) {
        super(props);
        let getObject = JSON.parse(localStorage.getItem('ID-1'));
            this.state = {
                value : 2,
                stageNo : 1,
                newUser: {
                    email: (getObject === null) ? '' : getObject.email,
                    telephone: (getObject === null) ? '' : getObject.telephone,
                    category: (getObject === null) ? '' : getObject.category,
                    password: '',
                    terms: (getObject === null) ? '' : getObject.terms,
                },
                categoryOptions: ['Frontend Developer', 'Backend Developer'],
            };

            // bonding function
            this.handleChange = this.handleChange.bind(this);
            this.handleEmail = this.handleEmail.bind(this);
            this.handleTel = this.handleTel.bind(this);
            this.handleInput = this.handleInput.bind(this);
            this.nextBlock = this.nextBlock.bind(this);
            this.handleTerm = this.handleTerm.bind(this);
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({value: e.target.value});
    }

    // saving the state of input on value change to local storage
    // function called while setting the state
    saveState = () => {
        let { stageNo, newUser } = this.state
        localStorage.setItem('ID-'+stageNo, JSON.stringify(newUser))
    } 

    // handing email input and saving to user object state
    handleEmail = e => {
        let value = e.target.value;
        this.setState( prevState => ({ 
            newUser : {
                ...prevState.newUser, email: value
            }
        }), () => this.saveState())
    }

    // handing telephone input and saving to user object state
    handleTel = value => {
        let { stageNo, newUser } = this.state
        this.setState( prevState => ({ 
            newUser : {
                ...prevState.newUser, telephone: value
            }
        }), () => this.saveState())
    }

    // handing input and saving to user object state
    handleInput = e => {
         let value = e.target.value;
         let name = e.target.name;
         this.setState( prevState => ({
            newUser : {
                ...prevState.newUser, [name]: value
           }
        }), () => this.saveState())
    }

    // handing term and saving to user object state
    handleTerm = checked => {
        let value = checked.target.checked
        this.setState( prevState => ({
            newUser : {
                ...prevState.newUser, terms: value
           }
        }), () => this.saveState())
    }

    // handing next/submit and validation
    nextBlock = e => {
    	e.preventDefault();
    	const {dataCallback} = this.props;
        let { stageNo, newUser } = this.state;
        let error = '';
        let eCount = 0;

        if (typeof newUser.email === "undefined" || newUser.email === '') {
            error += 'Email is Invalid.\n'
            eCount++
        } 
        if (typeof newUser.telephone === "undefined" || newUser.telephone === '') {
            error += 'Telephone is Invalid.\n'
            eCount++
        }
        if (typeof newUser.category === "undefined" || newUser.category === '') {
            error += 'Category is Invalid.\n'
            eCount++
        }
        if (typeof newUser.password === "undefined" || newUser.password === '') {
            error += 'Password is Invalid.\n'
            eCount++
        }
        if (newUser.terms === false || typeof newUser.terms === "undefined" || newUser.terms === '') {
            error += 'Check the checkbox.\n'
            eCount++
        }
        if(eCount !== 0) {
            dataCallback(this.state.newUser, stageNo, error);
        } else {
            dataCallback(this.state.newUser, stageNo, error);
        }
    }
    render(){
    	return (
            <Fragment>
                    <div className="container stepOne">
                        <Input type={'email'}
                           showTitle= {true}
                           title= {'Email'} 
                           name= {'email'}
                           value={this.state.newUser.email} 
                           placeholder = {'Enter your Email'}
                           handleChange = {this.handleEmail}
                           />
                        <div className="form-group">
                                <ReactPhoneInput 
                                    defaultCountry={'in'} 
                                    placeholder="Enter phone number"
                                    name="telphone"
                                    value={ this.state.newUser.telephone }
                                    onChange={this.handleTel}
                                />
                            <label className="form-control-placeholder-tel">Telephone</label>
                        </div>
                       <Select title={'Category'}
                               name={'category'}
                               options = {this.state.categoryOptions} 
                               value = {this.state.newUser.category}
                               placeholder = {'Select Category'}
                               handleChange = {this.handleInput}
                        />
                        
                       <HideShowPassword 
                               title= {'Password'} 
                               name= {'password'}
                               value={this.state.newUser.password} 
                               placeholder = {'Enter your password'}
                               handleChange = {this.handleInput}
                               />
                        <Checkbox 
                            name = {'terms'}
                            handleChange = {this.handleTerm}
                            title = {'Agree with terms and condition'}
                        />
                        <div className="form-group row fsubmit">
                        	<button type="submit" onClick={this.nextBlock} className="btn btn-primary">Register</button>
                    	</div>
                    </div>
            </Fragment>
    		)
    }
}

export default MFstepOne