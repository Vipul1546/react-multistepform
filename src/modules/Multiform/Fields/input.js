import * as React from 'react'
//import { Link } from 'react-router-dom'

class Input extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="form-group row">
                    { props.showTitle
                        ? <label htmlFor={props.name} className="col-sm-2 col-form-label">{props.title}</label>
                        : <p></p>
                    }
                
                <div className= { props.showTitle
                        ? "col-sm-10"
                        : "col-sm-12"
                    } >
                    <input
				      className="form-control"
				      id={props.name}
				      name={props.name}
				      type={props.type}
				      value={props.value}
				      onChange={props.handleChange}
				      placeholder={props.placeholder} 
				    />
                </div>
            </div>                
    		)
    }
}

export default Input