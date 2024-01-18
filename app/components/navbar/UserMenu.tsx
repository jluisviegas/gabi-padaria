'use client';

import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { User } from '@prisma/client';
import { motion as m } from 'framer-motion';
import { signOut } from 'next-auth/react';
import React, { useCallback, useState } from 'react';
import MenuItem from './MenuItem';

interface UserMenuProps {
	currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className=" relative z-20 hidden list-none items-center justify-end gap-4  sm:flex sm:flex-col md:flex-row">
			<div
				onClick={toggleOpen}
				className="relative hidden cursor-pointer text-xs font-medium uppercase text-primary transition-all duration-300 before:absolute before:-bottom-2 before:left-0 before:h-[2px]	before:w-0 before:bg-accentYellow before:opacity-0 before:transition-all before:duration-500
				before:content-['']	hover:text-accentYellow	hover:before:w-full hover:before:opacity-100 sm:inline-block"
			>
				Minha conta
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
				 border-2 
				 border-secondary
				 bg-white 
				 text-sm
				 font-normal

			"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.2 }}
				>
					<div className="flex cursor-pointer flex-col">
						{currentUser ? (
							<>
								<MenuItem onClick={() => {}} label="Perfil" />
								<MenuItem onClick={() => {}} label="Meus Pedidos" />
								<hr />
								<MenuItem onClick={() => signOut()} label="Sair" />
							</>
						) : (
							<>
								<MenuItem
									onClick={() => {
										loginModal.onOpen();
										setIsOpen(false);
									}}
									label="Login"
								/>
								<MenuItem
									onClick={() => {
										registerModal.onOpen();
										setIsOpen(false);
									}}
									label="Cadastrar"
								/>
							</>
						)}
					</div>
				</m.div>
			)}
		</div>
	);
};

export default UserMenu;
