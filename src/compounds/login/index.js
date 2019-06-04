import React, { Component } from 'react'
import { connect } from 'react-redux'
import Alert from 'sweetalert'
import { CustomInput } from '../../components/inputField'
import { View, CustomImage } from '../../components/wrapper'
import { Button } from '../../components/button'
import { loginUser } from '../../store/action'
import { Loading } from '../../components/wrapper';

import img from '../../imglinks'
import './style.css';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleOnChange = event => {
    this.setState({ [event.target.type]: event.target.value })
  }
  handleSubmit = () => {
    const { email, password } = this.state
    if (email.trim() === '' || password.trim() === '') {
      Alert('Login Process', 'Email or Password is empty', 'error')
      return
    }
    this.props.LoginUser({ email, password });
  }
  render () {
    return (
      <View>
        { this.props.Loading && <Loading backdropStyle="backdrop" className="spiner" type="spin" color="#f0f0f0"/>}
        <CustomImage src={img.holly} />
        <View className=''>
          <CustomInput
            type='email'
            placeholder='email'
            labelText='Email'
            style={{ width: '60%' }}
            labelStyle={{ display: 'block' }}
            onChange={this.handleOnChange}
          />
          <CustomInput
            type='password'
            labelText='Password'
            placeholder='password'
            style={{ width: '60%' }}
            labelStyle={{ display: 'block' }}
            onChange={this.handleOnChange}
          />
          <Button
            onClick={this.handleSubmit}
            style={{ width: '60%' }}
            type='submit'
            className='btn btn-lg btn-block btn-primary'
          >
            Login
          </Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.authUserReducer.user,
  Loading: state.authUserReducer.loading
})
const mapDispatchToProps = dispatch => ({
  LoginUser: userdata => dispatch(loginUser(userdata))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
