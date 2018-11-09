const mySpells = 
[
  {
    "id": 1,
    "type": "Target unit",
    "ulti": false,
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "name": "Thunderbolt",
    "description": "The caster throw a bolt that will deals damages to a target stunning it for a short duration.",
    "manacost": [
      100,
      105,
      110,
      115
    ],
    "cooldown": 8,
    "params": [
      {
        "name": "Damages",
        "value": [
          90,
          140,
          190,
          240
        ]
      },
      {
        "name": "Duration",
        "value": [
          1,
          1.4,
          1.8,
          2.2
        ],
        "temp": "$$ seconds stunn."
      },
      {
        "name": "Range",
        "value": 600,
        "temp": "$$ ranges"
      },
      {
        "name": "Missile speed ",
        "value": 1100,
        "temp": "$$ ranges/s"
      }
    ]
  },
  {
    "id": 2,
    "type": "Instant",
    "ulti": false,
    "targets": [
      "enemies",
      "ground"
    ],
    "name": "War Stomp",
    "manacost": [
      90,
      100,
      110,
      120
    ],
    "cooldown": 8,
    "description": "Slams the ground, stunning and damaging nearby enemy land units.",
    "params": [
      {
        "name": "Damages",
        "value": [
          80,
          130,
          180,
          230
        ]
      },
      {
        "name": "Stunn duration",
        "value": [
          1.7,
          2,
          2.3,
          2.6
        ]
      },
      {
        "name": "Area",
        "value": 350,
        "temp": "$$ ranges"
      }
    ]
  },
  {
    "id": 3,
    "name": "Absolution",
    "type": "Target unit",
    "ulti": true,
    "targets": [
      "allies",
      "ground",
      "air"
    ],
    "description": "Create a protection on the target unit that will redirect to the caster the damages it takes during a short duration.",
    "manacost": [
      140,
      160,
      180
    ],
    "cooldown": [
      80,
      70,
      60
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          4,
          5,
          6
        ]
      },
      {
        "name": "Cast range",
        "value": 600,
        "temp": "$$ ranges"
      }
    ]
  },
  {
    "id": 4,
    "name": "Acid Spray",
    "type": "Target point",
    "ulti": false,
    "targets": [
      "enemies",
      "air",
      "ground"
    ],
    "description": "The caster throw 7 bolts of acid fluids that deals damages to enemies in the targeted area when they reaches the target locations.",
    "manacost": [
      90,
      100,
      110,
      120
    ],
    "cooldown": 12,
    "params": [
      {
        "name": "Spell Area ",
        "value": 550,
        "temp": "$$ ranges"
      },
      {
        "name": "Area Explosion",
        "value": 200,
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          30,
          40,
          50,
          60
        ],
        "temp": "$$ per bolt"
      },
      {
        "name": "Cast Range",
        "value": 750,
        "temp": "$$ ranges"
      },
      {
        "name": "Bolts Speed",
        "value": 950,
        "temp": "$$ ranges/s"
      }
    ]
  },
  {
    "id": 5,
    "name": "Ambush",
    "type": "Instant",
    "ulti": true,
    "targets": [
      "allies",
      "ground",
      "air"
    ],
    "description": "Turns allied heroes invisible during a short duration ang give to them a 15% move speed bonus. When a hero cast a spell or attack the invisibility breaks, it come back after a fade delay.",
    "manacost": [
      80,
      100,
      120
    ],
    "cooldown": [
      140,
      120,
      100
    ],
    "params": [
      {
        "name": "Duration",
        "value": 18,
        "temp": "$$ seconds"
      },
      {
        "name": "Fading Time",
        "value": [
          2,
          1.5,
          1
        ],
        "temp": "$$ seconds"
      }
    ]
  },
  {
    "id": 6,
    "name": "Anti-Magic Shell",
    "type": "Passive",
    "ulti": false,
    "targets": [
      "self"
    ],
    "description": "The hero get more magic resistance.",
    "params": [
      {
        "name": "Magic Reduction",
        "value": [
          20,
          28,
          36,
          44
        ],
        "temp": "$$%"
      }
    ]
  },
  {
    "id": 7,
    "name": "Aphotic Spire",
    "type": "Target point",
    "ulti": true,
    "targets": [
      "enemies",
      "air",
      "ground"
    ],
    "manacost": [
      140,
      180,
      220
    ],
    "cooldown": [
      60,
      55,
      50
    ],
    "description": "The caster summons a magic arrow that will deals damages to enemies in a line stunning them. The arrow deals more damages and stunn during a bigger duration in function of the distance travelled.",
    "params": [
      {
        "name": "Damages",
        "value": [
          180,
          240,
          300,
          360
        ],
        "temp": "$$ per 1000 ranges travelled"
      },
      {
        "name": "Stunn Duration",
        "value": [
          1.3,
          1.8,
          2.3,
          2.8
        ],
        "temp": "$$ per 1000 ranges travelled"
      },
      {
        "name": "Max Damages",
        "value": 450
      },
      {
        "name": "Max Stunn Duration",
        "value": 4.5,
        "temp": "$$ seconds"
      },
      {
        "name": "Arrow Speed",
        "value": 2000,
        "temp": "$$ ranges/s"
      }
    ]
  },
  {
    "name": "Arcane Barrage",
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Damages",
        "value": [
          "75",
          "150",
          "225",
          "300"
        ]
      },
      {
        "name": "Bolt Speed",
        "value": "700",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "450",
        "temp": "$$ ranges"
      }
    ],
    "description": "The caster throw some bolts to enemies around him that deals damages when it reach their targets.",
    "cooldown": [
      "11",
      "10",
      "9",
      "8"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 8
  },
  {
    "type": "Target unit",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "6",
          "7",
          "8",
          "9"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Life Restored",
        "value": [
          "20",
          "40",
          "60",
          "80"
        ],
        "temp": "$$ hp per attack"
      },
      {
        "name": "Cast Range",
        "value": "450",
        "temp": "$$ ranges"
      }
    ],
    "name": "Art of War",
    "description": "The caster places a buff on the target allied or himself that increases the attack speed by 20% for a short duration. Each time the target attacks it restore some life.",
    "manacost": [
      "100",
      "115",
      "130",
      "145"
    ],
    "cooldown": [
      "22",
      "20",
      "18",
      "16"
    ],
    "id": 9
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Armor Malus",
        "value": [
          "3",
          "4",
          "5",
          "6"
        ]
      },
      {
        "name": "Area of Effect",
        "value": "750",
        "temp": "$$ ranges"
      }
    ],
    "name": "Aura of Blight",
    "description": "Decreases the ennemies around armor.",
    "id": 10
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "900",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance Max",
        "value": [
          "500",
          "600",
          "700",
          "800"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed",
        "value": "1300",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Backward Flux",
    "description": "The caster forces an enemy to moves backward for a short duration.",
    "manacost": [
      "95",
      "105",
      "15",
      "125"
    ],
    "cooldown": [
      "12",
      "11",
      "10",
      "9"
    ],
    "id": 11
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "self"
    ],
    "params": [
      {
        "name": "Regeneration",
        "value": [
          "2",
          "3",
          "4",
          "5"
        ],
        "temp": "$$ hp/s per enemy around"
      },
      {
        "name": "Detection Area",
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Hero Bonus",
        "value": "50",
        "temp": "$$%"
      }
    ],
    "name": "Bad Blood",
    "description": "The caster get an increased hp regenearation in function of the number of enemies around. The regeneration is increased when the target is a hero.",
    "id": 12
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "300",
        "temp": "$$ ranges"
      }
    ],
    "name": "Balance Forces",
    "ulti": true,
    "description": "The caster balance his current life with the target opponent current life. The final amount of life for each targets of the spell is calculated by adding the amount of current life from the caster and the targets and by dividing this amount by 2.",
    "manacost": [
      "150",
      "175",
      "200"
    ],
    "cooldown": [
      "110",
      "100",
      "90"
    ],
    "id": 13
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Percentage",
        "value": [
          "25",
          "45",
          "65"
        ],
        "temp": "$$% distance as damages"
      },
      {
        "name": "Duration",
        "value": [
          "7",
          "8",
          "9",
          "10"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Speed Max",
        "value": "800",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Bane of Havoc",
    "ulti": true,
    "description": "The caster places a buff on a target that will damage it in function of the distance travelled.",
    "manacost": [
      "200",
      "230",
      "260"
    ],
    "cooldown": [
      "70",
      "60",
      "50"
    ],
    "id": 14
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air",
      "allies"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "3",
          "3.5",
          "4",
          "4.5"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Cast Range",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed Reduction",
        "value": [
          "25",
          "35",
          "45",
          "55"
        ],
        "temp": "$$%"
      },
      {
        "name": "Bonus Magic Damages",
        "value": "45",
        "temp": "$$%"
      }
    ],
    "name": "Banish",
    "description": "Turns a non-mechanical unit ethereal and slows its movement speed for a short duration. Ethereal creatures cannot attack, but they can cast spells and certain spells cast upon them will have a greater effect. ",
    "cooldown": [
      "13",
      "12",
      "11",
      "10"
    ],
    "manacost": [
      "80",
      "85",
      "90",
      "95"
    ],
    "id": 15
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Damages Bonus",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ]
      }
    ],
    "name": "Bash",
    "description": "Gives 15% chance that an attack will do bonus damage and stuns an opponent for 1 second.",
    "id": 16
  },
  {
    "type": "Instant",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Bonus Attack Speed",
        "value": [
          "60",
          "120",
          "180"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Battle Trance",
    "ulti": true,
    "description": "Add some attack speed to every allied heroes on the map during 14 seconds.",
    "manacost": [
      "90",
      "110",
      "130"
    ],
    "cooldown": [
      "60",
      "55",
      "50"
    ],
    "id": 17
  },
  {
    "type": "Passive",
    "targets": [
      "self",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Percentage Damages",
        "value": [
          "4",
          "5",
          "6"
        ],
        "temp": "$$% of his current life"
      },
      {
        "name": "Duration",
        "value": [
          "10",
          "12",
          "14"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Bear Strength",
    "ulti": true,
    "description": "The caster get a percentage of his current life as damages during a short duration.",
    "manacost": [
      "100",
      "120",
      "140"
    ],
    "cooldown": "30",
    "id": 18
  },
  {
    "type": "Target point channel",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "50",
          "80",
          "110"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Area",
        "value": "400",
        "temp": "$$ ranges"
      }
    ],
    "name": "Black Hole",
    "ulti": true,
    "description": "The caster traps any enemies in an area dealing damages to them over the time. During this duration enemies are disabled. Maximum channel duration 4 seconds.",
    "manacost": [
      "200",
      "400",
      "60"
    ],
    "cooldown": [
      "190",
      "170",
      "150"
    ],
    "id": 19
  },
  {
    "type": "Target point",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Area",
        "value": "325",
        "temp": "$$ ranges"
      },
      {
        "name": "Casting Range",
        "value": "1100",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed Reduction",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$%"
      },
      {
        "name": "Attack Speed Reduction",
        "value": [
          "25",
          "30",
          "35",
          "40"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Black Moon",
    "description": "The caster summons a moon at the target location that slows the enemies in the area. Duration 15 seconds.",
    "manacost": [
      "85",
      "90",
      "95",
      "100"
    ],
    "cooldown": [
      "12",
      "10",
      "8",
      "6"
    ],
    "id": 20
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Damages",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ]
      },
      {
        "name": "Duration",
        "value": [
          "0.9",
          "1.1",
          "1.3",
          "1.5"
        ],
        "temp": "$$ seconds stunn"
      },
      {
        "name": "Move Speed",
        "value": "120",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Blackout Kick",
    "description": "The caster has 17% chance to stunn the attacked enemy dealing damages and pushing it backward during a short duration.",
    "id": 21
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "6",
        "temp": "$$ seconds"
      },
      {
        "name": "Distance Waves",
        "value": "1100",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "40",
          "60",
          "80"
        ],
        "temp": "$$ per slash"
      },
      {
        "name": "Area Slash",
        "value": "62.5",
        "temp": "$$ ranges"
      },
      {
        "name": "Slash Speed",
        "value": "1400",
        "temp": "$$ ranges"
      }
    ],
    "name": "Blade Fury",
    "ulti": true,
    "description": "The caster summons some slashes around him that moves in random directions every 0.2 second. The spell is interupted if the caster dies. Theses slashes deals damages to enemies in a line. During that spell the caster get 20% move speed bonus. When the caster attack during this spell duration it summons an additional slash in a random duration.",
    "manacost": [
      "130",
      "150",
      "170"
    ],
    "cooldown": [
      "60",
      "55",
      "50"
    ],
    "id": 22
  },
  {
    "type": "Target unit",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "4",
          "5",
          "6",
          "7"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Cast Range",
        "value": "550",
        "temp": "$$ ranges"
      }
    ],
    "name": "Blessed Life",
    "description": "The target become magic immune during a short duration.",
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "cooldown": [
      "25",
      "23",
      "21",
      "19"
    ],
    "id": 23
  },
  {
    "type": "Target point",
    "targets": [
      "none"
    ],
    "params": [
      {
        "name": "Delay",
        "value": "0.33",
        "temp": "$$ second"
      }
    ],
    "name": "Blink",
    "description": "A short distance teleportation that allows the caster to move in and out of combat. Maximum distance 1200 ranges.",
    "manacost": "70",
    "cooldown": [
      "12",
      "10",
      "8",
      "6"
    ],
    "id": 24
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "ground",
      "air",
      "allies"
    ],
    "params": [
      {
        "name": "Hero Percentage",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$% max life"
      },
      {
        "name": "Unit Percentage",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$% max life"
      }
    ],
    "name": "Blood Bath",
    "description": "When the hero kills a unit it restores a percentage of the dead unit max life. Does not works agains buildings and mechanic units.",
    "id": 25
  },
  {
    "type": "Target unit",
    "targets": [
      "ground",
      "air",
      "allies",
      "non heroes",
      "organics",
      "non buildings"
    ],
    "params": [
      {
        "name": "Regeneration",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$% of the unit current life"
      },
      {
        "name": "Cast Range",
        "value": "250",
        "temp": "$$ ranges"
      }
    ],
    "name": "Blood Pact",
    "description": "Destroy an allied unit to regenerate a proportion of the sacrified unit's current life.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "55",
      "50",
      "45",
      "40"
    ],
    "id": 26
  },
  {
    "type": "Target unit",
    "targets": [
      "ground",
      "air",
      "allies",
      "self",
      "organics"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Attack Speed Bonus",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$%"
      },
      {
        "name": "Move Speed Bonus",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Blood Rage",
    "description": "The caster increases the allied target move and attack speed during 20 seconds.",
    "manacost": [
      "80",
      "85",
      "90",
      "95"
    ],
    "cooldown": "10",
    "id": 27
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Bonus",
        "value": [
          "11",
          "22",
          "33",
          "44"
        ],
        "temp": "$$% move speed"
      },
      {
        "name": "Area",
        "value": [
          "2500",
          "3000",
          "3500",
          "4000"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Life Treeshold",
        "value": [
          "25",
          "30",
          "35",
          "40"
        ],
        "temp": "$$% of max life"
      }
    ],
    "name": "Blood Thirst",
    "description": "When an enemy has les than a certain amount of life of life the hero get an increased movespeed.",
    "id": 28
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Minimum Bonus",
        "value": "5",
        "temp": "$$%"
      },
      {
        "name": "Max Bonus",
        "value": [
          "15",
          "30",
          "45",
          "60"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Bloodlust",
    "description": "The caster get a random bonus of move and attack speed during 6 seconds.",
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "cooldown": [
      "35",
      "30",
      "25",
      "20"
    ],
    "id": 29
  },
  {
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Area",
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$ hp/unit"
      },
      {
        "name": "Max Units",
        "value": "14"
      }
    ],
    "name": "Bloody Slam",
    "description": "The caster regenerates life in function of the number of enemies around him. Maximum 14 units.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "12",
    "id": 30
  }
]

