export const data = [
	{
		title: 'Santuário',
		description:
			'O santuário é regido pela deusa Atena e seus poderosos cavaleiros. Lutem pela justiça corajosos santos!',
		image: './assets/sant.jpg',
	},
	{
		title: 'Submundo ',
		description: 'O submundo é o lar dos temíveis espectros e juízes infernais, leais servos do deus Hades.',
		image: './assets/sub.jpg',
	},
	{
		title: 'Atlântida',
		description: 'Atlântida é o reino dos destemidos Generais Marinas e seu deus: Poseidon, o senhor dos mares!',
		image: './assets/atlantida.jpg',
	},
	{
		title: 'Asgard',
		description: 'Uma terra rica, organizada pelos bravos Guerreiros Deuses a serviço de Odin, o pai de todos!',
		image: './assets/asgard.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};