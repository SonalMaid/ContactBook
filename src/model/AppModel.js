import React from "react";
import axios from "axios";

let instance = null;

class AppModel  {
    constructor() {
        if (!instance) {
            instance = this;
        }
        this.usersList = [];
        return instance;
    }
    
    getUserData = () => {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:3004/user").then(res => {
                if (res.status === 200) {
                    this.usersList = res.data;
                    resolve();
                }
                
            })
        })
    }

    deleteUserData = (id) => {
        console.log("in deleteUserData", id);
        return new Promise((resolve, reject) => {
            axios.delete(`http://localhost:3004/user/${id}`).then((res) => {
                console.log("in promise succse",res)
                resolve(res);
            })
        })
    }

}

export default AppModel;