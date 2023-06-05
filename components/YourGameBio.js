import React from 'react'

function YourGameBio() {
	return (
		<div className='pb-8 mx-40'>
			<div className="flex flex-row items-center px-5">
				<div className="flex flex-col basis-3/4 ">
					<h2 className="font-mono text-xl font-normal underline mb-7 text-lime-600">How to Select Your Games.</h2>
					<p className="font-mono text-base font-normal text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled done.</p>
				</div>
				<div className=" basis-1/4">
					<button className="px-5 py-3 font-normal rounded-md bg-lime-600 hover:text-white ">Add To My Account</button>
				</div>
			</div>
			<div className=""></div>
		</div>
	)
}

export default YourGameBio