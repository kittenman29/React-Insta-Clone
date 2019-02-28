import React from 'react'


const Login = PostsPage => LoginPage =>
class extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                username: "",
                password: ""
            }
    }

    changeUsername = () => {
        this.setState({
            username: this.state.username
        });
    }

    changePassword = () => {
        this.setState({
            password: this.state.password
        });
    }
    
    loginButtonPushed = () => {
        this.setState({
            username: this.state.username
        });
    }

    render() {
        return (
        <form>
            <h1>Logoin</h1>
            <input 
                type='text' 
                name='username' 
                value ={this.username} 
                onChange={this.changeUsername}
                placeholder='Username' />
            <input 
                type='text' 
                name='password' 
                value ={this.password} 
                onChange={this.changePassword}
                placeholder='Password' />
            <button onClick={this.loginButtonPushed} >Login</button>
        </form>
        )
    }
}

export default Login;