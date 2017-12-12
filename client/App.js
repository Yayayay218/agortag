import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import loopbackRestClient, {authClient} from 'aor-loopback';

import { UserList } from './users/users';
import {ScreenCreate, ScreenEdit, ScreenList} from "./screens/index"
import {PostList, PostEdit, PostCreate} from "./posts/index"

const App = () => (
    <Admin restClient={loopbackRestClient('/api/v1')} authClient={authClient('/api/v1/users/login')}>
        <Resource name="users" list={UserList} options={{label: "Users"}}/>
        <Resource name="screens" list={ScreenList} edit={ScreenEdit} create={ScreenCreate} remove={Delete}/>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete}/>
    </Admin>
);

export default App;
