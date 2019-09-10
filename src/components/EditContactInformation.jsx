import React from "react";
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { withRouter } from 'react-router-dom';

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

class EditContactInformation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user:{
                name : "",
                email:"",
                age:"",
                location:"",
                phone:"",
                company:""
            }
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

    handleChange = (event) => {
        console.log("in handlechange");
        console.log(event.target);
        const name = event.target.name;
        let user = {...this.state.user};
        user.name = event.target.value;
        console.log(user);
        this.setState({
            user:user
        });
        console.log(this.state)
    }

    handleSubmit = (event) => {
        console.log("in handlesubmit");
        console.log(this.state);
        console.log(this.props.match.params.id);
        axios.put(`http://localhost:3004/user/${this.props.match.params.id}`,  this.state.user )
        .then(res => {
            console.log("in res");
          console.log(res);
          console.log(res.data);
          this.props.history.push('/list')
        })

    }

    render() {
        const { classes } = this.props;
        console.log(this.state)
        return(
            <React.Fragment>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        name="name"
                        value={this.state.user.name}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Email Address"
                        name="email"
                        value={this.state.user.email}
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Age"
                        name="age"
                        value={this.state.user.age}
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Location"
                        name="location"
                        value={this.state.user.location}
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Contact Number"
                        name="phone"
                        value={this.state.user.phone}
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                     <TextField
                        id="standard-name"
                        label="Company"
                        name="company"
                        value={this.state.user.company}
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                   
                </form>
                <Button variant="contained" color="primary"  onClick={this.handleSubmit} style={{marginTop:20,float:"right"}} >
                    Edit Contact
                </Button>
            </React.Fragment>
        );
    }

}

export default withRouter(withStyles(styles)(EditContactInformation));