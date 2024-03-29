import { navLinks, navProducts } from '@/app/constants';
import { logo, logo_name } from '@/public/assets';
import Image from 'next/image';
import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
	return (
		<footer id="" className="w-full bg-primary">
			<div className="mx-auto my-10 h-[1px] w-[80%] bg-gray-300"></div>
			<div className="mx-auto grid grid-rows-3 items-center gap-y-4 px-6 sm:grid-cols-4 sm:grid-rows-1 sm:px-14 md:justify-between">
				<Image
					src={logo_name}
					alt="Logo"
					width={100}
					style={{
						margin: 'auto',
					}}
				/>
				<ul className="flex flex-1 list-none flex-col items-center uppercase leading-tight tracking-widest">
					<p className="font-semibold">Produtos</p>
					{navProducts.map((type) => (
						<a
							href={type.title}
							key={type.id}
							className="text-sm text-darkGray transition duration-300 hover:scale-110 hover:text-secondary"
						>
							{type.title}
						</a>
					))}
				</ul>
				<ul className="flex flex-1 list-none flex-col items-center uppercase tracking-widest">
					{navLinks.map((page) => (
						<a
							href={page.title}
							key={page.id}
							className="text-[14px] text-darkGray transition duration-300 hover:scale-110 hover:text-secondary"
						>
							{page.title}
						</a>
					))}
				</ul>
				<div className="mx-auto">
					<SocialMedia />
				</div>
			</div>
			<div className="mx-auto my-10 h-[1px] w-[80%] bg-gray-300"></div>
			<div className="flex w-full flex-wrap justify-center p-4 sm:justify-between sm:px-14 sm:text-right">
				<p className="text-grayIsh font-roboto text-xs sm:text-sm">
					Copyright Ⓒ 2024 . Todos os direitos reservados - Gabi Pães e Cia.
				</p>
				<p className="text-grayIsh font-roboto text-xs sm:text-sm">
					Desenvolvido por Luis Viegas.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
