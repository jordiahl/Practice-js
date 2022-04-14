import React from "react";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0,
            showButton: true
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount() {
        fetch().then((count) => {
            this.setState({
                ...this.state,
                clickCount: count
            })
        })
    }

    componentDidUpdate() {
        console.log('updated')
    }

    componentWillUnmount() {
        console.log('so long bitch')
    }

    handleButtonClick() {
        const newCount = this.state.clickCount + 1;

        const showButton = newCount <= 5;
        this.setState({
            clickCount: newCount,
            showButton
        });
    }

    render() {
        <div>
            {this.state.clickCount &&
                <button onClick={ this.handleButtonClick}>
                    IncreaseCount
                </button>
            }
        </div>
    }
}


export default MainComponent;
//dont you need to export the class?