'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import React, { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

const UserMenu = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className=" relative z-20 hidden flex-1 list-none items-center justify-end gap-4  sm:flex sm:flex-col md:flex-row">
			<div onClick={toggleOpen} className="cursor-pointer uppercase">
				Minha conta
			</div>

			{isOpen && (
				<div
					className="
				 right-30
				 absolute 
				 top-12
				 w-[40vw]
				 overflow-hidden 
				 rounded-sm 
				 bg-white 
				 text-sm 
				 shadow-md 
				 md:w-1/4
			  "
				>
					<div className="flex cursor-pointer flex-col">
						<>
							<MenuItem onClick={loginModal.onOpen} label="Login" />
							<MenuItem onClick={registerModal.onOpen} label="Cadastrar" />
						</>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
