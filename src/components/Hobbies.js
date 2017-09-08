import React from 'react';

function Hobby(props) {
    return (
        <li onClick={() => {
            props.hobbyClicked(props.hobbyName)
        }}>
            {props.hobbyName}
        </li>
    );
}

export default class Hobbies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbies: ['Cooking', 'Sports'],
            newHobbyInput: '',
            hobbyWasDeleted: false
        };
    }

    changeHobbyInput(event) {
        this.setState({
            newHobbyInput: event.target.value
        });
    }

    addHobby() {
        const oldHobbies = this.state.hobbies;
        // Check value of newHobbyInput
        this.setState({
            hobbies: oldHobbies.concat(this.state.newHobbyInput)
        });
    }

    removeHobby(hobby) {
        const oldHobbies = this.state.hobbies;
        const position = oldHobbies.indexOf(hobby);
        this.setState({
            hobbies: oldHobbies.filter(
                (el, index) => {
                    return index !== position
                }
            ),
            hobbyWasDeleted: true
        });
    }

    render() {
        let listElements = this.state.hobbies.map(
            (hobby, index) => {
                return <Hobby
                    key={index}
                    hobbyName={hobby}
                    hobbyClicked={this.removeHobby.bind(this)}/>
            }
        );
        let hobbyDeletedParagraph = '';
        if (this.state.hobbyWasDeleted) {
            hobbyDeletedParagraph = <p>Hobby was deleted!</p>
        }
        const hobbyCounterStyle = {
            color: this.state.hobbies.length > 3 ? 'red' : 'black'
        };
        const hobbyCounterClass = this.state.hobbies.length > 3 ? 'multiple-hobbies' : '';
        return (
            <div>
                <h1>Hobbies page</h1>
                <p>Add new hobby</p>
                <input
                    type="text"
                    value={this.state.newHobbyInput}
                    onChange={this.changeHobbyInput.bind(this)}/>
                <button onClick={this.addHobby.bind(this)}>Add Hobby</button>
                {hobbyDeletedParagraph}
                <p style={hobbyCounterStyle} className={hobbyCounterClass}>
                    Hobbies: {this.state.hobbies.length} (Click on item to delete)</p>
                <ul>
                    {listElements}
                </ul>
            </div>
        )
    }
}