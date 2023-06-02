import React from 'react'

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex="0" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex="0" className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
						<li><a>Top Gamers</a></li>
						<li>
							<a>Games</a>
						</li>
						<li><a>Live Games</a></li>
					</ul>
				</div>
				<a className="text-xl normal-case btn btn-ghost">Gamer Hub</a>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 menu menu-horizontal">
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