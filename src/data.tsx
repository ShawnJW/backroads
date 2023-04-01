import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'}
];

export const socialLinks = [
    {id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
    {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
    {id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace'}
];

export const services = [
    {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'}
];

export const tours = [
    {id: 1, img: tour1, date: 'august 26th, 2020', location: 'china', days: '6 days', price: 'from $2100', title: 'tibet adventure', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'},
    {id: 2, img: tour2, date: 'october 1th, 2020', location: 'indonesia', days: '11 days', price: 'from $1400', title: 'best of java', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'},
    {id: 3, img: tour3, date: 'december 15th, 2020', location: 'australia', days: '7 days', price: 'from $3000', title: 'uluru adventure', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'},
    {id: 4, img: tour4, date: 'september 15th, 2020', location: 'canada', days: '5 days', price: 'from $1800', title: 'banff national park', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.'},
    ];
