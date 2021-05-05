import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Item, Label, Link } from 'semantic-ui-react';

const Post = ({ title, description, preDescription, authorName, image, url, time, readNext }) => {
  return (
    <Item>
      <Item.Image src={image} />
      <Item.Content>
        <Item.Header as='a' href={url}>{title}</Item.Header>
        <Item.Description>{description}<Item.Description as='a' href={url}>{readNext}</Item.Description></Item.Description>
        <Item.Extra>
          <Label icon='pencil alternate icon' content={`Автор: ${authorName}`} />
          <Label icon='clock outline icon' content={`Дата статті: ${time}`} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Post;