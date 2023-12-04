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
			<ul className="relative flex-1 list-none justify-start uppercase tracking-widest sm:flex sm:items-center sm:gap-3 md:flex-row md:gap-6">
				{navLinks.map((menu) => (
					<Link
						href={menu.href}
						key={menu.id}
						className="relative hidden cursor-pointer text-xs font-bold text-darkGray transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-0 before:bg-accentRed	before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:text-accentRed
							hover:before:w-full	hover:before:opacity-100	sm:inline-block"
					>
						{menu.title}
					</Link>
				))}
			</ul>
		</nav>
	);

	return (
		<Modal
			isOpen={mobileNav.isOpen}
			title=""
			actionLabel="Continue"
			onClose={mobileNav.onClose}
			body={bodyContent}
		/>
	);
};
