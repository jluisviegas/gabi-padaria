'use client';

import useCartModal from '@/app/hooks/useCartModal';
import { User } from '@prisma/client';
import { motion as m } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';

interface CartMenuProps {
	currentUser?: User | null;
}

const CartMenu: React.FC<CartMenuProps> = ({ currentUser }) => {
	const cartModal = useCartModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className=" relative z-20 hidden flex-1 list-none items-center justify-end gap-4  sm:flex sm:flex-col md:flex-row">
			<div onClick={toggleOpen} className="cursor-pointer text-xl uppercase">
				<RiShoppingCart2Line />
			</div>

			{isOpen && (
				<m.div
					className="
		 right-30
		 absolute 
		 top-12
		 w-[20vw]
		 overflow-hidden 
		 rounded-sm 
		 bg-white 
		 text-sm
		 font-normal
		 md:w-1/4

	"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.2 }}
				></m.div>
			)}
		</div>
	);
};

export default CartMenu;
