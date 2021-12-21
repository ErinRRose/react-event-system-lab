import React from 'react';

// Code Keypad Component Here
export default class Keypad extends React.Component {
    handleInputPassword = () => console.log('Entering password...')

    render () {
        return(
            <div>
                <input type="password"
                onKeyUp={this.handleInputPassword}
                />
            </div>

        )
    }
}