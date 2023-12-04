import React from 'react';

const Categories = () => {
	return (
		<div className="">
			<ul className="text-md flex flex-col justify-between border-b-[1px] border-gray-400 p-4 font-medium uppercase sm:flex-row sm:text-lg">
				<div className="flex justify-between">
					<div className="hidden sm:block">
						<li>Todos os Produtos</li>
					</div>
					<li>Pães</li>
					<li>Pizza</li>
					<li>Bolos</li>
					<li>Salgados</li>
				</div>
			</ul>
		</div>
	);
};

export default Categories;
