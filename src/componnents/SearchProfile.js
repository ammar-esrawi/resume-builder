import React from 'react';
import { withRouter } from 'react-router-dom';
class SearchProfile extends React.Component {
  render() {
    return (
      <div className="search--box">
        <h1>Welcome to Resume Builder:</h1>
        <form onSubmit={this.handleForm.bind(this)}>
          <label><input type="search" ref={(ref) => this.search = ref} placeholder="Type Username + Enter" /></label>
        </form>
      </div>
    )
  }

  handleForm(e) {
    e.preventDefault();
    let username = this.search.value
    //when User enter the name change the route to '/profile/:login'
    this.props.history.push('/profile/' + username);
  }
}
// export withRouter hook to enable access to history object from react
export default withRouter(SearchProfile);