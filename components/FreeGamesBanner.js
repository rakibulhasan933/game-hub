import Image from 'next/image'
import React from 'react'

function FreeGamesBanner() {
	return (
		<div className='py-5 mx-40'>
			<div className="flex items-center justify-between">
				<div className="flex items-center justify-center ">
					<Image className='object-cover ' src='/assets/select your games/pngimg 11.png' alt='game' height={160} width={160} />
					<h2 className="ml-[-35px] z-10 font-mono text-4xl font-normal mb-2 underline text-lime-600">Free Games</h2>
				</div>
				<div className="">
					<h2 className="font-mono text-xl font-normal cursor-pointer text-lime-600">See All</h2>
				</div>
			</div>
		</div>
	)
}

export default FreeGamesBanner