'use client';

import { navLinks } from '@/app/constants';
import { close, logo, menu } from '@/public/assets';
import { User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Container from '../Container';
import CartMenu from './CartMenu';
import UserMenu from './UserMenu';

interface NavBarProps {
	currentUser?: User | null;
}

const Navbar: React.FC<NavBarProps> = ({ currentUser }) => {
	const [toggle, setToggle] = useState(false);

	console.log({ currentUser });

	return (
		<Container>
			<nav className="z-10 flex w-full items-center justify-between py-6">
				{/* Desktop */}
				<ul className="relative hidden flex-1 list-none justify-start uppercase tracking-widest sm:flex sm:flex-col md:flex-row md:items-center md:gap-6">
					<Image
						src={logo}
						alt="gabi_logo"
						width={100}
						height={80}
						className="sm:mr-6"
					/>
					{navLinks.map((menu) => (
						<Link
							href={menu.href}
							key={menu.id}
							className="relative inline-block cursor-pointer text-sm text-darkGray
							transition-all
							duration-300
							before:absolute
							before:-bottom-2
							before:left-0
							before:h-[2px]
							before:w-0
							before:bg-accentRed
							before:opacity-0
							before:transition-all
							before:duration-500
							before:content-['']
							hover:text-accentRed
							hover:before:w-full
							hover:before:opacity-100"
						>
							{menu.title}
						</Link>
					))}
				</ul>
				<div className="flex gap-4">
					<UserMenu currentUser={currentUser} />
					<CartMenu />
				</div>

				{/* Mobile */}
				<div className="flex flex-1 items-center justify-end transition-transform sm:hidden">
					<Image
						src={toggle ? close : menu}
						alt="menu"
						className="h-[32px] w-[32px] object-contain transition-transform"
						onClick={() => setToggle((prev) => !prev)}
					/>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;
