import React, { Component } from 'react';
import Main from './Main.jsx';
import '../Style/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="main-title">BMI Calculator</h1>
                <Main></Main>
            </div>
        );
    }
}

export default App;