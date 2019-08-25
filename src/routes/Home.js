import React from 'react';
import SearchProfile from '../componnents/SearchProfile';



class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  
  
  render() {
    return (
      <div>
        <section id="card">
          <SearchProfile  />
        </section>

      </div>
    )
  }
}

export default Home;
