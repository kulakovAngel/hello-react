import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.toogleActive = this.toogleActive.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    toogleActive() {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }));
    }

    handlerClick() {
        this.props.handlerClick();
        this.toogleActive();
    }

    render() {
        const content = this.props.children || 'Click Me!';

        return (
            <button
                style={{
                    color: this.props.color,
                    backgroundColor: this.state.isActive ? 'violet' : '',
                }}
                onClick={this.handlerClick}
            >
                {content}
            </button>
        );
    }
}

class App extends React.Component {
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
}

ReactDOM.render(
    <App />,
    document.getElementById('app-root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();