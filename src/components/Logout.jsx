import React from "react";

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log("in handleClick");
        localStorage.setItem("isAuthenticated",false);
        //localStorage.clear();
        window.location.href = '/';
       // this.props.history.push('/login')
    }
    render() {
        console.log(this.props);
        return(
            <p  onClick={this.handleClick} style={{position:"fixed",top:0,right:15}}>Logout</p>
        )
    }
}

export default Logout;