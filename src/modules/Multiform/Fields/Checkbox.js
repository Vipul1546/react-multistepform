import * as React from 'react'
//import { Link } from 'react-router-dom'

class Checkbox extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="custom-control custom-switch">
		      <input 
		      id = {props.name}
		      name={props.name}
		      type="checkbox" 
		      className="custom-control-input" 
		      onChange={props.handleChange} 
		      />
		      <label className="custom-control-label" htmlFor={props.name}>{props.title}</label>
		    </div>               
    		)
    }
}

export default Checkbox

