import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from   "./components/ContactUs";
import UserList from "./components/UserList";
import AddNewUser from "./components/AddNewUser";
import ContactInformation from "./components/ContactInformation";
import EditContactInformation from "./components/EditContactInformation"
import Login from "./components/Login";
import { connect } from "react-redux";
import Logout from "./components/Logout";

const NewComponent = () => {
  return(
    <h1> Hello</h1>
  )
}

class App extends React.Component {

  constructor (props) {
    super(props);
  }
  render(){
    if(this.props.isAuthenticated.isAuthenticated && this.props.isAuthenticated.isAuthenticated !=undefined){
      localStorage.setItem('isAuthenticated', true)
    }
    let loggedIn = JSON.parse(localStorage.getItem("isAuthenticated"));
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                {loggedIn ? 
                <AppBar position="static">
                <Tabs value={location.pathname}>
                  <Tab label="Home" component={Link} to="/home" />
                  <Tab label="Contact List" component={Link} to="/list" />
                  <Tab label="Settings" component={Link} to="/contact" />  
                </Tabs>
                 <Logout />
              </AppBar>
                 : ""}
                
                <Switch>
                  <Route path="/" component={Login} exact></Route>
                  <Route path="/Login" component={Login} exact></Route>
                  <Route path="/about" component={About} exact></Route>
                  <Route path="/contact" component={ContactUs} exact></Route>
                  <Route path="/list" component={UserList} exact></Route>
                  <Route path="/addUser" component={AddNewUser} exact></Route>
                  <Route path="/info/:id" component={ContactInformation} exact></Route>
                  <Route path="/editContact/:id"  component={EditContactInformation} exact></Route>
                  <Route path="/deleteContact"  component={EditContactInformation} exact></Route>
                </Switch>
              </Fragment>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated : state
  }
}

//export default App;

export default connect(mapStateToProps)(App);
