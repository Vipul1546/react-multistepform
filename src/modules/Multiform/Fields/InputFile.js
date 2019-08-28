import * as React from 'react'
//import { Link } from 'react-router-dom'

class InputFile extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="form-group row files">
                <label htmlFor={props.title} className="col-sm-2 col-form-label">{props.title}</label>
	                <div className="col-sm-10">
	                	<input 
                			className="form-control"
				      		id={props.name}
				      		name={props.name}
				      		type={props.type}
				      		value={ ( props.value === undefined ) ? '' : props.value }
				      		onChange={props.handleChange}
	                	 />
	            	</div>
          	</div>               
    		)
    }
}

export default InputFile