import Clients from './components/Clients';
import CompanyInfo from './components/CompanyInfo';
import Hero from './components/Hero';
import Products from './components/Products';
import Container from './components/Container';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-primary ">
			<Container>
				<Hero />
				<Products />
				<Clients />
				<CompanyInfo />
			</Container>
		</main>
	);
}
