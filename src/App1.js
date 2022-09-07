import React, {Component} from "react";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [
                {
                    names: 'Frank1'
                },
                {
                    names: 'Frank2'
                },
                {
                    names: 'Frank3'
                }
            ]
        }
    }
    render() {
        return (
            <div className='App'>
                {this.state.monsters.map(monster => <h1>{monster.names}</h1>)
                }
            </div>
        )
    }
}
export default App;
