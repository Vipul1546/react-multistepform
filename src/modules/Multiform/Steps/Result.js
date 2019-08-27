import * as React from 'react'
//import { Link } from 'react-router-dom'

class Result extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                height : this.props.height,
            };
    }
    render(){
    	let { data } = this.props;
    	console.log(data);
    	return (
            <div className="container">
            	<div className="row center">
            		<h2 className="mx-auto">Your Details</h2>
            	</div>
            	<div className="row text-center">
            		<div className="col-md-6">
                        <label><b>Name</b></label>
                    </div>
                    <div className="col-md-6">
                        <p>{ data.name }</p>
                    </div>
            		<div className="col-md-6">
                        <label><b>Email</b></label>
                    </div>
                    <div className="col-md-6">
                        <p>{ data.email }</p>
                    </div>
            		<div className="col-md-6">
                        <label><b>Telephone</b></label>
                    </div>
                    <div className="col-md-6">
                        <p>{ data.telephone }</p>
                    </div>
            		<div className="col-md-6">
                        <label><b>Category</b></label>
                    </div>
                    <div className="col-md-6">
                        <p>{ data.category }</p>
                    </div>
            		<div className="col-md-6">
                        <label><b>Security Code</b></label>
                    </div>
                    <div className="col-md-6">
                        <p>{ data.scode }</p>
                    </div>
                    <div className="col-md-6">
                        <label><b>Website</b></label>
                    </div>
                    <div className="col-md-6">
                        <p>{ data.website }</p>
                    </div>
                    <div className="col-md-6">
                        <label><b>Country</b></label>
                    </div>
                    <div className="col-md-6">
                        <p>{ data.country }</p>
                    </div>
                    <div className="col-md-6">
                        <label><b>Password</b></label>
                    </div>
                    <div className="col-md-6">
                        <p><i>your password</i></p>
                    </div>
            	</div>
            </div>                
    		)
    }
}

export default Result