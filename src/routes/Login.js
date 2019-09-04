import React from 'react';
import './Login.css';
import Config from '../Config';
import ls from 'local-storage'

const API = Config.baseURL;
class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state={
            error:false
        }
    }

    handleForm(e) {
        e.preventDefault();
        let username = this.username.value
        let password = this.password.value
        this.tryLogin(username,password);
      }

      tryLogin(username,password) {
        let url = `${API}/login`;
        fetch(url,{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        }
        )
          .then((res) => res.json())
          .then((data) => {
            //true access
            if(data){
                //save the true login in the locale storage
                ls.set('username', username)
                ls.set('password', password)
                
                //when User enter the name change the route to '/profile/:login'
                this.props.history.push('/profile/' + username);
            }else{
                this.setState({
                    error:true
                });
            }
            
          })
          .catch((error) => console.log('Oops! . There Is A Problem'))
      }
    render() {
        return (
            <div>
                <section className="card">
                    <div className="search--box">
                        <h1>Please Enter your credentials:</h1>
                        <form onSubmit={this.handleForm.bind(this)}>
                            <label><input type="text" ref={(ref) => this.username = ref} placeholder="Username" required /></label>
                            <label><input type="password" ref={(ref) => this.password = ref} placeholder="Password" required /></label>
                            <label><button type="submit"  >Login</button></label>
                        </form>
                        {this.state.error==true &&
                            <h2>Error: incorrect credentials!!</h2>
                        }
                        
                        
                    </div>
                </section>

            </div>
        )
    }
}

export default Login;
