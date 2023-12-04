'use client';

import React, { useCallback, useState } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';

interface CartProps {
	onClick: () => void;
}

const CartMenu: React.FC<CartProps> = ({ onClick }) => {
	return (
		<div
			className=" relative z-20 hidden flex-1 list-none items-center justify-end gap-4  sm:flex sm:flex-col md:flex-row"
			onClick={onClick}
		>
			<div className="flex cursor-pointer items-center justify-center gap-2 text-xl">
				<RiShoppingCart2Line />
				<div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
					<p className="text-xs text-primary">0</p>
				</div>
			</div>
		</div>
	);
};

export default CartMenu;
