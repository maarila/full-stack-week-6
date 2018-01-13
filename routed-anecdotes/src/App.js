import React from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import {ListGroup, ListGroupItem, Grid, Row, Col} from "react-bootstrap";

const Menu = () => (
  <div style={menuStyle}>
    <NavLink exact to="/" activeStyle={activeStyle}>
      Anecdotes
    </NavLink>&nbsp;&nbsp;
    <NavLink exact to="/create" activeStyle={activeStyle}>
      Create new
    </NavLink>&nbsp;&nbsp;
    <NavLink exact to="/about" activeStyle={activeStyle}>
      About
    </NavLink>
  </div>
);

const activeStyle = {
  fontWeight: "bold",
  fontStyle: "italic",
  backgroundColor: "lightblue",
  paddingTop: 10,
  paddingBottom: 10
};

const AnecdoteList = ({anecdotes}) => (
  <div>
    <h2>Anecdotes</h2>
    <ListGroup>
      {anecdotes.map((anecdote) => (
        <ListGroupItem key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

const Anecdote = ({anecdote}) => {
  return (
    <div>
      <h2>
        {anecdote.content} by {anecdote.author}
      </h2>
      <p>has {anecdote.votes} votes</p>
      <p>
        for more info see <a href={anecdote.info}>{anecdote.info}</a>
      </p>
    </div>
  );
};

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <Grid>
      <Row className="show-grid">
        <Col sm={6} md={3} style={{width: 500}}>
          <p>According to Wikipedia:</p>
          <em>
            An anecdote is a brief, revealing account of an individual person or
            an incident. Occasionally humorous, anecdotes differ from jokes
            because their primary purpose is not simply to provoke laughter but
            to reveal a truth more general than the brief tale itself, such as
            to characterize a person by delineating a specific quirk or trait,
            to communicate an abstract idea about a person, place, or thing
            through the concrete details of a short narrative. An anecdote is "a
            story with a point."
          </em>
          <p>
            Software engineering is full of excellent anecdotes, at this app you
            can find the best and add more.
          </p>
        </Col>
        <Col sm={6} md={3}>
          <a
            title="Alfred Edward Chalon [Public domain], via Wikimedia Commons"
            href="https://commons.wikimedia.org/wiki/File%3AAda_Lovelace_portrait.jpg">
            <img
              width="256"
              alt="Ada Lovelace portrait"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/256px-Ada_Lovelace_portrait.jpg"
            />
          </a>
        </Col>
      </Row>
    </Grid>
  </div>
);

const Footer = () => (
  <div>
    Anecdote app for{" "}
    <a href="https://courses.helsinki.fi/fi/TKT21009/121540749">
      Full Stack -sovelluskehitys
    </a>. See{" "}
    <a href="https://github.com/mluukkai/routed-anecdotes">
      https://github.com/mluukkai/routed-anecdotes
    </a>{" "}
    for the source code.
  </div>
);

const Notification = ({message}) => {
  if (message === null) {
    return null;
  }
  return (
    <div style={notificationStyle}>
      <div>A new anecdote "{message}" created!</div>
    </div>
  );
};

const notificationStyle = {
  borderStyle: "solid",
  borderWidth: 2,
  borderRadius: 7,
  color: "darkgreen",
  backgroundColor: "aquamarine",
  padding: 10,
  marginTop: 15,
  textIndent: 7,
  width: 800
};

const menuStyle = {
  borderStyle: "solid",
  borderWidth: 2,

  backgroundColor: "lavender",
  paddingTop: 10,
  paddingBottom: 10,
  textIndent: 7,
  width: 800
};

class CreateNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      author: "",
      info: ""
    };
  }

  handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            content
            <input
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <div>
            author
            <input
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </div>
          <div>
            url for more info
            <input
              name="info"
              value={this.state.info}
              onChange={this.handleChange}
            />
          </div>
          <button>create</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      anecdotes: [
        {
          content: "If it hurts, do it more often",
          author: "Jez Humble",
          info:
            "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
          votes: 0,
          id: 1
        },
        {
          content: "Premature optimization is the root of all evil",
          author: "Donald Knuth",
          info: "http://wiki.c2.com/?PrematureOptimization",
          votes: 0,
          id: 2
        }
      ],
      notification: null
    };
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0);
    this.setState({anecdotes: this.state.anecdotes.concat(anecdote)});
    this.setState({notification: anecdote.content});
    setTimeout(() => {
      this.setState({notification: null});
    }, 10000);
  };

  anecdoteById = (id) => this.state.anecdotes.find((a) => a.id === Number(id));

  vote = (id) => {
    const anecdote = this.anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    };

    const anecdotes = this.state.anecdotes.map(
      (a) => (a.id === id ? voted : a)
    );

    this.setState({anecdotes});
  };

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <div>
              <h1>Software anecdotes</h1>
              <Menu />
              <Notification message={this.state.notification} />
              <Route
                exact
                path="/"
                render={() => <AnecdoteList anecdotes={this.state.anecdotes} />}
              />
              <Route path="/about" render={() => <About />} />
              <Route
                path="/create"
                render={({history}) => (
                  <CreateNew history={history} addNew={this.addNew} />
                )}
              />
              <Route
                exact
                path="/anecdotes/:id"
                render={({match}) => (
                  <Anecdote anecdote={this.anecdoteById(match.params.id)} />
                )}
              />
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
