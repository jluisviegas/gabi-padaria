'use client';

import { navLinks } from '@/app/constants';
import useMobileNav from '@/app/hooks/useMobileNav';
import Link from 'next/link';
import Modal from '../modals/Modal';

export const MobileNav = () => {
	const mobileNav = useMobileNav();

	const bodyContent = (
		<nav className="z-10 flex w-full items-center justify-between py-6">
			{/* Desktop */}
			<ul className="relative mt-14 flex flex-1 list-none flex-col items-center gap-y-6 uppercase tracking-widest">
				{navLinks.map((menu) => (
					<Link
						href={menu.href}
						key={menu.id}
						className="relative  cursor-pointer text-xl font-bold text-darkGray transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-0 before:bg-accentRed	before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:text-accentRed
							hover:before:w-full	hover:before:opacity-100	sm:inline-block"
					>
						{menu.title}
					</Link>
				))}
			</ul>
		</nav>
	);

	const footerContent = (
		<div className="mt-3 flex flex-col gap-4">
			<div className="mt-4 text-center font-light text-neutral-500">
				<div className="flex flex-row items-center justify-center gap-2">
					<div> Não tem uma conta?</div>
					<div className="cursor-pointer text-accentYellow hover:underline">
						Cadastre-se!
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			isOpen={mobileNav.isOpen}
			onClose={mobileNav.onClose}
			body={bodyContent}
			footer={footerContent}
			disabled
		/>
	);
};
