import React from 'react'

function Header() {
	return (
		<div className="min-h-screen hero" style={{
			backgroundImage: `url("/assets/cool-background.png")`,
			width: '100%',
			height: '100%',
		}} >
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="items-center justify-center text-center text-neutral-content">
				<div className="w-full">
					<button className="my-12 btn btn-primary">Get Started</button>
					<h1 className="mb-5 font-mono font-normal uppercase text-8xl">Join Into Your</h1>
					<h1 className="mb-5 font-mono font-normal uppercase text-8xl"> Favorite</h1>
					<h1 className="mb-5 font-mono font-normal uppercase text-8xl">Games</h1>
				</div>
			</div>
		</div>
	)
}

export default Header