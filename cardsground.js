// Card details
let cards = [
  // Dread spot cards
  {
    id: 1,
    name: "Dread Castle",
    type: "Castle",
    description: "A dread fortress, built by the maleficent ancient warlocks to defile the approaching weak souls. Once touched by rune forces, the sense of humanity ends, acquiring corrupted power and mystical insights.",
    area: NaN,
    capacity: 12,
    cost: NaN,
    attack: NaN,
    defense: 30,
    color: "purple",
    img: "url('assets/castledread.jpg')",
  },
  {
    id: 11,
    name: "Dread Spot",
    type: "Ground",
    description: "The spooky ancient place of unholy sacrifices. Warlock masters with mana runes fought the lightforged enemy shields, smiting and purging them to the oblivium.",
    area: 4,
    capacity: 3,
    cost: 0,
    attack: NaN,
    defense: 6,
    color: "purple",
    img: "url('assets/dreadspot1.jpg')",
  },
  {
    id: 12,
    name: "Dread Spot",
    type: "Ground",
    description: "The mists of forsaken souls chase away the light, making the terrain even darker and more gloomy, cornering fire mages with their treacherous tongues, corrupting even the most devout of light.",
    area: 6,
    capacity: 2,
    cost: 0,
    attack: NaN,
    defense: 4,
    color: "purple",
    img: "url('assets/dreadspot2.jpg')",
  },
  {
    id: 13,
    name: "Warlock",
    type: "Brave",
    description: "A vicious warrior that invokes fallen spirits and hits the enemy with their imbued runic punches. The melee attacks cause deep agony and suffering, drilling the flesh and empoisoning it.",
    area: NaN,
    capacity: NaN,
    cost: 2,
    attack: 4,
    defense: 5,
    color: "purple",
    img: "url('assets/warlockdread1.jpg')",
  },
  {
    id: 14,
    name: "Chilling Warlock",
    type: "Brave",
    description: "Chilling warlocks summon demonic energy blasts that stun the most powerful warriors. The dread greenish plasma energy is capable to smash armors and shields with only one hitting.",
    area: NaN,
    capacity: NaN,
    cost: 4,
    attack: 5,
    defense: 4,
    color: "purple",
    img: "url('assets/warlockdread2.jpg')",
  },
  {
    id: 15,
    name: "Stone Witcher",
    type: "Brave",
    description: "The shadow arrows hit the enemies turning them to stone, and making their movements difficult. They are considered the most maleficent rangers of Dread Spot.",
    area: NaN,
    capacity: NaN,
    cost: 2,
    attack: 3,
    defense: 4,
    color: "purple",
    img: "url('assets/witcherdread1.jpg')",
  },
  {
    id: 16,
    name: "Witcher",
    type: "Brave",
    description: "In its shade disguise form, the witcher ambushes behind the enemies, taking them with off guard and totally unprepared.",
    area: NaN,
    capacity: NaN,
    cost: 3,
    attack: 3,
    defense: 4,
    color: "purple",
    img: "url('assets/witcherdread2.jpg')",
  },
  // Holy ground cards
  {
    id: 2,
    name: "Holy Fortress",
    type: "Castle",
    description: "The holy elder's power imbues the rocky building and protects everyone that inhabits the Holy Fortress surroundings. This is the dream place for prospering and growing strong.",
    area: NaN,
    capacity: 12,
    cost: NaN,
    attack: NaN,
    defense: 30,
    color: "darkgreen",
    img: "url('assets/castleholy.jpg')",
  },
  {
    id: 21,
    name: "Holy Ground",
    type: "Ground",
    description: "The arcane light brights over the paladins whom wield their swords. This is a place of glory and catharsis after the war and it purifies the soldier spirits.",
    area: 5,
    capacity: 3,
    cost: 0,
    attack: NaN,
    defense: 5,
    color: "darkgreen",
    img: "url('assets/holyground1.jpg')",
  },
  {
    id: 22,
    name: "Holy Ground",
    type: "Ground",
    description: "The lightforged shields tinkle across the holy pathway between the ancient empowered rune trees. Light warriors roar bravely with their restored souls in face of battle.",
    area: 5,
    capacity: 5,
    cost: 0,
    attack: NaN,
    defense: 3,
    color: "darkgreen",
    img: "url('assets/holyground2.jpg')",
  },
  {
    id: 23,
    name: "Warrior",
    type: "Brave",
    description: "The warriors are trained to bravely kill their enemies with maces, swords, axes or anything else they can wield. The warfare is a constant in their lives, making their souls always alert.",
    area: NaN,
    capacity: NaN,
    cost: 2,
    attack: 2,
    defense: 4,
    color: "darkgreen",
    img: "url('assets/warriorholy1.jpg')",
  },
  {
    id: 24,
    name: "Holy Warrior",
    type: "Brave",
    description: "The holy warriors have empowered armors of light that overshadow the path where they tread and confunsing the enemies sights.",
    area: NaN,
    capacity: NaN,
    cost: 3,
    attack: 3,
    defense: 5,
    color: "darkgreen",
    img: "url('assets/warriorholy2.jpg')",
  },
  {
    id: 25,
    name: "Holy Hunter",
    type: "Brave",
    description: "Holy hunters are the masters of the archery. They chase and shoot the target quickly as a lightning bolt, neutralize the threat.",
    area: NaN,
    capacity: NaN,
    cost: 2,
    attack: 2,
    defense: 3,
    color: "darkgreen",
    img: "url('assets/hunterholy1.jpg')",
  },
  {
    id: 26,
    name: "Wild Hunter",
    type: "Brave",
    description: "The wild hunters tame beasts and use them against the enemies, distracting and hitting them with fire arrows that drill everything along the way.",
    area: NaN,
    capacity: NaN,
    cost: 1,
    attack: 1,
    defense: 5,
    color: "darkgreen",
    img: "url('assets/hunterholy2.jpg')",
  },
  // Bloody gorge cards
  {
    id: 3,
    name: "Château Rouge",
    type: "Castle",
    description: "Chateau of the thousand sacrifices, the house of immolation. Demons and night creatures have haunted this place, dazing and confusing the lost souls that approach the hefty structure.",
    area: NaN,
    capacity: 12,
    cost: NaN,
    attack: NaN,
    defense: 30,
    color: "darkred",
    img: "url('assets/castlebloody.jpg')",
  },
  {
    id: 31,
    name: "Bloody Gorge",
    type: "Ground",
    description: "The ground was not always covered in blood, yet the gore celebrations were practiced by the insane veterans that stayed aimless wandering. Now these grounds desecrate souls and urge them on with vampiric powers.",
    area: 4,
    capacity: 2,
    cost: 0,
    attack: NaN,
    defense: 6,
    color: "darkred",
    img: "url('assets/bloodygorge1.jpg')",
  },
  {
    id: 32,
    name: "Bloody Gorge",
    type: "Ground",
    description: "The bloody moon is even more red when reflecting the imbued vampiric mana ground, becoming the power-well for the forgotten underground creatures.",
    area: 5,
    capacity: 4,
    cost: 0,
    attack: NaN,
    defense: 3,
    color: "darkred",
    img: "url('assets/bloodygorge2.jpg')",
  },
  {
    id: 33,
    name: "Blood Berserker",
    type: "Brave",
    description: "A giant familiar demon guides and advises the blood berserker against the enemies. The blood berserker overwhelms everything ahead with the long sword, obliterating even the best forged armors.",
    area: NaN,
    capacity: NaN,
    cost: 2,
    attack: 3,
    defense: 4,
    color: "darkred",
    img: "url('assets/berserkerbloody1.jpg')",
  },
  {
    id: 34,
    name: "Demon Berserker",
    type: "Brave",
    description: "Demon berserker is the terror of warfares. Long bloody and fiery wings exempt weapons. It's hard hitting this berserker even when injured.",
    area: NaN,
    capacity: NaN,
    cost: 4,
    attack: 2,
    defense: 6,
    color: "darkred",
    img: "url('assets/berserkerbloody2.jpg')",
  },
  {
    id: 35,
    name: "Rogue",
    type: "Brave",
    description: "Rogues come out of nowhere, stabbing behind the enemy with poisoned daggers and venomous blades. If the enemy doesn't die instantly he succumbs in agony.",
    area: NaN,
    capacity: NaN,
    cost: 1,
    attack: 3,
    defense: 3,
    color: "darkred",
    img: "url('assets/roguebloody1.jpg')",
  },
  {
    id: 36,
    name: "Dark Rogue",
    type: "Brave",
    description: "Dark rogues stealthy walk within the enemies shadows, easily passing the front and cutting throats before their warcries. Assassination is part of their art.",
    area: NaN,
    capacity: NaN,
    cost: 2,
    attack: 4,
    defense: 4,
    color: "darkred",
    img: "url('assets/roguebloody2.jpg')",
  },
]