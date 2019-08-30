import * as React from 'react'
import FetchData from '../FetchAPI/FetchData'
import logo from '../../../logo.svg';
import loader from '../../../images/straight-loader.gif';
import { Fragment } from 'react';
import Comments from './Comments'
import {FaStar} from 'react-icons/fa'
import {FaStarHalf} from 'react-icons/fa'

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

       if(this.state.postData !== null){
        localStorage.removeItem('mfStepTwo');
        localStorage.removeItem('mfStepOne');
        localStorage.removeItem('mfStepThree');
       }
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
                ?   <div className="row center loadingBlock">
                    <img className="loader" src={loader} alt="loader"/>
                    </div>
                :
                <Fragment>
                	<div className="row center head">
                		<h5 className="mx-auto">Thank You! Your Profile is created!</h5>
                	</div>
                    <div className="row infoBlock">
                        <div className="col-md-3 avatar">
                            <img src={logo} alt='profile image'/>
                        </div>
                        <div className="col-md-4 profile">
                            <div className="col"><span className="value">{ data.name }</span><span className="key">Name</span></div>
                            <div className="col"><span className="value">{ data.email } </span><span className="key">Email</span></div>
                            <div className="col"><span className="value">{ data.telephone }</span><span className="key">Telephone</span></div>
                        </div>
                        <div className="col-md-5 profile">
                            <div className="col"><span className="value">{ data.category }</span><span className="key">Category</span></div>
                            <div className="col"><span className="value">From { data.country } </span><span className="key">Country</span></div>
                            <div className="col"><span className="value">{ data.website }</span><span className="key">Website</span></div>
                        </div>
                    </div>
                    <div className="row getInfo">
                        <h6 className="col text-center headS">Your Website { data.website } Analysis</h6>
                        <div className="col-md-12 text-center">
                            <p className="rating"><span>Low Risc</span> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf /></p>
                        </div>
                        <div className="col-md-6 status">
                            <p><span className="value"> {apiData['Creation Date']}</span><span className="key">Domain Registration Date:</span></p>
                        </div>
                        <div className="col-md-6 status">
                            <p><span className="value"> {apiData['Registry Expiry Date']}</span><span className="key">Domain Expiration Date:</span></p>
                        </div>
                        <div className="col-md-6 status">
                            <p><span className="value"> { phishtank }</span><span className="key">Phishtank status:</span></p>
                        </div>
                        <div className="col-md-6 status">
                            <p><span className="value"> { etherscam }</span><span className="key">Either Scan DB:</span></p> 
                        </div>
                    </div>
                    <div className="row ratingBlock">
                        <h6 className="col text-center headS">Trustworthyness: <span className="highlight">{ wot }</span>/ 5.0</h6>
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