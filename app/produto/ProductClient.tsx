'use client';

import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from '../components/Button';
import Container from '../components/Container';

const ProductClient = () => {
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="flex w-full overflow-hidden">
			<Container>
				<div className="w-2/3">Produto</div>
				<div className="flex w-1/3 flex-col gap-4 bg-white">
					<h2 className="text-5xl uppercase">Produto</h2>
					<hr />
					<p>R$ 3,00</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
						iste, expedita accusamus eveniet at ea.
					</p>
					<div className="flex gap-4">
						<div className="flex items-center justify-center gap-4 border-[1px] border-darkGray p-4 text-lg">
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
						<Button label="Adicionar" />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ProductClient;
