const Hero = () => {
	return (
		<section
			id="home"
			className="relative flex max-w-[2520px] gap-x-10 bg-primary px-4 sm:px-2 md:px-10 xl:px-20"
		>
			<div className="mt-10 flex justify-between gap-12">
				{/* <div className="">
          <video
            autoPlay
            muted
            loop
            src="/gabi-video.mp4"
            className="w-[40vh] rounded-lg"
          ></video>
        </div> */}
				<div className="grow">
					<h2 className="font-medium text-sm sm:text-md md:text-lg mb-6 tracking-wider  uppercase text-accentYellow">
						Bem-vindo à Gabi Pães e Cia
					</h2>
					<h1 className="text-[36px] md:text-[68px] tracking-wide leading-none uppercase font-bold mb-8 text-darkGray">
						Ingrediente especial.
					</h1>
					<h1 className="text-[36px] md:text-[68px] tracking-wide leading-none uppercase font-bold mb-8 text-darkGray">
						Sabor Artesanal.
					</h1>
					<p className="font-roboto text-[14px] sm:text-[15px] md:text-[17px]">
						Qualidade para oferecer aos nossos clientes produtos inovadores que
						satisfaçam planamente as suas exigências. Temos uma grande variedade
						de produtos para atender se negócio.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
