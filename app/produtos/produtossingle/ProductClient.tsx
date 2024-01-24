'use client';

import { produto1 } from '@/public/assets';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '../../components/Button';

const ProductClient = () => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="flex min-h-[60vh] w-full flex-col sm:flex-row">
			<div className="flex h-full items-center justify-center sm:w-1/2">
				<Image src={produto1} alt=""></Image>
			</div>
			<div className="flex h-full flex-col gap-4 bg-white p-6 sm:w-1/2">
				<h2 className="text-3xl uppercase md:text-5xl">
					Pão de Hambúrguer Gourmet
				</h2>
				<hr />
				<p className="text-2xl">R$ 3,00</p>
				<p>Pão de Hambúrguer Gourmet, 100% Artesanal.</p>
				<div className="flex gap-4">
					<div className="flex items-center justify-center gap-4 border-[1px] border-darkGray p-4 text-lg">
						<button
							onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
						>
							<AiOutlineMinus />
						</button>
						{quantity}
						<button onClick={() => setQuantity((prev) => prev + 1)}>
							<AiOutlinePlus />
						</button>
					</div>
					<Button label="Adicionar ao carrinho" onClick={() => {}} />
				</div>
				<p className="text-lg uppercase">Informações:</p>
				<div className="text-md flex bg-primary p-2 md:text-lg">
					<div className="flex flex-1 flex-col gap-4 ">
						<p> Quantidade</p> <p> Peso Unitario</p>
					</div>
					<div className="flex flex-1 flex-col gap-4 ">
						<p>6</p>
						<p>160g</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductClient;
