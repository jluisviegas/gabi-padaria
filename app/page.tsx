import Clients from './components/Clients';
import CompanyInfo from './components/CompanyInfo';
import Container from './components/Container';
import Hero from './components/Hero';
import Levain from './components/Levain';
import Products from './components/Products';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-primary">
			<Container>
				<Hero />
			</Container>
			<Clients />
			<Container>
				<Products />
				<Levain />
				<CompanyInfo />
			</Container>
		</main>
	);
}
