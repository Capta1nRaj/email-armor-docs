import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import Image from 'next/image';

const socialLinks = [
    {
        name: 'X (Twitter)',
        url: 'https://x.com/capta1ncodes',
        icon: 'https://img.icons8.com/?size=20&id=6Fsj3rv2DCmG&format=png&color=000000',
        className: 'invert'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@capta1ncodes',
        icon: 'https://img.icons8.com/?size=20&id=19318&format=png&color=000000'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/Capta1nRaj',
        icon: 'https://img.icons8.com/?size=20&id=12599&format=png&color=000000',
        className: 'invert'
    },
    {
        name: 'Medium',
        url: 'https://medium.com/@priyalraj',
        icon: 'https://img.icons8.com/?size=20&id=GCFsv1L11D1z&format=png&color=000000',
        className: 'invert'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/priyalraj99',
        icon: 'https://img.icons8.com/?size=20&id=13930&format=png&color=000000'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/capta1ncodes',
        icon: 'https://img.icons8.com/?size=20&id=32323&format=png&color=000000'
    },
    {
        name: 'Portfolio',
        url: 'https://priyalraj.com',
        icon: 'https://raw.githubusercontent.com/Capta1nRaj/portfolio-website/main/public/favicon/android-icon-36x36.png'
    },
    {
        name: 'My SaaS',
        url: 'https://shavelinks.com',
        icon: 'https://raw.githubusercontent.com/Capta1nRaj/shave-link-shorten/main/public/favicon/android-icon-36x36.png'
    },
];

export const baseOptions: HomeLayoutProps = {
    nav: {
        title: (
            <Image
                width={40}
                height={40}
                className="max-w-10 w-auto h-auto"
                src="https://raw.githubusercontent.com/Capta1nRaj/email-armor-demo/master/public/favicon/android-icon-72x72.png"
                alt="Email Armor"
                unoptimized
            />
        ),
    },
    links: [
        // {
        //     text: 'v1.0',
        //     url: '/docs',
        //     active: 'nested-url',
        // },
        ...socialLinks.map((link) => ({
            text: (
                <>
                    <Image width={20} height={20} className={`max-w-5 w-auto h-auto ${link.className || ''}`} src={link.icon} alt={link.name} />
                    <span> {link.name} </span>
                </>
            ),
            url: link.url,
        })),
    ],
};