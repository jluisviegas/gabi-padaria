'use client';

import useCartModal from '@/app/hooks/useCartModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import Heading from '../Heading';
import Modal from './Modal';

const CartModal = () => {
	const router = useRouter();
	const cartModal = useCartModal();
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<Modal
			disabled={isLoading}
			isOpen={cartModal.isOpen}
			title="Entrar"
			actionLabel="Continue"
			onClose={cartModal.onClose}
			// onSubmit={handleSubmit(onSubmit)}
			// body={bodyContent}
			// footer={footerContent}
		/>
	);
};

export default CartModal;
