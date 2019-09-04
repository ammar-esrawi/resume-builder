import React from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';
import SearchProfile from '../componnents/SearchProfile';



class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    };
  }

  setRedirect(to) {
    this.setState({
      redirect: true,
      to: to
    })
  }
  renderRedirect() {
    if (this.state.redirect === true) {
      return <Redirect to={this.state.to} />
    }
  }
  login() {
    this.setRedirect('login')
  }
  register() {
    this.setRedirect('register')
  }

  render() {
    return (
      <div>
        <section className="card">
          <SearchProfile />
          <div>
            {this.renderRedirect()}
            <span id="login-link" onClick={()=>this.login()}>Login</span>
            <span id="login-link" onClick={()=>this.register()}>Register</span>
          </div>
        </section>

      </div>
    )
  }
}

export default Home;
