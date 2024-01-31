import { hero_image, instagram3 } from '@/public/assets';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
	return (
		<section id="home" className="relative flex min-h-screen bg-primary">
			<div className="flex">
				<div className="flex w-full justify-between gap-16 ">
					<div className="absolute mt-16 flex w-1/2 flex-col sm:relative  ">
						<div>
							<h2 className="text-xl font-medium uppercase tracking-wider text-primary sm:text-xl md:text-4xl md:text-accentYellow">
								Bem-vindo à
							</h2>
							<h2 className="text-6xl font-bold uppercase tracking-wider text-primary sm:text-8xl md:text-darkGray">
								Gabi Pães
							</h2>
							<h2 className="text-6xl font-bold uppercase tracking-wider  text-primary sm:text-8xl  md:text-darkGray">
								e Cia
							</h2>
						</div>

						<div className="-right-[15rem] bottom-0 mt-10 flex w-[80vw] flex-col items-center gap-8  text-center md:w-[40ch] md:items-start md:text-start">
							<p className="text-base font-medium text-darkGray ">
								Distribuidora especializada na oferta de pães, bolos, massas de
								pizza e salgados de alta qualidade, com destaque para nossa
								seção exclusiva de produtos levain.
							</p>

							<Button variant="accentRed" size="lg">
								Pedir Online
							</Button>
						</div>
					</div>
					<div className="-mr-20 flex w-1/2">
						<Image
							src={instagram3}
							alt="hero_image"
							className="h-[85vh] w-[100vw] object-cover brightness-90"
						></Image>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
