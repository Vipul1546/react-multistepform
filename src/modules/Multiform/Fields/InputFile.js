import * as React from 'react'
//import { Link } from 'react-router-dom'

class InputFile extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="form-group files">
	                	<input 
                			className="form-control"
				      		id={props.name}
				      		name={props.name}
				      		type={props.type}
				      		value={ ( props.value === undefined ) ? '' : props.value }
				      		onChange={props.handleChange}
	                	 />
               	<label htmlFor={props.title} className="form-control-placeholder">{props.title}</label>
          	</div>               		
    		)
    }
}

export default InputFile