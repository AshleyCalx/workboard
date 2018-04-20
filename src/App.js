import React, { Component } from 'react';
import logo from './WBlogo.png';
import './App.css';
import './footer.js';
import firebase, { auth, provider } from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      currentItem: '',
      items: [],
      user: null

    }
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        //console.log(result);
        this.setState({
          user
        });
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.user.email || this.state.user.displayName
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div className='app'>
        <header>
          <div className='wrapper'>
            <h1>WORKBE.</h1>
            {this.state.user ?
              <button onClick={this.logout}>Log Out</button>
            :
              <button onClick={this.login}>Log In</button>
            }
          </div>
        </header>
        {this.state.user ?
          <div>
            <div className='user-profile'>
              <img src={this.state.user.photoURL} />
            </div>
            <div className='container'>
              <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="Owner" value={this.state.user.email || this.state.user.displayName} />
                  <input type="text" name="currentItem" placeholder="Enter Task" onChange={this.handleChange} value={this.state.currentItem} />
                  <button>Add Task</button>
                </form>
              </section>
              <section className='display-item'>
                <div className="wrapper">
                  <ul>
                    {this.state.items.map((item) => {
                      return (
                        <li key={item.id}>
                          <h3>{item.title}</h3>
                          <p>Owner: {item.user}
                            {item.user === this.state.user.email || item.user === this.state.user.displayName ?
                              <button className="done" onClick={() => this.removeItem(item.id)}>Done</button> : null}
                          </p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
          :
          <div className='wrapper'>
           
          </div>
        }
      </div>
    );
  }
}
export default App;