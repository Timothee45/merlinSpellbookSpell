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
  }
]