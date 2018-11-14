const myTypes = [ "Target unit", "Target point", "Instant", "Passive", "Target unit/point", "Autocast" ];

const defaultSpell = {
	type: "Target unit",
	targets: ["enemies", "ground", "air"],
	params: [],
};

const addStruct = `
		local $name$ $variable$ = $name$.allocate()

		set $variable$.caster = U
		set $variable$.target = U1
		set $variable$.lvl = lvl
		set $variable$.duration = 0

		set .$staticVariable$T = .$staticVariable$T + 1
		set .$staticVariable$[.$staticVariable$T] = $variable$

		if .$staticVariable$T == 1 then
			call TimerStart(.T, INTERVAL, true, function $name$.update)
		endif
`;

const addStructSingle = `
		local $name$ $variable$
		local boolean found = false
		local integer I = 1

		loop
			exitwhen I > .$staticVariable$T
			set $variable$ = .$staticVariable$[I]

			if $variable$.target == U1 then
				set I = .$staticVariable$T
				set found = true

				set $variable$.duration = 0
				set $variable$.lvl = lvl
			endif

			set I = I + 1
		endloop

		if not(found) then
			set $variable$ = $name$.allocate()

			set $variable$.caster = U
			set $variable$.target = U1
			set $variable$.lvl = lvl
			set $variable$.duration = 0

			set .$staticVariable$T = .$staticVariable$T + 1
			set .$staticVariable$[.$staticVariable$T] = $variable$

			if .$staticVariable$T == 1 then
				call TimerStart(.T, INTERVAL, true, function $name$.update)
			endif
		endif
`;

const basicTemplate = `
Private struct $name$
	static $name$ array $staticVariable$
	static integer $staticVariable$T = 0
	static timer T = null

	unit caster
	unit target
	real lvl
	real duration

	private method onDestroy takes nothing returns nothing
		set .caster = null
		set .target = null

	endmethod

	static method update takes nothing returns nothing
		local $name$ $variable$
		local integer I = 0

		loop
			set I = I + 1
			set $variable$ = .$staticVariable$[I]

			set $variable$.duration = $variable$.duration + INTERVAL

			if $variable$.duration >= DURATION or not(isAlive($variable$.target)) then
				call $variable$.destroy()

				set .$staticVariable$[I] = .$staticVariable$[.$staticVariable$T]
				set .$staticVariable$T = .$staticVariable$T - 1
				set I = I - 1
			endif

			exitwhen I >= .$staticVariable$T
		endloop

		if .$staticVariable$T <= 0 then
			call PauseTimer(.T)
			set .$staticVariable$T = 0
		endif

	endmethod

	static method add$name$ takes unit U, unit U1, real lvl returns nothing
	$addStruct$
	endmethod
endstruct
`;

Vue.component('struct', {
	data() {
		return {
			structCode: "",
			name: "",
			variable: "",
			staticVariable: "",
			singleAddStruct: false,
		}
	},
	template: `
		<div>
			<div>
				<div>
					<label for="name-struct">Nom Structure</label>
					<input type="text" id="name-struct" v-model="name">
				</div>
				<div>
					<label for="single">Single Structure : </label>
					<input type="checkbox" id="single" v-model="singleAddStruct">
				</div>

				<button type="button" @click="generateStruct">Valider</button>
			</div>
			<textarea cols="80" rows="35">{{ structCode }}</textarea>
		</div>
	`,
	mounted() {
		this.structCode = basicTemplate;
	},
	methods: {
		generateStruct: function() {
			this.staticVariable = this.name.substr(0, 1);
			this.variable = this.staticVariable.toLowerCase();

			this.renderTemplate();
		},
		renderTemplate: function() {
			var customTemplate = basicTemplate;

			if (this.singleAddStruct) {
				customTemplate = customTemplate.replace(/\$addStruct\$/g, addStructSingle);
			} else {
				customTemplate = customTemplate.replace(/\$addStruct\$/g, addStruct);
			}

			this.structCode = customTemplate.replace(/\$name\$/g, this.name)
								.replace(/\$variable\$/g, this.variable)
								.replace(/\$staticVariable\$/g, this.staticVariable);
		},
	},
});

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
				<label for="cooldown">Cooldown</label>
				<input id="cooldown" type="text" v-model="mySpell.cooldown">
			</div>
			<div>
				<label for="manacost">Manacost</label>
				<input id="manacost" type="text" v-model="mySpell.manacost">
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
					<input type="text" id="paramName" v-model="newParam.name">
					<input type="text" v-model="newParam.value">
					<input type="text" v-model="newParam.temp">
					<button type="button" @click="addParam">+</button>
				</div>
			</div>
			<div>
				<label for="danger">Danger</label>
				<input type="text" id="danger" v-model="mySpell.danger">
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

				document.getElementById("paramName").focus();
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
			<br>
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

