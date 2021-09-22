import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            clickCounter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
            clickCounter: prevState.clickCounter + 1,
        }), () => {
            console.log(this.state);
        });
    }

    render() {
        const content = this.props.children || 'Click Me!';

        return (
            <button
                style={{
                    color: this.props.color,
                    backgroundColor: this.state.isActive ? 'violet' : '',
                }}
                onClick={this.handleClick}
            >
                {content} {this.state.clickCounter}
            </button>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Button color={'red'}>Render from app</Button>
                <Button color={'blue'} />
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