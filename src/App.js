import React, { Component } from 'react';
import Post from './components/Post';
import axios from 'axios'
import { connect } from 'react-redux'
import { Container, Header, Button, Label, Item } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'


class App extends Component {
  constructor(props) {
    super(props)
  }

  // fetchPostsHromadske() {
  //   const { setPosts } = this.props;
  //   setPosts([]);
  //   setPosts(data); 
  // }

  fetchPostsHromadske() {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get('/ukr')
      .then(({data}) => {
        setPosts(data)
        console.log('Data has been received!!');
      })
      .catch(() => {
        console.log('Error retrieving data!!!');
      });
    // axios
    //   .get('https://60343d97843b1500179324f4.mockapi.io/postsUnian')
    //   .then(({ data }) => {
    //     setPosts(data);
    //   });
  }

  fetchPostsUnian() {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get('/it')
      .then(({data}) => {
        setPosts(data)
        console.log('Data has been received!!');
      })
      .catch(() => {
        console.log('Error retrieving data!!!');
      });
  }

  fetchPostsKoresp() {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get('/world')
      .then(({data}) => {
        setPosts(data)
        console.log('Data has been received!!');
      })
      .catch(() => {
        console.log('Error retrieving data!!!');
      });
  }

  UNSAFE_componentWillMount() {
      this.fetchPostsHromadske()
      this.props.genre.genre = 'UKR'
  }

  genreText(s) {
    switch (s) {
      case 'IT':
        return 'Новини IT та науки'
      case 'UKR':
        return 'Новини України'
      case 'WORLD':
        return 'Новини світу'
      case 'EXP':
        return 'Експертна думка'
      default:
    }
  }

  render() {
    const { posts } = this.props
    const { items } = posts
    if (this.props.genre.genre === 'UKR') {
    return (
      <Container>
        <h1 className="ui header">The BellMan</h1>
        <h3 className="ui header">Розділ: { this.genreText(this.props.genre.genre) }</h3>
        <div>
          <Button.Group basic>
            <Button onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button onClick={() => this.props.changeGenre('WORLD') }>Світ</Button>
            <Button onClick={() => this.props.changeGenre('EXP') }>Експертна думка</Button>
          </Button.Group>
        </div>
        <Item.Group divided>
        {
          ( items.map(({ url, title, description, preDescription, authorName, image, test }, key) => (
            <Post
            key={key}
            test={test}
            url={url}
            title={title}
            preDescription={preDescription}
            description={description}
            authorName={authorName}
            image={image}
            /> )
          ))
        }
        </Item.Group>
        {/* <div class="ui inverted vertical footer segment form-page">
  <div class="ui container">
    The BellMan 2021. All Rights Reserved
  </div>
</div> */}
      </Container>
    )} else if (this.props.genre.genre === 'IT') {
      return (
        <Container>
          <h1 className="ui header">The BellMan</h1>
          <h3 className="ui header">Розділ: { this.genreText(this.props.genre.genre) }</h3>
          <div>
            <Button.Group basic>
            <Button onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button onClick={() => this.props.changeGenre('WORLD') && this.fetchPostsKoresp()  }>Світ</Button>
            <Button onClick={() => this.props.changeGenre('EXP') }>Експертна думка</Button>
            </Button.Group>
          </div>
          <Item.Group divided>
          {
            ( items.map(({ url, title, description, preDescription, authorName, image }, key) => (
              <Post
                key={key}
                url={url}
                title={title}
                preDescription={preDescription}
                description={description}
                authorName={authorName}
                image={image}
              /> )
            ))
          }
          </Item.Group>
          {/* <div class="ui inverted vertical footer segment form-page">
  <div class="ui container">
  The BellMan 2021. All Rights Reserved
  </div>
</div> */}
        </Container>
      )
    } else {
      return (
        <Container>
          <h1 className="ui header">The BellMan</h1>
          <h3 className="ui header">Розділ: { this.genreText(this.props.genre.genre) }</h3>
          <div>
            <Button.Group basic>
            <Button onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button onClick={() => this.props.changeGenre('WORLD') && this.fetchPostsKoresp() }>Світ</Button>
            <Button onClick={() => this.props.changeGenre('EXP') }>Експертна думка</Button>
            </Button.Group>
          </div>
          <Item.Group divided>
          {
            ( items.map(({ url, title, description, preDescription, authorName, image }, key) => (
              <Post
              key={key}
              url={url}
              title={title}
              preDescription={preDescription}
              description={description}
              authorName={authorName}
              image={image}
              /> )
            ))
          }
          </Item.Group>
          {/* <div class="ui inverted vertical footer segment form-page">
  <div class="ui container">
  The BellMan 2021. All Rights Reserved
  </div>
</div> */}
        </Container>
      )
    }
    
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