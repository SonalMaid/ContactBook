import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AppModel from "../model/AppModel";


class UserList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            users : []
        }
        this.AppModel = new AppModel();
    }

    componentDidMount() {
       this.AppModel.getUserData().then((res) =>{
        this.setState({users:this.AppModel.usersList || []});
       })
    }

    handleDelete = id => {
        this.AppModel.deleteUserData(id).then((res) =>{
            this.props.history.push('/list')
           })
    }

    buildTableRows = () => {
        let rows = [];
        this.state.users.map((user) => {
            rows.push(
                <TableRow key={user.name}>
                <TableCell component="th" scope="row">
                    {user.name}
                    </TableCell>
                <TableCell >{user.email}</TableCell>
                <TableCell >{user.phone}</TableCell>
                <TableCell >{user.company}</TableCell>
                <TableCell >
                    <IconButton to={`/editContact/${user.id}`}  component={Link}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton to={`/info/${user.id}`} component={Link}>
                        <InfoIcon/>
                    </IconButton>
                    <IconButton onClick={() => this.handleDelete(user.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </TableCell>
            </TableRow>
            );        
        });
        return rows;
    }

    render() {
        let rows = this.buildTableRows();
        return(
           <Paper style={{width: '100%',overflowX: 'auto'}}>
               <Button variant="contained" color="primary" style={{marginTop:20,float:"right"}}  to="/addUser" component={Link}>
                    Add New Contact
                </Button>
                <Table style={{minWidth: 650}}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email Address</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows}
                        </TableBody>
                </Table>
            </Paper>    
        )
    }
}

export default UserList;