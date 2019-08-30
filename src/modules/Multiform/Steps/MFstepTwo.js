import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import Input from '../Fields/input.js'

class MFstepTwo extends React.Component{
    constructor(props) {
        super(props);
        let getObject = JSON.parse(localStorage.getItem('mfStepTwo'));
            this.state = {
                value : 2,
                stageNo : 2,
                newUser: {
                    secCode: (getObject === null) ? '' : getObject.secCode,
                },
            };
            this.nextBlock = this.nextBlock.bind(this);
            this.handleSecCode = this.handleSecCode.bind(this);
    }

    handleSecCode = e => {
    	e.preventDefault();
    	let value = e.target.value;
        this.setState( prevState => ({ newUser : 
                                        {
                                            ...prevState.newUser, secCode: value
                                        }
                                    }))
    }
    nextBlock = e => {
    	e.preventDefault();
    	const {dataCallback} = this.props;
    	let { stageNo } = this.state;
    	let { newUser } = this.state
        let error = '';
        let eCount = 0;

        if (typeof newUser.secCode === "undefined") {
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