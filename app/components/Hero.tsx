import { hero_image, instagram3 } from '@/public/assets';
import Image from 'next/image';

const Hero = () => {
	return (
		<section
			id="home"
			className="relative flex min-h-screen justify-center bg-primary"
		>
			<div className="mt-[8vh] flex w-full items-start justify-center">
				<div className="top-0 flex justify-center">
					<div className="relative flex flex-col items-center justify-center gap-8">
						<div className="absolute top-28 z-20 text-center sm:top-36 md:-left-[14rem] md:text-start">
							<div className=" mb-4 h-0.5 w-[50%] bg-primaryDark"></div>

							<h2 className="text-xl font-medium uppercase tracking-wider text-primary sm:text-xl md:text-3xl md:text-accentYellow">
								Bem-vindo à
							</h2>
							<h2 className="text-6xl font-bold uppercase tracking-wider text-primary sm:text-7xl md:text-darkGray">
								Gabi Pães
							</h2>
							<h2 className="text-6xl font-bold uppercase tracking-wider  text-primary sm:text-7xl md:text-end  md:text-darkGray">
								e Cia
							</h2>
							<div className="ml-auto mt-4 h-0.5 w-[50%] bg-primaryDark md:bg-darkGray"></div>
						</div>
						<Image
							src={instagram3}
							alt="desenho"
							className="h-[65vh] w-full bg-primaryDark object-cover"
						></Image>

						<div className=" -right-[15rem] bottom-0 flex w-[80vw] flex-col items-center gap-8 text-center md:absolute md:w-[25ch] md:items-start md:text-start">
							<p className="text-base font-medium leading-none text-darkGray  sm:text-lg">
								Distribuidora especializada na oferta de pães, bolos, massas de
								pizza e salgados de alta qualidade, com destaque para nossa
								seção exclusiva de produtos levain.
							</p>

							<button className="mb-6 text-start">
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
