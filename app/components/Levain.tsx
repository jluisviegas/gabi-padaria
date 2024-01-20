import { productsTypes } from '@/app/constants/index';
import Image from 'next/image';
import React from 'react';
import Container from './Container';

const Levain = () => {
	return (
		<section id="products-levain" className=" w-full">
			<hr className="border-t-1 my-20 border-gray-300" />
			<Container>
				<div className="flex flex-col gap-6 sm:flex-row">
					<div className="flex w-full sm:w-1/2 md:flex-row md:items-start ">
						<div className="flex flex-col">
							<h1 className="top-0 text-5xl font-bold uppercase leading-none tracking-wide text-darkGray  md:text-7xl">
								Produtos <br /> Levain
							</h1>
							<h2 className="sm:text-md mb-6 text-sm font-medium uppercase  tracking-wider text-accentYellow md:text-2xl">
								Linha de Produtos com Fermentação Prolongada
							</h2>
							<div className="sm:mt-10">
								<button>
									<a
										href="#_"
										className="text-grayIsh group relative inline-block overflow-hidden border border-darkGray bg-transparent px-5 py-2.5 font-semibold uppercase hover:border-accentRed"
									>
										<span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-accentRed opacity-90 transition-all duration-500 ease-out group-hover:h-full"></span>
										<span className="relative group-hover:text-white">
											Ver todos
										</span>
									</a>
								</button>
							</div>
						</div>
					</div>
					<div className="grid gap-4 sm:grid-cols-2 md:w-1/2 ">
						{productsTypes.map((product) => (
							<div key={product.id} className="relative h-[470px]">
								<Image
									src={product.productImg}
									alt="Produto"
									className="h-full object-cover brightness-75 transition duration-500 hover:brightness-50"
								/>
								<h2 className="absolute top-8 ml-6 text-3xl font-medium uppercase leading-none tracking-wide text-primary">
									{product.title}
								</h2>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Levain;
