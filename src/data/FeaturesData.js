import React from 'react';

import { IoIosOptions } from 'react-icons/io';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	
	{
		name: 'Fácil de jogar',
		description: 'É super simples, basta se registrar e começar a cenar no grupo ON!',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Manutenção',
		description: 'Todos os sistemas são revisados diariamente pela STAFF.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Suporte 24/7',
		description: 'Toda a administração está sempre de olho no grupo para tirar dúvidas e ajudar com problemas.',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Preço',
		description: 'Tudo no RPG é totalmente de graça! Ta esperando o que pra criar sua conta?',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	
];