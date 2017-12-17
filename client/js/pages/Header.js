import React from 'react';
import { Link,browserHistory } from 'react-router';

export default class Header extends React.Component {

  logout(){
    localStorage.removeItem("token");
    browserHistory.push("/");
  }

  render() {

    let showLogout = localStorage.getItem("token");
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar">
                </span><span className="icon-bar"></span><span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar-collapse" className="collapse navbar-collapse">

            <ul className="nav navbar-nav navbar-right">

              <li onClick={this.logout.bind(this)} className={ showLogout ? "logoutBtn btn btn-link": "hidden"}>
                 Logout
              </li>

              {/*<Authenticated>*/}
                {/*<li>*/}
                  {/*<LogoutLink />*/}
                {/*</li>*/}
              {/*</Authenticated>*/}
              {/*<NotAuthenticated>*/}
                {/*<li>*/}
                  {/*<Link to="/register" activeClassName="active">Create Account</Link>*/}
                {/*</li>*/}
              {/*</NotAuthenticated>*/}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
