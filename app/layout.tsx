import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import getCurrentUser from './actions/getCurrentUser';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

const gill = localFont({
	src: [
		{
			path: '../public/fonts/GillSansNova-Book.ttf',
			weight: '400',
		},
		{
			path: '../public/fonts/GillSansNovaMedium.ttf',
			weight: '500',
		},
	],
	variable: '--font-gill',
});

export const metadata = {
	title: 'Gabi Pães & Cia',
	description: 'Gabi Pães e Compania',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang="en">
			<body className={gill.className} suppressHydrationWarning={true}>
				<div className="min-h-screen w-full bg-primary ">
					<ToasterProvider />
					<LoginModal />
					<RegisterModal />
					<Navbar currentUser={currentUser} />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
