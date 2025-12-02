import Article01 from "../assets/images/image-retro-pcs.jpg";
import Article02 from "../assets/images/image-top-laptops.jpg";
import Article03 from "../assets/images/image-gaming-growth.jpg";

interface Article {
    number: string;
    title: string;
    description: string;
    img: ImageMetadata;
    content: string;
    slug: string;
}

export const articles: Article[] = [
{
        number: '01',
        title: 'Reviving Retro PCs',
        description: 'What happens when old PCs are given modern upgrades?',
        img: Article01,
        content: 'A detailed look at how classic computers can gain new life through modern components and tweaks.',
        slug: 'reviving-retro-pcs'
    },
    {
        number: '02',
        title: 'Top 10 Laptops of 2022',
        description: 'Our best picks for various needs and budgets.',
        img: Article02,
        content: 'A curated list comparing performance, portability, and value across today’s most popular laptops.',
        slug: 'top-10-laptops-2022'
    },
    {
        number: '03',
        title: 'The Growth of Gaming',
        description: 'How the pandemic has sparked fresh opportunities.',
        img: Article03,
        content: 'An exploration of how gaming evolved during lockdowns, driving innovation and community engagement.',
        slug: 'the-growth-of-gaming'
    },
    {
        number: '04',
        title: 'Understanding Web 3.0',
        description: 'Is the next evolution of the internet truly decentralised?',
        img: Article01,
        content: 'A breakdown of the promises, challenges, and future potential of Web 3.0 technologies.',
        slug: 'understanding-web-3'
    },
    {
        number: '05',
        title: 'Micro-Mobility on the Rise',
        description: 'Why electric scooters and bikes are reshaping cities.',
        img: Article02,
        content: 'A look at how small electric vehicles are transforming daily commuting and urban planning.',
        slug: 'micro-mobility-rise'
    },
    {
        number: '06',
        title: 'Remote Work Realities',
        description: 'What the future of work-from-home might look like.',
        img: Article03,
        content: 'Insights into trends, benefits, and long-term implications of remote work worldwide.',
        slug: 'remote-work-realities'
    }
]