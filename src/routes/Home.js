import React from 'react';
import './Home.css';
import SearchProfile from '../componnents/SearchProfile';



class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  
  
  render() {
    return (
      <div>
        <section className="card">
          <SearchProfile  />
        </section>

      </div>
    )
  }
}

export default Home;
