import React from 'react';
import { Link,browserHistory } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class Header extends React.Component {

	logout(){
		localStorage.removeItem("token");
		browserHistory.push("/");
	}

	render() {

		let showLogout = localStorage.getItem("token");
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem onClick={this.logout.bind(this)} className={ showLogout ? "logoutBtn btn btn-link": "hidden"}>Logout</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
