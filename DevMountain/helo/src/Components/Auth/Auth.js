import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import HeloLogo from '../../helo_logo.png';
import {login} from '../../ducks/reducer';




class Auth extends Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {

    }


    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value})
    }

    handleLogin = () => {
        console.log("hit")
        axios.post('/api/login', { username: this.state.username, password: this.state.password }).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
            this.setState({
                username: '',
                password: ''
            })
            this.props.login()
        })
            .catch(err => console.log(err))
    }


    handleRegister = () => {
        axios.post('/api/register', { username: this.state.username, password: this.state.password }).then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/')
            this.setState({
                username: '',
                password: ''
            })
            this.props.login()
        })
            .then(alert('Account Created'))
    }



    render() {
        return (
            <div className='auth-sizer'>
                <div className='auth-body'>
                    <div>
                        <img src={HeloLogo} alt=''/>
                </div>
                    <div className='helo'>
                        Helo
                </div>
                    <div className='inputs'>
                        <div>
                            <div>UserName: </div>
                            <div>Password: </div>
                        </div>
                        <div className='inputs-2'>
                            <input
                                value={this.state.username}
                                name='username'
                                onChange={(e) => this.handleInput(e)} />
                            <input
                                value={this.state.password}
                                type='password'
                                name='password'
                                onChange={(e) => this.handleInput(e)} />
                        </div>
                    </div>
                    <div>
                        <button onClick={this.handleLogin} className='buttons-auth'>Login</button>
                        <button onClick={this.handleRegister} className='buttons-auth'>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const { user } = reduxState;
    return {
        user
    }
}

const mapDispatchToProps = {
    updateUser,
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);