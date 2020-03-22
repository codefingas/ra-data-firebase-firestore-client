import React from 'react';
import { Admin, Resource } from 'react-admin';
import { RestProvider, AuthProvider, base64Uploader } from '../lib';

import { PostList, PostEdit, PostCreate } from './Posts';
import { UserList, UserEdit, UserCreate } from './Users';

const firebaseConfig = {
  apiKey: 'AIzaSyBJcWOYJUP_Mc6uMQsDU8sevreL35MmYH0',
  authDomain: 'm-staging-13779.firebaseapp.com',
  databaseURL: 'https://m-staging-13779.firebaseio.com',
  projectId: 'm-staging-13779',
  storageBucket: 'm-staging-13779.appspot.com',
  messagingSenderId: '203484472632'
};

const trackedResources = [{ name: 'posts' }, { name: 'users' }];

const authConfig = {
  userProfilePath: '/users/',
  userAdminProp: 'isAdmin'
};

// to run this demo locally, please feel free to disable authProvider to bypass login page

const dataProvider = base64Uploader(RestProvider(firebaseConfig, { trackedResources }));
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={AuthProvider(authConfig)}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
  </Admin>
);
export default App;
