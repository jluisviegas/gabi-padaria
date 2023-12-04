import { desenho } from '@/public/assets';
import Image from 'next/image';

const Hero = () => {
	return (
		<section
			id="home"
			className="relative flex  h-screen max-w-[2520px] justify-center bg-primary px-4 sm:px-2 md:px-10 xl:px-20"
		>
			<div className="relative top-10">
				<div className="flex flex-col items-center justify-center gap-10 ">
					<h2 className="sm:text-md text-sm font-medium uppercase tracking-wider  text-accentYellow md:text-2xl">
						Bem-vindo à Gabi Pães e Cia
					</h2>

					<Image
						src={desenho}
						alt="desenho"
						width={350}
						height={350}
						className="opacity-30"
					></Image>
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-3xl font-bold uppercase leading-none tracking-widest text-darkGray  sm:text-5xl">
							Ingrediente especial.
						</h1>
						<h1 className="text-3xl font-bold uppercase leading-none tracking-widest text-darkGray sm:text-5xl">
							Sabor Artesanal.
						</h1>
					</div>
					<button>
						<a
							href="/loja"
							className="border-grayIsh group relative inline-block overflow-hidden border bg-accentRed px-5 py-2.5 font-semibold uppercase text-primary hover:border-primaryDark"
						>
							<span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-accentYellow opacity-90 transition-all duration-500 ease-out group-hover:h-full"></span>
							<span className="relative group-hover:text-white ">
								Pedir Online
							</span>
						</a>
					</button>
					{/* <p className="font-roboto text-[14px] sm:text-[15px] md:text-[17px]">
						Qualidade para oferecer aos nossos clientes produtos inovadores que
						satisfaçam planamente as suas exigências. Temos uma grande variedade
						de produtos para atender se negócio.
					</p> */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
