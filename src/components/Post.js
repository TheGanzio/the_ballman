import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Item, Label, Link } from 'semantic-ui-react';

const Post = ({ title, description, preDescription, authorName, image, url, test }) => {
  return (
    <Item>
      <Item.Image src={image} />

      <Item.Content>
        <Item.Header as='a' href={url }>{title}</Item.Header>
        <Item.Description>{description}</Item.Description>
        <Item.Extra>
          <Label icon='pencil alternate icon' content={`Автор: ${authorName}`} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Post;