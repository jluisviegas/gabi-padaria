'use client';

import { burgernosso } from '@/public/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { clients } from '../constants/index';

const LogoSlider = () => {
	const [settings] = useState({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	});

	return (
		<div>
			<Slider {...settings}>
				{clients.map((logo) => {
					<div key={logo.id} className="h-20 w-20">
						<Image src={logo.img} width={50} height={50} alt="Clientes"></Image>
					</div>;
				})}
			</Slider>
		</div>
	);
};

export default LogoSlider;
