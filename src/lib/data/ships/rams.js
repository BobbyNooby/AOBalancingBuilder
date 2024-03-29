import { getData } from '../dataManager';

export const ramData = [
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
		mainType: 'Ram',
		subType: 'None',
		rarity: 'None',
		rarityColor: '#FFFFFF',
		imageId: 'https://i.imgur.com/kHxxwYh.jpg'
	},
	{
		id: 1,
		name: 'Hammerhead Ram',
		legend:
			'A spiked hammer-shaped ram designed to split apart the hulls of opposing ships, providing a fair amount of durability and strength.',
		durability: 600,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 2086,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 120,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/Y4I6gLt.jpg'
	},
	{
		id: 2,
		name: 'Lesser Acid Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct acid magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1271,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/Agga6i4.jpg'
	},
	{
		id: 3,
		name: 'Lesser Arcanium Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct some magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1870,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/e3bOHXY.jpg'
	},
	{
		id: 4,
		name: 'Lesser Ash Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct ash magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1256,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/IlCdGij.jpg'
	},
	{
		id: 5,
		name: 'Lesser Crystal Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct crystal magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1256,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/RHYjEtX.jpg'
	},
	{
		id: 6,
		name: 'Lesser Earth Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct earth magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1944,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/MCn9ebH.jpg'
	},
	{
		id: 7,
		name: 'Lesser Explosion Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct explosion magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1301,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/EYY3Dm0.jpg'
	},
	{
		id: 8,
		name: 'Lesser Fire Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct fire magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1241,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/FgxbzJT.jpg'
	},
	{
		id: 9,
		name: 'Lesser Glass Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct glass magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1271,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/cOZJie6.jpg'
	},
	{
		id: 10,
		name: 'Lesser Ice Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct ice magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1316,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/gLEs0NM.jpg'
	},
	{
		id: 11,
		name: 'Lesser Light Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct light magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1256,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/uibsRad.jpg'
	},
	{
		id: 12,
		name: 'Lesser Lightning Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct lightning magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1271,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/i7AF1Ih.jpg'
	},
	{
		id: 13,
		name: 'Lesser Magma Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct magma magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1286,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/8Mmp5aM.jpg'
	},
	{
		id: 14,
		name: 'Lesser Metal Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct metal magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 2004,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/uTqzrpJ.jpg'
	},
	{
		id: 15,
		name: 'Lesser Plasma Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct plasma magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1226,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/jFMUwlN.jpg'
	},
	{
		id: 16,
		name: 'Lesser Poison Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct poison magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1196,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/TJcUqNZ.jpg'
	},
	{
		id: 17,
		name: 'Lesser Sand Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct sand magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1331,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/cJIiRMh.jpg'
	},
	{
		id: 18,
		name: 'Lesser Shadow Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct shadow magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1316,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/yjGhc7F.jpg'
	},
	{
		id: 19,
		name: 'Lesser Snow Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct snow magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1301,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/gDkthCh.jpg'
	},
	{
		id: 20,
		name: 'Lesser Water Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct water magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1301,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/9WrLqCy.jpg'
	},
	{
		id: 21,
		name: 'Lesser Wind Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct wind magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1271,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/UUiycMs.jpg'
	},
	{
		id: 22,
		name: 'Lesser Wood Ram',
		legend:
			'A basic ram made out of lesser arcanium metal, forged to conduct wood magic. When activating Ramming Speed with this equipped, it will overflow with magic energy collected from the sea and release it all on contact, creating an explosion of magic energy.',
		durability: 225,
		magicStorage: 360,
		ramDefense: 103,
		ramStrength: 1316,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 90,
		mainType: 'Ram',
		subType: 'None',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/Xjlluxb.jpg'
	}
];

export const rams = getData(ramData);
