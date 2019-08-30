import * as React from 'react'
//import { Link } from 'react-router-dom'

class Select extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="form-group ">
                     <select
                        className="form-control custom-select" 
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
                        <label htmlFor={props.name} className="form-control-placeholder">{props.title}</label>
                </div>                
    		)
    }
}

export default Select