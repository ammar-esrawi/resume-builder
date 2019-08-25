import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleProfile from '../componnents/template/simple/SimpleProfile';
import Srt9 from '../componnents/template/srt9/Srt9';
import Config from '../Config';
import './Profile.css';


const API = Config.baseURL;
const defaultTemplate=Config.defaultTemplate;
class Profile extends React.Component {
  constructor({ props, match }) {
    super(props)
    this.state = {
      template:defaultTemplate,
      loginData: {
        username: match.params.login,// Get the user name from the URL Route
        name: '',
        avatar: '',
        email: '',
        skills: '',
        experince: '',
        projects: '',
        notfound: 'Not Found!!',
        about: '',
        msg: '',
        mobile: ''
      }
    }
    this.fetchProfile = this.fetchProfile.bind(this);
  }
  setTemplate(name) {
    this.setState({ template: name });
  }
  fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        //set the app state as returned from server
        data.name=data.fName + " " + data.lName;
        data.avatar=API + "/avatar/" + data.login;
        this.setState({
          
          loginData: data
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem'))
  }
  componentDidMount() {
    this.fetchProfile(this.state.loginData.username);
  }

  backToHome(){
    this.props.history.push('/' );
  }

  //function that return the proper HTML tag according to the choosed resume template
  
  template() {
    switch (this.state.template) {
      case 'simple':
        return <SimpleProfile data={this.state}  />;
      case 'srt9':
        return <Srt9 data={this.state} />;

      default:
        return <SimpleProfile data={this.state}  />;
    }
  }
  render() {
    return (
      <section id="profile-wrapper">
        <div id="mySidenav" className="sidenav">
          <h1 >Choose cv template:</h1>
          <span className={this.state.template=='simple'?'active':''} onClick={()=>this.setTemplate('simple')}>Simple</span>
          <span className={this.state.template=='srt9'?'active':''} onClick={()=>this.setTemplate('srt9')}>Srt9</span>

          <h2 onClick={()=>this.backToHome()} id="go-back">Back to Home</h2>
        </div>
        <div className="main">
          {this.template()}
        </div>
      </section>

    )
  }
}

export default withRouter( Profile);
