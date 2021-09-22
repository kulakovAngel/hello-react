class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {backgroundColor: ''};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            backgroundColor: 'violet',
        })
    }

    render() {
        const content = this.props.children || 'Click Me!';

        return (
            <button
                style={{
                    color: this.props.color,
                    backgroundColor: this.state.backgroundColor,
                }}
                onClick={this.handleClick}
            >
                {content}
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