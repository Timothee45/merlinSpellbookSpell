Vue.component('learning', {
	props: ["data"],
	template: `
		<div>
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
			<div v-for="param, key in data.params">|cff00d619{{ key + '|r: ' + renderParam(param) }}</div>
		</div>`,
	methods: {
		renderParam: function(param) {
			var template = param.temp ? param.temp : "$$";
			if (Array.isArray(param.value)) {
				return template.replace("$$", (param.value).join('/'));
			} else {
				return template.replace("$$", param.value);
			}
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

let myVue = new Vue({
	el: "#app",
	data: {
		selectedSpell: "Thunderbolt",
		nbrTotalSpells: 251,
		spells: 
		[
			{
				type: "Target unit",
				targets: ["enemies", "ground", "air"],
				name: "Thunderbolt",
				description: "The caster throw a bolt that will deals damages to a target stunning it for a short duration.",
				manacost: [100, 105, 110, 115],
				cooldown: 8,
				params: {
					"Damages": {
						value: [90, 140, 190, 240],
					},
					"Duration": {
						value: [1, 1.4, 1.8, 2.2],
						temp: "$$ seconds stunn."
					},
					"Range": {
						value: 600,
						temp: "$$ ranges",
					},
					"Missile speed ": {
						value: 1100,
						temp: "$$ ranges/s",
					}
				},
			},{
				type: "Instant",
				targets: ["enemies", "ground"],
				name: "War Stomp",
				manacost: [90, 100, 110, 120],
				cooldown: 8,
				description: "Slams the ground, stunning and damaging nearby enemy land units.",
				params: {
					"Damages": {
						"value": [80, 130, 180, 230],
					},					"Stunn duration": {
						"value": [1.7, 2, 2.3, 2.6],
					},
					"Area": {
						"value": 350,
						"temp": "$$ ranges"
					},
				},
			},{
				name: "Absolution",
				type: "Target unit",
				targets: ["allied", "ground", "air"],
				description: "Create a protection on the target unit that will redirect to the caster the damages it takes during a short duration.",
				manacost: [140, 160, 180],
				cooldown: [80, 70, 60],
				params: {
					"Stunn duration": {
						value: [4, 5, 6]
					},
					"Cast range": {
						value: 600,
						temp: "$$ ranges",
					},
				},
			},{
				name: "Acid Spray",
				type: "Target point",
				targets: ["enemies", "air", "ground"],
				description: "The caster throw 7 bolts of acid fluids that deals damages to enemies in the targeted area when they reaches the target locations.",
				manacost: [90, 100, 110, 120],
				cooldown: 12,
				params: {
					"Spell Area ": {
						value: 550,
						temp: "$$ ranges"
					},
					"Area explosion": {
						value: 200,
						temp: "$$ ranges",
					},
					"Damages": {
						value: [30, 40, 50, 60],
						temp: "$$ per bolt"
					},
					"Cast Range": {
						value: 750,
						temp: "$$ ranges",
					},
				}
			},{
				name: "Ambush",
				type: "Instant",
				targets: ["allied", "ground", "air"],
				description: "Turns allied heroes invisible during a short duration ang give to them a 15% move speed bonus. When a hero cast a spell or attack the invisibility breaks, it come back after a fade delay.",
				manacost: [80, 100, 120],
				cooldown: [140, 120, 100],
				params: {
					"Duration": {
						value: 18,
						temp: "$$ seconds"
					},
					"Fading Time": {
						value: [2, 1.5, 1],
						temp: "$$ seconds"
					}
				},
			},{
				name: "Anti-Magic Shell",
				type: "Passive",
				targets: ["self"],
				description: "The hero get more magic resistance.",
				params: {
					"Magic Reduction": {
						value: [20, 28, 36, 44],
						temp: "$$%"
					}
				}
			},{
				name: "Aphotic Spire",
				type: "Target point",
				targets: ["enemies", "air", "ground"],
				manacost: [140, 180, 220],
				cooldown: [60, 55, 50],
				description: "The caster summons a magic arrow that will deals damages to enemies in a line stunning them. The arrow deals more damages and stunn during a bigger duration in function of the distance travelled.",
				params: {
					"Damages": {
						value: [180, 240, 300, 360],
						temp: "$$ per 1000 ranges travelled"
					},
					"Stunn Duration": {
						value: [1.3, 1.8, 2.3, 2.8],
						temp: "$$ per 1000 ranges travelled"
					},
					"Max Damages": {
						value: 450
					},
					"Max Stunn Duration": {
						value: 4.5,
						temp: "$$ seconds"
					}
				},
			}
		],
	},
	methods: {
		filterByName: function() {
			return this.spells.filter(spell => spell.name == this.selectedSpell);
		},
	},
});