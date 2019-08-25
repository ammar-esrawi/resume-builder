import React from 'react';
import './Srt9.css';

class Srt9 extends React.Component {
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
                <section >
                    <div id="doc2" className="yui-t7">
                        <div id="inner">

                            <div id="hd">
                                <div className="yui-gc">
                                    <div className="yui-u first">
                                        <h1>{data.name || data.username}</h1>
                                        <h2>{data.title}</h2>
                                    </div>

                                    <div className="yui-u">
                                        <div className="contact-info">

                                            <h3><a href={"mailto:"+data.email}>{data.email}</a></h3>
                                            <h3>{data.mobile}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="bd">
                                <div id="yui-main">
                                    <div className="yui-b">

                                        <div className="yui-gf">
                                            <div className="yui-u first">
                                                <h2>Profile</h2>
                                            </div>
                                            <div className="yui-u">
                                                <p className="enlarge">
                                                    {data.profile}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="yui-gf">
                                            <div className="yui-u first">
                                                <h2>Skills</h2>
                                            </div>
                                            <div className="yui-u">
                                                {data.skills.map((value, index) => {
                                                    return <div className="talent" key={index}>
                                                        <h2>{value.name}</h2>
                                                        <p>{value.description}</p>
                                                    </div>
                                                })}

                                            </div>
                                        </div>

                                        <div className="yui-gf">
                                            <div className="yui-u first">
                                                <h2>Technical</h2>
                                            </div>
                                            <div className="yui-u">
                                                <ul className="talent">
                                                    {data.technical.map((value, index) => {
                                                        return <li key={index}>{value}</li>
                                                    })}


                                                </ul>


                                            </div>
                                        </div>

                                        <div className="yui-gf">

                                            <div className="yui-u first">
                                                <h2>Experience</h2>
                                            </div>

                                            <div className="yui-u">
                                                {data.experience.map((value, index) => {
                                                    return <div className="job" key={index}>
                                                        <h2>{value.company}</h2>
                                                        <h3>{value.jobTitle}</h3>
                                                        <h4>{value.from}-{value.to}</h4>
                                                        <p>{value.description}</p>
                                                    </div>
                                                })}



                                            </div>
                                        </div>


                                        <div className="yui-gf last">
                                            <div className="yui-u first">
                                                <h2>Education</h2>
                                            </div>
                                            <div className="yui-u">
                                                {data.education.map((value, index) => {
                                                    return <h2 key={index}>{value}</h2>
                                                })}


                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div id="ft">
                                <p>{data.name} &mdash; <a href={"mailto:"+data.email}>{data.email}</a> &mdash; {data.mobile}</p>
                            </div>

                        </div>


                    </div>

                </section>
            );
    }
}
export default Srt9;  