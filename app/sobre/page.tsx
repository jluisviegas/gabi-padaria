import { nossahistoria } from '@/public/assets';
import Image from 'next/image';
import React from 'react';
import Container from '../components/Container';

const About = () => {
	return (
		<Container>
			<div className="flex flex-col py-6 md:flex-row">
				<Image
					src={nossahistoria}
					alt="Empresa"
					sizes="70vw"
					style={{
						width: '100%',
						height: 'auto',
					}}
					width={500}
					height={200}
				></Image>
				<div className="flex flex-col gap-8 py-6 md:px-8">
					<h1 className="text-2xl font-semibold uppercase xs:text-4xl sm:text-7xl ">
						Nossa História
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi
						accusamus aperiam magni, nihil sint pariatur suscipit quas impedit.
						Natus quae tempora architecto beatae nihil voluptates nesciunt
						molestiae provident a doloremque impedit placeat excepturi incidunt
						eveniet explicabo ipsa, porro fuga maxime omnis possimus ducimus!
						Dolores veritatis eaque quae dolorem eum fuga. Expedita eligendi
						unde, porro tempore quo deleniti, aliquid obcaecati odit aut omnis
						fugit magni voluptatum officiis dolorem eius ab quod. Recusandae a
						sequi unde numquam quisquam inventore, voluptatum illum esse dolorum
						reprehenderit, omnis libero laudantium. Impedit repellendus aliquid
						quidem natus veniam? Magnam beatae obcaecati nostrum quibusdam,
						possimus delectus quas.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo animi
						accusamus aperiam magni, nihil sint pariatur suscipit quas impedit.
						Natus quae tempora architecto beatae nihil voluptates nesciunt
						molestiae provident a doloremque impedit placeat excepturi incidunt
						eveniet explicabo ipsa, porro fuga maxime omnis possimus ducimus!
						Dolores veritatis eaque quae dolorem eum fuga. Expedita eligendi
						unde, porro tempore quo deleniti, aliquid obcaecati odit aut omnis
						fugit magni voluptatum officiis dolorem eius ab quod. Recusandae a
						sequi unde numquam quisquam inventore, voluptatum illum esse dolorum
						reprehenderit, omnis libero laudantium. Impedit repellendus aliquid
						quidem natus veniam? Magnam beatae obcaecati nostrum quibusdam,
						possimus delectus quas.
					</p>
				</div>
			</div>
		</Container>
	);
};

export default About;
