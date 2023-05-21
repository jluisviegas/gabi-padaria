import Image from 'next/image';
import Hero from './components/Hero';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-primary p-24">
			<Hero />
		</main>
	);
}
