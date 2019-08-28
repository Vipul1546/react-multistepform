import * as React from 'react'
import FetchData from '../FetchAPI/FetchData'
import logo from '../../../logo.svg';
import { Fragment } from 'react';
import Comments from './Comments'

class Result extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                apiData : '',
                etherscam: '',
                phishtank: '',
                wot: '',
                isLoading: true,
                cData: '',
            };

        this.processData = this.processData.bind(this);
    }

    processData = (postData) => {
        console.log(postData);
       this.setState({
        apiData : postData.whois.payload.api_response,
        etherscam: postData.etherscam.payload.status.value,
        phishtank: postData.phishtank.payload.status.value,
        wot: postData.wot.payload.trust.value,
        cData: postData.wot.payload.comments,
        isLoading: false,
       })
    }

    render(){
    	let { data } = this.props;
        let { apiData } = this.state;
        let { etherscam } = (this.state !== 'undefined') ? this.state : 'N/A';
        let { phishtank } = (this.state !== 'undefined') ? this.state : 'N/A';
        let { wot } = (this.state !== 'undefined') ? this.state : 'N/A';
        let { cData } = this.state
        let { isLoading } = this.state
        //console.log(apiData);
    	return (
            <div className="container profileBlock">
            { isLoading
                ? <div className="row center"><h5 className="mx-auto">Loading...</h5></div>
                :
                <Fragment>
                	<div className="row center">
                		<h5 className="mx-auto">Thank You! Your Profile is created!</h5>
                	</div>
                    <div className="row">
                        <div className="col-md-3 avatar">
                            <img src={logo} alt='profile image'/>
                        </div>
                        <div className="col-md-4 profile">
                            <div className="col">{ data.name }</div>
                            <div className="col">{ data.email }</div>
                            <div className="col">{ data.telephone }</div>
                        </div>
                        <div className="col-md-5">
                            <div className="col">{ data.category }</div>
                            <div className="col">From { data.country }</div>
                            <div className="col">{ data.website }</div>
                        </div>
                    </div>
                    <div className="row">
                        <h6 className="col text-center">Your Website { data.website } Analysis</h6>
                        <div className="col-md-12 text-center">
                            <p>low risc<br />
                            * * * * *</p>
                        </div>
                        <div className="col-md-6 status">
                            <p><b>Domain Registration Date:</b> {apiData['Creation Date']}</p>
                            <p><b>Domain Expiration Date:</b> {apiData['Registry Expiry Date']}</p> 
                        </div>
                        <div className="col-md-6 status">
                            <p><b>Phishtank status:</b> { phishtank }</p>
                            <p><b>Either Scan DB:</b> { etherscam }</p> 
                        </div>
                    </div>
                    <div className="row">
                        <h6 className="col text-center"><b>Trustworthyness:</b> { wot }/ 5.0</h6>
                    </div>
                    <Comments cData={cData}/>
                </Fragment>    
            }
                <FetchData apikey="domain" value="https://google.com" dataCallback={this.processData}/>
            </div>                
    		)
    }
}

export default Result