import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Footer from "./componets/Footer";
import HomePage from "./pages/Homepage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Lyric Duda",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Always Thinking',
        subTitle: 'Always trying something new',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Contact me',
      }
    }
  }




  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="md">
            <Navbar.Brand>Lyric Duda</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar.toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Footer />
        </Container>
      </Router>
    )
  };
}

export default App;
