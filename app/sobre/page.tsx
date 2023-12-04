import { sobre } from '@/public/assets';
import Image from 'next/image';
import React from 'react';
import Container from '../components/Container';

const About = () => {
	return (
		<Container>
			<div className="g-8 flex">
				<Image
					src={sobre}
					height={600}
					alt="Empresa"
					className="brightness-50"
				></Image>
				<div>Title</div>
			</div>
		</Container>
	);
};

export default About;
