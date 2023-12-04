import { instagramFeed } from '@/app/constants';
import { styles } from '@/app/constants/style';
import Image from 'next/image';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { roboto } from '../layout';
import Button from './Button';

const CompanyInfo = () => {
	return (
		<section id="info" className="relative min-h-screen">
			{/* <hr className="border-t-2 border-gray-300 w-full" /> */}
			<div className="mx-auto my-12 flex h-auto w-full flex-1">
				{/* Info */}
				<div className="grid h-auto w-full gap-8 md:grid-cols-2">
					<div className="flex flex-col justify-between bg-accentRed px-10 py-6">
						<h1 className="text-2xl font-normal uppercase leading-none tracking-wide text-primary md:text-4xl">
							Onde Estamos
						</h1>
						<div className="mb-6 mt-2 flex justify-between">
							<div
								className={`md:text-md flex flex-col justify-center text-sm text-primary ${roboto.className}`}
							>
								<p>R. Santa Catarina, 151.</p>
								<p>Jardim Eldorado, São Luís - MA</p>
								<p>CEP: 65066-849</p>
							</div>
							<Button title="Mapa" style="text-primary" />
						</div>

						<div className="mb-6">
							<h2 className="sm:text-md mb-6 text-sm font-medium uppercase tracking-wider text-primary	md:text-lg">
								Horário de funcionamento <BiTimeFive />
							</h2>
							<div className={`flex gap-4 sm:gap-6 ${roboto.className}`}>
								<div className="md:text-md flex flex-col  justify-center text-sm text-primary">
									<p>Segunda à Domingo</p>
									<p>07h30 | 18h00</p>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<h2 className="sm:text-md mb-6 text-sm font-medium uppercase tracking-wider text-primary md:text-lg">
								Entre em Contato <AiOutlinePhone />
							</h2>
							<div className="flex gap-4 sm:gap-6">
								<div
									className={`md:text-md flex flex-col justify-center text-sm text-primary ${roboto.className}`}
								>
									<p>(98) 99177-9600</p>
									<p>gabipaes-cia@outlook.com</p>
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
									className="group transition duration-500 ease-in-out hover:brightness-50 "
								>
									<a href={post.url} target="_blank">
										<Image
											src={post.img}
											url={post.url}
											alt=""
											className='"w-[240px] h-auto object-cover md:min-h-[200px]'
										/>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-between gap-4 text-xl uppercase md:flex-row md:text-3xl">
				<div>delivery em toda São Luis</div>
				<div>Compra 100% Segura</div>
				<div>Do forno pra sua mesa</div>
			</div>
		</section>
	);
};

export default CompanyInfo;
