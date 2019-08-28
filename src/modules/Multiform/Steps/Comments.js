import * as React from 'react'
import { Fragment } from 'react';
import logo from '../../../logo.svg';
//import { Link } from 'react-router-dom'

class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        	count: 2,
        }

        this.loadMore = this.loadMore.bind(this);
    }
    loadMore = () => {
    	this.setState({
    		count: this.state.count + 2,
    	})
    }
    render(){
    	let { cData } = this.props
    	let { count } = this.state
    	return (
                <Fragment>
                    { cData.slice(0, count).map((data, index) => (
                    	<div className="row comment" key={ index }>
		                    <div className="col-md-2 avatar">
		                        <img src={ (data.avatar === 'undefined') ? logo : data.avatar } alt={ data.name }/>
		                    </div>
	                    	<div className="col-md-10 profile comments">
		                        <div className="row pMeta">
		                            <div className="col-md-6">{ data.name }</div>
		                            <div className="col-md-6">{ data.date }</div>
		                        </div>
		                        <div className="col-md-12">{ data.text }</div>
		                    </div>
	                    </div>
                    ))

                    }
                    <div className="text-center col" onClick={this.loadMore}>..Show More..</div>
                </Fragment>              
    		)
    }
}

export default Comments