import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Content from '../components/Content';
import Feature from '../components/Feature';
import Head from 'next/head';
const promotions = [
    {
        img: '/images/jean-beller-4bKHw0n24hk-unsplash.jpg',
        title: 'Lorem Ipsum',
        description: 'sdak llakdslakdskldskdlsadkls laskldsaskld',
    },
    {
        img: '/images/jakob-rosen-Nu6rvCl8h5w-unsplash.jpg',
        title: 'Lorem Ipsum',
        description: 'sdak llakdslakdskldskdlsadkls laskldsaskld',
    },
    {
        img: '/images/patrick-perkins-C07TpEdjD44-unsplash.jpg',
        title: 'Lorem Ipsum',
        description: 'sdak llakdslakdskldskdlsadkls laskldsaskld',
    },
    {
        img: '/images/samuel-regan-asante-tbP2eTswBpo-unsplash.jpg',
        title: 'Lorem Ipsum',
        description: 'sdak llakdslakdskldskdlsadkls laskldsaskld',
    },
];

const Home = () => {
    return (
        <div>
            <Head>
                <title>The Banks</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <Banner />
            <Feature />
            <Content
                title='Promotion'
                subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'
                primary
                more>
                {promotions.map(el => (
                    <Card
                        img={el.img}
                        title={el.title}
                        description={el.description}
                    />
                ))}
            </Content>
            <Content
                title='Story For You'
                subtitle='avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences'>
                {promotions.map(el => (
                    <Card
                        img={el.img}
                        title={el.title}
                        description={el.description}
                    />
                ))}
            </Content>
            <div>Test</div>
        </div>
    );
};

export default Home;
