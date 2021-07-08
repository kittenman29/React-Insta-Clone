import React from 'react'



class Login extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                username: "",
                password: ""
            }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    loginHandler = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }
    
    loginButtonPushed = () => {
        this.setState({
            username: this.state.username
        });
    }

    render() {
        return (
        <form onSubmit={this.loginHandler}>
            <h1>Login</h1>
            <input 
                type='text' 
                name='username' 
                value ={this.state.username} 
                onChange={this.handleInputChange}
                placeholder='Username' />
            <input 
                type='text' 
                name='password' 
                value ={this.state.password} 
                onChange={this.handleInputChange}
                placeholder='Password' />
            <button>Login</button>
        </form>
        )
    }
}

export default Login;