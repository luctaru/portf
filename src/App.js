import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Blog from './components/Blog/Blog'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Profile />
                <Skills />
                <Blog />
                <Portfolio />
                <About />
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}

export default App;
