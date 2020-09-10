import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import AddPoemPage from '../components/AddPoemPage';
import EditPoemPage from '../components/EditPoemPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PoemsPage from '../components/PoemsPage';

//create 6 files for 6 components
// setup imports, component, default export
// import into the AppRouter so they can be used


const AppRouter = () => (
    <BrowserRouter>
       <div>
        <Header />
        <Switch>
            <Route path="/" component={PoemsPage} exact={true}/>
            <Route path="/create" component={AddPoemPage} />
            <Route path="/edit/:id" component={EditPoemPage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
       </div>
    </BrowserRouter>
);

export default AppRouter;