Vue.component('heroes', {
	template: `
	<div>
		<label for="attr">Attributes</label>
		<input type="checkbox" id="attr" v-model="attr">
		<label for="para">Paramètres</label>
		<input type="checkbox" id="para" v-model="params">
		<label for="result">Resultat</label>
		<input type="checkbox" id="result" v-model="result">
		<table style="margin-top: 10px;">
			<thead>
				<tr>
					<th>N°</th>
					<th>Type</th>
					<th>Name</th>
					<th>Histoire</th>
					<th v-if="attr">Capacité Main</th>
					<th v-if="attr">Agilité</th>
					<th v-if="attr">Intelligence</th>
					<th v-if="attr">Force</th>
					<th v-if="attr">+ Agilité</th>
					<th v-if="attr">+ Intelligence</th>
					<th v-if="attr">+ Force</th>
					<th v-if="params">Vitesse</th>
					<th v-if="params">Dégats</th>
					<th v-if="params">Vitesse Attk</th>
					<th v-if="params">Armure</th>
					<th v-if="params">Vie</th>
					<th v-if="params">Regen Vie</th>
					<th v-if="params">Mana</th>
					<th v-if="params">Regen Mana</th>
					<th v-if="result">Buy Message</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="hero, index in heroes">
					<td class="hero-cell">{{ index + 1 }}</td>
					<td class="hero-cell"><input type="text" v-model="hero.type"></td>
					<td class="hero-cell"><input type="text" v-model="hero.name"></td>
					<td class="hero-cell"><input type="text" v-model="hero.story"></td>
					<td v-if="attr" class="hero-cell">
						<select v-model="hero.mainAttribute">
							<option v-for="att in attributes">{{ att }}</option>
						</select>
					</td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="hero.baseAgi"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="hero.baseInt"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="hero.baseStr"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="hero.bonusAgi"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="hero.bonusInt"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="hero.bonusStr"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.moveSpeed"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.damages"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.attackRate"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.armor"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.life"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.regenLife"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.mana"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="hero.regenMana"></td>
					<td v-if="result" class="hero-cell">{{ renderBuy(hero) }}</td>
				</tr>
				<tr>
					<td class="hero-cell">
						<button @click="addHero">+</button>
					</td>
					<td class="hero-cell"><input type="text" v-model="newHero.type"></td>
					<td class="hero-cell"><input type="text" v-model="newHero.name"></td>
					<td class="hero-cell"><input type="text" v-model="newHero.story"></td>
					<td v-if="attr" class="hero-cell">
						<select v-model="newHero.mainAttribute">
							<option v-for="att in attributes">{{ att }}</option>
						</select>
					</td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="newHero.baseAgi"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="newHero.baseInt"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="newHero.baseStr"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="newHero.bonusAgi"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="newHero.bonusInt"></td>
					<td v-if="attr" class="hero-cell"><input type="text" v-model="newHero.bonusStr"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.moveSpeed"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.damages"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.attackRate"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.armor"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.life"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.regenLife"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.mana"></td>
					<td v-if="params" class="hero-cell"><input type="text" v-model="newHero.regenMana"></td>
					<td v-if="result" class="hero-cell"></td>
				</tr>
			</tbody>
		</table>
		<textarea type="textarea" cols="60" rows="20" v-model="importHeroes"></textarea>
		<button @click="importDatas">+</button>
	</div>`,
	data() {
		return {
			attr: true,
			params: true,
			result: false,
			heroes: [],
			newHero: {},
			importHeroes: "",
			attributes: ["Agility", "Intelligence", "Strength"],
		}
	},
	mounted() {
		this.heroes = defaultHeroes;
	},
	methods: {
		renderBuy: function(hero) {
			return "Buy |cff00d619" + hero.name + "|r the |cffFF0000" + hero.type + "|r";
		},
		addHero: function() {
			this.newHero.id = this.getNewId();
			this.heroes.push(this.newHero);
			this.newHero = {};
		},
		getNewId: function() {
			var newId = 0;

			this.heroes.forEach(hero => {
				if (hero.id > newId) {
					newId = hero.id;
				}
			});

			return newId + 1;
		},
		importDatas: function() {
			var dataLines = this.importHeroes.split("\n");
			var keyList = dataLines[0].split("\t");
			var keyNumber = keyList.length;
			var linesNumber = dataLines.length;
			var finalHeroArray = [];

			for (var i = 1; i < linesNumber; i++) {
				var lineDetail = dataLines[i].split("\t");
				var myHero = {};

				for (var j = 0; j < keyNumber; j++) {
					myHero[keyList[j]] = lineDetail[j];
				}
				myHero.id = j;
				finalHeroArray.push(myHero);
			}

			this.heroes = finalHeroArray;
			console.log(finalHeroArray);
		}
	},
});

const myVue = new Vue({
	el: "#app",
	data: {
		selectedId: 3,
		nbrTotalSpells: 255,
		spells: [],
		nbrNewSpells: 0,
		typesSpell: [],
		defaultSpell: {},
		heroes: [],
		display: {
			"learning": {
				name: "LEARNING",
				show: false,
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
			"struct": {
				name: "STRUCT",
				show: false
			},
			"heroes": {
				name: "HEROES",
				show: true
			},
		},
		showJson: false,
	},
	mounted(){
	    this.spells = mySpellsLibrary;

	    this.defaultSpell = defaultSpell;

	    this.orderSpells();
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

				this.nbrNewSpells++;

				this.orderSpells();

				this.selectedId = newSpell.id;
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
		orderSpells: function() {
			this.spells.sort(this.compare);
		},
		compare: function(a,b) {
		  if (a.name < b.name)
		    return -1;
		  if (a.name > b.name)
		    return 1;
		  return 0;
		},
	},
});
