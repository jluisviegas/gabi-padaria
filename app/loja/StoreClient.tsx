'use client';

import { productsList } from '@/app/constants/index';
import { produto1h } from '@/public/assets';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../components/Button';
import Categories from '../components/Categories';
import Container from '../components/Container';

const StoreClient = () => {
	const router = useRouter();

	return (
		<>
			<div
				className=" relative mb-8 flex flex-col 
			 justify-between bg-primary"
			></div>
			<Container>
				<Categories />
				<p className="mb-8 text-2xl font-semibold uppercase xs:text-4xl sm:text-7xl ">
					Nossos Produtos
				</p>
				<div className="grid  gap-6 xs:grid-cols-2 sm:grid-cols-4">
					{productsList.map((product) => (
						<div
							key={product.id}
							className="duration-400 group relative flex flex-1 flex-col justify-center bg-[#dddcdc] font-semibold uppercase transition-all ease-in-out "
						>
							<Image
								src={product.imgHover}
								alt="p"
								className="absolute inset-0 h-full w-full object-cover opacity-0 brightness-75 transition-all duration-300 ease-in-out group-hover:opacity-100 "
							></Image>
							<Image
								src={product.img}
								alt="Produto"
								className="h-full border-b-2 object-contain"
							/>
							<div className="relative flex flex-col p-4">
								<p className="text-md tracking-wider group-hover:opacity-0">
									{product.title}
								</p>
								<p className="text-sm font-medium tracking-widest group-hover:opacity-0">
									R$ {product.price}
								</p>
								<div className="trasform absolute left-1/2 w-full -translate-x-1/2 px-4 text-sm text-darkGray opacity-0 group-hover:opacity-100">
									<Button
										label="Ver Produto"
										onClick={() => router.push('/produto')}
										outline
									></Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</>
	);
};

export default StoreClient;
