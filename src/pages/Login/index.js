import React, { Component } from 'react';
import { Wrapper } from '../../components/wrapper';
import Login from '../../compounds/login';

export default class LoginUser extends Component {

    render() {
        return (
            <Wrapper>
                <Login />
            </Wrapper>
        )
    }
}
