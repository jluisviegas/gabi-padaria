'use client';

import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '../components/Button';

const ProductClient = () => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="flex h-screen w-full overflow-hidden">
			<div className="w-1/2">Produto</div>
			<div className="flex h-full w-1/2 flex-col gap-4 bg-white p-6">
				<h2 className="text-5xl uppercase">Pão de Hambúrguer Gourmet</h2>
				<hr />
				<p className="text-2xl">R$ 3,00</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe iste,
					expedita accusamus eveniet at ea.
				</p>
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
				<div className="flex flex-col gap-2 bg-primary p-2">
					<p> Quantidade</p> <p> Peso Unitario</p>
				</div>
			</div>
		</div>
	);
};

export default ProductClient;
