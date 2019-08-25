import React from 'react';
import SimpleProfile from '../componnents/template/simple/SimpleProfile';
import Config from '../Config';


const API = Config.baseURL;
class Profile extends React.Component {
  constructor({ props,match }) {
    super(props)
    this.state = {
      username: match.params.login,// Get the user name from the URL Route
      name: '',
      avatar: '',
      email: '',
      skills: '',
      experince: '',
      projects: '',
      notfound:'Not Found!!',
      about:'',
      msg:'',
      mobile: ''
    }
    this.fetchProfile = this.fetchProfile.bind(this);
  }
  fetchProfile(username) {
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
          <SimpleProfile data={this.state} />
        </section>

      </div>
    )
  }
}

export default Profile;
