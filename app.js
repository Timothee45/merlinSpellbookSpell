const myTypes = [ "Target unit", "Target point", "Instant", "Passive", "Target unit/point", "Autocast" ];

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
      mySpell: {},
			newParam: {},
		}
	},
	template: `
		<div>
			<div>
				<label for="name">Name</label>
				<input id="name" type="text" v-model="mySpell.name">
			</div>
			<div>
				<label for="ulti">Ulti:</label>
				<input type="checkbox" id="ulti" v-model="mySpell.ulti">
			</div>
			<div>
				<label for="type">Type</label>
				<select id="type" v-model="mySpell.type">
					<option v-for="type in types">{{ type }}</option>
				</select>
			</div>
			<div>
				<label for="targets">Targets</label>
				<div>
					<input type="checkbox" id="enemies" value="enemies" v-model="mySpell.targets">
					<label for="enemies">Enemies</label>
					<input type="checkbox" id="allies" value="allies" v-model="mySpell.targets">
					<label for="allies">Allies</label>
					<input type="checkbox" id="self" value="self" v-model="mySpell.targets">
					<label for="self">Self</label>
					<input type="checkbox" id="none" value="none" v-model="mySpell.targets">
					<label for="none">None</label>
				</div>
					<input type="checkbox" id="heroes" value="heroes" v-model="mySpell.targets">
					<label for="heroes">Heroes</label>
					<input type="checkbox" id="nonheroes" value="non heroes" v-model="mySpell.targets">
					<label for="nonheroes">Non Heroes</label>
					<input type="checkbox" id="buildings" value="buildings" v-model="mySpell.targets">
					<label for="buildings">Buildings</label>
					<input type="checkbox" id="organics" value="organics" v-model="mySpell.targets">
					<label for="organics">Organics</label>
				<div>
				</div>
				<div>
					<input type="checkbox" id="air" value="air" v-model="mySpell.targets">
					<label for="air">Air</label>
					<input type="checkbox" id="ground" value="ground" v-model="mySpell.targets">
					<label for="ground">Ground</label>
				</div>
			</div>
			<div>
				<label for="description">Description</label>
				<div>
					<textarea id="description" v-model="mySpell.description" cols="67" rows="5"></textarea>
				</div>
			</div>
			<div>
				<label for="manacost">Manacost</label>
				<input id="manacost" type="text" v-model="mySpell.manacost">
			</div>
			<div>
				<label for="cooldown">Cooldown</label>
				<input id="cooldown" type="text" v-model="mySpell.cooldown">
			</div>
			<div>
				<label>Params</label>
				<div v-for="param, index in mySpell.params">
					<input type="text" v-model="param.name">
					<input type="text" v-model="param.value">
					<input type="text" v-model="param.temp">
					<button type="button" @click="removeParam(index)">X</button>
				</div>
				<div>
					<input type="text" v-model="newParam.name">
					<input type="text" v-model="newParam.value">
					<input type="text" v-model="newParam.temp">
					<button type="button" @click="addParam">+</button>
				</div>
			</div>
			<div>
				<label>Danger</label>
				<input type="text" v-model="mySpell.danger">
			</div>
			<button type="button" @click="submitForm()">Valider</button>
		</div>
	`,
	mounted() {
		this.types = myTypes;
    	this.mySpell = this.$props.spell;
	},
	watch: {
		spell() {
		  this.mySpell = this.$props.spell;
		}
	},
	methods: {
		submitForm: function() {
			this.$emit("post", this.mySpell);
		},
		addParam: function() {
			if (this.newParam.name) {
				this.mySpell.params.push(this.newParam);
	
				this.resetNewParam();
			}
		},
		removeParam: function(index) {
      		this.mySpell.params.splice(index, 1);
		},
		resetNewParam: function() {
			this.newParam = {};
		},
	},
});

Vue.component('learning', {
	props: ["spell"],
	template: `
		<div>
			<div>
				<strong>Learn |cffff3300{{spell.name }}|r</strong>
			</div>
			<br>
			<div v-if="spell.type">
				|cffFF8000Type|r: {{ spell.type }}
			</div>
			<div v-if="spell.targets">
				|cffFF8000Targets|r: {{ spell.targets.join(", ") }}
			</div>
			|cff585858=======================================|r
			<div>{{ spell.description }}|n</div>
			<div v-if="spell.manacost">{{ renderMana(spell) }}</div>
			<div v-if="spell.cooldown">{{ renderCooldown(spell) }}|n</div>
			<div v-for="param in spell.params">{{ renderParam(param) }}</div>
			<div v-if="spell.danger">|n|cffFF0000{{ spell.danger }}|r</div>
		</div>`,
	methods: {
		renderParam: function(param) {
      var result = '|cff00d619' + param.name + '|r: ';

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
	props: ["spell", "lvl"],
	template: `
		<div>
			<div>
				<strong>{{ spell.name + " - [Lvl " + lvl + "]" }}</strong>
			</div>
			<br>
			<div>{{ spell.description }}|n</div>
			<div v-for="param, key in spell.params">{{ renderParam(param, lvl) }}</div>
			<div v-if="spell.cooldown">|n{{ renderCooldown(spell, lvl) }}</div>
			<div v-if="spell.danger">|n|cffFF0000{{ spell.danger }}|r</div>
		</div>`,
	methods: {
		renderParam: function(param, lvl) {
      var result = '|cff00d619' + param.name + '|r: ';

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
		nbrTotalSpells: 252,
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
		},
		showJson: false,
	},
	mounted(){
	    this.spells = mySpellsLibrary;

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