import { clients } from '@/app/constants';
import Image from 'next/image';
import React from 'react';

const Clients = () => {
	return (
		<section className="">
			<hr className="border-t-1 my-20 border-gray-300" />
			<div className=" m-auto my-16 flex flex-col items-center justify-center sm:space-x-12">
				<div className="mb-12 flex flex-col items-center">
					<h1 className="text-[36px] font-bold uppercase leading-none tracking-wide text-darkGray md:text-[68px]">
						Nossos Clientes
					</h1>
					<h2 className="sm:text-md mb-6 text-sm font-medium uppercase tracking-wider  text-accentYellow md:text-lg">
						CONHEÇA ALGUNS DE NOSSOS CLIENTES
					</h2>
				</div>
				<div className="flex flex-col">
					<ul className="flex flex-wrap justify-center gap-6">
						{clients.map((client) => (
							<div className="" key={client.id}>
								<Image
									src={client.img}
									alt="Clientes"
									className="h-12 w-16 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-24 sm:w-32"
								/>
							</div>
						))}
					</ul>
				</div>
			</div>
			<hr className="border-t-1 my-20 border-gray-300" />
		</section>
	);
};

export default Clients;
