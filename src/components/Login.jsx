import React from "react";
import App from "../App";
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { Redirect  } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: 20,
        marginRight: 20,
        width: 700,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
  });

class Login extends React.Component {

    constructor(props) {
        super(props);
        localStorage.setItem("isAuthenticated",false)
    }

    componentDidMount() {
        console.log("in componentdid")
    }

    handleClick = () => {
        console.log("in handleClick");
    }

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                   {this.props.isAuthenticated ? <Redirect  to="/list" /> :
                   <Paper style={{position:'relative',width:500,height:220,marginLeft:'auto',marginRight:'auto',marginTop:150}}>
                       <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-name"
                            label="Username"
                            className={classes.textField}
                            name="name"
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <TextField
                            id="standard-name"
                            label="Password"
                            type="password"
                            name="email"
                            className={classes.textField}
                            onChange={this.handleChange}
                            margin="normal"
                        />
                        <Button variant="contained" color="primary"  onClick={this.props.handleSubmit} style={{margin:'auto',marginTop:17}} >
                            Login
                        </Button>
                    </form>
                   </Paper>
                   }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {isAuthenticated:state.isAuthenticated}
}
 
const mapDispatchToProps = dispatch => (
       {
        handleSubmit : () => dispatch({type:"AUTHENTICATE"})
    }
);

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Login)));
