import React from 'react';
import Hero from '../components/Hero/Hero';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
		</>
	);
};

export default Home;