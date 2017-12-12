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
  ReferenceInput,
  SelectInput,
  ReferenceField,
  UrlField
} from 'admin-on-rest';

import {required, minValue, maxValue} from 'admin-on-rest';

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <ReferenceField label="Screen" source="screenId" reference="screens">
        <TextField source="title"/>
      </ReferenceField>
      <TextField source="title"/>
      <TextField source="description"/>
      <UrlField source="videoUrl" label="Video url"/>
      <UrlField source="websiteUrl" label="Website url"/>
      <DateField source="createdAt" label="Created At" showTime/>
      <DateField source="updatedAt" label="Updated At" showTime/>
      <EditButton/>
    </Datagrid>
  </List>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title"/>
      <TextInput source="description"/>
      <TextInput source="videoUrl" label="Video url"/>
      <TextInput source="websiteUrl" label="Website url"/>
      <ReferenceInput label="Screen" source="screenId" reference="screens" allowEmpty>
        <SelectInput optionText="title"/>
      </ReferenceInput>
    </SimpleForm>
  </Create>
)

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title"/>
      <TextInput source="description"/>
      <TextInput source="videoUrl" label="Video url"/>
      <TextInput source="websiteUrl" label="Website url"/>
      <ReferenceInput label="Screen" source="screenId" reference="screens">
        <SelectInput optionText="title"/>
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)
