import React from 'react';
import Title from './Header/Title';
import Buttons from './Header/Buttons';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                <Title />
                <Buttons />
            </div>
        )
    }
}