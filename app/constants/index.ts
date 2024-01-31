import {
	bburger,
	bolomilho,
	bulldog,
	bunker,
	burgernow,
	camaradas,
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
	massa_pizza,
	produto1,
	produto1h,
	produto2,
	produto2h,
	produto3,
	produto3h,
	produto4,
	produto4h,
	salgado_folhado,
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
		id: 'produtos',
		title: 'Produtos',
		href: '/produtos',
	},
	{
		id: 'loja',
		title: 'Loja Levain',
		href: '/loja',
	},
	{
		id: 'empresa',
		title: 'Empresa',
		href: '/empresa',
	},
	{
		id: 'info',
		title: 'Onde estamos',
		href: '/#info',
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
		title: 'Pão de Hamburger Tradicional',
		price: '1,20/un',
	},
	{
		id: 2,
		img: produto2,
		imgHover: produto2h,
		title: 'Pão de Hamburger Brioche',
		price: '1,10/un',
	},
	{
		id: 3,
		img: produto2,
		imgHover: produto2h,
		title: 'Pão de Hambúrger Gourmet',
		price: '1,10/un',
	},
	{
		id: 4,
		img: produto3,
		imgHover: produto3h,
		title: 'Pão de Hambúrger de Beterraba',
		price: '1,80/un',
	},
	{
		id: 5,
		img: produto3,
		imgHover: produto3h,
		title: 'Pão de Hambúrger de Batata',
		price: '1,80/un',
	},
	{
		id: 6,
		img: produto3,
		imgHover: produto3h,
		title: 'Pão de Hambúrger Australiano',
		price: '1,80/un',
	},
	{
		id: 7,
		img: produto3,
		imgHover: produto3h,
		title: 'Pão de Hambúrger Australiano Black',
		price: '1,80/un',
	},
	{
		id: 8,
		img: produto4,
		imgHover: produto4h,
		title: 'Pão de HotDog',
		price: '1,00/un',
	},
	{
		id: 9,
		img: produto4,
		imgHover: produto4h,
		title: 'Pão de HotDog',
		price: '1,00/un',
	},
	{
		id: 6,
		img: produto4,
		imgHover: produto4h,
		title: 'Pão de HotDog',
		price: '1,00/un',
	},
	{
		id: 7,
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
		title: 'Pães',
		url: 'https://gabipaes.s3.sa-east-1.amazonaws.com/imagens/main/hamburger.jpg'
	},
	{
		id: 'salgados',
		productImg: salgado_folhado,
		title: 'Salgados',
		url: 'https://gabipaes.s3.sa-east-1.amazonaws.com/imagens/main/salgado_folhado.jpg'
	},
	{
		id: 'bolos',
		productImg: dessert,
		title: 'Bolos',
		url: 'https://gabipaes.s3.sa-east-1.amazonaws.com/imagens/main/mini_bolo.jpg'
	},
	{
		id: 'pizza',
		productImg: massa_pizza,
		title: 'Massa de Pizza',
		url: 'https://gabipaes.s3.sa-east-1.amazonaws.com/imagens/main/massa_pizza.jpg'
	},
];
