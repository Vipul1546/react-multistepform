import * as React from 'react'
//import { Link } from 'react-router-dom'

class Checkbox extends React.Component{
    render(){
    	let props= this.props;
    	return (
            <div className="form-check">
                {props.options.map(option => {
			        return (
			          <label key={option}>
			            <input
			              className="form-checkbox"
			              id = {props.name}
			              name={props.name}
			              onChange={props.handleChange}
			              value={option}
			              type="checkbox" /> {option}
			          </label>
			        );
			      })}
            </div>               
    		)
    }
}

export default Checkbox