import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';
import MovieList from "./containers/MovieList/MovieList";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import MovieAdd from "./containers/MovieAdd/MovieAdd";
import MovieEdit from "./containers/MovieEdit/MovieEdit";
import HallList from "./containers/HallList/HallList";
import HallDetail from "./containers/HallDetail/HallDetail";
import HallAdd from "./containers/HallAdd/HallAdd";
import HallEdit from "./containers/HallEdit/HallEdit";
import Layout from "./components/Layout/Layout";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import Register from "./containers/Register/Register";
import UserDetail from "./containers/UserDetail/UserDetail";
import UserEdit from "./containers/UserEdit/UserEdit";

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <Route path="/register" component={Register}/>
                            <AuthRoute path="/users/:id/edit" component={UserEdit}/>
                            <AuthRoute path="/users/:id" component={UserDetail}/>
                            <AuthRoute path="/halls/add" component={HallAdd}/>
                            <AuthRoute path="/halls/:id/edit" component={HallEdit}/>
                            <Route path="/halls/:id" component={HallDetail}/>
                            <Route path="/halls" component={HallList}/>
                            <AuthRoute path="/movies/add" component={MovieAdd}/>
                            <AuthRoute path="/movies/:id/edit" component={MovieEdit}/>
                            <Route path="/movies/:id" component={MovieDetail}/>
                            <Route path="/" component={MovieList} exact/>
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;