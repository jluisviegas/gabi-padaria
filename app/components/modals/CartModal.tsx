'use client';

import useCartModal from '@/app/hooks/useCartModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import ProductClient from '@/app/produtos/produtossingle/ProductClient';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../Button';
import Heading from '../Heading';
import Modal from './Modal';

const CartModal = () => {
	const router = useRouter();
	const cartModal = useCartModal();
	const [isLoading, setIsLoading] = useState(false);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Meu carrinho ( 0 )" subtitle="( 0 )" />
			<hr />
		</div>
	);

	const footerContent = (
		<div className="mt-3 flex flex-col gap-4">
			<Button label="Ver carrinho" onClick={() => {}} />

			<div className="mt-4 text-center font-light text-neutral-500">
				<div className="flex flex-row items-center justify-center gap-2">
					<div> Não tem uma conta?</div>
					<div
						className="cursor-pointer text-accentYellow hover:underline"
						onClick={() => cartModal.onClose()}
					>
						Cadastre-se!
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			isOpen={cartModal.isOpen}
			title=""
			actionLabel="Continue"
			onClose={cartModal.onClose}
			onSubmit={() => {}}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default CartModal;
