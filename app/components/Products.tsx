import { productsTypes } from '@/app/constants/index';
import Image from 'next/image';
import React from 'react';

const Products = () => {
	return (
		<section id="products" className="  flex w-full bg-primary">
			<div className=" grid grid-cols-2 gap-4 md:w-1/2 md:gap-10 ">
				{productsTypes.map((product) => (
					<div key={product.id} className="relative h-[350px]  overflow-hidden">
						<Image
							src={product.productImg}
							alt="Produto"
							className="h-full scale-125 object-cover brightness-75 transition duration-500 hover:scale-105 hover:brightness-50"
						/>
						<h2
							className={`absolute top-10 ml-6 text-[20px] uppercase leading-none tracking-wide text-white md:text-[34px]`}
						>
							{product.title}
						</h2>
					</div>
				))}
			</div>
			<div className="flex w-1/2 flex-col items-start	justify-end md:flex-row ">
				<div className=" h-auto md:w-1/2">
					<h1 className="sticky top-0 text-end text-[36px] font-bold uppercase leading-none tracking-wide text-darkGray md:text-[68px]">
						Nossos <br /> Produtos
					</h1>
					<h2 className="sm:text-md mb-6 text-end text-sm font-medium uppercase  tracking-wider text-accentYellow md:text-lg">
						Conheça nossa linha de produtos
					</h2>
					<div className="mt-10 text-end">
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
			<hr className="border-t-1 my-20 border-gray-300" />
		</section>
	);
};

export default Products;
