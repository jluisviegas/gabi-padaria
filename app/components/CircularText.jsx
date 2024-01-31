'use client';

import Image from 'next/image';
import ReactCurvedText from 'react-curved-text';
import { logoshape } from '../../public/assets';

const CircularText = () => {
	return (
		<div className="relative mx-auto ">
			<Image
				src={logoshape}
				alt="logo_shape"
				width={100}
				height={100}
				className="absolute bottom-0 top-0 m-auto"
			/>
			<ReactCurvedText
				width={300}
				height={300}
				cx={150}
				cy={150}
				rx={100}
				ry={100}
				startOffset={0}
				reversed={false}
				text="DELIVERY PARA TODA SAO LUIS • DO FORNO PARA SUA MESA •"
				textProps={{ style: { fontSize: 22 } }}
				textPathProps={null}
				tspanProps={{ dy: 30 }}
				ellipseProps={null}
				svgProps={{ className: 'rotating-curved-text' }}
			/>
		</div>
	);
};

export default CircularText;
