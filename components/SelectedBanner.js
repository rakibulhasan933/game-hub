import Image from 'next/image'
import React from 'react'

function SelectedBanner() {
	return (
		<div className='mx-40 my-18'>
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center ">
					<Image className='object-cover ' src='/assets/select your games/pngimg 11.png' alt='game' height={160} width={160} />
					<h2 className="ml-[-35px] z-10 font-sans text-4xl font-normal mb-2 underline text-lime-600">Select  Your  Games</h2>
				</div>
				<div className="">
					<h2 className="text-xl font-normal cursor-pointer text-lime-600">See All</h2>
				</div>
			</div>
		</div>
	)
}

export default SelectedBanner