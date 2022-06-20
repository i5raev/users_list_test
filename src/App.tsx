import React, {lazy,Suspense} from 'react'
import {
    BrowserRouter as Router, Route,
    Switch
} from "react-router-dom";
import {LoadingSpinner} from "./components";

const HomePage = lazy(() => import('./pages/homePage'));
const UserDetailPage = lazy(() => import('./pages/userDetailPage'));
const UserEditPage = lazy(() => import('./pages/userEditPage'));
const UserAddPage = lazy(() => import('./pages/userAddPage'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<LoadingSpinner/>}>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/users/:id' component={UserDetailPage}/>
                    <Route exact path='/add' component={UserAddPage}/>
                    <Route exact path='/edit/:id' component={UserEditPage}/>
                </Switch>
            </Suspense>

        </Router>
    );
}

export default App;
