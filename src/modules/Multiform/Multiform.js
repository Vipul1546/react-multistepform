import * as React from 'react'
//import { Link } from 'react-router-dom'
import { Fragment } from 'react';
import MFstepOne from './Steps/MFstepOne'
import MFstepTwo from './Steps/MFstepTwo'
import MFstepThree from './Steps/MFstepThree'
import Result from './Steps/Result'

class Multiform extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sOneData : {},
            sTwoData : '',
            sThreeData : '',
            stage : 1,
        }

        this.finalSubmit = this.finalSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.processData = this.processData.bind(this);
    }

    processData = (userData, stageNo, error) => {
        switch(stageNo){
            case 1:
                if(error !== ''){
                    alert(error);
                } else {
                    this.setState({
                        sOneData: userData,
                        stage : stageNo + 1
                    })
                }
                break;
            case 2:
                if(error !== ''){
                    alert(error);
                } else {
                    this.setState({
                        sTwoData: userData,
                        stage : stageNo + 1
                    })
                }
                break;
            case 3:
                if(error !== ''){
                    alert(error);
                } else {
                    this.setState({
                        sThreeData: userData,
                        stage : stageNo + 1,
                    })
                }
                break;
            default:
                console.log('default');
        }
    }

    goBack = e => {
        e.preventDefault();
        let { stage } = this.state
        this.setState({
            stage : stage - 1, 
        });
    }

    finalSubmit = e => {
        e.preventDefault();
        // this.setState({
        //         fullData: {...this.state.sOneData, ...this.state.sTwoData, ...this.state.sThreeData},
        //     })
        //console.log(this.state.fullData);
    }
    render(){
        let component = null;
        let processBar = null;
        let { stage } = this.state;
        let fData = {...this.state.sOneData, ...this.state.sTwoData, ...this.state.sThreeData};
        switch(this.state.stage) {
            case 1:
                component = <MFstepOne dataCallback={this.processData} data={this.state.sOneData} />;
                processBar =<Fragment>
                                <li className="active">1<span class="processPart">Register</span></li> 
                                <li>2 <span class="processPart">Security Code</span></li>
                                <li>3 <span class="processPart">User Profile</span></li>
                                <li>4 <span class="processPart">Thanks You</span></li>
                            </Fragment>
                break;
            case 2:
                component = <MFstepTwo dataCallback={this.processData} data={this.state.sTwoData} />;
                processBar =<Fragment>
                                <li>1<span class="processPart">Register</span></li> 
                                <li className="active">2 <span class="processPart">Security Code</span></li>
                                <li>3 <span class="processPart">User Profile</span></li>
                                <li>4 <span class="processPart">Thanks You</span></li>
                            </Fragment>
                break;
            case 3:
                component = <MFstepThree dataCallback={this.processData} data={this.state.sThreeData} />;
                processBar =<Fragment>
                                <li>1<span class="processPart">Register</span></li> 
                                <li>2 <span class="processPart">Security Code</span></li>
                                <li className="active">3 <span class="processPart">User Profile</span></li>
                                <li>4 <span class="processPart">Thanks You</span></li>
                            </Fragment>
                break;
            case 4:
                component = <Result data={fData} />;
                processBar =<Fragment>
                                <li>1<span class="processPart">Register</span></li> 
                                <li>2 <span class="processPart">Security Code</span></li>
                                <li>3 <span class="processPart">User Profile</span></li>
                                <li className="active">4 <span class="processPart">Thanks You</span></li>
                            </Fragment>
                break;
            default:
                component = <MFstepOne dataCallback={this.processData} />;
        }

    	return (
            <Fragment>
                <div className="row formHeader">
                    <h5> Multi Step Form </h5>
                    <ul className="mfProcess">
                    { processBar }
                    </ul>  
                </div>
                <form className="mForm">
                    { component }
                    {
                        (stage !==1 && stage < 4)  
                        ?   <div className="form-group row fsubmit text-center">
                                <p onClick={ this.goBack } className="goBack"><u>or go back..</u></p>
                            </div> 
                        :   <Fragment></Fragment>
                    }               
                </form>
            </Fragment>
                
    		)
    }
}

export default Multiform