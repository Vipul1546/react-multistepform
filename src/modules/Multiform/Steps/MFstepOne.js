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
            this.state = {
                value : 2,
                stageNo : 1,
                newUser: {
                    email: this.props.data.email,
                    telephone: this.props.data.telephone,
                    category: this.props.data.category,
                    password: this.props.data.password,
                    terms: this.props.data.terms,
                },
                categoryOptions: ['Frontend Developer', 'Backend Developer'],
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleEmail = this.handleEmail.bind(this);
            this.handleTel = this.handleTel.bind(this);
            this.handleInput = this.handleInput.bind(this);
            this.nextBlock = this.nextBlock.bind(this);
            this.handleTerm = this.handleTerm.bind(this);
    }
    componentDidMount(){
        document.getElementById("eye");
    }
    handleChange = e => {
        e.preventDefault();
        this.setState({value: e.target.value});
    }
    handleEmail = e => {
        let value = e.target.value;
        this.setState( prevState => ({ newUser : 
                                        {
                                            ...prevState.newUser, email: value
                                        }
                                    }))
    }
    handleTel = value => {
        this.setState( prevState => ({ newUser : 
                                        {
                                            ...prevState.newUser, telephone: value
                                        }
                                    }))
    }
    handleInput = e => {
         let value = e.target.value;
         let name = e.target.name;
         this.setState( prevState => {
            return { 
               newUser : {
                        ...prevState.newUser, [name]: value
                       }
            }
         }
         )
    }

    handleTerm = checked => {
        let value = checked.target.checked
        this.setState( prevState => {
            return { 
               newUser : {
                        ...prevState.newUser, terms: value
                       }
            }
         }
         )
    }

    nextBlock = e => {
    	e.preventDefault();
    	const {dataCallback} = this.props;
        let { stageNo } = this.state;
        let { newUser } = this.state
        let error = '';
        let eCount = 0;

        if (typeof newUser.email === "undefined") {
            error += 'Email is Invalid.\n'
            eCount++
        } 
        if (typeof newUser.telephone === "undefined") {
            error += 'Telephone is Invalid.\n'
            eCount++
        }
        if (typeof newUser.category === "undefined") {
            error += 'Category is Invalid.\n'
            eCount++
        }
        if (typeof newUser.password === "undefined") {
            error += 'Password is Invalid.\n'
            eCount++
        }
        if (newUser.terms === false || typeof newUser.terms === "undefined") {
            error += 'Check the checkbox.\n'
            eCount++
        }
        if(eCount !== 0) {
            dataCallback(this.state.newUser, stageNo, error);
        } else {
            dataCallback(this.state.newUser, stageNo, error);
        }

    	//dataCallback(this.state.newUser, stageNo);
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
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Telephone</label>
                            <div className="col-sm-10">
                                <ReactPhoneInput 
                                    defaultCountry={'in'} 
                                    placeholder="Enter phone number"
                                    name="telphone"
                                    value={ this.state.newUser.telephone }
                                    onChange={this.handleTel}
                                />
                            </div>
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
                            options = {['Agree with terms and condition']}
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