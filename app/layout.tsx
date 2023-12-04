import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import { Roboto } from 'next/font/google';
import CartModal from './components/modals/CartModal';

import localFont from 'next/font/local';
import getCurrentUser from './actions/getCurrentUser';
import Footer from './components/Footer';
import { MobileNav } from './components/navbar/MobileNav';
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

export const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
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
					<CartModal />
					<LoginModal />
					<RegisterModal />
					<MobileNav />
					<Navbar currentUser={currentUser} />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
