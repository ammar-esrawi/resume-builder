import React from 'react';
import './App.css';
import SimpleProfile from './componnents/template/simple/SimpleProfile';
import SearchProfile from './componnents/SearchProfile';
import Config from './Config';


const API = Config.baseURL;
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'test',
      name: '',
      avatar: '',
      email: '',
      skills: '',
      experince: '',
      projects: '',
      notfound:'',
      about:'',
      msg:'',
      mobile: ''
    }
   // this.fetchProfile = this.fetchProfile.bind(this);
  }
  fetchProfile = (username) => {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        //set the app state as returned from server
        this.setState({
          username: data.login,
          name: data.fName + " " + data.lName,
          avatar: API + "/avatar/" + data.login,
          email:  data.email,
          skills:  data.skills,
          experince:  data.experince,
          projects:  data.projects,
          notfound: data.notfound,
          about: data.about,
          msg: data.msg,
          mobile:  data.mobile
        })
      })
      .catch((error) => console.log('Oops! . There Is A Problem'))
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div>
        <section id="card">
          <SearchProfile fetchProfile={this.fetchProfile} />
          <SimpleProfile data={this.state} />
        </section>

      </div>
    )
  }
}

export default App;
