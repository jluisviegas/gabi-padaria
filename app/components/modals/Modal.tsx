'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}

		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [onClose, disabled]);

	const handleSubmit = useCallback(() => {
		if (disabled || !onSubmit) {
			return;
		}

		onSubmit();
	}, [onSubmit, disabled]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}

		secondaryAction();
	}, [secondaryAction, disabled]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div
				className="fixed inset-0 z-40 flex items-center justify-end overflow-x-hidden overflow-y-hidden bg-neutral-800/70 outline-none focus:outline-none
	  "
			>
				<div className="relative h-full w-full sm:w-1/2 md:w-1/3">
					{/*content*/}
					<div
						className={`translate h-full duration-300 
						${showModal ? 'translate-x-0' : 'translate-x-full'} 
						${showModal ? 'opacity-100' : 'opacity-0'}`}
					>
						<div className="translate relative flex h-full w-full flex-col border-0 bg-primary shadow-lg outline-none focus:outline-none">
							{/*header*/}
							<div className="relative flex items-center justify-center p-7">
								<button
									className="absolute left-6 hidden border-0 p-1 transition hover:opacity-70 sm:block"
									onClick={handleClose}
								>
									<IoMdClose size={18} />
								</button>
								<div className="text-lg font-semibold">{title}</div>
							</div>
							{/*body*/}
							<div className="relative p-6">{body}</div>
							{/*footer*/}
							<div className="flex flex-col gap-2 p-6">
								<div className="hidden w-full flex-row items-center gap-4 sm:block">
									{secondaryAction && secondaryActionLabel && (
										<Button
											disabled={disabled}
											label="Login"
											onClick={handleSecondaryAction}
											outline
										/>
									)}
									<Button
										disabled={disabled}
										label="Continuar"
										onClick={handleSubmit}
									/>
								</div>
								{footer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
