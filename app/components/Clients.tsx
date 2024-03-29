import Image from 'next/image';
import React from 'react';
import Slider from 'react-infinite-logo-slider';
import { clients } from '../constants';
import LogoSlider from './LogoSlider';

const Clients = () => {
	return (
		<section className="min-h-fit w-full bg-primaryDark">
			<hr className="border-t-1 my-20 border-gray-300" />
			<div className=" m-auto my-16 flex flex-col items-center justify-center sm:space-x-12">
				<div className="mb-12 flex flex-col items-center">
					{/* <h1 className="text-[36px] font-bold uppercase leading-none tracking-wide text-darkGray md:text-[68px]">
						Nossos Clientes
					</h1> */}
					<h2 className="sm:text-md mb-6 text-sm font-medium uppercase tracking-wider  text-accentYellow md:text-lg">
						CONHEÇA ALGUNS DE NOSSOS CLIENTES
					</h2>
				</div>
				<div className="flex flex-col">
					<LogoSlider />
				</div>
			</div>
			<hr className="border-t-1 my-20 border-gray-900" />
		</section>
	);
};

export default Clients;
