import { productsTypes } from '@/app/constants/index';
import Image from 'next/image';
import React from 'react';

const Products = () => {
	return (
		<section
			id="products"
			className="flex w-full flex-col-reverse bg-primary sm:flex-row"
		>
			<div className="grid gap-4 sm:grid-cols-2 md:w-1/2 ">
				{productsTypes.map((product) => (
					<div key={product.id} className="relative h-[470px]">
						<Image
							src={product.url}
							alt="Produto"
							className="h-full w-full object-cover brightness-75 transition duration-500 hover:brightness-50"
							height={450}
							width={400}
						/>
						<h2 className="absolute top-8 ml-6 text-3xl font-medium uppercase leading-none tracking-wide text-primary">
							{product.title}
						</h2>
					</div>
				))}
			</div>
			<div className="flex w-full sm:ml-8 sm:w-1/2 md:flex-row md:items-start md:justify-end">
				<div className="mb-4 flex flex-col">
					<h1 className="top-0 text-5xl font-bold uppercase leading-none tracking-wide text-darkGray sm:text-end md:text-7xl">
						Nossos <br /> Produtos
					</h1>
					<h2 className="sm:text-md mb-6 text-end text-base font-medium uppercase tracking-wider text-accentYellow md:text-2xl">
						Conheça nossa linha de produtos
					</h2>
					<div className="sm:mt-10 sm:text-end">
						<button>
							<a
								href="/produtos"
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
				<hr className="border-t-1 my-20 border-gray-300" />
			</div>
		</section>
	);
};

export default Products;
