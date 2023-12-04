'use client';

import { produto1 } from '@/public/assets';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import Button from '../components/Button';

const CartClient = () => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="min-h-screen">
			<h2 className="pb-12 text-6xl font-medium uppercase text-darkGray">
				Carrinho
			</h2>
			<div className="flex w-full gap-6">
				<div className="flex w-full border-b-2 border-t-2 border-gray-300 py-4">
					<div className="flex w-32 items-center justify-center bg-primaryDark">
						<Image src={produto1} alt=""></Image>
					</div>
					<div className="flex w-full flex-col justify-between gap-2 px-4 uppercase">
						<div className="flex items-center justify-between text-2xl text-darkGray">
							<h3 className="">Pão de Hambúrguer Gourmet</h3>
							<p>R$ 3,00</p>
						</div>

						<p>160g / 6 unidades</p>
						<div className="flex items-center justify-between">
							<div className="text-md flex w-24 items-center justify-center gap-4 border-[1px] border-darkGray p-2">
								<button
									onClick={() =>
										setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
									}
								>
									<AiOutlineMinus />
								</button>
								{quantity}
								<button onClick={() => setQuantity((prev) => prev + 1)}>
									<AiOutlinePlus />
								</button>
							</div>
							<div className="text-xl ">
								<BiTrash />
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-1/3 flex-col bg-gray-300 p-4">
					<div className="flex items-center justify-between pb-4 text-2xl font-bold uppercase">
						<h3>Total</h3>
						<p>R$ 3,00</p>
					</div>
					<Button label="Fechar Pedido" />
				</div>
			</div>
		</div>
	);
};

export default CartClient;
