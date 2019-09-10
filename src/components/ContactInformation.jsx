import React from "react";
import axios from "axios";

class ContactInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[]
        }
    }
    
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:3004/user/${this.props.match.params.id}`).then((res) => {
            console.log("in success");
            console.log(res);
            this.setState({user:res.data});
        })
    }
    render() {
        const { params } = this.props.match;
        console.log(this.state.user);
        return(
            <React.Fragment>
                <h1>Contact Details</h1>
                <p>Name : {this.state.user.name}</p>
                <p>Email Address :{this.state.user.email}</p>
                <p>Phone :{this.state.user.phone}</p>
                <p>website : {this.state.user.website}</p>
                <p>username : {this.state.user.username}</p>
            </React.Fragment>
         );
    } 
}

export default ContactInformation;