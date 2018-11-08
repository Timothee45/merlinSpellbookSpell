const mySpells =
[
	{
		id: 1,
		type: "Target unit",
		ulti: false,
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
		id: 2,
		type: "Instant",
		ulti: false,
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
		id: 3,
		name: "Absolution",
		type: "Target unit",
		ulti: true,
		targets: ["allies", "ground", "air"],
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
		id: 4,
		name: "Acid Spray",
		type: "Target point",
		ulti: false,
		targets: ["enemies", "air", "ground"],
		description: "The caster throw 7 bolts of acid fluids that deals damages to enemies in the targeted area when they reaches the target locations.",
		manacost: [90, 100, 110, 120],
		cooldown: 12,
		params: {
			"Spell Area ": {
				value: 550,
				temp: "$$ ranges"
			},
			"Area Explosion": {
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
			"Bolts Speed": {
				value: 650,
				temp: "$$ ranges/s"
			},
		}
	},{
		id: 5,
		name: "Ambush",
		type: "Instant",
		ulti: true,
		targets: ["allies", "ground", "air"],
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
		id: 6,
		name: "Anti-Magic Shell",
		type: "Passive",
		ulti: false,
		targets: ["self"],
		description: "The hero get more magic resistance.",
		params: {
			"Magic Reduction": {
				value: [20, 28, 36, 44],
				temp: "$$%"
			}
		}
	},{
		id: 7,
		name: "Aphotic Spire",
		type: "Target point",
		ulti: true,
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
			},
			"Arrow Speed": {
				value: 1500,
				temp: "$$ ranges/s"
			},
		},
	}
];

const myTypes = [ "Target unit", "Target point", "Instant", "Passive", "Target unit/point" ];

Vue.component('formspell', {
	props: ["data"],
	data() {
		return {
			types: [],
			paramsList: {},
			newParam: {},
		}
	},
	template: `
		<div>
			<div>
				<label for="name">Name</label>
				<input id="name" type="text" v-model="data.name">
			</div>
				<div>
					<label for="ulti">Ulti:</label>
					<input type="checkbox" id="ulti" v-model="data.ulti">
				</div>
			<div>
				<label for="type">Type</label>
				<select id="type" v-model="data.type">
					<option v-for="type in types">{{ type }}</option>
				</select>
			</div>
			<div>
				<label for="targets">Targets</label>
				<div>
					<input type="checkbox" id="enemies" value="enemies" v-model="data.targets">
					<label for="enemies">Enemies</label>
					<input type="checkbox" id="allies" value="allies" v-model="data.targets">
					<label for="allies">Allies</label>
					<input type="checkbox" id="self" value="self" v-model="data.targets">
					<label for="self">Self</label>
				</div>
				<div>
					<input type="checkbox" id="air" value="air" v-model="data.targets">
					<label for="air">Air</label>
					<input type="checkbox" id="ground" value="ground" v-model="data.targets">
					<label for="ground">Ground</label>
				</div>
			</div>
			<div>
				<label for="manacost">Manacost</label>
				<input id="manacost" type="text" v-model="data.manacost">
			</div>
			<div>
				<label for="cooldown">Cooldown</label>
				<input id="cooldown" type="text" v-model="data.cooldown">
			</div>
			<div>
				<label>Params</label>
				<div v-for="param, key in paramsList">
					<input type="text" v-model="key">
					<input type="text" v-model="param.value">
					<input type="text" v-model="param.temp">
					<button type="button" @click="removeParam(key)">X</button>
				</div>
				<div>
					<input type="text" v-model="newParam.key">
					<input type="text" v-model="newParam.value">
					<input type="text" v-model="newParam.temp">
					<button type="button" @click="addParam">+</button>
				</div>
			</div>
			<button type="button" @click="submitForm()">Valider</button>
		</div>
	`,
	mounted() {
		console.log(this.$props.data);

		this.types = myTypes;
		this.paramsList = this.$props.data.params;
	},
	methods: {
		submitForm: function() {
			this.$emit("post", this.$props.data);
		},
		addParam: function() {
			if (this.newParam.key) {
				this.paramsList[this.newParam.key] = {
					"value": this.newParam.value,
					"temp": this.newParam.temp
				}
	
				this.updatePropParamList();
	
				this.resetParamList();
			}
		},
		removeParam: function(deletedKey) {
			var keyList = Object.keys(this.paramsList);
			var result = {};

			keyList.forEach(key => {
				if (key != deletedKey) {
					result[key] = {
						"value": this.paramsList[key].value,
						"temp": this.paramsList[key].temp
					}
				}
			})

			this.paramsList = result;

			this.updatePropParamList();
		},
		updatePropParamList: function() {
			this.$props.data.params = this.paramsList;
		},
		resetParamList: function() {
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

Vue.component('basic', {
	props: ["data", "lvl"],
	template: `
		<div>
			<div>
				<strong>{{ data.name + " - [Lvl " + lvl + "]" }}</strong>
			</div>
			<br>
			<div>{{ data.description }}|n</div>
			<div v-for="param, key in data.params">|cff00d619{{ key + '|r: ' + renderParam(param, lvl) }}</div>
			<div v-if="data.cooldown">|n{{ renderCooldown(data, lvl) }}</div>
		</div>`,
	methods: {
		renderParam: function(param, lvl) {
			var template = param.temp ? param.temp : "$$";
			if (Array.isArray(param.value)) {
				return template.replace("$$", param.value[(lvl - 1)]);
			} else {
				return template.replace("$$", param.value);
			}
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
		selectedSpell: "Thunderbolt",
		nbrTotalSpells: 251,
		spells: [],
		typesSpell: [],
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
			"json": {
				name: "JSON",
				show: false
			},
		}
	},
	mounted(){
	    this.spells = mySpells;
	},
	methods: {
		filterByName: function() {
			return this.spells.filter(spell => spell.name == this.selectedSpell);
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
			var myData = [];

			this.spells.forEach(spell => {
				if (spell.id == newSpell.id) {
					myData.push(newSpell);
				} else {
					myData.push(spell);
				}
			})

			this.spells = myData;
		}
	},
});