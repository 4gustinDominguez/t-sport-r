import React from 'react';
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../../logo.svg";

var ps;

class Sidebar extends React.Component {

	constructor(props) {
		super(props);
		this.activeRoute.bind(this);
	}

	activeRoute(routeName) {
		return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
	}
	componentDidMount() {
		if (navigator.platform.indexOf("Win") > -1) {
			ps = new PerfectScrollbar(this.refs.sidebar, {
				suppressScrollX: true,
				suppressScrollY: false
			});
		}
	}
	componentWillUnmount() {
		if (navigator.platform.indexOf("Win") > -1) {
			ps.destroy();
		}
	}

	render() {
		return (
			<div className="sidebar">
				<div className="logo">
					<a
						href=""
						className="simple-text logo-mini"
					>
						<div className="logo-img">
							<img src={logo} alt="react-logo" />
						</div>
					</a>
					<a
						href=""
						className="simple-text logo-normal"
					>
						T-SPORT
          			</a>
				</div>

				<div className="sidebar-wrapper" ref="sidebar">
					<Nav>
						{this.props.routes.map((prop, key) => {
							if (prop.redirect) return null;
							return (
								<li
									className={
										this.activeRoute(prop.path) +
										(prop.pro ? " active-pro" : "")
									}
									key={key}
								>
									<NavLink
										to={prop.path}
										className="nav-link"
										activeClassName="active"
									>
										<i className={prop.icon} />
										<p>{prop.name}</p>
									</NavLink>
								</li>
							);
						})}
					</Nav>
				</div>
			</div>
		);
	}

}

export default Sidebar;