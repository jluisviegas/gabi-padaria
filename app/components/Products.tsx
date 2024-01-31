import { productsTypes } from '@/app/constants/index';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Products = () => {
	return (
		<section id="products" className=" w-fullsm:flex-row">
			<hr className="border-t-1 my-20 border-gray-300" />
			<div className="flex">
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
							<Button variant="outline" size="lg">
								<a href="/produtos">Ver Todos</a>
							</Button>
						</div>
					</div>
				</div>

				<hr className="border-t-1 my-20 border-gray-300" />
			</div>
		</section>
	);
};

export default Products;
