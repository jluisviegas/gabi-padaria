import Clients from './components/Clients';
import CompanyInfo from './components/CompanyInfo';
import Container from './components/Container';
import Hero from './components/Hero';
import Products from './components/Products';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-primary">
			<Container>
				<Hero />
				<Products />
				<Clients />
				<CompanyInfo />
			</Container>
		</main>
	);
}
