import React, {Component} from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Hobbies from './components/Hobbies';

class App extends Component {
    render() {
        return (

            <HashRouter>
                <div>
                    <div>
                        <p>Test application using React.js</p>
                        <Link to="/">Home</Link><span> | </span>
                        <Link to="/hobbies">Hobbies</Link>
                    </div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/hobbies" component={Hobbies}/>
                </div>
            </HashRouter>

        );
    }
}

export default App;
