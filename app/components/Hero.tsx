import { desenho } from '@/public/assets';
import Image from 'next/image';

const Hero = () => {
	return (
		<section
			id="home"
			className="relative flex  justify-center max-w-[2520px] bg-primary px-4 sm:px-2 md:px-10 xl:px-20 h-screen"
		>
			<div className="">
				<div className="flex flex-col justify-center items-center gap-10 ">
					<h2 className="font-medium text-sm sm:text-md md:text-xl tracking-wider  uppercase text-accentYellow">
						Bem-vindo à Gabi Pães e Cia
					</h2>

					<Image
						src={desenho}
						alt="desenho"
						width={400}
						height={400}
						className="opacity-30 "
					></Image>
					<div className="flex flex-col justify-center items-center">
						<h1 className="text-[36px] md:text-[68px] tracking-widest leading-none uppercase font-bold  text-darkGray">
							Ingrediente especial.
						</h1>
						<h1 className="text-[36px] md:text-[68px] tracking-widest leading-none uppercase font-bold text-darkGray">
							Sabor Artesanal.
						</h1>
					</div>
					<button>
						<a
							href="#_"
							className="border-grayIsh text-primary group relative inline-block overflow-hidden border bg-accentRed px-5 py-2.5 font-semibold uppercase hover:border-primaryDark"
						>
							<span className="absolute left-0 top-0 mb-0 flex h-0 w-full translate-y-0 transform bg-accentYellow opacity-90 transition-all duration-500 ease-out group-hover:h-full"></span>
							<span className="relative group-hover:text-white">
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
