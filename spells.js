const mySpellsLibrary = [
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
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "6",
        "temp": "$$ seconds"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "4",
          "5.5",
          "7",
          "8.5"
        ],
        "temp": "$$% of maximum life"
      },
      {
        "name": "Move Speed Malus",
        "value": "20",
        "temp": "$$%"
      }
    ],
    "name": "Auto-Repair",
    "description": "The caster regenerates his life faster and decreases his move speed during a short duration.",
    "cooldown": "11",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 285
  },
  {
    "type": "Passive",
    "targets": [
      "self"
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
          "80",
          "140",
          "200",
          "260"
        ]
      },
      {
        "name": "Slow",
        "value": "75",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Avernus Curse",
    "description": "The hero is protected by the tempars. When an enemy casts a spell near the caster it deals some damages and slow the target during 2 seconds. The target will get back his move speed slowly.",
    "id": 294
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
    "type": "Target point",
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
        "name": "Area",
        "value": "350",
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
        "name": "Bonus Damages",
        "value": [
          "1",
          "2",
          "3",
          "4"
        ],
        "temp": "$$ per unit in the target area"
      }
    ],
    "name": "Battle Rush",
    "description": "The caster teleport himself to the target location dealing damages to enemies in the area. When it appears it get some damages in function of the number of enemies in the target area. Last 7 seconds.",
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "id": 330
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
        "name": "Cast Range",
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
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "12",
        "temp": "$$ seconds"
      },
      {
        "name": "Area Blast",
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "120",
          "190",
          "260",
          "330"
        ]
      }
    ],
    "name": "Blast Defense",
    "description": "The caster increases the power of his weapon to deals a huge blast of damages to the next attacked enemy and the enemies around.",
    "cooldown": [
      "15",
      "13",
      "11",
      "9"
    ],
    "manacost": [
      "95",
      "100",
      "105",
      "110"
    ],
    "id": 293
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
    "description": "A short distance teleportation that allows the caster to move in and out of combat. Maximum distance 900 ranges.",
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
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Regenerated",
        "value": [
          "1.25",
          "1.75",
          "2.25",
          "2.75"
        ],
        "temp": "$$% of the attacked unit's max life"
      }
    ],
    "name": "Blood Leech",
    "description": "This unit regenerates a percentage of the attacked unit's max life each attack it attacks.",
    "danger": "Does not works against buildings.",
    "id": 281
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "ground",
      "air",
      "heroes"
    ],
    "params": [
      {
        "name": "Life Lost",
        "value": "30"
      },
      {
        "name": "Duration",
        "value": [
          "30",
          "60",
          "90",
          "120"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Blood Letting",
    "description": "The caster remove some life to the attacked unit during a short duration.",
    "id": 309
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
    "description": "When an enemy has less than a certain amount of life of life the hero get an increased movespeed.",
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
        "name": "Cast Range",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "3",
          "4",
          "5",
          "6"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Mana Burn",
        "value": [
          "2",
          "3",
          "4",
          "5"
        ],
        "temp": "$$% of max mana"
      }
    ],
    "name": "Buried Alive",
    "description": "Burrow a friend or an enemy during a short duration. During that duration the target is disabled and can't be attacked or targeted by spells. When the target is unburrowed it burns some of his maximum mana if it's an enemy.",
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "manacost": [
      "95",
      "100",
      "105",
      "110"
    ],
    "id": 276
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
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Regeneration",
        "value": [
          "1",
          "2",
          "3",
          "4"
        ],
        "temp": "$$% of max mana"
      }
    ],
    "name": "Burton World",
    "description": "The caster increases his life regeneration in function of his max mana.",
    "id": 326
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
          "600",
          "650",
          "700",
          "750"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "200",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "90",
          "160",
          "230",
          "300"
        ]
      }
    ],
    "name": "Call Down",
    "description": "The caster moves to the target location from the sky after 1 second falling time. When the caster lands it deals some damages and stunns the enemies in the area during 1 second.",
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 329
  },
  {
    "type": "Target point",
    "targets": [
      "enemies",
      "allies",
      "non heroes"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "90",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": "15",
        "temp": "$$ seconds"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ],
        "temp": "$$% of the dead unit's max life"
      }
    ],
    "name": "Cannibalize",
    "description": "The caster eat a dead unit's body to regenerates his life during a short duration.",
    "cooldown": [
      "40",
      "36",
      "32",
      "28"
    ],
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "danger": "Does nor work against buildings, Arthas and heroes.",
    "id": 280
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
    "id": 34,
    "danger": "Orb effect does not stack."
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
        "name": "Cast Range",
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
        "name": "Cast Range",
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
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Restored",
        "value": [
          "50",
          "100",
          "150",
          "200"
        ],
        "temp": "$$ hp per spell."
      }
    ],
    "name": "Chakra",
    "description": "When the caster casts a spell it restore some life.",
    "id": 238
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
        "name": "Cast Range",
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
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Mana Regeneration",
        "value": [
          "1.5",
          "2.5",
          "3.5",
          "4.5"
        ],
        "temp": "$$% of max mana"
      }
    ],
    "name": "Concentration",
    "description": "The hero regenerates faster his mana in function of his maximum mana.",
    "id": 327
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
          "15",
          "40",
          "65",
          "90"
        ]
      }
    ],
    "name": "Concussive Hit",
    "description": "Gives 40% chance that an attack will do bonus damage and ministun an opponent for 0.25 seconds.",
    "id": 254
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
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Area Detection",
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Hp Regeneration",
        "value": [
          "0.25",
          "0.5",
          "0.75",
          "1"
        ],
        "temp": "$$ hp/s per death"
      }
    ],
    "name": "Dark Lord Offering",
    "description": "Each time an enemy hero dies around the hero it will add more life regeneration to him.",
    "id": 288
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
        "name": "Cast Ranges",
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
        "name": "Cast Range",
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
        "name": "Area",
        "value": [
          "260",
          "290",
          "320",
          "350"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1.75",
          "2",
          "2.25",
          "2.5"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Deep Impact",
    "description": "The caster deals damages and stunn the enemies around him.",
    "cooldown": [
      "13",
      "12",
      "11",
      "10"
    ],
    "manacost": [
      "95",
      "105",
      "115",
      "125"
    ],
    "id": 289
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
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Area",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Area Explosion",
        "value": "175",
        "temp": "$$ ranges"
      },
      {
        "name": "Area First Damages",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "65",
          "85",
          "105"
        ],
        "temp": "$$ damages per bolt"
      },
      {
        "name": "Primary Damages",
        "value": [
          "100",
          "140",
          "180"
        ]
      },
      {
        "name": "Vines Speed",
        "value": "750",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Defensive Vines",
    "ulti": true,
    "description": "The caster summons some vines around him that will deals damages to enemies around. Firstly the caster will deals damages to enemies around him then he will summon some vines. The vines explodes when they touches their targets.",
    "cooldown": [
      "85",
      "80",
      "75"
    ],
    "manacost": [
      "150",
      "190",
      "230"
    ],
    "id": 1
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
    "description": "The caster burns the target on attacks dealing damages over the time during 8 seconds. The buff stack indefinitly and are independant.",
    "manacost": [
      "40",
      "50",
      "60",
      "70"
    ],
    "id": 59,
    "danger": "Orb effect does not stack."
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
    "type": "Target point",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "Global"
      },
      {
        "name": "Fade Time",
        "value": "0.5",
        "temp": "$$ second"
      },
      {
        "name": "Max Ranges",
        "value": [
          "600",
          "800",
          "1000",
          "1200"
        ],
        "temp": "$$ ranges"
      }
    ],
    "name": "Displace",
    "description": "The caster moves to the target location after 0.5 seconds. If the target point is too far away from the caster it is recalculated.",
    "cooldown": "10",
    "manacost": [
      "100",
      "105",
      "110",
      "115"
    ],
    "id": 275
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
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Restored",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$ hp per attack"
      }
    ],
    "name": "Dragon Blood",
    "description": "Each time this unit is attacked by an enemy, it restore some life.",
    "id": 312
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
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Chance Avoid attacks",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      },
      {
        "name": "Chace Critical Strike",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Drunken Brawler",
    "description": "Gives a percent chance to avoid attacks and deal twice the damage on attacks.",
    "id": 270
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
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Missile Speed",
        "value": "1500",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Duration Hero",
        "value": "5",
        "temp": "$$ seconds"
      },
      {
        "name": "Duration Unit",
        "value": "9",
        "temp": "$$ seconds"
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$%"
      },
      {
        "name": "Miss Attacks",
        "value": [
          "40",
          "50",
          "60",
          "70"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Drunken Haze",
    "description": "Drenches enemy units in alcohol, causing their movement speed to be reduced, and have a chance to miss on attacks.",
    "cooldown": [
      "10",
      "8",
      "6",
      "4"
    ],
    "manacost": [
      "70",
      "75",
      "80",
      "85"
    ],
    "id": 296
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
    "type": "Target point",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Spell Area",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Period Slam",
        "value": "0.2",
        "temp": "$$ second"
      },
      {
        "name": "Area Slam",
        "value": "250",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "120",
          "140"
        ],
        "temp": "$$ damages per slam"
      },
      {
        "name": "Slow Duration",
        "value": "4",
        "temp": "$$ seconds"
      },
      {
        "name": "Attack Speed Slow",
        "value": "40",
        "temp": "$$%"
      },
      {
        "name": "Move Speed Slow",
        "value": "50",
        "temp": "$$%"
      },
      {
        "name": "Nbr Slams",
        "value": [
          "8",
          "12",
          "16"
        ],
        "temp": ""
      }
    ],
    "name": "Earthquake",
    "description": "The caster summons an earthquake in the target area. That will summons some quakes in random points in the target area. Each quake will damages and slow enemies during a short duration.",
    "cooldown": [
      "140",
      "130",
      "120"
    ],
    "manacost": [
      "200",
      "275",
      "350"
    ],
    "id": 295,
    "ulti": true
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
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": "2.5",
        "temp": "$$ seconds"
      },
      {
        "name": "Nbr Rays",
        "value": [
          "8",
          "12",
          "16"
        ]
      },
      {
        "name": "Area Pillar",
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages Per Pillar",
        "value": [
          "95",
          "110",
          "125"
        ],
        "temp": "$$ damages/s per pillar"
      }
    ],
    "name": "Eclipse",
    "description": "The caster summons some light reay that deals damages to enemies around.",
    "cooldown": [
      "110",
      "95",
      "80"
    ],
    "manacost": [
      "140",
      "200",
      "260"
    ],
    "id": 290,
    "ulti": true
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
      "self"
    ],
    "params": [
      {
        "name": "Damages",
        "value": [
          "14",
          "20",
          "26",
          "32"
        ]
      }
    ],
    "name": "Enchanted Attacks",
    "description": "Increases permenantly the hero damages.",
    "id": 317
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
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Slam Period",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Nbr Slams",
        "value": [
          "3",
          "5",
          "7"
        ]
      },
      {
        "name": "Area",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": "90"
      },
      {
        "name": "Buff Duration",
        "value": "4",
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
    "name": "Enchanted Sparkles",
    "ulti": true,
    "description": "The caster produces a number of slams that deals damages to enemies around. Every second a slam is created at the caster's current location. The enemies around are slowed over the time.",
    "cooldown": [
      "105",
      "100",
      "95"
    ],
    "manacost": [
      "200",
      "275",
      "350"
    ],
    "id": 325
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
    "type": "Target unit",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed Steal",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$ ranges/s on basic move speed"
      }
    ],
    "name": "Energy Steal",
    "description": "The caster steals some move speed to the target enemy. Last 5 seconds.",
    "cooldown": [
      "15",
      "14",
      "13",
      "12"
    ],
    "manacost": [
      "95",
      "105",
      "115",
      "125"
    ],
    "id": 273
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
        "value": "700",
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
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "enemies"
    ],
    "params": [
      {
        "name": "Mana Burned",
        "value": [
          "28",
          "40",
          "52",
          "64"
        ],
        "temp": "$$ mana points per attack"
      },
      {
        "name": "Damages",
        "value": "50",
        "temp": "$$% of mana burnt"
      }
    ],
    "description": "The hero attacks destroy some mana per hit against any unit, causing bonus damage equal to the mana destroyed.",
    "name": "Feedback",
    "id": 267
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
        "name": "Area",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Max Targets",
        "value": [
          "2",
          "4",
          "6",
          "8"
        ]
      },
      {
        "name": "Damages",
        "value": [
          "90",
          "165",
          "240",
          "315"
        ]
      }
    ],
    "name": "Forked Lightning",
    "description": "The caster summons some lightnings bolts that deals damages to some targets around the primary one.",
    "manacost": [
      "95",
      "105",
      "115",
      "125"
    ],
    "cooldown": [
      "14",
      "12",
      "10",
      "8"
    ],
    "id": 292
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
          "40",
          "60",
          "80",
          "100"
        ]
      }
    ],
    "name": "Four Kisses",
    "description": "The caster throw the attacked unit in the air every 4 attacks disabling it during 1 second.",
    "id": 305
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
        "name": "Damages Bonus",
        "value": [
          "30",
          "60",
          "90",
          "120"
        ],
        "temp": "$$%"
      },
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
        "name": "Damages Dealt to Target",
        "value": "20",
        "temp": "$$ damages per second"
      }
    ],
    "name": "Frenzy",
    "description": "The caster increases the damages of an allied unit. But deals damages over the time and silence it.",
    "cooldown": [
      "12",
      "10",
      "8",
      "6"
    ],
    "manacost": [
      "80",
      "85",
      "90",
      "95"
    ],
    "id": 264
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
        "name": "Attack Speed Bonus",
        "value": [
          "40",
          "60",
          "80",
          "100"
        ],
        "temp": "$$%"
      },
      {
        "name": "Duration",
        "value": "6",
        "temp": "$$ seconds"
      }
    ],
    "name": "Fury",
    "description": "The caster increases a friend attack speed during a short duration.",
    "cooldown": [
      "16",
      "14.5",
      "13",
      "11.5"
    ],
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "id": 263
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
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Regeneration",
        "value": [
          "0.5",
          "1",
          "1.5",
          "2"
        ],
        "temp": "$$% of max life per second"
      }
    ],
    "name": "Giant Resistance",
    "description": "The hero has an increased life regeneration based on his max life.",
    "id": 313
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
      "self"
    ],
    "params": [
      {
        "name": "Bonus Gold",
        "value": [
          "8",
          "12",
          "16",
          "20"
        ]
      }
    ],
    "name": "Gold Fever",
    "description": "When the hero kills a unit it get a bonus of gold. If it's a hero the bonus is multiplied by 3 and if it's a building by 2.",
    "id": 185
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
        "value": "450",
        "temp": "$$ ranges"
      }
    ],
    "name": "Healing Touch",
    "description": "The caster regenerates a 7% of the allied around max life.",
    "cooldown": [
      "16",
      "12",
      "8",
      "4"
    ],
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 283
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
        "name": "Bolt Speed",
        "value": [
          "1300",
          "1600",
          "1900",
          "2200"
        ],
        "temp": "$$ ranges/s"
      },
      {
        "name": "Damages",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$% of the target max life"
      }
    ],
    "name": "Heart Piercer",
    "description": "The caster send a bolt to the target enemy that deals damages equal to a percentage of the target max Life.",
    "cooldown": [
      "11",
      "9.5",
      "8",
      "6.5"
    ],
    "manacost": [
      "100",
      "115",
      "130",
      "145"
    ],
    "id": 297
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
        "name": "Mana Stolen",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ]
      }
    ],
    "name": "Hephaestus Blessing",
    "description": "Each attack the hero steals some mana to the attacked unit.",
    "id": 324
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
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Area Search",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Period Light Spawn",
        "value": "0.3",
        "temp": "$$ second"
      },
      {
        "name": "Bolt Speed",
        "value": "800",
        "temp": "$$ ranges/s"
      },
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
        "name": "Damages",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$ damages per bolt"
      }
    ],
    "name": "Holy Lights",
    "description": "The caster places a buff on the target allied unit or himself. This will deals damages to a random enemy around every 0.3 seconds.",
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "id": 321
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
    "type": "Target point",
    "targets": [
      "enemies",
      "ground",
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "125",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance",
        "value": "825",
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
        "name": "Wave Speed",
        "value": "1600",
        "temp": "$$ ranges/s"
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
        "name": "Damages",
        "value": [
          "24",
          "28",
          "32"
        ],
        "temp": "$$% of the distance"
      },
      {
        "name": "Cast Range",
        "value": "550",
        "temp": "$$ ranges"
      }
    ],
    "name": "Impetus",
    "ulti": true,
    "description": "The caster add some damages to his attack equal to a percentage of the distance between the caster and his target.",
    "manacost": [
      "40",
      "55",
      "70"
    ],
    "danger": "Orb effect does not stack.",
    "id": 204
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
        "value": "900",
        "temp": "$$ ranges"
      },
      {
        "name": "Mana Loss",
        "value": [
          "2",
          "4",
          "6",
          "8"
        ],
        "temp": "$$ mana points per second"
      }
    ],
    "name": "Incanters Block",
    "description": "The caster decreases the enemies around mana over the time.",
    "id": 328
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
        "name": "Damages Bonus",
        "value": [
          "14",
          "20",
          "26",
          "32"
        ],
        "temp": "$$% damages taken"
      }
    ],
    "name": "Incinerate",
    "description": "The target is slowed by 20% and takes extra damages. Last 8 seconds.",
    "manacost": [
      "90",
      "105",
      "120",
      "135"
    ],
    "cooldown": [
      "15",
      "14",
      "13",
      "12"
    ],
    "id": 127
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
        "name": "Bonus Move Speed",
        "value": "20",
        "temp": "$$ move speed per second"
      },
      {
        "name": "Duration",
        "value": [
          "5",
          "7",
          "9",
          "11"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Increase Reflexes",
    "description": "The caster increases the target's move speed during a short duration. The move speed bonus is added slowly.",
    "cooldown": [
      "14",
      "12",
      "10",
      "8"
    ],
    "manacost": [
      "95",
      "100",
      "105",
      "110"
    ],
    "id": 314
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
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Impact Delay",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Damages",
        "value": [
          "150",
          "225",
          "300"
        ]
      },
      {
        "name": "Infernal Duration",
        "temp": "$$ seconds",
        "value": "180"
      },
      {
        "name": "Area",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Stunn Duration",
        "value": "2",
        "temp": "$$ seconds"
      },
      {
        "name": "Infernal Max Hp",
        "value": [
          "1200",
          "1600",
          "2000"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Infernal Damages",
        "value": [
          "60",
          "80",
          "100"
        ]
      },
      {
        "name": "Infernal Armor",
        "value": [
          "6",
          "8",
          "10"
        ]
      },
      {
        "name": "Infernal Move Speed",
        "value": "320",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Infernal Attack Rate",
        "value": "1.5",
        "temp": "$$ seconds"
      }
    ],
    "name": "Inferno",
    "ulti": true,
    "description": "Calls an Infernal down from the sky, dealing damage in the target area and stunning enemy land units for a short duration.",
    "manacost": [
      "220",
      "270",
      "320"
    ],
    "cooldown": [
      "160",
      "140",
      "120"
    ],
    "id": 128
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
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Hp Regeneration",
        "value": [
          "3",
          "4",
          "5"
        ],
        "temp": "$$% of max life"
      }
    ],
    "name": "Inner Fire",
    "ulti": true,
    "description": "Places a buff on allied units around you that heals a percentage of their max life during 6 seconds.",
    "manacost": [
      "120",
      "200",
      "280"
    ],
    "cooldown": [
      "90",
      "80",
      "70"
    ],
    "id": 129
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
          "600",
          "700",
          "800",
          "900"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Min Damages",
        "value": [
          "30",
          "50",
          "70",
          "90"
        ]
      },
      {
        "name": "Max Damages",
        "value": [
          "250",
          "300",
          "350",
          "400"
        ]
      },
      {
        "name": "Missile Speed",
        "value": "1000",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Inquisition Verdict",
    "description": "Throw a bolt of lightning energies that will deals random damages to the targeted unit.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": "8",
    "id": 130
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
          "700",
          "800",
          "900",
          "1000"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "120",
          "190",
          "260",
          "330"
        ]
      },
      {
        "name": "Bolt Speed",
        "value": "1300",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Distance Max",
        "value": [
          "850",
          "1000",
          "1150",
          "1300"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "45",
        "temp": "$$ ranges"
      }
    ],
    "name": "Instant Death",
    "description": "The caster throw a bolt in a direction that deals some damages to the first enemy touched. The damaged enemy is stunned during 0.5 second. If it target a non hero unit the target is destroyed.",
    "cooldown": [
      "20",
      "17",
      "14",
      "11"
    ],
    "manacost": [
      "100",
      "115",
      "130",
      "145"
    ],
    "id": 302,
    "danger": "Does not destroy Arthas."
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
        "value": [
          "400",
          "450",
          "500",
          "550"
        ],
        "temp": "$$ ranges"
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
      }
    ],
    "name": "Invisibility",
    "description": "The target becomes invisible during a short duration. If the target attack it will loose his invisibility.",
    "manacost": [
      "110",
      "130",
      "150",
      "170"
    ],
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "id": 131
  },
  {
    "type": "Target point",
    "targets": [
      "air",
      "ground",
      "enemies"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Tower Life",
        "value": [
          "650",
          "850",
          "1050",
          "1250"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Tower Damages",
        "value": [
          "35",
          "55",
          "75",
          "95"
        ]
      },
      {
        "name": "Tower Armor",
        "value": [
          "5",
          "7",
          "9",
          "11"
        ],
        "temp": ""
      },
      {
        "name": "Building Time",
        "value": "5",
        "temp": "$$ seconds"
      },
      {
        "name": "Duration",
        "value": "40",
        "temp": "$$ seconds"
      }
    ],
    "name": "Invoke Tower",
    "description": "The caster invoke a spirit tower that will attacks enemies around. After a small building duration the tower will attack the enemies.",
    "manacost": [
      "70",
      "75",
      "80",
      "85"
    ],
    "cooldown": [
      "40",
      "35",
      "30",
      "25"
    ],
    "id": 132
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
        "name": "Area",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "140",
          "160"
        ],
        "temp": "$$ damages per second"
      },
      {
        "name": "Area Bonus Damages",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Bonus Damages",
        "value": "40",
        "temp": "$$%"
      },
      {
        "name": "Orb Move Speed",
        "value": [
          "300",
          "320",
          "340"
        ],
        "temp": "$$ ranges per second"
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
        "name": "Percentage Heal Allied",
        "value": "75",
        "temp": "$$%"
      }
    ],
    "name": "Invoke the Orb of Blood",
    "description": "The caster summons a flying orb that deals damages to enemies around it and heals the allied around.",
    "cooldown": [
      "80",
      "75",
      "70"
    ],
    "manacost": [
      "110",
      "160",
      "210"
    ],
    "ulti": true,
    "id": 266
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
        "name": "Basic Damages",
        "value": [
          "25",
          "45",
          "65",
          "85"
        ],
        "temp": ""
      },
      {
        "name": "Bonus Damages",
        "value": [
          "5",
          "8",
          "11",
          "14"
        ],
        "temp": "$$x the caster's Level"
      },
      {
        "name": "Missile Speed",
        "value": "1200",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Judgment of Experience",
    "description": "The caster deals damages to a target in function of the level of the caster.",
    "manacost": [
      "90",
      "110",
      "130",
      "150"
    ],
    "cooldown": "9",
    "id": 133
  },
  {
    "type": "Target point",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": [
          "500",
          "550",
          "600",
          "650"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Jump Duration",
        "value": "1.5",
        "temp": "$$ seconds"
      },
      {
        "name": "Area",
        "value": "250",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "120",
          "150",
          "180",
          "210"
        ]
      }
    ],
    "name": "Jump",
    "description": "The caster moves to the target location. The caster deals damages when it lands.",
    "cooldown": [
      "14",
      "12",
      "10",
      "8"
    ],
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 299
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
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Bonus Attack Speed",
        "value": "100",
        "temp": "$$%"
      },
      {
        "name": "Duration",
        "value": "5",
        "temp": "$$ seconds"
      }
    ],
    "name": "Killer Dash",
    "description": "The caster dashes to the target unit position to attack it gainig a bonus of attack speed.",
    "cooldown": [
      "12",
      "10",
      "8",
      "6"
    ],
    "manacost": [
      "75",
      "85",
      "95",
      "105"
    ],
    "id": 240
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Attack Speed Bonus",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      },
      {
        "name": "Attack Bonus",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Killer Instinct",
    "description": "Increases passively the damages and the attack rate of the hero.",
    "id": 134
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
          "2",
          "4",
          "6",
          "8"
        ],
        "temp": "$$% of max life"
      }
    ],
    "name": "Kinetic Charge",
    "description": "When the caster casts a spell he deals damages to enemies around 650 Aoe, based on their max life.",
    "id": 135
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "ground",
      "air",
      "organics"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Lacerate",
    "description": "Each times the hero attacks an organic unit it removes 1 armor during a short duration.",
    "id": 136
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
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Target Area",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Blades",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ]
      },
      {
        "name": "Bades Speed",
        "value": "1200",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance",
        "value": "1400",
        "temp": "$$ ranges per blade"
      },
      {
        "name": "Radius Blades",
        "value": "63",
        "temp": "$$ ranges"
      }
    ],
    "name": "Laguna Blades",
    "description": "The caster throw some spinning blades in a target area that deals damages to enemies. Enemies damaged are ministunned during 0.2 second.",
    "cooldown": [
      "15",
      "13.5",
      "12",
      "10.5"
    ],
    "manacost": [
      "90",
      "105",
      "120",
      "135"
    ],
    "id": 287
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
      "air"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Spirit Damages",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ]
      },
      {
        "name": "Spirit Life",
        "value": [
          "200",
          "250",
          "300",
          "350"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Missile Speed",
        "value": "1000",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Duration",
        "value": "25",
        "temp": "$$ seconds"
      }
    ],
    "name": "Lava Spawn",
    "description": "The caster kills the targeted unit and summons a lava warrior that will fight for you during 25 seconds. If a lava spawn attack more than 5 times it summons an other lava spawn and get 5 more lifespawn seconds.",
    "manacost": [
      "40",
      "50",
      "60",
      "70"
    ],
    "cooldown": [
      "25",
      "23",
      "21",
      "19"
    ],
    "id": 137
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Attack Speed Slow",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
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
        "name": "Damages",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Duration",
        "value": "3",
        "temp": "$$ seconds"
      }
    ],
    "name": "Lethal Secretions",
    "description": "Add passively some magic resistance and the aptitude to slow and damages enemies that deals damages to the target.",
    "id": 138
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
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": "10",
        "temp": "$$ seconds"
      },
      {
        "name": "Drain Interval",
        "value": "1",
        "temp": "$$ second"
      }
    ],
    "name": "Life Drain",
    "ulti": true,
    "description": "Steals the life of an enemy per seconds during a short duration. If the distance between the caster and the target is bigger than 1000 ranges the spells breaks.",
    "manacost": [
      "125",
      "175",
      "225"
    ],
    "cooldown": "25",
    "danger": "This spell is a channeling spell.",
    "id": 139
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Regeneration",
        "value": [
          "2",
          "3.5",
          "5",
          "6.5"
        ],
        "temp": "$$ hp/s"
      },
      {
        "name": "Mana Regeneration",
        "value": [
          "4",
          "6.5",
          "9",
          "11.5"
        ],
        "temp": "$$ mana points/s"
      }
    ],
    "name": "Life Essence",
    "description": "When the hero kills an enemy it get an increased life and mana regeneration during 6 seconds. Multiple kills causes the buffs to stask. If the hero kill a hero he get 10 times the bonus on both life and mana regeneration.",
    "id": 235
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "air",
      "ground"
    ],
    "params": [
      {
        "name": "Life Restaured",
        "value": [
          "8",
          "12",
          "16",
          "20"
        ],
        "temp": "$$% of max life"
      }
    ],
    "name": "Lifestealer Blade",
    "description": "When the hero attacks he has 15% chances to restores a percentage of his max life.",
    "id": 140
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
        "value": [
          "3",
          "4",
          "5"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Speed",
        "value": "1200",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area Damages",
        "value": "75",
        "temp": "$$ ranges"
      }
    ],
    "name": "Light Speed",
    "ulti": true,
    "description": "The caster get a buff that increases his movespeed during a short duration. Any enemies that he goes throught get damaged.",
    "cooldown": [
      "80",
      "70",
      "60"
    ],
    "manacost": [
      "150",
      "225",
      "300"
    ],
    "id": 141
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
        "name": "Damages",
        "temp": "",
        "value": [
          "100",
          "140",
          "180",
          "220"
        ]
      },
      {
        "name": "Malus Move Speed Primary Target",
        "value": "180",
        "temp": "$$ ranges/s as basic move speed"
      },
      {
        "name": "Malus Move Speed Other Targets",
        "value": "120",
        "temp": "$$ ranges/s as basic move speed"
      },
      {
        "name": "Duration",
        "value": [
          "1",
          "2",
          "3",
          "4"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "140",
          "180",
          "220"
        ]
      },
      {
        "name": "Area",
        "value": "350",
        "temp": "$$ ranges"
      }
    ],
    "name": "Lightning Strike",
    "description": "The caster summons a lightning bolt that strike the ground dealing damages in an area around the impact. Slowing the enemies during a short duration, enemies damaged will regain their move speed slowly.",
    "cooldown": [
      "14",
      "12.5",
      "11",
      "9.5"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 277
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
        "name": "Armor Bonus",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ]
      },
      {
        "name": "Regeneration Bonus",
        "value": [
          "5",
          "7",
          "9",
          "11"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Living Armor",
    "description": "The caster increases the target armor and life regeneration during 14 seconds.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": "10",
    "id": 142
  },
  {
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air",
      "buildings"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "35",
        "temp": "$$ seconds"
      },
      {
        "name": "Area Bats Attacks",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Spawn Interval",
        "value": "0.3",
        "temp": "$$ seconds"
      },
      {
        "name": "Number of Unit Spawn",
        "value": [
          "8",
          "16",
          "24"
        ],
        "temp": "$$ bats"
      },
      {
        "name": "Damages Returned",
        "value": "25",
        "temp": "$$%"
      },
      {
        "name": "Damage",
        "value": "55 - 65",
        "temp": "$$ per bat"
      }
    ],
    "name": "Locust Swarm",
    "ulti": true,
    "description": "Creates a swarm of angry bats that bites and tear at nearby enemy units. As they chew the enemy flesh, they convert it into a substance that restores hit points to the hero when they return.",
    "cooldown": [
      "150",
      "145",
      "140"
    ],
    "manacost": [
      "150",
      "250",
      "350"
    ],
    "id": 320
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Bonus Range",
        "value": [
          "75",
          "150",
          "225",
          "300"
        ],
        "temp": "$$ ranges"
      }
    ],
    "name": "Long Rifle",
    "description": "Add to the caster some attack range.",
    "id": 143
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
          "120",
          "150",
          "180"
        ]
      },
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
        "name": "Speed",
        "value": "1400",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Distance",
        "value": "1400",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "250",
        "temp": "$$ ranges"
      }
    ],
    "name": "Lunar Blade",
    "description": "The caster throw a wave in a direction that deals damages to ennemies in a line decreasing their armor during 8 seconds.",
    "manacost": [
      "70",
      "80",
      "90",
      "100"
    ],
    "cooldown": "10",
    "id": 144
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
        "name": "Bonus Attack Speed",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$% attack speed per stask"
      }
    ],
    "description": "The caster get increased attack speed each time it attacks the same unit. Stacks 5 times. When the hero attacks an other unit the stacks area lost.",
    "name": "Madness",
    "id": 145
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
        "name": "Damages",
        "value": [
          "90",
          "140",
          "190",
          "240"
        ]
      },
      {
        "name": "Stunn Duration Heroes",
        "value": [
          "1",
          "1.4",
          "1.8",
          "2.2"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Stunn Duration Creeps",
        "value": [
          "2",
          "2.4",
          "2.8",
          "3.2"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Bolt Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Magic Bolt",
    "description": "The caster throw a bolt that will deals damages to a target stunning it for a short duration.",
    "manacost": [
      "100",
      "105",
      "110",
      "115"
    ],
    "cooldown": "8",
    "id": 146
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
        "name": "Duration",
        "value": "8",
        "temp": "$$ seconds"
      },
      {
        "name": "Cast Range",
        "value": "850",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Mana Burn",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ],
        "temp": "$$ mana points/s"
      },
      {
        "name": "Damages",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ],
        "temp": "$$ damages/s"
      }
    ],
    "name": "Magic Curse",
    "description": "The caster places a curse on enemies in an area that burns mana over the time, dealing damages over the time. Each time the cursed ennemy casts a spell the duration is increased by 2 seconds.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": [
      "13",
      "12",
      "11",
      "10"
    ],
    "id": 147
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
        "value": [
          "4",
          "5.5",
          "7"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Magic Stasis",
    "ulti": true,
    "description": "Silences every enemies in the map during a short duration.",
    "manacost": [
      "220",
      "260",
      "300"
    ],
    "cooldown": "100",
    "id": 148
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
        "value": "750",
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
          "100",
          "170",
          "240",
          "310"
        ]
      },
      {
        "name": "Damages Delay",
        "value": "2",
        "temp": "$$ seconds"
      }
    ],
    "name": "Magmatic Comets",
    "description": "The caster summons some comets on an area that deals damages to enemies after a short duration. Deals 80% of the damages on buildings.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": [
      "11",
      "10",
      "9",
      "8"
    ],
    "id": 149
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
        "name": "Mana Loss",
        "value": [
          "100",
          "150",
          "200",
          "250"
        ],
        "temp": "$$% mana regeneration loss"
      },
      {
        "name": "Mana Burn",
        "value": [
          "20",
          "35",
          "50",
          "65"
        ],
        "temp": "$$% of the spell cost"
      }
    ],
    "name": "Mana Leak",
    "description": "Removes mana from enemies around per seconds. When an enemy casts a spell it burns a percentage of mana used to casts the spell.",
    "id": 150
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Manacost",
        "value": [
          "1.3",
          "1.6",
          "1.9",
          "2.2"
        ],
        "temp": "$$ damages/mana points"
      },
      {
        "name": "Max Damages Absorbed",
        "value": "60",
        "temp": "$$%"
      }
    ],
    "name": "Mana Shield",
    "description": "Activate a shield that absorb some damage draining some manapoints.",
    "id": 151
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
        "name": "Bolt Speed",
        "value": "550",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Mana Stolen",
        "value": [
          "75",
          "100",
          "125",
          "150"
        ],
        "temp": "$$ mana points"
      }
    ],
    "name": "Mana Steal",
    "description": "Steals some mana from a target unit.",
    "manacost": [
      "35",
      "45",
      "55",
      "65"
    ],
    "cooldown": [
      "14",
      "13",
      "12",
      "11"
    ],
    "id": 152
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
        "name": "Armor Reduction",
        "value": [
          "3",
          "4",
          "5",
          "6"
        ]
      }
    ],
    "name": "Mangle",
    "description": "Decreases passivly the armor of the enemy you're attacking during 5 seconds.",
    "id": 153
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Agility Bonus",
        "value": [
          "15",
          "25",
          "35"
        ]
      }
    ],
    "name": "Markmanship",
    "ulti": true,
    "description": "Gives a permanent bonus to Agility.",
    "id": 154
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
        "name": "Move Speed Malus",
        "value": [
          "30",
          "40",
          "50"
        ],
        "temp": "$$%"
      },
      {
        "name": "Attack Speed Malus",
        "value": [
          "30",
          "50",
          "70"
        ],
        "temp": "$$%"
      },
      {
        "name": "Area",
        "value": "Global"
      }
    ],
    "name": "Mental Affliction",
    "ulti": true,
    "description": "Slows every units owned by opponent players during 15 seconds. Does not works with lane creeps and jungle creeps.",
    "manacost": [
      "110",
      "150",
      "190"
    ],
    "cooldown": [
      "110",
      "100",
      "90"
    ],
    "id": 155
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Spawn Delay",
        "value": "0.3",
        "temp": "$$ second"
      },
      {
        "name": "Damages Taken",
        "value": [
          "400",
          "350",
          "300",
          "250"
        ],
        "temp": "$$% of damages received"
      },
      {
        "name": "Damages Dealt",
        "value": [
          "20",
          "25",
          "30",
          "35"
        ],
        "temp": "$$% of damages dealt"
      },
      {
        "name": "Duration",
        "value": "30",
        "temp": "$$ seconds"
      }
    ],
    "name": "Mirror Image",
    "description": "Confuses the enemy by creating 3 illusions of the hero and dispelling all magic from the hero. Illusions takes more damages that the caster and deals less damages.",
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "cooldown": "40",
    "id": 156
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
        "name": "Nbr Max Waves",
        "value": [
          "10",
          "14",
          "18"
        ]
      },
      {
        "name": "Damages",
        "value": [
          "30",
          "45",
          "60"
        ],
        "temp": "$$ damages per wave"
      },
      {
        "name": "Search Radius",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Distance",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Area",
        "value": "125",
        "temp": "$$ ranges"
      }
    ],
    "name": "Mistral",
    "ulti": true,
    "description": "The caster summons some wave in the direction of a random number of enemies around him. Each wave deals damages to enemies in a line. Each wave has a direction calculated with the position of the target unit when the spell was cast, and moves to the maximum distance.",
    "manacost": [
      "160",
      "200",
      "240"
    ],
    "cooldown": [
      "100",
      "95",
      "90"
    ],
    "id": 157
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
          "50",
          "100",
          "150"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Slow",
        "value": [
          "40",
          "60",
          "80"
        ],
        "temp": "$$%"
      },
      {
        "name": "Bolt Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Molten Shot",
    "ulti": true,
    "description": "The caster send a bolt of fire to the target enemy that deals damages over the time, slowing the target during 5 seconds.",
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
    "id": 158
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Fade  Time",
        "value": "3",
        "temp": "$$ seconds"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$ hp/s"
      },
      {
        "name": "Mana Regeneration",
        "value": [
          "5",
          "7",
          "9",
          "11"
        ],
        "temp": "$$ mana points/s"
      }
    ],
    "name": "Moon's Grace",
    "description": "The caster get an increased life, mana regeneration and permanent invisibility during nigth.",
    "id": 159
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Damage Bonus",
        "value": [
          "4",
          "8",
          "12",
          "16"
        ],
        "temp": "$$% of current move speed"
      }
    ],
    "name": "Murdering Haste",
    "description": "The hero get a passive damage bonus in function of his current movespeed.",
    "id": 160
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Restoration",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Natural Attendants",
    "description": "Restore the caster's life over the time during 10 seconds.",
    "manacost": [
      "120",
      "135",
      "150",
      "165"
    ],
    "cooldown": [
      "45",
      "40",
      "35",
      "30"
    ],
    "id": 161
  },
  {
    "type": "Target point",
    "targets": [
      "none"
    ],
    "params": [
      {
        "name": "Nbr Treants",
        "value": [
          "2",
          "3",
          "4",
          "5"
        ]
      },
      {
        "name": "Area",
        "value": [
          "150",
          "225",
          "300",
          "375"
        ],
        "temp": "$$ ranges"
      },
      {
        "name": "Cast Range",
        "value": "800",
        "temp": "$$ ranges"
      }
    ],
    "name": "Natural Evolution",
    "description": "Summons some traents with the trees in an area, that fight with the caster during 60 seconds.",
    "manacost": [
      "125",
      "135",
      "145",
      "155"
    ],
    "cooldown": "35",
    "id": 162
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
          "6",
          "7",
          "8"
        ],
        "temp": "$$% of max attacked life"
      }
    ],
    "name": "Nature's Wrath",
    "description": "The hero has 20% chance to deals a bonus damages to the attacked unit equal to a percentage of the target max life, slowing his movespeed by 20%, during 3 seconds.",
    "id": 163
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
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "250",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "160",
          "220",
          "280"
        ],
        "temp": "$$ damages"
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1.1",
          "1.4",
          "1.7",
          "2.0"
        ],
        "temp": "$$ seconds duration"
      }
    ],
    "name": "Necrotic Blast",
    "description": "After 0.5 second delay the caster blasts an area that deals damages in an area stunning enemies for a short duration.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "8",
    "id": 164
  },
  {
    "type": "Passive",
    "targets": [],
    "params": [
      {
        "name": "Mana Restoration",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$ mana points"
      },
      {
        "name": "Life Restoration",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "Necrotic Strike",
    "description": "The caster restore some life and mana each time the hero attack.",
    "id": 316
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
        "name": "Basic Damages",
        "value": [
          "3",
          "6",
          "9",
          "12"
        ]
      },
      {
        "name": "Maximum Damages",
        "value": [
          "30",
          "50",
          "70",
          "90"
        ]
      }
    ],
    "name": "Nethertoxin",
    "description": "Increases the damages dealt by the hero in function of the missiing life of the attacked unit. Half the bonus on non-hero units.",
    "id": 165
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
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "5",
          "5.5",
          "6",
          "6.5"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Attack Speed Slow",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Neutralize",
    "description": "The caster decreases the enemies attack speed during a short duration.",
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "id": 272
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
        "value": "1600",
        "temp": "$$ ranges"
      },
      {
        "name": "Effect Delay",
        "value": "2",
        "temp": "$$ seconds"
      },
      {
        "name": "Area",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Max Damages",
        "value": [
          "280",
          "400",
          "520"
        ]
      }
    ],
    "name": "Nuclear Strike",
    "ulti": true,
    "description": "The caster send a missile in the target area that will deals damages to enemies in the area in function of the distance from the impact location.",
    "cooldown": [
      "140",
      "130",
      "120"
    ],
    "manacost": [
      "150",
      "200",
      "250"
    ],
    "id": 310
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
        "name": "Duration",
        "value": [
          "4",
          "5",
          "6",
          "7"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Nullify Diseases",
    "description": "The caster places a buff on the target enemy during a short duration that prevents unit from death. If the amount of life decreases below 1 it is reset to 1.",
    "cooldown": [
      "22",
      "21",
      "20",
      "19"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 166
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
          "10",
          "15",
          "20"
        ],
        "temp": "$$ damages per attack"
      }
    ],
    "name": "Overpower",
    "ulti": true,
    "description": "The caster deals more damages each attacks on non-building units, last 10 seconds.",
    "manacost": [
      "80",
      "95",
      "110"
    ],
    "cooldown": "60",
    "id": 167
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
        "name": "Attack Speed Reduction",
        "value": [
          "25",
          "45",
          "65",
          "85"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Pacifism",
    "description": "When this hero is attacked he reduces the attacking enemy attack speed during 4 seconds.",
    "id": 168
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
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages Delay",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Starting Damages",
        "value": [
          "1",
          "1.5",
          "2"
        ]
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
        "name": "Coeff Maximum",
        "value": [
          "4096",
          "8192",
          "16384"
        ],
        "temp": "$$x starting damages"
      }
    ],
    "name": "Painful Sentence",
    "ulti": true,
    "description": "The target is slowed and takes damages over the time, during a long duration, or until the target moves over than 600 ranges far away from the caster. Each seconds the spells deals twice the precedent damages.",
    "manacost": [
      "120",
      "160",
      "200"
    ],
    "cooldown": [
      "80",
      "70",
      "60"
    ],
    "id": 169
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
    "name": "Pandaren Dodge",
    "description": "When the caster is damaged by attacks or spells, he has a chance to avoid the damages.",
    "id": 73
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
        "value": "275",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "130",
          "160",
          "190"
        ]
      }
    ],
    "name": "Parade",
    "description": "When the hero is attacked it has 17% chances to deals damages to enemies around.",
    "cooldown": [
      "0.55",
      "0.5",
      "0.45",
      "0.4"
    ],
    "id": 268
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
        "name": "Life Restored",
        "value": [
          "10",
          "12",
          "14",
          "16"
        ],
        "temp": "$$% of the distance walked"
      }
    ],
    "name": "Patience",
    "description": "Give to the target a buff that regenerate him in function of the distance walked. If the target attacks the buff is removed. Last 7 seconds.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "15",
    "id": 170
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Fade Delay",
        "value": [
          "6",
          "5",
          "4",
          "3"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Permanent Invisibility",
    "description": "The caster becomes invisible after a few seconds with attacking. If the caster attacks while invisible the buff is removed. The hero canuse items or spells without breaking the invisibility.",
    "id": 171
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
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Armor Malus",
        "value": [
          "3",
          "4",
          "5",
          "6"
        ]
      }
    ],
    "name": "Phantom Strike",
    "description": "The caster dashes to the target unit location, decreasing his armor during 4 seconds.",
    "manacost": [
      "45",
      "55",
      "65",
      "75"
    ],
    "cooldown": [
      "12",
      "10.5",
      "9",
      "7.5"
    ],
    "id": 172
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
          "150",
          "250",
          "350",
          "450"
        ]
      },
      {
        "name": "Wave Distance",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Area",
        "value": "100",
        "temp": "$$ ranges"
      }
    ],
    "name": "Phoenix Fire",
    "description": "When the caster attacks he has 10% chance to release a wave that deals damages in a live in direction of the attacked unit.",
    "id": 173
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Regen",
        "value": [
          "6",
          "12",
          "18",
          "24"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Photosynthesis",
    "description": "The caster get an increased life regenration. Only works during the day.",
    "id": 236
  },
  {
    "type": "Passive",
    "targets": [
      "enemies",
      "ground",
      "air",
      "heroes",
      "buildings"
    ],
    "params": [
      {
        "name": "Gold Stolen",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$ gold per attack"
      }
    ],
    "name": "Pillage",
    "description": "The caster steals some gold to the owner of the attacked hero or building at each attack. Half bonus for building.",
    "id": 174
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
        "value": "Global"
      },
      {
        "name": "Area",
        "value": "200",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "160",
          "235",
          "310",
          "385"
        ]
      }
    ],
    "name": "Pillar of Flames",
    "description": "After 1.7 seconds creates a fire pillar that deals damages to enemies in an area.",
    "cooldown": "20",
    "manacost": [
      "130",
      "140",
      "150",
      "160"
    ],
    "id": 175
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
        "name": "Area",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Cast Range",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "110",
          "170",
          "230",
          "290"
        ]
      }
    ],
    "name": "Pinky Boom",
    "description": "The caster deals damages to enemies around the target.",
    "manacost": [
      "110",
      "115",
      "120",
      "125"
    ],
    "cooldown": "8",
    "id": 176
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
        "name": "Cast Range",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Ward Damages",
        "value": [
          "15",
          "25",
          "35",
          "45"
        ]
      },
      {
        "name": "Ward Life",
        "value": [
          "75",
          "175",
          "275",
          "375"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Ward Attack Range",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Ward Attack Rate",
        "value": "1.5",
        "temp": "$$ seconds"
      }
    ],
    "name": "Plant Serpent Ward",
    "description": "The caster places a ward that will attack enemies around during 40 seconds.",
    "manacost": [
      "10",
      "15",
      "20",
      "25"
    ],
    "cooldown": [
      "11",
      "9",
      "7",
      "5"
    ],
    "id": 177
  },
  {
    "type": "Autocast",
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
          "12",
          "16",
          "20",
          "24"
        ],
        "temp": "$$ damages per second"
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$%"
      },
      {
        "name": "Attack Speed Slow",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$%"
      },
      {
        "name": "Cast Range",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration Heroes",
        "value": "2.5",
        "temp": "$$ seconds"
      },
      {
        "name": "Duration Creeps",
        "value": "5",
        "temp": "$$ seconds"
      }
    ],
    "name": "Poison Attack",
    "description": "Add poison damages to the caster attack, dealing damages over the time and slowing the target.",
    "manacost": "20",
    "danger": "Orb effect does not stacks.",
    "id": 178
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
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": "6",
        "temp": "$$ seconds"
      },
      {
        "name": "Flask Speed",
        "value": "900",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area Explosion",
        "value": "300",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "35",
          "40",
          "45",
          "50"
        ],
        "temp": "$$ damages per second"
      }
    ],
    "name": "Poisonous Flask",
    "description": "The caster throw a flask of poisonous liquid to a target enemy. When it reaches the target, it explodes adding a buff to the primary target and the units around, slowing their move speed and damaging them over the time.",
    "manacost": [
      "85",
      "90",
      "95",
      "100"
    ],
    "cooldown": [
      "14",
      "13",
      "12",
      "11"
    ],
    "id": 179
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
          "80",
          "140",
          "200",
          "260"
        ]
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "25",
          "35",
          "45",
          "55"
        ],
        "temp": "$$%"
      },
      {
        "name": "Cast Range",
        "value": "950",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Speed",
        "value": "1100",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Area",
        "value": "125",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Distance",
        "value": "1100",
        "temp": "$$ ranges"
      }
    ],
    "name": "Poisonous Gale",
    "description": "The caster throw a wave in a direction that deals damages to enemies in a line slowing them during 5 seconds.",
    "manacost": [
      "110",
      "115",
      "120",
      "125"
    ],
    "cooldown": [
      "14",
      "12",
      "10",
      "8"
    ],
    "id": 180
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Detection Area",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed Bonus",
        "value": [
          "20",
          "30",
          "40"
        ],
        "temp": "$$%"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "3",
          "5",
          "7"
        ],
        "temp": "$$% of max life per second"
      },
      {
        "name": "Interval Detection",
        "value": "0.2",
        "temp": "$$ second"
      }
    ],
    "name": "Predator Hunt",
    "ulti": true,
    "description": "When the caster has no enemies around he get a regeneration and a move speed bonus. Building and creeps are counting like enemies that can interrupt the spell.",
    "id": 181
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Bonus Life",
        "value": [
          "100",
          "200",
          "300"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Duration",
        "value": "12",
        "temp": "$$ seconds"
      },
      {
        "name": "Fury Swipes Proc Chance",
        "value": "30",
        "temp": "$$%"
      },
      {
        "name": "Fury Swipes Damages Coeff",
        "value": "2",
        "temp": "$$x normal damages"
      }
    ],
    "name": "Primal Instinct",
    "ulti": true,
    "description": "Transforms the hero into a powerful beast that moves with constant maximum move speed and has more hit points. The beast has a melee attack with 1.5 default attack rate and a Fury Swipes ability.",
    "manacost": [
      "110",
      "130",
      "150"
    ],
    "cooldown": [
      "110",
      "90",
      "70"
    ],
    "id": 182
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
        "value": "1300",
        "temp": "$$ ranges"
      },
      {
        "name": "Speed",
        "value": "1500",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance",
        "value": "1500",
        "temp": "$$ ranges"
      },
      {
        "name": "Mana Burnt",
        "value": [
          "70",
          "90",
          "110",
          "130"
        ]
      }
    ],
    "name": "Prismatic Wave",
    "description": "The caster summon a wave that will burn some mana to enemies in a line.",
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "manacost": [
      "95",
      "100",
      "105",
      "110"
    ],
    "id": 291
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
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Percentage Damages",
        "value": [
          "20",
          "40",
          "60",
          "80"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Punishing Blow",
    "description": "When the caster attacks he has 20% chances to deals to enemies around a percentage of his attack damages.",
    "id": 183
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
        "value": "Global"
      },
      {
        "name": "Missile Speed",
        "value": "800",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Damages",
        "value": [
          "55",
          "80",
          "105",
          "130"
        ]
      }
    ],
    "name": "Punishment",
    "description": "The caster deals damages to a target enemy anywhere on the map.",
    "cooldown": [
      "4",
      "3",
      "2",
      "1"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 298
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
        "value": "1100",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance Wave",
        "value": "1200",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "125",
        "temp": "$$ ranges"
      },
      {
        "name": "Speed Wave",
        "value": "1200",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Bolt Speed",
        "value": "700",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Damages",
        "value": [
          "120",
          "170",
          "220",
          "270"
        ]
      },
      {
        "name": "Heal",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$ hp per bolt"
      }
    ],
    "name": "Purification",
    "description": "The caster send a wave in a direction that will deals damages to enemies in a line. Each enemey damaged will summon a fire soul that will heal the caster.",
    "cooldown": [
      "14",
      "13",
      "12",
      "11"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 286
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
        "name": "Cast Range",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$ damages per second"
      },
      {
        "name": "Heal",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$ hp per second"
      }
    ],
    "name": "Purifying Flames",
    "description": "The caster places a buff on the targeted unit that heals him if it is an allied or damages him if it is an enemy, during 8 seconds.",
    "cooldown": "10",
    "manacost": [
      "110",
      "120",
      "130",
      "140"
    ],
    "id": 184
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "3",
          "4",
          "5",
          "6"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Attack Speed Bonus",
        "value": [
          "40",
          "50",
          "60",
          "70"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Rage",
    "description": "The caster has an increased attack speed and magic immunity during a short duration.",
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "manacost": [
      "70",
      "80",
      "90",
      "100"
    ],
    "id": 301
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
        "name": "Wave Speed",
        "value": "1200",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Distance",
        "value": "900",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "125",
        "temp": "$$ ranges per waves"
      }
    ],
    "name": "Raging Crows",
    "description": "The caster throw 3 waves in a target directions that deals damages to enemies in a line.",
    "manacost": [
      "95",
      "105",
      "115",
      "125"
    ],
    "cooldown": "9",
    "id": 186
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
        "name": "Area Heal",
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Periode Heal",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Bolt Speed",
        "value": "650",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Damages",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Heal",
        "value": [
          "40",
          "50",
          "60",
          "70"
        ],
        "temp": "$$ hp per bolt"
      }
    ],
    "name": "Rainbow Leech",
    "description": "Places a buff on the target enemy that slows his move speed, deals damages and heals allies unit around over the time. Last 6 seconds.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "15",
      "14",
      "13",
      "12"
    ],
    "id": 187
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
        "name": "Area Spawn",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Skeleton Duration",
        "value": "20",
        "temp": "$$ seconds"
      },
      {
        "name": "Skeleton Damages",
        "value": [
          "20",
          "25",
          "30",
          "35"
        ]
      },
      {
        "name": "Skeleton Armor",
        "value": [
          "0",
          "1",
          "2",
          "3"
        ]
      },
      {
        "name": "Skeleton Life",
        "value": [
          "250",
          "300",
          "350",
          "400"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Number Spawn",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ],
        "temp": "$$ skeletons"
      },
      {
        "name": "Life as Damage/Heal",
        "value": [
          "12",
          "16",
          "20",
          "24"
        ],
        "temp": "$$% of dying skeleton's life"
      },
      {
        "name": "Bolt Speed",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Radius Search Units",
        "value": "450",
        "temp": "$$ ranges"
      }
    ],
    "name": "Raise Dead",
    "description": "The caster summon some skeleton with some dead bodies around him that will fight with you during a short duration. When a skeleton is killed it release to a random non-skeleton unit around him a coil of magic energy, if the targetes unit is an ally it will heal it or damage it if'its an enemy.",
    "cooldown": [
      "40",
      "36",
      "32",
      "28"
    ],
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "id": 278
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
        "value": "Global"
      },
      {
        "name": "Delay",
        "value": [
          "6",
          "5",
          "4",
          "3"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Recall",
    "description": "The target moves to the caster location after a short duration.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": [
      "50",
      "45",
      "40",
      "35"
    ],
    "id": 188
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
        "value": "950",
        "temp": "$$ ranges"
      },
      {
        "name": "Base Damages",
        "value": [
          "25",
          "50",
          "75",
          "100"
        ]
      },
      {
        "name": "Bonus Damages",
        "value": [
          "1",
          "1.3",
          "1.6",
          "1.9"
        ],
        "temp": "$$x the caster's Intelligence"
      },
      {
        "name": "Missile Speed",
        "value": "1400",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Red Lightning Shot",
    "description": "The caster throw a bolt to the target enemy that deals damages to a target in function of the caster's intelligence.",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "cooldown": "6",
    "id": 189
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
        "value": "450",
        "temp": "$$ ranges"
      },
      {
        "name": "Refleted Damages",
        "value": [
          "7",
          "10",
          "13",
          "16"
        ],
        "temp": "$$% of the damages taken"
      }
    ],
    "name": "Reflect",
    "description": "When this hero is damaged it reflect a part of the damages taken on enemies around. The targets within 250 Aoe will takes 30% extra damages.",
    "id": 190
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
        "name": "Regeneration",
        "value": [
          "16",
          "22",
          "28",
          "34"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Regeneration",
    "description": "The caster places a buff on the targeted allied that regenerates his life during 10 seconds.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": "12",
    "id": 191
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [],
    "name": "Reincarnation",
    "ulti": true,
    "description": "When killed, the hero will come back to life after 7 seconds. ",
    "manacost": "140",
    "cooldown": [
      "240",
      "180",
      "120"
    ],
    "id": 192
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Bonus Strength",
        "value": [
          "13",
          "26",
          "39"
        ]
      }
    ],
    "name": "Reinforcement",
    "ulti": true,
    "description": "Gives a permanent bonus to Strength. ",
    "id": 193
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
        "name": "Bonus Magic Resistance",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$%"
      },
      {
        "name": "Heal",
        "value": [
          "5",
          "7",
          "9",
          "11"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Repel",
    "description": "The caster places a buff that increases the target magic resistance and regeneration during 8 seconds.",
    "cooldown": [
      "18",
      "17",
      "16",
      "15"
    ],
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 194
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
          "0.6",
          "0.75",
          "0.9"
        ],
        "temp": "$$x life lost"
      }
    ],
    "name": "Rest in Peace",
    "ulti": true,
    "description": "The caster blocks the target enemy during 1.5 seconds, after that delay the target is damaged in function of the life lost.",
    "manacost": [
      "140",
      "180",
      "220"
    ],
    "cooldown": "110",
    "id": 195
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
        "name": "Casting Range",
        "value": "650",
        "temp": "$$ ranges"
      },
      {
        "name": "Mana Restored",
        "value": [
          "75",
          "150",
          "225",
          "300"
        ],
        "temp": "$$ mana points"
      }
    ],
    "name": "Restore Chakra",
    "description": "Restore the mana of a target allied or yourself.",
    "manacost": [
      "70",
      "80",
      "90",
      "100"
    ],
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "id": 196
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Regeneration",
        "value": "15",
        "temp": "$$% of the caster's max life per second"
      }
    ],
    "name": "Restore Soul",
    "ulti": true,
    "description": "The caster regenerates a percentage of his max life every seconds, last 8 seconds.",
    "cooldown": [
      "90",
      "75",
      "60"
    ],
    "manacost": [
      "130",
      "150",
      "170"
    ],
    "id": 308
  },
  {
    "type": "Instant",
    "targets": [
      "ground",
      "air",
      "enemies",
      "allies",
      "non heroes"
    ],
    "params": [
      {
        "name": "Area",
        "value": "900",
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Corpses",
        "value": [
          "4",
          "6",
          "8"
        ]
      },
      {
        "name": "Bonus Life",
        "value": [
          "100",
          "200",
          "300"
        ],
        "temp": "$$ ranges"
      }
    ],
    "name": "Resurrection",
    "ulti": true,
    "description": "Brings back to life the corpses of random nearby units and increases their total life.",
    "manacost": [
      "200",
      "300",
      "400"
    ],
    "cooldown": [
      "110",
      "100",
      "90"
    ],
    "id": 197
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
        "name": "cast Range",
        "value": "900",
        "temp": "$$ ranges"
      },
      {
        "name": "Delay",
        "value": [
          "7",
          "6",
          "5",
          "4"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Retreat",
    "description": "The target moves to his fountain after a short duration.",
    "manacost": [
      "110",
      "120",
      "130",
      "140"
    ],
    "cooldown": [
      "60",
      "55",
      "50",
      "45"
    ],
    "id": 198
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
        "name": "Probability",
        "value": [
          "5",
          "10",
          "15",
          "20"
        ],
        "temp": "$$% chances"
      }
    ],
    "name": "Return",
    "description": "The hero has a chance to return the damage taken to the damaging unit. Can't return the buildings damages.",
    "id": 199
  },
  {
    "type": "Passive",
    "targets": [],
    "params": [
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
        "name": "Attack Rate",
        "temp": "$$ seconds",
        "value": "1.35"
      },
      {
        "name": "Attack Range",
        "temp": "$$ ranges",
        "value": "550"
      }
    ],
    "name": "Revenge",
    "ulti": true,
    "description": "When the caster dies he summons a familiar that deals the same damages, has a ranged attack, has the same life and 20% movespeed bonus to defeat his enemies during a short duration.",
    "id": 200
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
          "80",
          "120",
          "160",
          "200"
        ],
        "temp": ""
      },
      {
        "name": "Stunn Duration",
        "value": [
          "1.",
          "1.4",
          "1.6",
          "1.8"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Wave Speed",
        "value": "1600",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Distance",
        "value": "1300",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "125",
        "temp": "$$ ranges"
      }
    ],
    "name": "Rift",
    "description": "The caster throw a wave in a direction that deals damages to enemies it encounters stunning them during a short duration.",
    "manacost": [
      "100",
      "105",
      "110",
      "115"
    ],
    "cooldown": "10",
    "id": 201
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
        "value": "400",
        "temp": "$$ ranges"
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
    "name": "Roar",
    "description": "Gives friendly nearby units a percentage bonus to damage. Last 12 seconds.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "16",
      "14",
      "12",
      "10"
    ],
    "id": 318
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
        "name": "Armor Bonus",
        "value": [
          "2.5",
          "4",
          "5.5",
          "7"
        ]
      },
      {
        "name": "Stunn Duration",
        "value": [
          "0.6",
          "1",
          "1.4",
          "1.8"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Rugged Tenacity",
    "description": "The hero get an extra armor bonus. And has 25% chance to stunn a unit that attack below 450 ranges during a short duration.",
    "id": 202
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
        "name": "Duration",
        "value": [
          "6",
          "8",
          "10"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Bonus Move Speed",
        "value": "200",
        "temp": "$$%"
      }
    ],
    "name": "Run For Victory",
    "ulti": true,
    "description": "Increases the caster's and his allies move speed during a short duration.",
    "manacost": [
      "100",
      "110",
      "120"
    ],
    "cooldown": [
      "80",
      "70",
      "60"
    ],
    "id": 203
  },
  {
    "type": "Target point",
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
        "name": "Regeneration",
        "value": [
          "1",
          "2",
          "3",
          "4"
        ],
        "temp": "$$% maximum life per second"
      },
      {
        "name": "Rune Move Speed",
        "value": "220",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Rune Maximum Life",
        "value": [
          "100",
          "150",
          "200",
          "250"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Area Regeneration",
        "value": "500",
        "temp": "$$ ranges"
      }
    ],
    "name": "Rune of Life",
    "description": "The caster summons a rune of life that will heal the allied units around equals to a percentage of their life. Duration 12 seconds. You can sacrifice the rune to restore a big amount of life to a target.",
    "cooldown": "25",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 205
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
        "name": "Life Regeneration",
        "value": [
          "2",
          "4",
          "6",
          "8"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Runical Armor",
    "description": "Increases your armor and life regeneration.",
    "id": 206
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
          "250"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "Sacred Fire",
    "description": "Heals a target allied or yourself.",
    "cooldown": [
      "9",
      "8.5",
      "8",
      "7.5"
    ],
    "manacost": [
      "85",
      "95",
      "105",
      "115"
    ],
    "id": 207
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
        "name": "Attack Speed Bonus",
        "value": [
          "15",
          "25",
          "35",
          "45"
        ],
        "temp": "$$%"
      },
      {
        "name": "Area",
        "value": "750",
        "temp": "$$ ranges"
      }
    ],
    "name": "Savagery Aura",
    "description": "Increases the attack speed of nearby allies units.",
    "id": 208
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Max Armor Bonus",
        "value": [
          "7",
          "10",
          "13",
          "16"
        ]
      },
      {
        "name": "Period Update",
        "value": "0.25",
        "temp": "$$ second"
      }
    ],
    "name": "Seal of Protection",
    "description": "The hero get an armor bous in function of the missing life.",
    "id": 209
  },
  {
    "type": "Target unit",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Regeneration",
        "value": [
          "40",
          "60",
          "80",
          "100"
        ],
        "temp": "$$% of hero armor"
      }
    ],
    "name": "Seal of Salvation",
    "description": "The caster get a percentage of his base armor as life regeneration.",
    "id": 304
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
        "name": "Armor Bonus",
        "value": [
          "2",
          "3",
          "4",
          "5"
        ]
      }
    ],
    "name": "Seal of Wrath",
    "description": "Increases the allied armor around.",
    "id": 210
  },
  {
    "type": "Autocast",
    "targets": [
      "enemies",
      "ground",
      "air",
      "buildings"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages Bonus",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ]
      }
    ],
    "name": "Searing Arrows",
    "description": "Increases the damage of the hero's attack by adding fire.",
    "manacost": "8",
    "danger": "Orb effect does not stack.",
    "id": 211
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
        "name": "Bolt Speed",
        "value": "600",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area Explosion",
        "value": "225",
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Bounces Max",
        "value": [
          "5",
          "7",
          "9"
        ]
      },
      {
        "name": "Damages",
        "value": [
          "120",
          "160",
          "190"
        ]
      },
      {
        "name": "Area Search",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration Slow",
        "value": "5",
        "temp": "$$ seconds"
      }
    ],
    "name": "Searing Chain",
    "ulti": true,
    "description": "The caster send a bolt of fire that will bounces between some enemies dealing area damages each impacts.",
    "manacost": [
      "140",
      "190",
      "240"
    ],
    "cooldown": [
      "110",
      "100",
      "90"
    ],
    "id": 303
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
        "value": "Global"
      },
      {
        "name": "Nbr Max Targets",
        "value": [
          "10",
          "15",
          "20"
        ]
      },
      {
        "name": "Basic Damages",
        "value": [
          "120",
          "160",
          "200"
        ]
      },
      {
        "name": "Bolt Speed",
        "value": "9500",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "Global"
      }
    ],
    "name": "Senbonzakura Kageyoshi",
    "ulti": true,
    "description": "The caster summon a group of small blades that deals damages to random enemies in the entire map. Each time it hits a target the damages increases by 15%.",
    "cooldown": [
      "90",
      "80",
      "70"
    ],
    "manacost": [
      "180",
      "220",
      "260"
    ],
    "id": 311
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
        "name": "Duration",
        "value": "15",
        "temp": "$$ seconds"
      },
      {
        "name": "Period Damages",
        "value": "3",
        "temp": "$$ seconds"
      },
      {
        "name": "Damages Over the Time",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$ damages per period"
      },
      {
        "name": "Initial Damages",
        "value": [
          "50",
          "70",
          "90",
          "110"
        ]
      },
      {
        "name": "Bolt Speed",
        "value": "1200",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Move Speed Slow",
        "value": "50",
        "temp": "$$%"
      }
    ],
    "name": "Shadow Strike",
    "description": "Hurls a poisoned dagger which deals large initial damage, and then deals damage over time. The poisoned unit has it's movement speed slowed for a short duration. Every 3 seconds the target regain slowly his move speed.",
    "cooldown": [
      "9",
      "8",
      "7",
      "6"
    ],
    "manacost": [
      "75",
      "85",
      "95",
      "105"
    ],
    "id": 212
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
        "value": "1300",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "600",
        "temp": "$$ ranges"
      },
      {
        "name": "Starting Armor Bonus/Malus",
        "value": [
          "1",
          "3",
          "5"
        ]
      }
    ],
    "name": "Shadow Word",
    "description": "The caster places a buff on units in an area that increases or decreases their armor. Last 15 seconds. If the unit is an enemy the spells palces a malus of armor.",
    "cooldown": [
      "80",
      "70",
      "60"
    ],
    "manacost": [
      "150",
      "200",
      "250"
    ],
    "id": 213
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
        "name": "Base Damages",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ]
      },
      {
        "name": "Maximum Damages Bonus",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ]
      }
    ],
    "name": "Sharp Blade",
    "description": "When the caster attacks he add a random amount of physical damages to his attack. Does not works against buildings.",
    "id": 214
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
        "name": "Nbr Sheeps",
        "value": [
          "10",
          "15",
          "20"
        ]
      },
      {
        "name": "Damages",
        "value": [
          "50",
          "70",
          "90"
        ],
        "temp": "$$ damages per slam"
      },
      {
        "name": "Period Sheep Slam",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Area Slam",
        "value": "200",
        "temp": "$$ ranges"
      },
      {
        "name": "Sheeps Speed",
        "value": "400",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Number Max Bounces",
        "value": "5",
        "temp": "$$ per sheep"
      }
    ],
    "name": "Sheep Chop",
    "ulti": true,
    "description": "The caster summons some sheeps around him that will bounces in random direction. Every 400 ranges moved they will slam the ground, dealing damages to enemies when they lands.",
    "cooldown": [
      "80",
      "80",
      "75"
    ],
    "manacost": [
      "120",
      "160",
      "180"
    ],
    "id": 215
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
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Distance",
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Speed",
        "value": "1050",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Area",
        "value": "125",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "75",
          "140",
          "205",
          "270"
        ]
      }
    ],
    "name": "Shockwave",
    "description": "A wave of force that ripples out from the Hero, causing damage to land units in a line.",
    "cooldown": "8",
    "manacost": "100",
    "id": 216
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
        "value": "800",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "2",
          "3",
          "4",
          "5"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Silence",
    "description": "Stops all enemies in a target area from casting spells.",
    "cooldown": "15",
    "manacost": [
      "75",
      "80",
      "85",
      "90"
    ],
    "id": 217
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
        "name": "Invulnerability Duration",
        "value": "2",
        "temp": "$$ seconds"
      }
    ],
    "name": "Sleep",
    "description": "The unit is turned into sleep during a short duration. During that time the unit can't attack and move. If the unit is damaged after the invulnerability the unit wake up.",
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "manacost": [
      "120",
      "130",
      "140",
      "150"
    ],
    "id": 218
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
        "name": "Move Speed Slow",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Slow",
    "description": "The target is slowed during 12 seconds.",
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "manacost": [
      "90",
      "105",
      "120",
      "135"
    ],
    "id": 219
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
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Life Stolen",
        "value": [
          "50",
          "100",
          "150",
          "200"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "Soul Drain",
    "description": "Steals some life to a target enemy.",
    "cooldown": [
      "10",
      "9",
      "8",
      "7"
    ],
    "manacost": [
      "95",
      "105",
      "115",
      "125"
    ],
    "id": 220
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Area Blast",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Blast Damages",
        "value": [
          "100",
          "140",
          "180",
          "220"
        ],
        "temp": ""
      },
      {
        "name": "Move Speed Bonus",
        "value": [
          "4",
          "8",
          "12",
          "16"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Soul Reaper",
    "description": "Increases the move speed of the caster. Every 5 seconds the caser summons a blast that deals damages to enemies around him.",
    "id": 221
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
        "name": "Damages",
        "value": [
          "5",
          "10",
          "15"
        ],
        "temp": "$$ damages per soul"
      },
      {
        "name": "Heal",
        "value": [
          "5",
          "10",
          "15"
        ],
        "temp": "$$ hp per soul"
      },
      {
        "name": "Area",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Soul Speed",
        "value": "600",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Souls Projection",
    "description": "The caster send a soul to a target unit for each units around it. if the target is an ally it will restore some life or damage if it's an enemy.",
    "cooldown": [
      "80",
      "75",
      "70"
    ],
    "manacost": [
      "150",
      "175",
      "200"
    ],
    "id": 222
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Distance",
        "value": [
          "500",
          "575",
          "650",
          "725"
        ],
        "temp": "$$ ranges"
      }
    ],
    "name": "Spacial Rift",
    "description": "The caster moves instantly to a point in front of him.",
    "cooldown": [
      "12",
      "10",
      "8",
      "6"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 271
  },
  {
    "type": "Target unit",
    "targets": [
      "self",
      "allies",
      "ground",
      "air"
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
        "value": "500",
        "temp": "$$ ranges"
      }
    ],
    "name": "Sparing",
    "description": "The target dodges every attacks during a short duration.",
    "cooldown": [
      "18",
      "16",
      "14",
      "12"
    ],
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 269
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
        "name": "Nbr Minions",
        "value": [
          "3",
          "5",
          "7",
          "9"
        ]
      },
      {
        "name": "Life",
        "value": "375",
        "temp": "$$ hp"
      },
      {
        "name": "Damages",
        "value": "19 - 40"
      },
      {
        "name": "Armor",
        "value": "0"
      },
      {
        "name": "Move Speed",
        "value": "290",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Attack Range",
        "value": "450",
        "temp": "$$ ranges"
      }
    ],
    "name": "Spawn Shadow Minions",
    "description": "The caster destroy a target unit to spawn some Shadow minions that will fight for you during 35 seconds.",
    "danger": "Does not work against Arthas.",
    "cooldown": [
      "22",
      "20",
      "18",
      "16"
    ],
    "manacost": [
      "80",
      "90",
      "100",
      "110"
    ],
    "id": 223
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
        "value": "1200",
        "temp": "$$ ranges"
      },
      {
        "name": "Area Spawn",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Nbr Ghosts",
        "value": [
          "14",
          "18",
          "22"
        ]
      },
      {
        "name": "Distance",
        "value": "1700",
        "temp": "$$ ranges"
      },
      {
        "name": "Speed",
        "value": "900",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area Ghosts",
        "value": "62.5",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "60",
          "70",
          "80"
        ],
        "temp": "$$ damages per second"
      },
      {
        "name": "Duration",
        "value": [
          "6",
          "8",
          "10"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Spectral Daggers",
    "ulti": true,
    "description": "The caster summons some ghosts that will deals damages to enemies in a line. Each ghost will deals damages over the time to the enemies touched.",
    "cooldown": [
      "100",
      "95",
      "90"
    ],
    "manacost": [
      "110",
      "130",
      "150"
    ],
    "id": 319
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Damages Blocked",
        "value": [
          "12",
          "24",
          "36",
          "48"
        ]
      },
      {
        "name": "Minimum Damages",
        "value": "0"
      }
    ],
    "name": "Spiked Carapace",
    "ulti": true,
    "description": "Reduces all damages from attacks on the hero.",
    "id": 224
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "10",
        "temp": "$$ seconds"
      },
      {
        "name": "Bonus Move Speed",
        "value": [
          "20",
          "28",
          "36",
          "44"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Sprint",
    "description": "The caster increases his move speed during a short duration. During that spell the hero takes 30% more damages.",
    "cooldown": [
      "18",
      "17",
      "16",
      "15"
    ],
    "manacost": [
      "80",
      "85",
      "90",
      "95"
    ],
    "id": 279
  },
  {
    "type": "Instant",
    "targets": [
      "enemies",
      "ground",
      "air",
      "buildings"
    ],
    "params": [
      {
        "name": "Duration",
        "value": "5",
        "temp": "$$ seconds"
      },
      {
        "name": "Area Search",
        "value": "400",
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
        "temp": "$$ damages per explosion"
      },
      {
        "name": "Period Explosion",
        "value": [
          "0.4",
          "0.35",
          "0.3",
          "0.25"
        ],
        "temp": "$$ second"
      }
    ],
    "name": "Star Explosions",
    "description": "The caster places a buff on himself that will damages a random enemy around him.",
    "cooldown": [
      "11",
      "10",
      "9",
      "8"
    ],
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 322
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
        "name": " Period Star Summon",
        "value": "0.5",
        "temp": "$$ second"
      },
      {
        "name": "Area",
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Fall Duration",
        "value": "0.8",
        "temp": "$$ second"
      },
      {
        "name": "Damages",
        "value": [
          "70",
          "90",
          "110"
        ],
        "temp": "$$ damages per star"
      }
    ],
    "name": "Starfall",
    "ulti": true,
    "cooldown": [
      "70",
      "65",
      "60"
    ],
    "manacost": [
      "120",
      "170",
      "220"
    ],
    "description": "The caster summons a starfall around him during 3 seconds. Last 2 seconds more during the night.",
    "id": 226
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
        "value": "1200",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Area",
        "value": "250",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Distance",
        "value": "1200",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Speed",
        "value": "550",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Number Max of Targets",
        "value": [
          "12",
          "16",
          "20",
          "24"
        ]
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
    "name": "Stasis Pillars",
    "description": "The caster deals damages to some enemies in a line stunning them during 0.5 seconds.",
    "cooldown": "9",
    "manacost": [
      "110",
      "115",
      "120",
      "125"
    ],
    "id": 227
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
        "name": "Damages Stolen",
        "value": [
          "30",
          "45",
          "60",
          "75"
        ]
      },
      {
        "name": "Duration",
        "value": "7",
        "temp": "$$ seconds"
      }
    ],
    "name": "Steals Vitality",
    "description": "The caster steals some damages to the target enemy.",
    "cooldown": [
      "15",
      "13",
      "11",
      "9"
    ],
    "manacost": [
      "100",
      "105",
      "110",
      "115"
    ],
    "id": 307
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
        "name": "Damages",
        "value": [
          "85",
          "145",
          "205",
          "265"
        ]
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "30",
          "35",
          "40",
          "45"
        ],
        "temp": "$$%"
      },
      {
        "name": "Missile Speed",
        "value": "1300",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Storm Bolt",
    "description": "The caster throw a hammer to the targeted unit that will damage it and slow the target during 4 seconds.",
    "cooldown": "9",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 228
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Bonus Life",
        "value": [
          "150",
          "300",
          "450",
          "600"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "Strength of Arm",
    "description": "Increases the hero maximum life.",
    "id": 225
  },
  {
    "type": "Instant",
    "targets": [
      "none"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "50",
          "70",
          "90",
          "110"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Life",
        "value": [
          "60",
          "80",
          "100",
          "120"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Owl Move Speed",
        "value": "290",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Owl Armor",
        "value": "1"
      }
    ],
    "name": "Summon Owl Scout",
    "description": "Summons a flying owl that can explore the map during a short duration.",
    "cooldown": "20",
    "manacost": [
      "75",
      "90",
      "105",
      "120"
    ],
    "id": 229
  },
  {
    "type": "Instant",
    "targets": [
      "none"
    ],
    "params": [
      {
        "name": "Summon Duration",
        "value": "60",
        "temp": "$$ seconds"
      },
      {
        "name": "Wolves Damages",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": ""
      },
      {
        "name": "Wolves Life",
        "value": [
          "220",
          "260",
          "300",
          "340"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Critical Strike Percentage",
        "value": "30",
        "temp": "$$% chances"
      },
      {
        "name": "Critical Strike Coeff",
        "value": "1.7",
        "temp": "$$x damages"
      },
      {
        "name": "Invisibility Fade Time",
        "value": "1.7",
        "temp": "$$ seconds"
      }
    ],
    "name": "Summon Wolves",
    "ulti": false,
    "description": "Summons 2 wolves that fight with the hero. These wolves have increased magic resistance and will have special abilities in function of the level. Since the level 3 the wolves are invisible. Level 4 the wolves get critical strike.",
    "manacost": "115",
    "cooldown": "25",
    "id": 230
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "40",
          "50",
          "60"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Movement Speed Bonus",
        "value": [
          "16",
          "18",
          "20"
        ],
        "temp": "$$%"
      },
      {
        "name": "Bonus Damages",
        "value": [
          "250",
          "400",
          "550"
        ]
      }
    ],
    "name": "Surprise Attack",
    "description": "Allow the caster to become invisible, move faster and pass throught every units. The next attack will break the invisibility dealing more damages.",
    "ulti": true,
    "cooldown": [
      "70",
      "60",
      "50"
    ],
    "manacost": [
      "140",
      "200",
      "260"
    ],
    "id": 231
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
        "name": "Wave Speed",
        "value": "1500",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "250",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "210",
          "300",
          "390"
        ]
      },
      {
        "name": "Distance",
        "value": "700 + ( 80 x Intelligence )",
        "temp": "$$ ranges"
      }
    ],
    "name": "Taranis Fury",
    "ulti": true,
    "description": "The caster summons a wave of thunder that deals damages to enemies in a line.",
    "cooldown": [
      "80",
      "75",
      "70"
    ],
    "manacost": [
      "140",
      "190",
      "240"
    ],
    "id": 232
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
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Duration",
        "value": [
          "1.5",
          "2",
          "2.5",
          "3"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Bonus Armor",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ]
      }
    ],
    "name": "Taunt",
    "description": "The closest enemies are forced to attack the hero during a short duration. During that time the caster get an increased armor.",
    "cooldown": "10",
    "manacost": [
      "90",
      "95",
      "100",
      "105"
    ],
    "id": 233
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
        "name": "Bonus Life",
        "value": [
          "100",
          "200",
          "300",
          "400"
        ],
        "temp": "$$ hp"
      }
    ],
    "name": "Taurenforce",
    "description": "The caster increases the maximum hits points of every allied units around him.",
    "id": 234
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
        "value": "1100",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "100",
          "160",
          "220",
          "280"
        ]
      },
      {
        "name": "Wave Speed",
        "value": "1000",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Wave Distance",
        "value": "1200",
        "temp": "$$ ranges"
      },
      {
        "name": "Wave Area",
        "value": "125",
        "temp": "$$ ranges"
      },
      {
        "name": "Fall Duration",
        "value": "1",
        "temp": "$$ second"
      }
    ],
    "name": "Telekinesis",
    "description": "The caster throw a wave in a target direction that deals damages to enemies in a line, throwing them in the air. During the fall duration units can't move or attack. 1 second fall duration.",
    "cooldown": "10",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 241
  },
  {
    "type": "Target point",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "Global"
      }
    ],
    "name": "Teleportation",
    "description": "Teleport the caster to the target location on the map after 3 seconds of delay.",
    "id": 242
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
        "name": "Bolt Speed",
        "value": "750",
        "temp": "$$ ranges/s"
      },
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
        "name": "Min Stun Duration",
        "value": "0.05",
        "temp": "$$ second"
      },
      {
        "name": "Max Stunn Duration",
        "value": [
          "1",
          "2",
          "3",
          "4"
        ],
        "temp": "$$ seconds"
      }
    ],
    "name": "Throw Rotten Body",
    "description": "The caster throw a dead body bolt to the target enemy. Stunning it during a random short duration.",
    "cooldown": "8",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 323
  },
  {
    "type": "Instant",
    "targets": [
      "enemies",
      "ground"
    ],
    "params": [
      {
        "name": "Area",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "80",
          "150",
          "220",
          "290"
        ]
      },
      {
        "name": "Attack Speed Slow",
        "value": [
          "20",
          "25",
          "30",
          "35"
        ],
        "temp": "$$%"
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
        "name": "Duration on Heroes",
        "value": "3",
        "temp": "$$ seconds"
      },
      {
        "name": "Duration on Creeps",
        "value": "5",
        "temp": "$$ seconds"
      }
    ],
    "name": "Thunder Clap",
    "description": "Slams the ground, dealing damage to and slowing the movement speed and attack rate of nearby enemy land units.",
    "cooldown": "7",
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 243
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
          "150",
          "250",
          "350"
        ]
      },
      {
        "name": "Area",
        "value": "Global"
      }
    ],
    "name": "Thunder Strike",
    "ulti": true,
    "description": "The caster deals damages to every enemies heroes in the map.",
    "cooldown": [
      "100",
      "90",
      "80"
    ],
    "manacost": [
      "160",
      "260",
      "360"
    ],
    "id": 244
  },
  {
    "type": "Target unit",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Bonus",
        "value": [
          "80",
          "160",
          "240",
          "320"
        ],
        "temp": "$$ hp"
      },
      {
        "name": "Life regeneration",
        "value": [
          "3",
          "5",
          "7",
          "9"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Tiger Force",
    "description": "The caster get a passive hp bonus and life regeneration.",
    "id": 239
  },
  {
    "type": "Target point",
    "targets": [
      "air",
      "enemies",
      "ground"
    ],
    "params": [
      {
        "name": "Cast Range",
        "value": "700",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed",
        "value": "2000",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Area",
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Move Speed Slow",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Time Rush",
    "description": "The caster moves really faster to the target location, slowing enemies it encounters during 3.5 seconds.",
    "cooldown": [
      "14",
      "12",
      "10",
      "8"
    ],
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 245
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Bonus Damages",
        "value": [
          "100",
          "150",
          "200"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Titan Strength",
    "ulti": true,
    "description": "The caster increases his damages during 12 seconds.",
    "cooldown": [
      "110",
      "100",
      "90"
    ],
    "manacost": [
      "110",
      "150",
      "190"
    ],
    "id": 246
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
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Distance Moved",
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Flying Time",
        "value": "1",
        "temp": "$$ second"
      },
      {
        "name": "Damages",
        "value": [
          "140",
          "190",
          "240",
          "290"
        ]
      }
    ],
    "name": "Titan's Grip",
    "description": "The hero puch an enemy that propulses it in the air. Moving it to a point backward your position dealing damages when the target lands.",
    "cooldown": [
      "16",
      "14",
      "12",
      "10"
    ],
    "manacost": [
      "110",
      "115",
      "120",
      "125"
    ],
    "id": 284
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
        "name": "Duration",
        "value": "5",
        "temp": "$$ seconds"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "40",
          "50",
          "60",
          "70"
        ],
        "temp": "$$ hp/s"
      },
      {
        "name": "Bonus Attack Speed",
        "value": [
          "40",
          "50",
          "60",
          "70"
        ],
        "temp": "$$%"
      }
    ],
    "name": "To Glory",
    "description": "The caster increases the target attack speed and life regeneration.",
    "cooldown": [
      "12",
      "11",
      "10",
      "9"
    ],
    "manacost": [
      "90",
      "105",
      "120",
      "135"
    ],
    "id": 265
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Percentage Reduction",
        "value": [
          "5",
          "9",
          "13",
          "17"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Too Strong to Die",
    "description": "The hero is more resistant to damages from enemies.",
    "id": 247
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
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "80",
          "100",
          "120"
        ],
        "temp": "$$ damages per second"
      },
      {
        "name": "Damages Throw",
        "value": [
          "120",
          "140",
          "160"
        ]
      },
      {
        "name": "Area",
        "value": "550",
        "temp": "$$ ranges"
      },
      {
        "name": "Tornado Move Speed",
        "value": [
          "280",
          "320",
          "360"
        ],
        "temp": "$$ ranges/s"
      },
      {
        "name": "Move Speed Slow",
        "value": "25",
        "temp": "$$%"
      },
      {
        "name": "Area Captation",
        "value": "63",
        "temp": "$$ ranges"
      }
    ],
    "name": "Tornado",
    "ulti": true,
    "cooldown": [
      "70",
      "65",
      "60"
    ],
    "manacost": [
      "120",
      "170",
      "220"
    ],
    "description": "The caster summons a moving tornado that deals damages to enemies around it slowing them. If the tornado pass througth enemies it will throw them in the air dealing additional damages.",
    "id": 274
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
        "name": "Radius Catch",
        "value": "350",
        "temp": "$$ ranges"
      },
      {
        "name": "Speed",
        "value": "550",
        "temp": "$$ ranges/s"
      },
      {
        "name": "Damages",
        "value": [
          "130",
          "180",
          "230",
          "280"
        ]
      },
      {
        "name": "Area Slam",
        "value": "300",
        "temp": "$$ ranges"
      }
    ],
    "name": "Toss",
    "description": "The caster throw in the air a unit around him to the target location.",
    "cooldown": [
      "12",
      "11",
      "10",
      "9"
    ],
    "manacost": [
      "90",
      "100",
      "110",
      "120"
    ],
    "id": 300,
    "danger": "Can't throw himself."
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Maximum Life Regeneration",
        "value": [
          "7",
          "10",
          "13",
          "16"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Toughness",
    "description": "The caster get an increased life regeneration in function of the missing life.",
    "id": 248
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
        "value": "850",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages",
        "value": [
          "10",
          "15",
          "20",
          "25"
        ],
        "temp": "$$% of the distance travelled"
      },
      {
        "name": "Missile Speed",
        "value": "600",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Travel Spirit",
    "description": "Throw a bolt to a target enemy. The bolt will deals a portion of the distance traveled by the missile to the targeted enemy.",
    "cooldown": "8",
    "manacost": [
      "90",
      "110",
      "130",
      "150"
    ],
    "id": 249
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "self",
      "allies"
    ],
    "params": [
      {
        "name": "Area",
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages Bonus",
        "value": [
          "10",
          "20",
          "30",
          "40"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Trueshot Aura",
    "description": "Increases the ranged around allied units damages.",
    "id": 315
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
        "name": "Damages Reduction",
        "value": [
          "65",
          "75",
          "85"
        ],
        "temp": "$$%"
      },
      {
        "name": "Duration",
        "value": [
          "5",
          "6",
          "7"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Life Regeneration",
        "value": [
          "20",
          "30",
          "40"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Unbeatable",
    "ulti": true,
    "description": "The caster reduces the damages it takes and increases his regeneration during a short duration.",
    "cooldown": [
      "55",
      "50",
      "45"
    ],
    "manacost": [
      "90",
      "100",
      "110"
    ],
    "id": 250
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Life Regeneration",
        "value": [
          "4",
          "6",
          "8",
          "10"
        ],
        "temp": "$$ hp/s"
      }
    ],
    "name": "Unholy Force",
    "description": "The hero regenerates faster his life.",
    "id": 237
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
        "value": [
          "4",
          "6",
          "8",
          "10"
        ],
        "temp": "$$ duration"
      }
    ],
    "name": "Unholy Frenzy",
    "description": "Causes this unit to attack 130% faster, during a short duration.",
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "cooldown": [
      "45",
      "40",
      "35",
      "30"
    ],
    "id": 251
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Bonus Mana",
        "value": [
          "150",
          "250",
          "350",
          "450"
        ]
      },
      {
        "name": "Mana Restoration",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$% of the caster's max mana"
      },
      {
        "name": "AREA",
        "value": "800",
        "temp": "$$ ranges"
      }
    ],
    "name": "Unholy Presence",
    "description": "Increase the max mana of the caster. And gives an aura to nearby allied units, when they casts a spell they have 30% chance to restore a percentage of their max mana.",
    "id": 252
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
        "name": "Damages Blocked",
        "value": [
          "175",
          "250",
          "325",
          "400"
        ]
      }
    ],
    "name": "Unholy Protection",
    "description": "The caster places a shield on an allied or himself that blocks any damages taken during 7 seconds. If the amount of damages taken by the shield is over the limit the shield explode dealing damages to enemies around the target.",
    "cooldown": [
      "20",
      "19",
      "18",
      "17"
    ],
    "manacost": [
      "100",
      "105",
      "110",
      "115"
    ],
    "id": 253
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
        "value": "150",
        "temp": "$$ ranges"
      },
      {
        "name": "Fly Duration",
        "value": "2",
        "temp": "$$ seconds"
      },
      {
        "name": "Damages",
        "value": [
          "80",
          "110",
          "140",
          "170"
        ],
        "temp": "$$ each damages instance"
      }
    ],
    "name": "Uppercut",
    "description": "The caster throw an enemy in the air dealing damages to the target around when it lands. The main target is damaged when it is punched and when it lands.",
    "cooldown": [
      "12",
      "11",
      "10",
      "9"
    ],
    "manacost": [
      "90",
      "105",
      "120",
      "135"
    ],
    "id": 306
  },
  {
    "type": "Passive",
    "targets": [
      "ground",
      "air",
      "self",
      "allies",
      "organics"
    ],
    "params": [
      {
        "name": "Area",
        "value": "750",
        "temp": "$$ ranges"
      },
      {
        "name": "Lifesteal",
        "value": [
          "15",
          "20",
          "25",
          "30"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Vampiric Aura",
    "description": "Nearby friendly melee units gain hit points when they hit enemy units.",
    "id": 255
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
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Cast Range",
        "value": "600",
        "temp": "$$ ranges"
      },
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
        "name": "Move Speed Slow",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$%"
      },
      {
        "name": "Attack Speed Slow",
        "value": [
          "20",
          "30",
          "40",
          "50"
        ],
        "temp": "$$%"
      }
    ],
    "name": "Vendetta",
    "description": "The caster deals damages to enemies in an area slowing their speed during 3.5 seconds.",
    "cooldown": [
      "12",
      "11",
      "10",
      "9"
    ],
    "manacost": [
      "100",
      "120",
      "140",
      "160"
    ],
    "id": 256
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
        "value": "500",
        "temp": "$$ ranges"
      },
      {
        "name": "Area",
        "value": "200",
        "temp": "$$ ranges"
      },
      {
        "name": "Damages over the time",
        "value": [
          "7",
          "14",
          "21",
          "28"
        ],
        "temp": "$$ damages/s"
      },
      {
        "name": "Damages Per Period",
        "value": [
          "16",
          "24",
          "32",
          "40"
        ],
        "temp": "$$% of missing life"
      }
    ],
    "name": "Vodoo Maledict",
    "description": "The caster places a buff on enemies in an area that deals damages every 4 seconds based on the life lost since the begining of the spell. Burts 3 times the targets.",
    "cooldown": [
      "40",
      "36",
      "32",
      "28"
    ],
    "manacost": [
      "120",
      "140",
      "160",
      "180"
    ],
    "id": 257
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
        "value": "400",
        "temp": "$$ ranges"
      },
      {
        "name": "Regeneration",
        "value": [
          "30",
          "40",
          "50",
          "60"
        ],
        "temp": "$$ regeneration life per second"
      }
    ],
    "name": "Vodoo Restoration",
    "description": "The caster heals himself and allied units around him during a 7 seconds.",
    "cooldown": "11",
    "manacost": [
      "110",
      "120",
      "130",
      "140"
    ],
    "id": 258
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
    "type": "Instant",
    "targets": [
      "ground",
      "air",
      "allies",
      "self"
    ],
    "params": [
      {
        "name": "Armor Bonus",
        "value": [
          "6",
          "10",
          "14",
          "18"
        ]
      },
      {
        "name": "Area",
        "value": "450",
        "temp": "$$ ranges"
      }
    ],
    "name": "Warcry",
    "description": "The caster increases the allied around move speed by 12% and armor during 14 seconds.",
    "cooldown": [
      "30",
      "28",
      "26",
      "24"
    ],
    "manacost": [
      "70",
      "80",
      "90",
      "100"
    ],
    "id": 259
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "3.5",
          "4",
          "4.5",
          "5"
        ],
        "temp": "$$ seconds"
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
    "name": "Warpath",
    "description": "When the hero is damaged it get's an increased move speed during a short duration.",
    "id": 282
  },
  {
    "type": "Passive",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Maximum Bonus Damages",
        "value": [
          "12",
          "24",
          "36",
          "48"
        ]
      }
    ],
    "name": "Weapon Mastery",
    "description": "When the caster kill a unit it will get bonus damages until it dies. Each units gives 1 bonus damages and a hero gives 12 damages.",
    "id": 260
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
        "name": "Damages",
        "value": [
          "40",
          "50",
          "60",
          "70"
        ],
        "temp": "$$ damages per bolt"
      },
      {
        "name": "Bolt Speed",
        "value": "500",
        "temp": "$$ ranges/s"
      }
    ],
    "name": "Wind Fury",
    "description": "The caster enchant an allied during 12 seconds, each attacks adds some magic damages.",
    "cooldown": [
      "20",
      "18",
      "16",
      "14"
    ],
    "manacost": [
      "100",
      "110",
      "120",
      "130"
    ],
    "id": 261
  },
  {
    "type": "Instant",
    "targets": [
      "self"
    ],
    "params": [
      {
        "name": "Duration",
        "value": [
          "20",
          "25",
          "30",
          "35"
        ],
        "temp": "$$ seconds"
      },
      {
        "name": "Move Speed Bonus",
        "value": [
          "11",
          "22",
          "33",
          "44"
        ],
        "temp": "$$%"
      },
      {
        "name": "Fading Time",
        "value": "0.6",
        "temp": "$$ second"
      }
    ],
    "name": "Wind Walk",
    "description": "Allow the hero to become invisible, and move faster for a set amount of time. During that duration the hero have no collision size.",
    "cooldown": [
      "20",
      "19",
      "18",
      "17"
    ],
    "manacost": "75",
    "id": 262
  }
]