import React, {Component} from "react";

export class Button extends Component {
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
};