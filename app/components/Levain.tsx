import { cheese_wine, levain } from '@/public/assets';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Levain = () => {
	return (
		<section id="products-levain" className=" w-full">
			<hr className="border-t-1 my-20 border-gray-300" />
			<div className="flex flex-col gap-6 sm:flex-row">
				<div className="flex w-full flex-1 sm:w-1/2 md:flex-row md:items-start ">
					<div className="flex flex-col">
						<h1 className="top-0 text-5xl font-bold uppercase leading-none tracking-wide text-darkGray  md:text-7xl">
							Produtos <br /> Levain
						</h1>
						<h2 className="sm:text-md mb-6 text-sm font-medium uppercase  tracking-wider text-accentYellow md:text-2xl">
							Linha de Produtos com Fermentação Prolongada
						</h2>
						<div className="sm:mt-10">
							<Button variant="outline" size="lg">
								Ver Todos
							</Button>
						</div>
					</div>
				</div>
				<div className="flex flex-1 flex-col gap-4">
					<div className="relative">
						<Image
							src={levain}
							alt="Levain"
							className="col-start-1 col-end-3 w-full object-cover brightness-75 transition duration-500 hover:brightness-50"
						></Image>
						<h2 className="absolute top-8 ml-6 text-3xl font-medium uppercase leading-none tracking-wide text-primary">
							Levain
						</h2>
					</div>
					<div className="relative">
						<Image
							src={cheese_wine}
							alt="Levain"
							className="object-cover brightness-75 transition duration-500 hover:brightness-50"
						></Image>
						<h2 className="absolute top-8 ml-6 text-3xl font-medium uppercase leading-none tracking-wide text-primary">
							Queijos e Vinhos
						</h2>
					</div>
				</div>
			</div>
			<hr className="border-t-1 my-20 border-gray-300" />
		</section>
	);
};

export default Levain;
