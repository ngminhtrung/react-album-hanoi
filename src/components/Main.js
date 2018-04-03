import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Album from './Album';
import Footer from './Footer';

class Main extends Component {
    render() {
        return (
            <main>
                <Jumbotron />
                <Album />
                <Footer />
            </main>
        )
    }

};

export default Main;