const myTypes = [ "Target unit", "Target point", "Instant", "Passive", "Target unit/point" ];

const defaultSpell = {
	type: "Target unit",
	targets: ["enemies", "ground", "air"],
	params: [],
};

Vue.component('formspell', {
	props: ["spell"],
	data() {
		return {
			types: [],
			newParam: {},
		}
	},
	template: `
		<div>
			<div>
				<label for="name">Name</label>
				<input id="name" type="text" v-model="spell.name">
			</div>
				<div>
					<label for="ulti">Ulti:</label>
					<input type="checkbox" id="ulti" v-model="spell.ulti">
				</div>
			<div>
				<label for="type">Type</label>
				<select id="type" v-model="spell.type">
					<option v-for="type in types">{{ type }}</option>
				</select>
			</div>
			<div>
				<label for="targets">Targets</label>
				<div>
					<input type="checkbox" id="enemies" value="enemies" v-model="spell.targets">
					<label for="enemies">Enemies</label>
					<input type="checkbox" id="allies" value="allies" v-model="spell.targets">
					<label for="allies">Allies</label>
					<input type="checkbox" id="self" value="self" v-model="spell.targets">
					<label for="self">Self</label>
					<input type="checkbox" id="none" value="none" v-model="spell.targets">
					<label for="none">None</label>
				</div>
					<input type="checkbox" id="heroes" value="heroes" v-model="spell.targets">
					<label for="heroes">Heroes</label>
					<input type="checkbox" id="nonheroes" value="non heroes" v-model="spell.targets">
					<label for="nonheroes">Non Heroes</label>
					<input type="checkbox" id="buildings" value="buildings" v-model="spell.targets">
					<label for="buildings">Buildings</label>
					<input type="checkbox" id="organics" value="organics" v-model="spell.targets">
					<label for="organics">Organics</label>
				<div>
				</div>
				<div>
					<input type="checkbox" id="air" value="air" v-model="spell.targets">
					<label for="air">Air</label>
					<input type="checkbox" id="ground" value="ground" v-model="spell.targets">
					<label for="ground">Ground</label>
				</div>
			</div>
			<div>
				<label for="description">Description</label>
				<div>
					<textarea id="description" v-model="spell.description" cols="67" rows="5"></textarea>
				</div>
			</div>
			<div>
				<label for="manacost">Manacost</label>
				<input id="manacost" type="text" v-model="spell.manacost">
			</div>
			<div>
				<label for="cooldown">Cooldown</label>
				<input id="cooldown" type="text" v-model="spell.cooldown">
			</div>
			<div>
				<label>Params</label>
				<div v-for="param in this.$props.spell.params">
					<input type="text" v-model="param.name">
					<input type="text" v-model="param.value">
					<input type="text" v-model="param.temp">
					<button type="button" @click="removeParam(param.name)">X</button>
				</div>
				<div>
					<input type="text" v-model="newParam.name">
					<input type="text" v-model="newParam.value">
					<input type="text" v-model="newParam.temp">
					<button type="button" @click="addParam">+</button>
				</div>
			</div>
			<button type="button" @click="submitForm()">Valider</button>
		</div>
	`,
	mounted() {
		this.types = myTypes;
	},
	methods: {
		submitForm: function() {
			this.$emit("post", this.$props.spell);
		},
		addParam: function() {
			if (this.newParam.name) {
				this.$props.spell.params.push(this.newParam);
	
				this.resetNewParam();
			}
		},
		removeParam: function(deletedName) {
			this.$props.spell.params = this.$props.spell.params.filter(param => {
        return param.name != deletedName;
      });
		},
		resetNewParam: function() {
			this.newParam = {};
		},
	},
});

