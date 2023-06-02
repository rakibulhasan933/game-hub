import React from 'react'

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabindex="0" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabindex="0" className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Top Gamers</a></li>
						<li>
							<a>Games</a>
						</li>
						<li><a>Live Games</a></li>
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl">Gamer Hub</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li><a>Top Gamers</a></li>
					<li>
						<a>Games</a>
					</li>
					<li><a>Live Games</a></li>
				</ul>
			</div>
			<div className="navbar-end">
				<a className="btn">Login</a>
			</div>
		</div>
	)
}

export default Navbar