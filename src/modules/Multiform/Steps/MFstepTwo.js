import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import Input from '../Fields/input.js'

class MFstepTwo extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                value : 2,
                newUser: {
                    secCode: '',
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
    	dataCallback(this.state.newUser);
    }
    render(){
    	return (
            <Fragment>
               	<div className="row formHeader stepTwo">
                	<h5>Create your security code</h5>
                	<small>Enter Your Security Code</small>
	                <Input type={'text'}
	                   title= {'Security Code'} 
	                   showTitle = { false }
	                   name= {'secCode'}
	                   value={this.state.newUser.secCode} 
	                   placeholder = {'Enter your Security Code'}
	                   handleChange = {this.handleSecCode}
	               	/>
	                <div className="form-group row fsubmit">
	                	<button type="submit" onClick={this.nextBlock} className="btn btn-primary">Register</button>
	            	</div>
            	</div>
            </Fragment>
    		)
    }
}

export default MFstepTwo