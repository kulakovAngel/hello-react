import React, {Component} from 'react';
import {Button} from './components/Button';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCounter: 0,
        };
        this.count = this.count.bind(this);
    }

    count() {
        this.setState(prevState => ({
            clickCounter: prevState.clickCounter + 1,
        }));
    }

    render() {
        return (
            <div>
                <Button
                    color={'red'}
                    handlerClick={this.count}
                >
                    Click me!
                </Button>
                <div>
                    Button was clicked {this.state.clickCounter} times.
                </div>
            </div>
        )
    }
};