import * as React from 'react'
//import { Link } from 'react-router-dom'

class Select extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="form-group row">
                <label htmlFor={props.name} className="col-sm-2 col-form-label">{props.title}</label>
                <div className="col-sm-10">
                     <select
                        className="custom-select" 
                        name={props.name}
                        value={ ( props.value === "undefined" ) ? '' : props.value }
                        onChange={props.handleChange}
                        >
                        <option value="" disabled>{props.placeholder}</option>
                          {props.options.map(option => {
                            return (
                              <option
                                key={option}
                                value={ option }
                                label={option}>{option}
                              </option>
                            );
                          })}
                        </select>
                </div>
            </div>                
    		)
    }
}

export default Select