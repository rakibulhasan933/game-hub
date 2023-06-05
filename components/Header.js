import React from 'react'

function Header() {

	return (
		<div className="mx-40">
			<div className="h-screen hero">
				<div className="items-center justify-center my-12 text-center text-neutral-content">
					<div className="w-full">
						<button className="px-5 py-3 my-12 font-semibold text-black bg-white rounded-md border-lime-600 hover:bg-lime-500 hover:text-white ">Get Started</button>
						<h1 className="mb-5 font-mono font-normal uppercase text-8xl text-shadow text-shadow-red">Join Into Your</h1>
						<h1 className="mb-5 font-mono font-normal uppercase text-8xl text-shadow text-shadow-red "> Favorite</h1>
						<h1 className="mb-5 font-mono font-normal uppercase text-8xl text-shadow text-shadow-red hover:text-shadow-lg hover:text-purple-500">Games</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header