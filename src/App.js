import React, { Component } from 'react';
import Post from './components/Post';
import Stat from './components/Korona';
import axios from 'axios'
import { connect } from 'react-redux'
import { Container, Header, Button, Label, Item, Table } from 'semantic-ui-react'
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
    const isActiveClass = "ui active button"
    const nonActiveClass = "ui disabled button"
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

  fetchPostsKorona() {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get('/korona')
      .then(({data}) => {
        setPosts(data)
        console.log('Korona data has been received!!');
      })
      .catch(() => {
        console.log('Error retrieving data!!!');
      });
  
      
    
    // setPosts();
    // axios.get('/moz')
    //   .then(({data}) => {
    //     setPosts(data)
    //     console.log('Moz data has been received!!');
    //     console.log(data);
    //   })
    //   .catch(() => {
    //     console.log('Error retrieving data!!!');
    //   });
  }

  fetchPostsExpert() {
    const { setPosts } = this.props;
    setPosts([]);
    axios.get('/expert')
      .then(({data}) => {
        setPosts(data)
        console.log('Expert data has been received!!');
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
        return 'IT та наука'
      case 'UKR':
        return 'Україна'
      case 'COR':
        return 'Коронавірус'
      case 'WORLD':
        return 'Новини світу'
      case 'EXP':
        return 'Експертна думка'
    }
  }

  render() {
    const { posts } = this.props
    const { items } = posts
    
    if (this.props.genre.genre === 'UKR') {
    return (
      <Container>
       <div class="main"></div>
          <div class="footer">
          <h1 class="h1" >The BellMan</h1>
          </div>
          
          <h3 className="ui header">{ this.genreText(this.props.genre.genre) } </h3>
          <div>
        <Button.Group basic className='ui vertical buttons'>
            <Button class='ui button' onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('WORLD') && this.fetchPostsKoresp() }>Світ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('COR') && this.fetchPostsKorona() }>Коронавірус</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('EXP') && this.fetchPostsExpert()}>Експертна думка</Button>
        </Button.Group>
        </div>
        <Item.Group divided>
        { ( items.map(({ url, title, description, preDescription, authorName, image, time, readNext }, key) => (
            <Post
            key={key}
            readNext={readNext}
            time={time}
            url={url}
            title={title}
            preDescription={`${preDescription.substring(0, 540)}`}
            description={`${description.substring(0, 540)}`}
            authorName={authorName}
            image={image}
            /> )
          ))
        }
        </Item.Group>
        {/* <div class="main"></div>
          <div class="footer">
          The BellMan 2021
          </div> */}
      </Container>
    )} else if (this.props.genre.genre === 'IT') {
      return (
        <Container>
          <div class="main"></div>
          <div class="footer">
          <h1 class="h1" >The BellMan</h1>
          </div>
          
          <h3 className="ui header">{ this.genreText(this.props.genre.genre) } </h3>
          <div>
          <Button.Group basic className='ui vertical buttons'>
            <Button class='ui button' onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('WORLD') && this.fetchPostsKoresp() }>Світ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('COR') && this.fetchPostsKorona() }>Коронавірус</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('EXP') && this.fetchPostsExpert()}>Експертна думка</Button>
            </Button.Group>
          </div>
          <Item.Group divided>
          { ( items.map(({ url, title, description, preDescription, authorName, image, time, readNext }, key) => (
              <Post
                key={key}
                time={time}
                readNext={readNext}
                url={url}
                title={title}
                preDescription={`${preDescription.substring(0, 540)}`}
                description={`${description.substring(0, 540)}`}
                authorName={authorName}
                image={image}
              /> )
            ))
          }
          </Item.Group>
          {/* <div class="main"></div>
          <div class="footer">
          The BellMan 2021
          </div> */}
        </Container>
    )} else if (this.props.genre.genre === 'WORLD') {
      return (
        <Container>
          <div class="main"></div>
          <div class="footer">
          <h1 class="h1" >The BellMan</h1>
          </div>
          
          <h3 className="ui header">{ this.genreText(this.props.genre.genre) } </h3>
          <div>
          <Button.Group basic className='ui vertical buttons'>
            <Button class='ui button' onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('WORLD') && this.fetchPostsKoresp() }>Світ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('COR') && this.fetchPostsKorona() }>Коронавірус</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('EXP') && this.fetchPostsExpert()}>Експертна думка</Button>
            </Button.Group>
          </div>
          <Item.Group divided>
          { ( items.map(({ url, title, description, preDescription, authorName, image, time, readNext }, key) => (
              <Post
                key={key}
                time={time}
                readNext={readNext}
                url={url}
                title={title}
                preDescription={`${preDescription.substring(0, 540)}`}
                description={`${description.substring(0, 540)}`}
                authorName={authorName}
                image={image}
              /> )
            ))
          }
          </Item.Group>
          {/* <div class="main"></div>
          <div class="footer">
          The BellMan 2021
          </div> */}
        </Container>
      )
    } else if (this.props.genre.genre === 'COR') {
      return (
        <Container>
          <div class="main"></div>
          <div class="footer">
          <h1 class="h1" >The BellMan</h1>
          </div>
          
          <h3 className="ui header">{ this.genreText(this.props.genre.genre) } </h3>
          <div>
          <Button.Group basic className='ui vertical buttons'>
          <Button class='ui button' onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('WORLD') && this.fetchPostsKoresp() }>Світ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('COR') && this.fetchPostsKorona() }>Коронавірус</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('EXP') && this.fetchPostsExpert()}>Експертна думка</Button>
            </Button.Group>
          </div>
          
          <Item.Group divided>
          { ( items.map(({ url, title, description, preDescription, authorName, image, time, readNext }, key) => (
              <Post
              key={key}
              time={time}
              readNext={readNext}
              url={url}
              title={title}
              preDescription={`${preDescription.substring(0, 540)}`}
              description={`${description.substring(0, 540)}`}
              authorName={authorName}
              image={image}
              /> )
            ))
          }
          </Item.Group>
          {/* <div class="main"></div>
          <div class="footer">
          The BellMan 2021
          </div> */}
        </Container>
      ) 
    } else if (this.props.genre.genre === 'EXP') {
      return (
        <Container>
          <div class="main"></div>
          <div class="footer">
          <h1 class="h1" >The BellMan</h1>
          </div>
          
          <h3 className="ui header">{ this.genreText(this.props.genre.genre) } </h3>
          <div>
          <Button.Group basic className='ui vertical buttons'>
            <Button class='ui button' onClick={() => this.props.changeGenre('UKR') && this.fetchPostsHromadske() }>Україна</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('IT') && this.fetchPostsUnian() }>ІТ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('WORLD') && this.fetchPostsKoresp() }>Світ</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('COR') && this.fetchPostsKorona() }>Коронавірус</Button>
            <Button class='ui button' onClick={() => this.props.changeGenre('EXP') && this.fetchPostsExpert()}>Експертна думка</Button>
            </Button.Group>
          </div>
          
          <Item.Group divided>
          {( items.map(({ url, title, description, preDescription, authorName, image, time, readNext }, key) => (
              <Post
              key={key}
              time={time}
              readNext={readNext}
              url={url}
              title={title}
              preDescription={`${preDescription.substring(0, 540)}`}
              description={`${description.substring(0, 540)}`}
              authorName={authorName}
              image={image}
              /> )
            ))
          }
          </Item.Group>
          {/* <div class="main"></div>
          <div class="footer">
          The BellMan 2021
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
  setStat: statData =>
  dispatch({
    type: 'SET_STAT',
    payload: statData
  }),
  changeGenre: type =>
  dispatch({
    type: 'CHANGE_GENRE',
    payload: type
  })
})

export default connect(state, actions)(App)