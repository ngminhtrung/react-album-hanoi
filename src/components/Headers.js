import React, { Component } from 'react';

class Headers extends Component {
    render() {
        return (
            <header className="bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">A project for learning how to style in ReactJs</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="text-white" href="https://twitter.com/ngminhtrung" target="_blank">Follow on Twitter</a>
                                </li>
                                <li>
                                    <a className="text-white" href="https://github.com/ngminhtrung" target="_blank">My Github</a>
                                </li>
                                <li>
                                    <a className="text-white" href="http://travisnguyen.net" target="_blank">My blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </header>
        )
    }

};

export default Headers;