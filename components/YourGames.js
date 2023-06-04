"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

function YourGames() {
	return (
		<div className="my-20">
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				slidesPerView={4}
				spaceBetween={10}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
				<SwiperSlide>
					<Image className="object-cover rounded " src='/assets/select your games/Mask group (1).png' alt="game" width={340} height={375} />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default YourGames