Vue.component('learning', {
	props: ["data"],
	template: `
		<div>
			<div>
				<strong>Learn |cffff3300{{ data.name }}|r</strong>
			</div>
			<br>
			<div v-if="data.type">
				|cffFF8000Type|r: {{ data.type }}
			</div>
			<div v-if="data.targets">
				|cffFF8000Targets|r: {{ data.targets.join(", ") }}
			</div>
			|cff585858=======================================|r
			<div>{{ data.description }}|n</div>
			<div v-if="data.manacost">{{ renderMana(data) }}</div>
			<div v-if="data.cooldown">{{ renderCooldown(data) }}|n</div>
			<div v-for="param in data.params">{{ renderParam(param) }}</div>
		</div>`,
	methods: {
		renderParam: function(param) {
      var result = '|cff00d619' + param.name + '|r:';

			var template = param.temp ? param.temp : "$$";
			if (Array.isArray(param.value)) {
				result += template.replace("$$", (param.value).join('/'));
			} else {
				result += template.replace("$$", param.value);
			}

      return result;
		},
		renderMana: function(data) {
			var result = "|cff00C2ECManacost|r: ";

			if (Array.isArray(data.manacost)) {
				result += (data.manacost).join('/');
			} else {
				result += data.manacost;
			}

			return result;
		},
		renderCooldown: function(data) {
			var result = "|cffFFFF00Cooldown|r: ";

			if (Array.isArray(data.cooldown)) {
				result += (data.cooldown).join('/');
			} else {
				result += data.cooldown;
			}

			return result + " seconds";
		},
	},
});

