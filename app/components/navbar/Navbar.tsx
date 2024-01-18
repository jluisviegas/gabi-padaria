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
import { FaPhone } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
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
		if (toggle) {
			mobileNav.onClose();
		} else {
			mobileNav.onOpen();
		}
	};

	return (
		<nav className="z-10 mx-auto items-center bg-darkGray">
			<div className="flex h-10 justify-end gap-10 bg-primary px-4 md:px-10 xl:px-20">
				<div className="flex items-center gap-2 text-xs sm:text-sm">
					<FaPhone />
					99221-7000 | 99177-9600
				</div>
				<div className="flex items-center gap-2 text-sm sm:text-base">
					<IoMailSharp />
					gabipaes@gmail.com
				</div>
			</div>
			{/* Desktop */}
			<div className="mx-auto flex w-full max-w-[2520px] justify-between p-6 px-4 md:px-10 xl:px-20">
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
							className="relative hidden cursor-pointer text-xs font-medium text-primary transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-[2px] before:w-0	before:bg-accentYellow before:opacity-0 before:transition-all before:duration-500 before:content-['']
							hover:text-accentYellow	hover:before:w-full	hover:before:opacity-100 sm:inline-block"
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
						alt="menu-mobile"
						className="h-[32px] w-[32px] object-contain transition-transform"
						onClick={handleMenu}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
