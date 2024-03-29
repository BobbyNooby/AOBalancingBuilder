import { getData } from '../dataManager';

const hullEnchantsData = [
	{
		id: 0,
		name: 'None',
		legend: 'Nothing Lol',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'None',
		rarityColor: '#FFFFFF',
		imageId: 'https://i.imgur.com/PzIWvMv.jpg'
	},

	{
		id: 1,
		name: 'Armored',
		legend: 'An enchant that gives +3000 points of Durability and +900 Ram Defense.',
		durability: 3000,
		magicStorage: 0,
		ramDefense: 900,
		ramStrength: 0,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/XAMemmw.jpg'
	},

	{
		id: 2,
		name: 'Brisk',
		legend: 'An enchant that gives +7 points of Speed and +15 points of Turning.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 7,
		stability: 0,
		turning: 15,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/sof2TFZ.jpg'
	},

	{
		id: 3,
		name: 'Hard',
		legend: 'An enchant that gives +300 points of Durability and +100 points of Ram Defense.',
		durability: 300,
		magicStorage: 0,
		ramDefense: 100,
		ramStrength: 0,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/AHP8sbj.jpg'
	},

	{
		id: 4,
		name: 'Strong',
		legend: 'An enchant that gives +10% of Stability and +300 points of Ram Strength.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 300,
		resilience: 0,
		speed: 0,
		stability: 10,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/EqHjqkx.jpg'
	},

	{
		id: 5,
		name: 'Powerful',
		legend: 'An enchant that gives +20% of Stability and +900 points of Ram Strength',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 900,
		resilience: 0,
		speed: 0,
		stability: 20,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/tYJZ0qq.jpg'
	},

	{
		id: 6,
		name: 'Swift',
		legend: 'An enchant that gives +5 points of Speed and +10 points of Turning.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 5,
		stability: 0,
		turning: 10,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/4TG9sWt.jpg'
	},

	{
		id: 7,
		name: 'Warship',
		legend: 'An enchant that gives a variety of stats at the cost of others.',
		durability: 4000,
		magicStorage: 0,
		ramDefense: 900,
		ramStrength: 450,
		resilience: 0,
		speed: -7,
		stability: 20,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Hull Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/5Aj6uZ1.jpg'
	}
];

export const hullEnchants = getData(hullEnchantsData);