Vue.component('basic', {
	props: ["data", "lvl"],
	template: `
		<div>
			<div>
				<strong>{{ data.name + " - [Lvl " + lvl + "]" }}</strong>
			</div>
			<br>
			<div>{{ data.description }}|n</div>
			<div v-for="param, key in data.params">{{ renderParam(param, lvl) }}</div>
			<div v-if="data.cooldown">|n{{ renderCooldown(data, lvl) }}</div>
		</div>`,
	methods: {
		renderParam: function(param, lvl) {
      var result = '|cff00d619' + param.name + '|r:';

      var template = param.temp ? param.temp : "$$";
      if (Array.isArray(param.value)) {
        result += template.replace("$$", param.value[(lvl - 1)]);
      } else {
        result += template.replace("$$", param.value);
      }

      return result;
		},
		renderCooldown: function(data, lvl) {
			var result = "|cffFFFF00Cooldown|r: ";

			if (Array.isArray(data.cooldown)) {
				result += data.cooldown[(lvl - 1)];
			} else {
				result += data.cooldown;
			}

			return result + " seconds";
		},
	},
});

const myVue = new Vue({
	el: "#app",
	data: {
		selectedId: 1,
		nbrTotalSpells: 251,
		spells: [],
		typesSpell: [],
		defaultSpell: {},
		display: {
			"learning": {
				name: "LEARNING",
				show: true,
			},
			"basic": {
				name: "BASIC",
				show: false
			},
			"edit": {
				name: "EDIT",
				show: false
			},
			"new": {
				name: "NEW",
				show: false
			},
			"json": {
				name: "JSON",
				show: false
			},
		}
	},
	mounted(){
	    this.spells = mySpells;

	    this.defaultSpell = defaultSpell;
	},
	methods: {
		filterById: function() {
			return this.spells.filter(spell => spell.id == this.selectedId);
		},
		onlyShow: function(type) {
			var keys = Object.keys(this.display);

			keys.forEach(key => {
				if (key == type) {
					this.display[key].show = true;
				} else {
					this.display[key].show = false;
				}
			});
		},
		copyOf: function(object) {
			return JSON.parse(JSON.stringify(object));
		},
		updateSpell: function(newSpell) {
      newSpell.params.forEach(param => {
        if (typeof param.value === 'string' && param.value.indexOf(",") != -1) {
          param.value = param.value.split(",");
        }
      });

			if (typeof newSpell.manacost === 'string' && newSpell.manacost.indexOf(",") != -1) {
				newSpell.manacost = newSpell.manacost.split(",");
			}

			if (typeof newSpell.cooldown === 'string' && newSpell.cooldown.indexOf(",") != -1) {
				newSpell.cooldown = newSpell.cooldown.split(",");
			}

			if ("id" in newSpell) {
				var myData = [];

				this.spells.forEach(spell => {
					if (spell.id == newSpell.id) {
						myData.push(newSpell);
					} else {
						myData.push(spell);
					}
				})

				this.spells = myData;
			} else {
				newSpell.id = this.getNewId();

				this.spells.push(newSpell);
			}
		},
		getNewId: function() {
			var newId = 0;

			this.spells.forEach(item => {
				if (item.id > newId) {
					newId = item.id;
				}
			});

			return newId + 1;
		},
	},
});