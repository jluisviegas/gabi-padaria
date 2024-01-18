import React from 'react';

const Categories = () => {
	return (
		<div className="">
			<ul className="flex flex-col justify-between text-lg font-medium uppercase sm:text-lg">
				<div className="flex flex-col justify-between gap-2 text-4xl">
					<li>Pães</li>
					<li>Massa de Pizza</li>
					<li>Bolos</li>
					<li>Salgados</li>
				</div>
			</ul>
		</div>
	);
};

export default Categories;
