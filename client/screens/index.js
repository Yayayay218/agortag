import React from 'react';
import {
  Create,
  Edit,
  List,
  SimpleForm,
  TextInput,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'admin-on-rest';

import {required, minValue, maxValue} from 'admin-on-rest';

export const ScreenList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title"/>
      <TextField source="description"/>
      <EditButton/>
    </Datagrid>
  </List>
);

export const ScreenCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title"/>
      <TextInput source="description"/>
    </SimpleForm>
  </Create>
)

export const ScreenEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title"/>
      <TextInput source="description"/>
    </SimpleForm>
  </Edit>
)
