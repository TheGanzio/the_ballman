import React, { Component } from 'react';
import Post from './components/Post';
import posts from './posts.json';
import axios from 'axios'
import { connect } from 'react-redux'
import { Container, Header, Button, Label, Item } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class App extends Component {
  constructor(props) {
    super(props)
  }

  fetchPosts() {
    const { setPosts } = this.props;
    setPosts([]);
    axios
      .get('https://60343d97843b1500179324f4.mockapi.io/posts')
      .then(({ data }) => {
        setPosts(data);
      });
  }

  componentWillMount() {
    this.fetchPosts()
  }

  genreText(s) {
    switch (s) {
      case 'IT':
        return 'Новини IT'
      case 'UKR':
        return 'Новини України'
      case 'WORLD':
        return 'Новини світу'
      default:
    }
  }
  
  render() {
    const { posts } = this.props
    const { items } = posts
    return (
      <Container>
        <h1 align-content='center' class="ui header">The BellMan</h1>
        <h3 class="ui header">Розділ: { this.genreText(this.props.genre.genre) }</h3>
        <div>
          <Button.Group basic>
            <Button onClick={() => this.props.changeGenre('IT') }>ІТ</Button>
            <Button onClick={() => this.props.changeGenre('UKR') }>Україна</Button>
            <Button onClick={() => this.props.changeGenre('WORLD') }>Світ</Button>
          </Button.Group>
        </div>
        <Item.Group divided>
        {
          !items.length ? (<h1>Loading...</h1>) : ( items.map(({ title, description, preDescription, authorName, image }, key) => (
            <Post
              key={key}
              title={title}
              preDescription={preDescription}
              description={description}
              authorName={authorName}
              image={image}
            /> )
          ))
        }
        </Item.Group>
      </Container>
    );
  }
}

const state = props => {
  return {
    loading: true,
    ...props,
  }
}

const actions = dispatch => ({
  setPosts: data =>
  dispatch({
    type: 'SET_POSTS',
    payload: data
  }),
  changeGenre: type =>
  dispatch({
    type: 'CHANGE_GENRE',
    payload: type
  })
})

export default connect(state, actions)(App)