import { burgernosso } from '@/public/assets';
import Image from 'next/image';
import Slider from 'react-infinite-logo-slider';

const ClientSlider = () => {
	return (
		<Slider
			width="250px"
			duration={40}
			pauseOnHover={true}
			blurBorders={false}
			blurBoderColor={'#fff'}
		>
			<Slider.Slide>
				<Image src={burgernosso} alt="any" />
			</Slider.Slide>
		</Slider>
	);
};

export default ClientSlider;
