import * as React from 'react'
//import { Link } from 'react-router-dom'

class FetchData extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                API : 'https://watchdog-api-v1.cryptopolice.com/api/verify?domain=https://google.com',
                apidata: {
                		key: this.props.apikey,
                		value: this.props.value
                	},
            };
            this.fetchPosts = this.fetchPosts.bind(this);
    }

    // fetching the data of domain
	fetchPosts(){
		let { apidata } = JSON.stringify(this.state); 
		const { API } = this.state
		fetch(API,
				{	
					method: 'POST',
				 	headers: {
			            'Accept': 'application/json',
			        },
			        body: apidata,
				}
			)
		.then(response => response.json() )
		.then((responseJson) => {			
			const {dataCallback} = this.props;
			let returnData = responseJson.response;
			dataCallback(returnData);
		})
		.catch(error => this.setState({
			isLoading : false,
			error
		}))
	}

	componentDidMount(){
		this.fetchPosts();
	}


    render(){
    	return (
            <div></div>                
    		)
    }
}

export default FetchData