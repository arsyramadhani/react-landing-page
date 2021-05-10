import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Content from '../components/Content';
import Feature from '../components/Feature';

const Home = () => {
    return (
        <div>
            <Banner />
            <Feature />
            <Content
                title='Promotion'
                subtitle='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam'
                primary>
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
            <Content
                title='Story For You'
                subtitle='avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences'>
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
            <div>Test</div>
        </div>
    );
};

export default Home;
