import React from "react";
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { withRouter, Link } from 'react-router-dom';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: 20,
        marginRight: 20,
        width: 500,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
  });

class AddNewUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email:"",
            age:"",
            location:"",
            phone:"",
            company:""
        }
    }

    handleChange = (event) => {
        console.log("in handlechange");
        console.log(event.target);
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
        console.log(this.state)
    }

    handleSubmit = (event) => {
        console.log("in handlesubmit");
        console.log(this.state);
        let back = '/list';
        axios.post(`http://localhost:3004/user`,  this.state )
        .then(res => {
            console.log("in res");
          console.log(res);
          console.log(res.data);
         this.props.history.push('/list')
        })

    }

    render() {
        const { classes } = this.props;
        return(
            <React.Fragment>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        name="name"
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Email Address"
                        name="email"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Age"
                        name="age"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Location"
                        name="location"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Contact Number"
                        name="phone"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Company"
                        name="company"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                   
                </form>
                <Button variant="contained" color="primary"  onClick={this.handleSubmit} style={{marginTop:20,float:"right"}} >
                    Add New Contact
                </Button>
            </React.Fragment>
        );
    }

}

export default withRouter(withStyles(styles)(AddNewUser));