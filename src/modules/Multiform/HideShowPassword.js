import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

class HideShowPassword extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                pShow : true,
                pType : 'Password',
            };
            this.showHidePassword = this.showHidePassword.bind(this);
    }
    showHidePassword(e) {
        e.preventDefault();
        var { pShow } = this.state;
        this.setState({
            pShow : !pShow,
            pType : (pShow) ? 'text' : 'password',
        });

    }
    render(){
    	let { pShow, pType} = this.state;
        let props = this.props;
    	return (
            <Fragment>
                <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">{props.title}</label>
                    <div className="col-sm-10">
                        <input
                              className="form-control"
                              id={props.name}
                              name={props.name}
                              type={pType}
                              value={ ( props.value === undefined ) ? '' : props.value }
                              onChange={props.handleChange}
                              placeholder={props.placeholder} 
                            />
                            { pShow
                                ? <span className="Pshow" onClick={this.showHidePassword}><FaEye /></span>
                                : <span className="Pshow" onClick={this.showHidePassword}><FaEyeSlash /></span>
                            }
                    </div>
                </div>
            </Fragment>
                
    		)
    }
}

export default HideShowPassword