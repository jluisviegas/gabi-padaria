import { instagramFeed } from '@/app/constants';
import { styles } from '@/app/constants/style';
import Image from 'next/image';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { roboto } from '../layout';
import CircularText from './CircularText';

const CompanyInfo = () => {
	return (
		<section id="info" className="relative min-h-screen">
			<div className="mx-auto my-12 flex h-auto w-full flex-1">
				{/* Info */}
				<div className="grid h-auto w-full gap-8 md:grid-cols-2">
					<div className="flex flex-col justify-between bg-darkGray px-10 py-6">
						<h1 className="text-2xl font-normal uppercase leading-none tracking-wide text-primary md:text-5xl">
							Onde Estamos
						</h1>
						<div className="mb-6 mt-2 flex justify-between">
							<div
								className={`text-md flex flex-col justify-center text-primary md:text-lg ${roboto.className}`}
							>
								<p>R. Santa Catarina, 151.</p>
								<p>Jardim Eldorado, São Luís - MA</p>
								<p>CEP: 65066-849</p>
							</div>
						</div>

						<div className="mb-6">
							<h2 className="text-md mb-6 font-medium uppercase tracking-wider text-primary sm:text-lg	md:text-lg">
								Horário de funcionamento <BiTimeFive />
							</h2>
							<div className={`flex gap-4 sm:gap-6 ${roboto.className}`}>
								<div className="text-md flex flex-col  justify-center text-primary md:text-lg">
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
									className={`text-md flex flex-col justify-center text-primary md:text-lg ${roboto.className}`}
								>
									<p>(98) 99177-9600</p>
									<p>gabipaes-cia@outlook.com</p>
								</div>
							</div>
						</div>
					</div>

					{/* Instagram Feed */}
					<div className="w-full">
						<h1 className={styles.heading3}>
							<a
								href="https://www.instagram.com/gabipaesecia_/"
								className="hover:text-accentRed"
							>
								instagram @gabipaesecia_
							</a>
						</h1>
						<div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
							{instagramFeed.map((post) => (
								<div
									key={post.id}
									className="group transition duration-500 ease-in-out hover:brightness-50 "
								>
									<a href={post.url} target="_blank">
										<Image
											src={post.img}
											alt=""
											width={300}
											height={300}
											className="h-auto w-full object-cover md:min-h-[190px]"
										/>
									</a>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* <div className="mx-auto flex items-center py-6">
				<CircularText />
			</div> */}
		</section>
	);
};

export default CompanyInfo;
