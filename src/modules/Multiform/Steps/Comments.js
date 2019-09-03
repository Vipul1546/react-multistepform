import * as React from 'react'
import { Fragment } from 'react';
import logo from '../../../logo.svg';

class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        	count: 2,
        }

        this.loadMore = this.loadMore.bind(this);
    }

    // setting load more
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
		                            <div className="col-md-6 cName">{ data.name }</div>
		                            <div className="col-md-6 cDate">{ data.date }</div>
		                        </div>
		                        <div className="col-md-12 cDesc">{ data.text }</div>
		                    </div>
	                    </div>
                    ))

                    }
                    <div className="text-center col showMore" onClick={this.loadMore}>..Show More..</div>
                </Fragment>              
    		)
    }
}

export default Comments