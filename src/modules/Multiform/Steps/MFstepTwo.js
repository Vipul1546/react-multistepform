import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import Input from '../Fields/input.js'

class MFstepTwo extends React.Component{
    constructor(props) {
        super(props);
        let getObject = JSON.parse(localStorage.getItem('ID-2'));
            this.state = {
                value : 2,
                stageNo : 2,
                newUser: {
                    secCode: (getObject === null) ? '' : getObject.secCode,
                },
            };
            //binding the function to this
            this.nextBlock = this.nextBlock.bind(this);
            this.handleSecCode = this.handleSecCode.bind(this);
    }

    // saving the state of input on value change to local storage
    // function called while setting the state
    saveState = () => {
        let { stageNo, newUser } = this.state
        localStorage.setItem('ID-'+stageNo, JSON.stringify(newUser))
    } 

    // handing security code and saving to user object state
    handleSecCode = e => {
    	e.preventDefault();
    	let value = e.target.value;
        this.setState( prevState => ({ 
            newUser : {
                ...prevState.newUser, secCode: value
            }
        }), () => this.saveState())
    }

    // handing the callback of component 
    nextBlock = e => {
    	e.preventDefault();
    	const {dataCallback} = this.props;
    	let { stageNo, newUser } = this.state;
        let error = '';
        let eCount = 0;

        if (typeof newUser.secCode === "undefined" || newUser.secCode === '') {
            error += 'Security Coded is Invalid.\n'
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
               	<div className="container stepTwo">
                	<h5>Create your security code</h5>
	                <Input type={'text'}
	                   title= {'Security Code'} 
	                   showTitle = { true }
	                   name= {'secCode'}
	                   value={this.state.newUser.secCode} 
	                   placeholder = {'Enter your Security Code'}
	                   handleChange = {this.handleSecCode}
	               	/>
	                <div className="form-group row fsubmit">
	                	<button type="submit" onClick={this.nextBlock} className="btn btn-primary">Save and go further</button>
	            	</div>
            	</div>
            </Fragment>
    		)
    }
}

export default MFstepTwo