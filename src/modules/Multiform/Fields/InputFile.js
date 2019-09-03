import * as React from 'react'
import logo from '../../../logo.svg';

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
                <img src={ ( props.imgSrc === '' ) ? logo : props.imgSrc } />
          	</div>               		
    		)
    }
}

export default InputFile