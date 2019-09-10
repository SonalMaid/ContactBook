import React from "react";
import {mount,shallow} from "enzyme";
import UserList from "../components/UserList";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BrowserRouter as Router } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


let wrapper = mount(<Router><UserList /></Router>);

let state = {
    users:[
        {
            "id":1,
            "name":"sonali",
            "email":"sonal.maid93@gmail.com",
            "age":"25",
            "location":"pune",
            "phone":"11111",
            "company":"Mobiliya"
        }
    ]
}

describe('Test cases for Table Component', () => {
    it('Table should be defined', () => {
        expect(wrapper.find(Table)).toHaveLength(1);
    })
    test('Table heads should be defined', () => {
        expect(wrapper.find(TableHead).find(TableRow)).toHaveLength(1);
    })
    it('table should have 5 columns', () =>{
        expect(wrapper.find(TableHead).find(TableRow).find(TableCell)).toHaveLength(5);
    })
    it('table should have Name columns', () =>{
       expect((wrapper.find(TableHead).find(TableCell).first().text())).toEqual("Name");
    })
    it('Should render data in rows', () =>{
        console.log("in render tbody");
    })
    it('table should have Edit and Delete button', () =>{
        console.log("check edit,delete and info icon");
     })
    it('test cases fot table body', () =>{
        expect(wrapper.find(TableBody)).toHaveLength(1);
    })
})

describe('Test cases for Button Component', () =>{
    it('It should have "Add New Contact" Button', () =>{
        expect(wrapper.find(Button)).toHaveLength(1);
    })
    it('Button test should be "Add New Contact"', () =>{
        expect((wrapper.find(Button)).text()).toEqual("Add New Contact");
    })
})