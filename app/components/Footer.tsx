import { navLinks, navProducts } from '@/app/constants';
import { logo } from '@/public/assets';
import Image from 'next/image';
import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
	return (
		<footer id="" className="w-full bg-primary">
			<div className="mx-auto grid grid-rows-3 items-center justify-center gap-y-4 px-6 sm:grid-cols-4 sm:grid-rows-1 sm:px-14">
				<Image src={logo} alt="Logo" width={150} />
				<ul className="flex flex-1 list-none flex-col items-center leading-tight tracking-widest sm:items-start">
					<p className="font-semibold uppercase">Nossos Produtos</p>
					{navProducts.map((type) => (
						<a
							href={type.title}
							key={type.id}
							className="text-[14px] text-darkGray transition duration-300 hover:scale-110 hover:text-secondary"
						>
							{type.title}
						</a>
					))}
				</ul>
				<ul className="flex flex-1 list-none flex-col  items-center uppercase tracking-widest sm:items-start">
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
				<div>
					<SocialMedia />
				</div>
			</div>
			<div className="mx-auto mt-6 h-8 w-full px-6 sm:px-14 sm:text-right">
				<p className="text-grayIsh font-roboto text-[10px] sm:text-xs">
					Copyright Ⓒ 2022 . Todos os direitos reservados - Gabi Pães e Cia. -
					Desenvolvido por Luis Viegas.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
