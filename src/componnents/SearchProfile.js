import React from 'react';
class SearchProfile extends React.Component {
    render() {
      return (
        <div className="search--box">
           <form onSubmit={this.handleForm.bind(this)}>
             <label><input type="search" ref={(ref) => this.search = ref} placeholder="Type Username + Enter"/></label>
           </form>
        </div>
      )
    }
    
    handleForm(e) {
     e.preventDefault();
      let username = this.search.value
      this.props.fetchProfile(username);
      this.search.value = '';
    }
  }
  export default SearchProfile;