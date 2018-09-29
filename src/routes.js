import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { Menu } from './components/menu/Menu';
import UserList from './containers/userList/UserList';
import UserDetail from './components/userDetail/UserDetail';
import { Topics } from './components/topics/Topics';
import { NoMatch } from './components/noMatch/NoMatch';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <main>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={UserList}/>
                    <Route path="/home" component={UserList}/>
                    <Route path="/users/:userId" component={UserDetail}/>
                    <Route path="/topics" component={Topics}/>
                    <Route component={NoMatch}/>
                </Switch>
            </main>
        </BrowserRouter>
    )
}
