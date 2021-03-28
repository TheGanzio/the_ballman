import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Item, Label } from 'semantic-ui-react';

const Post = ({ title, description, preDescription, authorName, image }) => {
  return (
    <Item>
      <Item.Image src='' />

      <Item.Content>
        <Item.Header as='a'>{title}</Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Label icon='pencil alternate icon' content={`Автор: ${authorName}`} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Post;