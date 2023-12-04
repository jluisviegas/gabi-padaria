import {
	bburger,
	bolomilho,
	bulldog,
	bunker,
	burgernow,
	camaradas,
	casaburger,
	cave,
	dessert,
	fest,
	hamburger,
	hotdog,
	instagram1,
	instagram2,
	instagram3,
	instagram4,
	instagram5,
	instagram6,
	lalio,
	produto1,
	produto1h,
	produto2,
	produto2h,
	produto3,
	produto3h,
	produto4,
	produto4h,
	smoke,
} from '@/public/assets';

export const clients = [
	{
		id: 'bburger',
		img: bburger,
		name: 'bburger',
	},
	{
		id: 'bulldog',
		img: bulldog,
		name: 'bulldog burger',
	},

	{
		id: 'lalio',
		img: lalio,
		name: 'Lalio',
	},
	{
		id: 'bunker',
		img: bunker,
		name: 'Bunker',
	},
	{
		id: 'fest',
		img: fest,
		name: 'Fest Lanches',
	},
	{
		id: 'smoke',
		img: smoke,
		name: 'Smoke',
	},
	{
		id: 'cave',
		img: cave,
		name: 'Cave Burger',
	},
	{
		id: 'burgernow',
		img: burgernow,
		name: 'burger Now',
	},
];

export const instagramFeed = [
	{
		id: 'instagram1',
		img: instagram1,
		url: 'https://www.instagram.com/p/CgxE7D3j68u/?utm_source=ig_web_copy_link',
	},
	{
		id: 'instagram2',
		img: instagram2,
		url: 'https://www.instagram.com/p/Cd8nyFfM-To/?utm_source=ig_web_copy_link',
	},
	{
		id: 'instagram3',
		img: instagram3,
		url: 'https://www.instagram.com/p/Cf7Acq1MaW_/?utm_source=ig_web_copy_link',
	},
	{
		id: 'instagram4',
		img: instagram4,
		url: 'https://www.instagram.com/p/CePCxrFs-Af/?utm_source=ig_web_copy_link',
	},
	{
		id: 'instagram5',
		img: instagram5,
		url: 'https://www.instagram.com/p/Cg9983drdDl/?utm_source=ig_web_copy_link',
	},
	{
		id: 'instagram6',
		img: instagram6,
		url: 'https://www.instagram.com/p/CgZ2Q9oMtxr/?utm_source=ig_web_copy_link',
	},
];

export const navLinks = [
	{
		id: 'loja',
		title: 'Loja Online',
		href: '/loja',
	},
	{
		id: 'empresa',
		title: 'Empresa',
		href: '/sobre',
	},
	{
		id: 'info',
		title: 'Onde estamos',
		href: '#info',
	},
];

export const navProducts = [
	{
		id: 1,
		title: 'Pães',
	},
	{
		id: 2,
		title: 'Bolos',
	},
	{
		id: 3,
		title: 'Pizzas',
	},
	{
		id: 4,
		title: 'Salgados',
	},
	{
		id: 5,
		title: 'Todos os produtos',
	},
];

export const productsList = [
	{
		id: 1,
		img: produto1,
		imgHover: produto1h,
		title: 'Pão de Hamburger',
		price: '1,20/un',
	},
	{
		id: 2,
		img: produto2,
		imgHover: produto2h,
		title: 'Pão de Hamburger Simples',
		price: '1,10/un',
	},
	{
		id: 3,
		img: produto3,
		imgHover: produto3h,
		title: 'Pão de Beterraba',
		price: '1,80/un',
	},
	{
		id: 4,
		img: produto4,
		imgHover: produto4h,
		title: 'Pão de HotDog',
		price: '1,00/un',
	},
];

export const productsTypes = [
	{
		id: 'burger',
		productImg: hamburger,
		title: 'Hamburger',
	},
	{
		id: 'hotdog',
		productImg: hotdog,
		title: 'Hotdog',
	},
	{
		id: 'cake',
		productImg: bolomilho,
		title: 'Bolos',
	},
	{
		id: 'dessert',
		productImg: dessert,
		title: 'Doces',
	},
];
