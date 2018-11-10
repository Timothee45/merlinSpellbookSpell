const mySpellsLibrary = 
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
        "name": "Cast Range",
        "value": 600,
        "temp": "$$ ranges"
      },
      {
        "name": "Missile Speed ",
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
        "name": "Stunn Duration",
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
        "name": "Cast Range",
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
        "name": "Percentage Treeshold",
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
    "description": "The caster summons some slashes around him that moves in random directions every 0.2 second. The spell is interrupted if the caster dies. Theses slashes deals damages to enemies in a line. During that spell the caster get 20% move speed bonus. When the caster attack during this spell duration it summons an additional slash in a random duration.",
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
        "name": "Area Detection",
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
        "name": "Min Bonus",
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
        "name": "Wave Distance",
        "value": "1400",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "15",
          "20",
          "25"
        ],
        "temp": "$$ per wave"
      },
      {
        "name": "Duration",
        "value": [
          "4",
          "5",
          "6"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Wave Speed",
        "value": "1000",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Area",
        "value": "200",
        "temp": "$$ ranges"
      }
    ],
    "name": "Breath of Fire",
    "ulti": true,
    "description": "The caster summons some cone of flames in front of him that deals damages to enemies in a line. The waves spawn in front of the caster every 0.2 seconds.",
    "manacost": [
      "100",
      "140",
      "180"
    ],
    "cooldown": [
      "70",
      "60",
      "50"
    ],
    "id": 31
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
        "name": "Damages",
        "value": [
          "35",
          "45",
          "55",
          "65"
        ],
        "temp": "$$ damages/second"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "6",
          "8",
          "10",
          "12"
        ],
        "temp": "$$ hp/s"
      },
      {
        "name": "Area",
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": "12",
        "temp": "$$ seconds"
      }
    ],
    "name": "Burning Field",
    "description": "The caster summons a field of flames around him that deals damages to enemies around, healing the caster and increasing his move speed by 15%.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "30",
      "28",
      "26",
      "24"
    ],
    "id": 32
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
        "name": "Damages",
        "value": [
          "35",
          "50",
          "65",
          "80"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Area",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      }
    ],
    "name": "Burning Shield",
    "description": "The caster places a shield of fire on the target unit that deals damages to enemies around during 20 seconds.",
    "manacost": [
      "80",
      "95",
      "110",
      "125"
    ],
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "id": 33
  },
  {
    "type": "Autocast",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Bonus Damages",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ]
      },
      {
        "name": "Missile Speed",
        "value": "900",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Canonball",
    "description": "Adds some bonus damage to the hero's attack and causes his attacks to do area of effect damage.",
    "manacost": [
      "35",
      "45",
      "55",
      "65"
    ],
    "id": 34
  },
  {
    "type": "Target point",
    "targets": [
      "enemies",
      "ground",
      "air",
      "organics"
    ],
    "params": [
      {
        "name": "Damages",
        "value": [
          "75",
          "130",
          "185",
          "240"
        ]
      },
      {
        "name": "Area",
        "value": "100",
        "temp": "$$ ranges"
      },
      {
        "name": "Cast Range",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Carrion Swarm",
    "description": "Sends a horde of bats to damage enemies in a line.",
    "manacost": "110",
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "id": 35
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
        "name": "Damages",
        "value": [
          "35",
          "45",
          "55",
          "65"
        ],
        "temp": "$$ damages/slam"
      },
      {
        "name": "Area",
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Blasts",
        "value": "5"
      },
      {
        "name": "Casting Range",
        "value": "750",
        "temp": "$$ ranges"
      }
    ],
    "name": "Cenarion Fury",
    "description": "Places a buff on the target enemy during 10 seconds. Every 2 seconds the buff will blasts every enemies around the target dealing some damages.",
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "cooldown": "12",
    "id": 36
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
        "name": "Cast Range",
        "value": "1000",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "40",
          "50",
          "60",
          "70"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Damages Impaled",
        "value": [
          "2.5",
          "3.5",
          "4.5",
          "5.5"
        ],
        "temp": "$$% target max life as damages"
      },
      {
        "name": "Chain Spawn",
        "value": "0.5",
        "temp": "$$ second"
      },
      {
        "name": "Impale Area",
        "value": "150",
        "temp": "$$ ranges"
      }
    ],
    "name": "Chain Dementia",
    "description": "The caster summons some chains in an area that slows enemies in there and deals damages over the time. If a unit is impaled by chain, it will lose a percentage of his life. Last 12 seconds.",
    "manacost": [
      "100",
      "105",
      "110",
      "115"
    ],
    "cooldown": [
      "25",
      "23",
      "21",
      "19"
    ],
    "id": 37
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
        "name": "Nbr Jumps",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ],
        "temp": "$$ maximum"
      },
      {
        "name": "Damages",
        "value": [
          "85",
          "135",
          "185",
          "235"
        ],
        "temp": "$$ as starting damages"
      },
      {
        "name": "Area Search",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Casting Range",
        "value": "700",
        "temp": "$$ ranges"
      }
    ],
    "name": "Chain Lightning",
    "description": "Hurls a bolt of damaging lightning to a target enemy that jumps to nearby enemies. Each jump deals 15% less damages.",
    "cooldown": [
      "8",
      "7",
      "6",
      "5"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 38
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
        "name": "Duration",
        "value": [
          "3",
          "4",
          "5"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Casting Range",
        "value": "650",
        "temp": "$$ ranges"
      }
    ],
    "name": "Chaotic Shield",
    "ulti": true,
    "description": "Creates a shield on an allied that blocks any damages taken during a short duration. Any damages taken by the protected unit will heal it.",
    "cooldown": [
      "70",
      "60",
      "50"
    ],
    "manacost": [
      "90",
      "110",
      "130"
    ],
    "id": 39
  },
  {
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air",
      "non heroes"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "10",
          "12",
          "14"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Area",
        "value": [
          "250",
          "350",
          "450"
        ],
        "temp": "$$ ranges"
      }
    ],
    "name": "Charm",
    "ulti": true,
    "description": "Convert the enemies non heroes around you during a short duration.",
    "cooldown": "110",
    "manacost": [
      "150",
      "200",
      "250"
    ],
    "id": 40
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "25",
        "temp": "$$ seconds"
      },
      {
        "name": "Move Speed Bonus",
        "value": [
          "20",
          "35",
          "50"
        ],
        "temp": "$$%"
      },
      {
        "name": "Attack Speed Bonus",
        "value": [
          "25",
          "55",
          "85"
        ],
        "temp": "$$%"
      },
      {
        "name": "Base Hero Attack Time",
        "value": [
          "1.5",
          "1.3",
          "1.1"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Mana Regeneration",
        "value": [
          "3",
          "5",
          "7"
        ],
        "temp": "$$ manapoints/s"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "40",
          "60",
          "80"
        ],
        "temp": "$$ life/s"
      }
    ],
    "name": "Chemical Rage",
    "ulti": true,
    "description": "The caster become enraged having increased move and attack speed and better regeneration.",
    "cooldown": "55",
    "manacost": [
      "50",
      "100",
      "150"
    ],
    "id": 41
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
        "name": "Attack Speed Malus",
        "value": [
          "8",
          "12",
          "16",
          "20"
        ],
        "temp": "$$%"
      },
      {
        "name": "Move Speed Malus",
        "value": [
          "8",
          "12",
          "16",
          "20"
        ],
        "temp": "$$%"
      },
      {
        "name": "Area",
        "value": "500",
        "temp": "$$ ranges"
      }
    ],
    "name": "Chilling Aura",
    "description": "Decreases the movement speed and attack rate of nearby enemies units.",
    "id": 42
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Damage Bonus",
        "value": [
          "12",
          "20",
          "28",
          "36"
        ],
        "temp": "$$%"
      },
      {
        "name": "Area",
        "value": "700",
        "temp": "$$ ranges"
      }
    ],
    "name": "Command Aura",
    "description": "Increases passively the damages of nearby friends units.",
    "id": 43
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air",
      "non heroes"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages Bonus",
        "value": [
          "5",
          "7",
          "9"
        ],
        "temp": "$$% of target life"
      },
      {
        "name": "Life Bonus",
        "value": [
          "40",
          "60",
          "80"
        ],
        "temp": "$$% of target life"
      },
      {
        "name": "Soul Speed",
        "value": "550",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Consume Life",
    "ulti": true,
    "description": "The caster destroy a target non-hero gaining damages and life in function of the sacrified unit's current life. The buff is applied to the caster after the hero get the soul of the target. |nDoes not work against Arthas.",
    "cooldown": [
      "70",
      "60",
      "50"
    ],
    "manacost": [
      "100",
      "130",
      "160"
    ],
    "id": 44
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
        "name": "Cast Range",
        "value": [
          "500",
          "600",
          "700",
          "800"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": [
          "325",
          "400",
          "475",
          "550"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Corpses",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ],
        "temp": "$$ summoned"
      },
      {
        "name": "Damages",
        "value": [
          "25",
          "50",
          "75",
          "100"
        ],
        "temp": "$$ damages/corpse"
      },
      {
        "name": "Area Explosion",
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Fall Duration",
        "value": "0.75",
        "temp": "$$ second"
      }
    ],
    "name": "Corpses Rain",
    "description": "The caster summons some putrid corpses that will fall on the target area. When they reach the ground the corpses explodes dealing damages to enemies and stunning them during 1 second.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "13",
    "id": 45
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
          "30",
          "40",
          "50",
          "60"
        ]
      },
      {
        "name": "Disable Duration",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Move Speed",
        "value": "150",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Counter Spirit",
    "description": "When the caster attacks he has 15% chance to deals bonus damages to the attacked unit, disabling it and move it slowly to his position.",
    "id": 46
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
        "name": "Probability",
        "value": "15",
        "temp": "$$%"
      },
      {
        "name": "Damage Multiplier",
        "value": [
          "1.25",
          "1.75",
          "2.25",
          "2.75"
        ],
        "temp": "$$x normal damages"
      }
    ],
    "name": "Critical Strike",
    "description": "Gives a chance to deals more damage on an attack.",
    "id": 47
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
        "name": "Cast Range",
        "value": "1000",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "90",
          "150",
          "210",
          "270"
        ]
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "20",
          "25",
          "30",
          "35"
        ],
        "temp": "$$%"
      },
      {
        "name": "Speed",
        "value": "1200",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "200",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Distance",
        "value": "1000",
        "temp": "$$ ranges"
      }
    ],
    "name": "Crushing Wave",
    "description": "The caster throw a wave in a direction that deals damages to enemies it encounters, slowing them during 5 seconds and draging them.",
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "cooldown": "12",
    "id": 48
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Magic Resistance Bonus",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$%"
      },
      {
        "name": "Bonus Life",
        "value": [
          "75",
          "150",
          "225",
          "300"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "Dampen Harm",
    "description": "Increases permanently the hero's magic resistance and life.",
    "id": 49
  },
  {
    "type": "Target unit",
    "targets": [
      "ground",
      "air",
      "allies",
      "organics",
      "non heroes"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Mana Restaured",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$% of the target current life"
      }
    ],
    "name": "Dark Ritual",
    "description": "Sacrifices a target friendly unit to convert his current life into mana for the caster.",
    "manacost": [
      "30",
      "40",
      "50",
      "60"
    ],
    "cooldown": [
      "50",
      "40",
      "30",
      "20"
    ],
    "id": 50
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
        "name": "Nbr Servants",
        "value": [
          "3",
          "5",
          "7",
          "9"
        ],
        "temp": "$$ max"
      }
    ],
    "name": "Darkness Conversion",
    "description": "When the hero or a Servant kill a unit it has 33% chances to summon a Darkness Servant.",
    "id": 51
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
        "name": "Damages",
        "value": [
          "90",
          "140",
          "190",
          "240"
        ]
      },
      {
        "name": "Area",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Casting Ranges",
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Missile Speed",
        "value": "600",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Darkness Wave",
    "description": "The caster throw some bolts to enemies in an area.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": [
      "12",
      "10.5",
      "9",
      "7.5"
    ],
    "id": 52
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
        "name": "Probability",
        "value": "15",
        "temp": "$$%"
      },
      {
        "name": "Damages Multiplier",
        "value": [
          "2.5",
          "3.5",
          "4.5"
        ],
        "temp": "$$x normal damages"
      }
    ],
    "name": "Deadly Hit",
    "description": "Gives a chance to deals a massive amount of damages on an attack.",
    "manacost": "",
    "ulti": true,
    "id": 53
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
        "name": "Casting Range",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "3",
          "4",
          "5",
          "6"
        ],
        "temp": "$$% max life per second"
      },
      {
        "name": "Area",
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "9",
          "10",
          "11",
          "12"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Death And Decay",
    "ulti": false,
    "description": "The caster deals damages to enemies in an area equals to their maximum life. If a target is less far than 300 ranges from the middle of the area it will takes 30% damages bonus.",
    "manacost": [
      "80",
      "100",
      "120",
      "140"
    ],
    "cooldown": [
      "45",
      "40",
      "35",
      "30"
    ],
    "id": 54
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Casting Range",
        "value": "700",
        "temp": "$$ ranges"
      },
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
        "name": "Missile Speed",
        "value": "950",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Death Coil",
    "description": "The caster throw a bolt of dark energy to a target unit. If the target is an allied it will heal it and damage it if it is an enemy. Heal 50% of the damages.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "8",
    "id": 55
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
        "name": "Duration",
        "value": "12",
        "temp": "$$ seconds per stack"
      },
      {
        "name": "Area",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "25",
          "30",
          "35",
          "40"
        ],
        "temp": "$$ damages per second"
      }
    ],
    "name": "Death Fumes",
    "description": "The caster deals some damages per seconds to enemies around, during 12 seconds. Any instance of the buff stacks and are independant.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "5",
      "4",
      "3",
      "2"
    ],
    "id": 56
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
        "name": "Damages",
        "value": [
          "100",
          "150",
          "200",
          "250"
        ]
      },
      {
        "name": "Heal",
        "value": [
          "100",
          "150",
          "200",
          "250"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Area",
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Missiles Speed",
        "value": "450",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Death Wave",
    "description": "The caster sends a wave of death energy that deals damages to enemies and heals the allies.",
    "manacost": [
      "90",
      "105",
      "120",
      "135"
    ],
    "cooldown": "8",
    "id": 57
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
        "name": "Bonus Damages",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$ stacked each attack"
      },
      {
        "name": "Duration",
        "value": "12",
        "temp": "$$ seconds"
      }
    ],
    "name": "Deep Wounds",
    "description": "Each attack deals more damages than the previous attack to the foe's body. |n|cffff0000Orb effect does not stack.|r",
    "id": 58
  },
  {
    "type": "Autocast",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Missile Speed",
        "value": "1050",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Demolisher Missile",
    "description": "The caster burns the target on attacks dealing damages over the time during 8 seconds. The buff stack indefinitly and are independant. |n|cffff0000Orb effect does not stack.|r",
    "manacost": [
      "40",
      "50",
      "60",
      "70"
    ],
    "id": 59
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
        "name": "Malus Damages",
        "value": [
          "25",
          "50",
          "75",
          "100"
        ]
      },
      {
        "name": "Cast Range",
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "10",
          "12",
          "14",
          "16"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Demon Call",
    "description": "Removes some basic damages to the target enemy.",
    "manacost": [
      "100",
      "115",
      "130",
      "145"
    ],
    "cooldown": "8",
    "id": 60
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Area",
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Magic Resistance Bonus",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Demystification",
    "description": "Increases the caster's and allied around magic resistance.",
    "id": 61
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
        "name": "Malus Armor",
        "value": [
          "8",
          "16",
          "24"
        ]
      },
      {
        "name": "Cast Range",
        "value": "750",
        "temp": "$$ ranges"
      }
    ],
    "name": "Destroy Armor",
    "ulti": true,
    "description": "The caster decreases the target armor during 18 seconds.",
    "manacost": [
      "15",
      "25",
      "35"
    ],
    "cooldown": [
      "12",
      "10",
      "8"
    ],
    "id": 62
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
        "name": "Probability",
        "value": [
          "20",
          "25",
          "30",
          "35"
        ],
        "temp": "$$% chances"
      }
    ],
    "name": "Devastating Hit",
    "description": "Gives a chance to deals twice the normal damage on an attack.",
    "id": 63
  },
  {
    "type": "Instant",
    "targets": [
      "enemies",
      "air",
      "ground"
    ],
    "params": [
      {
        "name": "Manacost",
        "value": [
          "200",
          "280",
          "360"
        ],
        "temp": "$$ mana points per attack"
      },
      {
        "name": "Damages",
        "value": [
          "200",
          "300",
          "400"
        ]
      },
      {
        "name": "Missile Speed",
        "value": "3500",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Laser Beam",
    "ulti": true,
    "description": "When activated deals a massive amount of damages each attacks to to attacked unit.",
    "id": 64
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air",
      "organics"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Bonus Gold",
        "value": [
          "25",
          "50",
          "75",
          "100"
        ],
        "temp": "$$ when the target dies"
      },
      {
        "name": "Life Lost",
        "value": [
          "5",
          "7",
          "9",
          "11"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Devour",
    "description": "The caster eat an enemy removing slowly his life to regenerate himself. Heals 50% of the life removed to the target. Maximum digestion time 4 minutes. Steals 50% of the life lost by the target.",
    "danger": "Does not work against Arthas.",
    "cooldown": [
      "80",
      "70",
      "60",
      "50"
    ],
    "manacost": [
      "50",
      "60",
      "70",
      "80"
    ],
    "id": 65
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "enemies"
    ],
    "params": [
      {
        "name": "Damages",
        "value": [
          "15",
          "25",
          "35",
          "45"
        ],
        "temp": ""
      }
    ],
    "name": "Dissuasive Protection",
    "description": "When the caster is attacked, he deals damages to the attacking unit.",
    "id": 66
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
        "name": "Area",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "4",
          "5",
          "6"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Bonus Regeneration",
        "value": [
          "20",
          "25",
          "30"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Divine Defense",
    "ulti": true,
    "description": "The caster increases the armor to the maximum of allied units around him and gives a better life regeneration during a short duration.",
    "manacost": [
      "120",
      "140",
      "160"
    ],
    "cooldown": [
      "90",
      "80",
      "70"
    ],
    "id": 67
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
        "name": "Duration",
        "value": "12",
        "temp": "$$ seconds"
      },
      {
        "name": "Damages Bonus",
        "value": [
          "100",
          "200",
          "300",
          "400"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Divine Power",
    "description": "The caster get a big damage bonus for one attack.",
    "manacost": [
      "80",
      "100",
      "120",
      "140"
    ],
    "cooldown": "10",
    "id": 68
  },
  {
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air",
      "non heroes",
      "organics"
    ],
    "params": [],
    "name": "Domination",
    "description": "Convert a targeted creep.",
    "manacost": [
      "110",
      "125",
      "140",
      "155"
    ],
    "cooldown": [
      "70",
      "65",
      "60",
      "55"
    ],
    "danger": "Does not work against Arthas.",
    "id": 69
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
        "name": "Damages",
        "value": [
          "40",
          "60",
          "80"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Duration",
        "value": [
          "12",
          "13",
          "14"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Cast Range",
        "value": "650",
        "temp": "$$ ranges"
      }
    ],
    "name": "Doom",
    "ulti": true,
    "description": "Marks a target unit for the manifestation of a Demon. The afflicted unit cannot cast spells and will take damage per second during a short duration.",
    "manacost": [
      "180",
      "255",
      "330"
    ],
    "cooldown": [
      "140",
      "130",
      "120"
    ],
    "id": 70
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
        "name": "Basic Damages",
        "value": [
          "60",
          "80",
          "100",
          "120"
        ]
      },
      {
        "name": "Damages Over The Time",
        "value": [
          "20",
          "40",
          "60",
          "80"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Cast Range",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Speed",
        "value": "1500",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Distance",
        "value": "1100",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "125",
        "temp": "$$ ranges"
      }
    ],
    "name": "Dragon Salve",
    "description": "The caster send a wave of fire that deals damages to enemies in a line. The units affected takes damages over the time during 5 seconds.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "8",
      "7",
      "9",
      "5"
    ],
    "id": 71
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
        "name": "Cast Range",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "90",
          "170",
          "250",
          "330"
        ]
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1.3",
          "1.5",
          "1.7",
          "1.9"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Dream Coil",
    "description": "The caster places a buff on the target ally. After 3 seconds the buff is removed causing an explosion that deals damages to enemies around the target stunning them during a short duration.",
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "cooldown": "9",
    "id": 72
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Probability",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$% chances"
      }
    ],
    "name": "Drunken Haze",
    "description": "When the caster is damaged by attacks or spells, he has a chance to avoid the damages.",
    "id": 73
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
        "name": "Max Range",
        "value": [
          "600",
          "700",
          "800",
          "900"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Speed",
        "value": "1400",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "125",
        "temp": "$$ ranges"
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1.25",
          "1.5",
          "1.75",
          "2"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Damages",
        "value": [
          "90",
          "150",
          "210",
          "270"
        ]
      }
    ],
    "name": "Earth Pikes",
    "description": "The caster moves hidden to the target location under the ground causing the creation of a destructive wave. The wave throws the enemies it encounters in the air during 1 second. When they lands the enemies are stunned during a short duration and damaged.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "11",
    "id": 74
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
        "name": "Damages",
        "value": [
          "110",
          "160",
          "210",
          "260"
        ]
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      },
      {
        "name": "Area",
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Speed",
        "value": "900",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Earthshock",
    "description": "The caster slams the ground dealing damages to enemies around pushing them away and slowing them during 3 seconds.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "10",
    "id": 75
  },
  {
    "type": "Target point",
    "targets": [
      "enemies",
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Damages/Heal",
        "value": [
          "75",
          "125",
          "175",
          "225"
        ]
      },
      {
        "name": "Cast Range",
        "value": "950",
        "temp": "$$ ranges"
      },
      {
        "name": "Speed",
        "value": "1200",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "125",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance",
        "value": "1100",
        "temp": "$$ ranges"
      }
    ],
    "name": "Elune's Blessing",
    "description": "The caster throw a wave in a direction that deals damages to enemies it encounters and heal allied.",
    "manacost": [
      "110",
      "120",
      "130",
      "140"
    ],
    "cooldown": [
      "11",
      "10",
      "9",
      "8"
    ],
    "id": 76
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
        "name": "Cast Range",
        "value": [
          "700",
          "850",
          "1000"
        ],
        "temp": "$$ ranges"
      }
    ],
    "name": "Elven Swap",
    "ulti": true,
    "description": "The caster swap his position with a target unit.",
    "manacost": [
      "140",
      "170",
      "200"
    ],
    "cooldown": "45",
    "id": 77
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
        "value": "650",
        "temp": "$$ ranges"
      }
    ],
    "name": "Empowering Movement",
    "description": "Give to an allied a maximum movespeed bonus during a short duration.",
    "manacost": [
      "110",
      "120",
      "130",
      "140"
    ],
    "cooldown": "12",
    "id": 78
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
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "175",
          "225",
          "300"
        ]
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1.5",
          "1.6",
          "1.7",
          "1.8"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Glove Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Explosion Area",
        "value": "300",
        "temp": "$$ ranges"
      }
    ],
    "name": "Enchanted Glove",
    "description": "Throw a metal glove to the targeted enemy. When the glove reaches the target it explodes dealing damages to enemies around stunning them for a short duration.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "7",
    "id": 79
  },
  {
    "type": "Autocast",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "7",
          "8",
          "9",
          "10"
        ],
        "temp": "$$% as current mana"
      }
    ],
    "name": "Energic Missile",
    "description": "Add to the damages of the attacking unit a percentage of his current mana as magic damages.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "danger": "Orb effect does not stack.",
    "id": 80
  },
  {
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [],
    "name": "Enrage",
    "description": "The caster get a huge attackspeed bonus for a short number of attacks. If the caster attacks a certain number of times the buff is lost. Last 15 seconds.",
    "manacost": [
      "80",
      "85",
      "90",
      "95"
    ],
    "cooldown": "15",
    "id": 81
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
        "value": [
          "2",
          "3",
          "4",
          "5"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Cast Range",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Missile Speed",
        "value": "1500",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Ensnare",
    "description": "Causes a target enemy unit to be bound to the ground so that it cannot move for a short duration. Air units that are ensnared can be attacked as though they were land units.",
    "cooldown": [
      "12",
      "11",
      "10",
      "9"
    ],
    "manacost": [
      "55",
      "65",
      "75",
      "85"
    ],
    "id": 82
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
        "name": "Damages",
        "value": "60",
        "temp": "$$ per second"
      },
      {
        "name": "Duration",
        "value": [
          "4",
          "5",
          "6"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Area",
        "value": "550",
        "temp": "$$ ranges"
      }
    ],
    "name": "Entangling Roots",
    "ulti": true,
    "description": "The caster blocks any enemies around him with some roots during a short duration dealing over the time.",
    "manacost": [
      "150",
      "180",
      "210"
    ],
    "cooldown": [
      "90",
      "85",
      "80"
    ],
    "id": 83
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
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$ damages per second"
      },
      {
        "name": "Duration",
        "value": [
          "8",
          "10",
          "12",
          "14"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "10",
          "11",
          "12",
          "13"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Envenomed Spears",
    "description": "Deals poison damage per second and slow move speed of the attacked unit during a short duration.",
    "danger": "Buff placers does not stask.",
    "id": 84
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Probability",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$% chances"
      }
    ],
    "name": "Evasion",
    "description": "Gives a percent chance to avoid attacks.",
    "id": 85
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
        "name": "Area",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "1",
          "1.75",
          "2.5",
          "3.25"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "10",
          "12",
          "14",
          "16"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Eye of Dalaran",
    "description": "When an enemy around casts a spell it becomes silenced and slowed during a short duration.",
    "id": 86
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
        "name": "Duration",
        "value": [
          "4",
          "5",
          "6"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Area",
        "value": "600",
        "temp": "$$ ranges"
      }
    ],
    "name": "False Promise",
    "description": "The caster places a buff on neaby allied that increases their max life by 10 000 Hp during a short duration.",
    "ulti": true,
    "manacost": [
      "140",
      "160",
      "180"
    ],
    "cooldown": [
      "160",
      "150",
      "140"
    ],
    "id": 87
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Area",
        "value": "Globals"
      },
      {
        "name": "Mana Regeneration Bonus",
        "value": [
          "0.75",
          "0.95",
          "1.15",
          "1.35"
        ],
        "temp": "$$x basic regeneration"
      },
      {
        "name": "Additional Bonus",
        "value": [
          "0.5",
          "1",
          "1.5",
          "2"
        ],
        "temp": "$$ mana points/s"
      }
    ],
    "name": "Fast Mind Aura",
    "description": "Gives additional mana regeneration to any friendly units. And gives you an additional bonus.",
    "id": 88
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
        "name": "Area",
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Damage Reduction",
        "value": [
          "11",
          "22",
          "33",
          "44"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Fear",
    "description": "Decreases the enemies around damages.",
    "id": 89
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Damage Bonus",
        "value": [
          "60",
          "80",
          "100"
        ]
      },
      {
        "name": "Life Steal",
        "value": [
          "40",
          "60",
          "80"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Feeding Frenzy",
    "ulti": true,
    "description": "Increases the damages of the hero and gives a big lifesteal during 15 seconds.",
    "manacost": [
      "90",
      "110",
      "130"
    ],
    "cooldown": [
      "80",
      "70",
      "60"
    ],
    "id": 90
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
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Attack Rate Bonus",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      },
      {
        "name": "Damages Bonus",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Ferocity",
    "description": "Increases the target allied or yourself damages and attack rate during 12 seconds.",
    "manacost": [
      "110",
      "120",
      "130",
      "140"
    ],
    "cooldown": "25",
    "id": 91
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Move Speed Bonus",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$%"
      },
      {
        "name": "Attack Speed Bonus",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Fervor",
    "description": "When the hero casts a spell it get extra move and attack speed for 6 seconds.",
    "id": 92
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
        "value": [
          "650",
          "700",
          "750"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "250",
          "400",
          "550"
        ]
      },
      {
        "name": "Damages Delay",
        "value": "0.25",
        "temp": "$$ second"
      }
    ],
    "name": "Finger of Death",
    "description": "A lightning bolt of energy deals a massive amount of damages to the targeted unit.",
    "manacost": [
      "200",
      "240",
      "280"
    ],
    "cooldown": [
      "120",
      "110",
      "100"
    ],
    "id": 93
  },
  {
    "type": "Instant",
    "targets": [
      "ground",
      "air",
      "enemies"
    ],
    "params": [
      {
        "name": "Tree Attack Damages",
        "value": [
          "40",
          "50",
          "60"
        ],
        "temp": ""
      },
      {
        "name": "Tree Attack Time",
        "value": [
          "1",
          "0.9",
          "0.8"
        ],
        "temp": "$$ second"
      },
      {
        "name": "Area",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Bolts Speed",
        "value": "800",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Forest Spirits",
    "ulti": true,
    "description": "The caster enchant some trees around him to have some help to beat enemies. During 7 seconds every period of time the trees will attack a random enemy.",
    "manacost": [
      "120",
      "160",
      "200"
    ],
    "cooldown": [
      "60",
      "55",
      "50"
    ],
    "id": 94
  },
  {
    "type": "Target unit",
    "targets": [
      "ground",
      "air",
      "allies"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "250",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed Bonus",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$% of the target move speed"
      }
    ],
    "name": "Fracture",
    "description": "Destroy an allied unit to get a percentage of it's current movespeed last 5 seconds.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": [
      "55",
      "50",
      "45",
      "40"
    ],
    "id": 95
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
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Armor Bonus",
        "value": [
          "3",
          "6",
          "9",
          "12"
        ]
      },
      {
        "name": "Armor Duration",
        "value": "30",
        "temp": "$$ seconds"
      },
      {
        "name": "Attack Speed Slow",
        "value": "30",
        "temp": "$$%"
      },
      {
        "name": "Move Speed Slow",
        "value": "30",
        "temp": "$$%"
      }
    ],
    "name": "Frost Armor",
    "description": "The caster places a shield of ice that increases the target armor and slow the movement of attacking unit during 3 seconds.",
    "manacost": [
      "70",
      "75",
      "80",
      "85"
    ],
    "cooldown": "5",
    "id": 96
  },
  {
    "type": "Autocast",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "11",
          "22",
          "33",
          "44"
        ],
        "temp": "$$%"
      },
      {
        "name": "Hero Duration",
        "value": "1.5",
        "temp": "$$ seconds"
      },
      {
        "name": "Creep Duration",
        "value": "5",
        "temp": "$$ seconds"
      }
    ],
    "description": "Adds a cold effect to each attack, causing bonus damage and slowing a target enemy unit's attacks and movement.",
    "name": "Frost Arrows",
    "manacost": "12",
    "danger": "Orb effect does not stack.",
    "id": 97
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
        "name": "Damages",
        "value": [
          "75",
          "150",
          "225",
          "300"
        ]
      },
      {
        "name": "Slow Duration",
        "value": "3",
        "temp": "$$ seconds"
      },
      {
        "name": "Move Speed Slow",
        "value": "50",
        "temp": "$$%"
      },
      {
        "name": "Attack Speed Slow",
        "value": "25",
        "temp": "$$%"
      }
    ],
    "name": "Frost Nova",
    "description": "Blasts enemy units around a target enemy unit with a wave of damaging frost that slows movement and attack rate.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "8",
      "7",
      "6",
      "5"
    ],
    "id": 98
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
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Slashes",
        "value": [
          "4",
          "6",
          "8"
        ]
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "120",
          "140"
        ],
        "temp": "$$ damages per slash"
      },
      {
        "name": "Area Bounce",
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Slash Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Slash Area",
        "value": "62.5",
        "temp": "$$ ranges"
      },
      {
        "name": "Slash Distance",
        "value": "1200",
        "temp": "$$ ranges"
      },
      {
        "name": "Periode Slashes",
        "value": "0.3",
        "temp": "$$ second"
      }
    ],
    "name": "Furious Slashes",
    "ulti": true,
    "description": "The caster slashes random enemies in an area. Each time a wave is released dealing damages to enemies in a line.",
    "manacost": [
      "150",
      "225",
      "300"
    ],
    "cooldown": [
      "120",
      "110",
      "100"
    ],
    "id": 99
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Fade Time",
        "value": "0.6",
        "temp": "$$ second"
      },
      {
        "name": "Backstab Damages",
        "value": [
          "30",
          "50",
          "70",
          "90"
        ]
      },
      {
        "name": "Duration",
        "value": [
          "20",
          "25",
          "30",
          "35"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Ghost Hunt",
    "description": "Allows the caster to become invisible for a set amount of time. When the caster attacks a unit to break invisibility, he will deal bonus damage.",
    "manacost": [
      "75",
      "80",
      "85",
      "90"
    ],
    "cooldown": "15",
    "id": 100
  },
  {
    "type": "Target point",
    "targets": [
      "ground",
      "air",
      "enemies"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "40",
        "temp": "$$ seconds"
      },
      {
        "name": "Cast Range",
        "value": "Globals"
      },
      {
        "name": "Shade Life",
        "value": [
          "100",
          "125",
          "150",
          "175"
        ],
        "temp": "$$hp"
      },
      {
        "name": "Shade Move Speed",
        "value": [
          "220",
          "250",
          "280",
          "310"
        ],
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Ghost Recon",
    "description": "The caster send an invisible ghost to the target location. The ghost detects invisible units and has vision.",
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "cooldown": [
      "13",
      "11",
      "9",
      "7"
    ],
    "id": 101
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
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Hero Duration",
        "value": [
          "1",
          "1.5",
          "2",
          "2.5"
        ],
        "temp": "$$ seconds trap"
      },
      {
        "name": "Creep Duration",
        "value": [
          "2",
          "2.5",
          "3",
          "3.5"
        ],
        "temp": "$$ seconds trap"
      }
    ],
    "danger": "",
    "name": "Glaciation",
    "description": "Trap an enemy in the ice. During that duration the target can't move and takes 70 damages/s.",
    "manacost": [
      "130",
      "140",
      "150",
      "160"
    ],
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "id": 102
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
        "name": "Area",
        "value": "Global"
      },
      {
        "name": "Life Restaured",
        "value": [
          "200",
          "400",
          "600"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "God Blessing",
    "description": "Heals every allied heroes of your team.",
    "ulti": true,
    "manacost": [
      "160",
      "235",
      "310"
    ],
    "cooldown": [
      "100",
      "90",
      "80"
    ],
    "id": 103
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
        "name": "Area",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages Cleaved",
        "value": [
          "25",
          "35",
          "45",
          "55"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Great Cleave",
    "description": "The hero strikes with such force that he damages multiple enemies with his attack.",
    "id": 104
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Armor Bonus",
        "value": [
          "2",
          "4",
          "6",
          "8"
        ]
      },
      {
        "name": "Life Bonus",
        "value": [
          "150",
          "300",
          "450",
          "600"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "Great Fortitude",
    "description": "Increases permanently the caster's armor and life.",
    "id": 105
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
        "value": "1000",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Speed",
        "value": "700",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Fly Time",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Damages",
        "value": [
          "150",
          "200",
          "250"
        ]
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1.5",
          "2",
          "2.5"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Growing Hell",
    "description": "The caster summons some trees around him that will impale enemies around stunning them during a short duration and damaging them.",
    "manacost": [
      "150",
      "225",
      "300"
    ],
    "cooldown": [
      "150",
      "140",
      "130"
    ],
    "id": 106,
    "ulti": true
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Damages Bonus",
        "value": [
          "30",
          "60",
          "90"
        ]
      }
    ],
    "name": "Growing Power",
    "ulti": true,
    "description": "Gives a permanent bonus to the hero damages. ",
    "id": 107
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
        "name": "Damage Bonus",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ]
      },
      {
        "name": "Area",
        "value": "600",
        "temp": "$$ ranges"
      }
    ],
    "name": "Growl",
    "description": "The caster increases the damages of nearby allied units during 12 seconds. Half the bonus to non hero units.",
    "manacost": [
      "110",
      "115",
      "120",
      "125"
    ],
    "cooldown": "30",
    "id": 108
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
        "name": "Life Limit",
        "value": "25",
        "temp": "$$% maximumlife"
      },
      {
        "name": "Cast Range",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Periode Verification",
        "value": "0.05",
        "temp": "$$ second"
      }
    ],
    "name": "Guardian Angel",
    "description": "The caster places a buff on the target unit that reset periodically his life. If the target's life goes below the limit the life is reset to the limit. If during the verification duration the target takes too much damages, it still can die.",
    "manacost": [
      "110",
      "125",
      "140",
      "155"
    ],
    "cooldown": [
      "22",
      "21",
      "20",
      "19"
    ],
    "id": 109
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Area",
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Bonus Move Speed",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Haste",
    "description": "Increases the movement speed of nearby allies units.",
    "id": 110
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
        "value": [
          "2500",
          "3000",
          "3500"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Casting Delay",
        "value": "1.5",
        "temp": "$$ seconds"
      },
      {
        "name": "Damages",
        "value": [
          "180",
          "280",
          "380"
        ]
      },
      {
        "name": "Bullet Speed",
        "value": "3000",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Stunn Duration",
        "value": "0.5",
        "temp": "$$ second"
      }
    ],
    "name": "Headshot",
    "ulti": true,
    "description": "The caster send a bullet to the targeted unit dealing a massive amount of damages ministunning it.",
    "manacost": [
      "175",
      "225",
      "275"
    ],
    "cooldown": [
      "30",
      "25",
      "20"
    ],
    "id": 111
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
        "name": "Cast Range",
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Heal",
        "value": [
          "100",
          "150",
          "200",
          "225"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Nbr Max Targets",
        "value": [
          "6",
          "8",
          "10",
          "12"
        ]
      },
      {
        "name": "Area Search",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Missile Speed",
        "value": "1200",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Healing Wave",
    "description": "The target summon a bolt that bounces between targets healing each units touched.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "14",
      "12",
      "10",
      "8"
    ],
    "id": 112
  },
  {
    "type": "Target unit",
    "targets": [
      "ground",
      "air",
      "enemies"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "500",
        "temp": "$$ range"
      },
      {
        "name": "Damages Restaurations",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$% damages dealt"
      }
    ],
    "name": "Heartstopper Curse",
    "description": "The caster places a buff that slow the target by 20% and allow the allies to regenerate a percentage of the damages dealts to the target.",
    "manacost": [
      "100",
      "105",
      "110",
      "115"
    ],
    "cooldown": "20",
    "id": 113
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
        "name": "Radius Search",
        "value": "2500",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "110",
          "190",
          "270",
          "350"
        ]
      },
      {
        "name": "Missile Speed",
        "value": "850",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Heat Seeker Missiles",
    "description": "The caster send a rocket to 2 random visibles heroes around him dealing damages.",
    "manacost": [
      "80",
      "100",
      "120",
      "140"
    ],
    "cooldown": [
      "16",
      "15",
      "14",
      "13"
    ],
    "id": 114
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
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Mana Drain",
        "value": [
          "20",
          "40",
          "60"
        ],
        "temp": "$$ mana per pulses"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "140",
          "180"
        ],
        "temp": "$$ damages per pulse"
      },
      {
        "name": "Period Damages",
        "value": "1",
        "temp": "$$ second"
      }
    ],
    "name": "Hell Nova",
    "description": "The caster deals damages to enemies around him over the time when it is activated but drains some mana points per seconds too.",
    "ulti": true,
    "id": 115
  },
  {
    "type": "Target point",
    "targets": [
      "enemies",
      "ground",
      "air",
      "allies"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "4",
          "4.5",
          "5"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Hell in a Cell",
    "ulti": true,
    "description": "The caster blocks every units in an area during a short duration. Units are completly disables during that periode of time. Only the caster can move in the area. The caster get maximum moves speed bonus and can go throught units.",
    "manacost": [
      "150",
      "225",
      "300"
    ],
    "cooldown": [
      "130",
      "120",
      "110"
    ],
    "id": 116
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
        "name": "Cast Range",
        "value": "Globals"
      },
      {
        "name": "Area",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "90",
          "140",
          "190",
          "240"
        ]
      },
      {
        "name": "Missile Speed",
        "value": "1800",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Hellfire Canon",
    "description": "The caster throw a bolt to a target location. When the bolt reaches the target location it explodes dealing damages to the enemies in the target area.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "id": 117
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
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "70",
          "90",
          "110"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Duration",
        "value": [
          "8",
          "10",
          "12"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Wave Speed",
        "value": "900",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Hemoplague",
    "ulti": true,
    "description": "The caster summons a nova of plague that deals damages to enemies around during a short duration.",
    "manacost": [
      "140",
      "200",
      "260"
    ],
    "cooldown": [
      "100",
      "90",
      "80"
    ],
    "id": 118
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
        "name": "Duration For Hero",
        "value": [
          "1.5",
          "2",
          "2.5",
          "3"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration For Creep",
        "value": [
          "3",
          "4",
          "5",
          "6"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Hex",
    "description": "Transforms an enemy unit into a random critter, disabling special abilities.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": [
      "12",
      "11",
      "10",
      "9"
    ],
    "id": 119
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
        "name": "Damages",
        "value": [
          "90",
          "130",
          "170",
          "210"
        ]
      },
      {
        "name": "Nbr Enemies",
        "value": [
          "5",
          "7",
          "9",
          "11"
        ]
      },
      {
        "name": "Regeneration",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$ hp per bolt"
      },
      {
        "name": "Area",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Bolt Speed",
        "value": "500",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Holy Bolts",
    "description": "The caster deals damages to a random number of enemies around him, healing him.",
    "manacost": [
      "100",
      "120",
      "140",
      "160"
    ],
    "cooldown": [
      "30",
      "28",
      "26",
      "24"
    ],
    "id": 120
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
        "name": "Cast Range",
        "value": "850",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "4",
          "6",
          "8"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Area",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Push Speed",
        "value": "750",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Holy Persuasion",
    "ulti": true,
    "description": "Places a buff on a target unit that pushes away from him any enemies during a short duration.",
    "manacost": [
      "150",
      "180",
      "210"
    ],
    "cooldown": "60",
    "id": 121
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Restauration",
        "value": [
          "2",
          "3",
          "4",
          "5"
        ],
        "temp": "$$% of max life"
      }
    ],
    "name": "Holy Seal",
    "description": "When the caster is damaged it has 20% chances to restores a percentage of his max life.",
    "id": 122
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Area",
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ],
        "temp": "$$ per shard"
      },
      {
        "name": "Shard Speed",
        "value": "900",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Ice Shards",
    "description": "The caster places a buff on himself that will send ice shards to enemies around him each time it attacks. Last 6 seconds.",
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "cooldown": [
      "11",
      "9",
      "8",
      "7"
    ],
    "id": 123
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
        "name": "Area",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "1.5",
          "2",
          "2.5",
          "3"
        ],
        "temp": "$$% of target max life"
      }
    ],
    "name": "Illness",
    "description": "The enemies around the caster will loose a percentage of their max hp/sec.",
    "id": 124
  },
  {
    "type": "Instant",
    "targets": [],
    "params": [
      {
        "name": "Number of Images",
        "value": [
          "1",
          "2",
          "3"
        ]
      },
      {
        "name": "Spawn Delay",
        "value": "0.5",
        "temp": "$$ second"
      }
    ],
    "name": "Illusions Storm",
    "ulti": true,
    "description": "Creates some illusions of the hero that deals 100% damages but takes 200% damages.",
    "cooldown": [
      "100",
      "90",
      "80"
    ],
    "manacost": [
      "160",
      "240",
      "320"
    ],
    "id": 125
  },
  {
    "type": "Target unit/point",
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
        "name": "Area",
        "value": "250",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "60",
          "120",
          "180",
          "240"
        ]
      },
      {
        "name": "Wave Duration",
        "value": "0.33",
        "temp": "$$ second"
      },
      {
        "name": "Fly Time",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1",
          "1.3",
          "1.6",
          "1.9"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Impale",
    "description": "The caster shoots spiked tendrils out in a straight line, dealing damage and hurling enemy ground units into the air in their wake.",
    "manacost": [
      "100",
      "115",
      "130",
      "145"
    ],
    "cooldown": "9",
    "id": 126
  }
]