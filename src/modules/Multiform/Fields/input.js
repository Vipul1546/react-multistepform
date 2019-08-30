import * as React from 'react'
//import { Link } from 'react-router-dom'

class Input extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="form-group">
                    <input
				      className="form-control"
				      id={props.name}
				      name={props.name}
				      type={props.type}
			         value={ ( props.value === undefined ) ? '' : props.value }
			         onChange={props.handleChange}
                    placeholder={props.placeholder} 
				    />
                    { props.showTitle
                        ? <label className="form-control-placeholder" htmlFor={props.name}>{props.title}</label>
                        : <p></p>
                    }
            </div>          
    		)
    }
}

export default Input
