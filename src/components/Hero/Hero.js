import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/bg.jpeg" />
			<Container>
				<MainHeading>Gran Ultimate - Saint Seiya RPG</MainHeading>
				<HeroText>
					Um RPG narrativo sobre seu universo favorito dos animes!
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Registrar-se</Button>
					</Link>
					<HeroButton>Ver mais</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;