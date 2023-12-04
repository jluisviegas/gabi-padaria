'use client';

import { navLinks } from '@/app/constants';
import useCartModal from '@/app/hooks/useCartModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useMobileNav from '@/app/hooks/useMobileNav';
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
	const mobileNav = useMobileNav();

	const cartModal = useCartModal();

	const handleMenu = () => {
		setToggle((prev) => !prev);
		mobileNav.onOpen();
	};

	return (
		<Container>
			<nav className="z-10 flex w-full items-center justify-between py-6">
				{/* Desktop */}
				<ul className="relative flex-1 list-none justify-start uppercase tracking-widest sm:flex sm:items-center sm:gap-3 md:flex-row md:gap-6">
					<Link href="/">
						<Image
							src={logo}
							alt="gabi_logo"
							width={95}
							height={75}
							className="sm:mr-6"
						/>
					</Link>
					{navLinks.map((menu) => (
						<Link
							href={menu.href}
							key={menu.id}
							className="relative hidden cursor-pointer text-xs font-medium text-darkGray transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-0	before:bg-accentRed before:opacity-0 before:transition-all before:duration-500 before:content-['']
							hover:text-accentRed	hover:before:w-full	hover:before:opacity-100 sm:inline-block"
						>
							{menu.title}
						</Link>
					))}
				</ul>
				<div className="flex items-center gap-4">
					<UserMenu currentUser={currentUser} />
					<CartMenu onClick={() => cartModal.onOpen()} />
				</div>

				{/* Mobile */}
				<div className="z-50 flex flex-1 items-center justify-end transition-transform sm:hidden">
					<Image
						src={toggle ? close : menu}
						alt="menu"
						className="h-[32px] w-[32px] object-contain transition-transform"
						onClick={handleMenu}
					/>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;
