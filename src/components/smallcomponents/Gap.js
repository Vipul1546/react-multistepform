import * as React from 'react'
//import { Link } from 'react-router-dom'

class Gap extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                height : this.props.height,
            };
    }
    render(){
    	return (
            <div className={'Gap gap-'+this.state.height}></div>                
    		)
    }
}

export default Gap