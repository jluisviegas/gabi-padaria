'use client';

import axios from 'axios';
import { useState } from 'react';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import { toast } from 'react-hot-toast';
import Button from '../Button';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Modal from './Modal';

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then(() => {
				registerModal.onClose();
			})
			.catch((error) => {
				toast.error('Algo deu errado!');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Bem vindo à Gabi Pães" subtitle="Faça seu cadastro!" />

			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="name"
				label="Nome"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				type="password"
				label="password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className="mt-3 flex flex-col gap-4">
			<hr />
			<Button
				outline
				label="Continuar com Google"
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				label="Continuar com Facebook"
				icon={BsFacebook}
				onClick={() => {}}
			/>
			<div className="mt-4 text-center font-light text-neutral-500">
				<div className="flex flex-row items-center justify-center gap-2">
					<div> Já tem uma conta?</div>
					<div
						className="cursor-pointer text-accentYellow hover:underline"
						onClick={registerModal.onClose}
					>
						Entrar
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Entrar ou Cadastrar"
			actionLabel="Continue"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
