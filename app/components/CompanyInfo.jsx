import { instagramFeed } from '@/app/constants';
import { styles } from '@/app/constants/style';
import Image from 'next/image';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import Button from './Button';

const CompanyInfo = () => {
	return (
		<section id="products" className="relative min-h-screen">
			{/* <hr className="border-t-2 border-gray-300 w-full" /> */}
			<div className="mx-auto my-12 flex h-auto w-full flex-1">
				{/* Info */}
				<div className="grid h-auto w-full  gap-8 md:grid-cols-2">
					<div className="flex flex-col justify-between bg-accentRed px-10 py-6">
						<h1 className="text-[32px] font-normal uppercase leading-none tracking-wide text-primary	md:text-[44px]">
							Onde Estamos
						</h1>
						<div className="mb-6 mt-2 flex justify-between">
							<div className="flex flex-col justify-center">
								<p className="font-roboto text-[14px] text-primary sm:text-[15px]	md:text-[17px]">
									R. Santa Catarina, 151.
								</p>
								<p className="font-roboto text-[14px] text-primary sm:text-[15px] md:text-[17px]">
									Jardim Eldorado, São Luís - MA
								</p>
								<p className="font-roboto text-[14px] text-primary sm:text-[15px] md:text-[17px]">
									CEP: 65066-849
								</p>
							</div>
							<Button title="Mapa" style="text-primary" />
						</div>

						<div className="mb-6">
							<h2 className={`${styles.heading2}	text-primary`}>
								Horário de funcionamento <BiTimeFive />
							</h2>
							<div className="flex gap-4 sm:gap-6">
								<div className="flex flex-col justify-center">
									<p className="font-roboto text-[14px] text-primary sm:text-[15px] md:text-[17px]">
										Segunda à Domingo
									</p>
									<p className="font-roboto text-[14px] text-primary sm:text-[15px] md:text-[17px]">
										07h30 | 18h00
									</p>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<h2 className={`${styles.heading2}	text-primary`}>
								Entre em Contato <AiOutlinePhone />
							</h2>
							<div className="flex gap-4 sm:gap-6">
								<div className="flex flex-col justify-center">
									<p className={`${styles.paragraph} text-primary`}>
										(98) 99177-9600
									</p>
									<p className={`${styles.paragraph} text-primary`}>
										gabipaes-cia@outlook.com
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Instagram Feed */}
					<div className="w-full">
						<h1 className={styles.heading3}>instagram @gabipaesecia_</h1>
						<div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
							{instagramFeed.map((post) => (
								<div
									key={post.id}
									className="group transition duration-500 ease-in-out "
								>
									<a href={post.url} target="_blank">
										<Image
											src={post.img}
											url={post.url}
											alt=""
											className='"w-[240px] h-auto object-cover md:min-h-[200px]'
										/>
										<div className="absolute bottom-5 left-2 z-10 text-xl font-semibold uppercase text-white opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
											@gabipaesecia_
										</div>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between gap-8 text-3xl uppercase">
				<div>delivery em toda São Luis</div>
				<span>|</span>
				<div>Compra 100% Segura</div>
				<span>|</span>
				<div>Do forno pra sua mesa</div>
			</div>
		</section>
	);
};

export default CompanyInfo;
