import { productsTypes } from '@/app/constants/index';
import Image from 'next/image';
import React from 'react';

const Levain = () => {
	return (
		<section
			id="products"
			className="flex w-full flex-col-reverse bg-primary sm:flex-row"
		>
			<div className="flex w-full items-center sm:ml-8 sm:w-1/2 md:flex-row md:items-start md:justify-end ">
				<div className="flex flex-col justify-center">
					<h1 className="top-0 text-[36px] font-bold uppercase leading-none tracking-wide text-darkGray sm:text-end md:text-[68px]">
						Produtos <br /> Levain
					</h1>
					<h2 className="sm:text-md mb-6 text-end text-sm font-medium uppercase  tracking-wider text-accentYellow md:text-lg">
						Conheça nossa linha de produtos
					</h2>
					<div className="text-end sm:mt-10">
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
					<div key={product.id} className="relative h-[250px]">
						<Image
							src={product.productImg}
							alt="Produto"
							className="h-full object-cover brightness-75 transition duration-500 hover:brightness-50"
						/>
						<h2 className="absolute top-10 ml-6 text-xl uppercase leading-none tracking-wide text-white md:text-4xl">
							{product.title}
						</h2>
					</div>
				))}
			</div>

			<hr className="border-t-1 my-20 border-gray-300" />
		</section>
	);
};

export default Levain;
