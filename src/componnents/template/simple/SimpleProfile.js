import React from 'react';
import './SimpleProfile.css';
class SimpleProfile extends React.Component {
   render() {
      let data = this.props.data.loginData;
      console.log("Data from SP", data)
      if (data.notfound == 'Not Found!!')
         return (
            <div className="notfound">
               <h2>Oops !!!</h2>
               <p>We Couldn't Find The User You Were Looking For . Try Another login name </p>
            </div>
         );
      else
         return (
            <div className="card">
               <section className="resume-builder--profile">
                  <div className="resume-builder--profile__info">
                     <div className="avatar-wr"><img src={data.avatar} alt={data.username} /></div>
                     <h2><a title={data.username} >{data.name || data.username}</a></h2>
                     <h2> {data.email} , {data.mobile}</h2>
                     <h3>{data.msg}</h3>
                     <hr></hr>
                     <h4>{data.title}</h4>
                  </div>
                  <div className="resume-builder--profile__state resume-builder--profile__state_b">
                     <ul>
                        <li>
                           <i>{data.about}</i>
                        </li>


                     </ul>
                  </div>
                  <div className="resume-builder--profile__state">
                     <ul>
                        <li>
                           <a title="Experince"><span>Experince</span><i>{data.projects}</i></a>
                        </li>
                        <li>
                           <a title="Projects"><span>Projects</span><i>{data.projects}</i></a>
                        </li>

                     </ul>
                  </div>

               </section>
            </div>
         );
   }
}
export default SimpleProfile;  