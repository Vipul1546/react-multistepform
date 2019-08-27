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
            formData : '',
            stage : 1,
            fullData: {},
        }

        this.processData = this.processData.bind(this);
        this.finalSubmit = this.finalSubmit.bind(this);
    }

    processData = userData => {
        let {stage} = this.state
        this.setState({
                fullData: {...this.state.fullData, ...userData},
                stage : stage + 1
            })
         console.log(userData);
         console.log(stage);
    }

    finalSubmit = e => {
        e.preventDefault();
        console.log(this.state.fullData);
    }
    render(){
        let component = null;
        switch(this.state.stage) {
            case 1:
                component = <MFstepOne dataCallback={this.processData} />;
                break;
            case 2:
                component = <MFstepTwo dataCallback={this.processData} />;
                break;
            case 3:
                component = <MFstepThree dataCallback={this.processData} />;
                break;
            case 4:
                component = <Result data={this.state.fullData} />;
                break;
            default:
                component = <MFstepOne dataCallback={this.processData} />;
        }

    	return (
            <Fragment>
                <div className="row formHeader">
                    <h5> Multi Step Form </h5>
                    <ul className="mfProcess">
                      <li className="active">1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                    </ul>  
                </div>
                <form className="mForm">
                    { component }
                    {/*<MFstepThree dataCallback={this.processData} />*/}
                    {/*<MFstepTwo dataCallback={this.processData} />*/}
                    {/*<MFstepOne dataCallback={this.processData}/>*/}
                    <div className="form-group row fsubmit">
                        <button type="submit" onClick={this.finalSubmit} className="btn btn-primary">Submit</button>
                    </div>                
                </form>
            </Fragment>
                
    		)
    }
}

export default Multiform