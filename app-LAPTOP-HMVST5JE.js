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

const addStructSingle = `	local $name$ $variable$
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
private struct $name$
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

	private method findTargets takes nothing returns nothing
		local unit U2

		call GroupEnumUnitsInRange(G, .x, .y, AREA, Condition(function nullFilter))

		loop
			set U2 = FirstOfGroup(G)
			exitwhen U2 == null
			call GroupRemoveUnit(G, U2)

			if isAliveNotMagicImmune(U2) and IsUnitEnemy(U2, .P) then
				call magicDamage(.caster, U2, .damage)
			endif
		endloop

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
					<button type="button" @click="moveParam(index, index-1, param)">Up</button>
					<button type="button" @click="removeParam(index)">X</button>
					<button type="button" @click="moveParam(index, index+1, param)">Do</button>
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
		moveParam: function(index, targetIndex, param) {
			let paramsTable = [];
			const nbrParams = this.mySpell.params.length;

			if (nbrParams > 1 && targetIndex >= 0 && targetIndex < nbrParams) {
				for (var i = 0; i < nbrParams; i++) {
					if (i == index) {
						paramsTable.push(this.mySpell.params[targetIndex]);
					} else if (i == targetIndex) {
						paramsTable.push(param);
					} else {
						paramsTable.push(this.mySpell.params[i]);
					}
				}
				this.mySpell.params = paramsTable;
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
		<table style="margin-top: 10px;" class="table-bordered table-striped">
			<thead>
				<tr>
					<th>N°</th>
					<th>Id</th>
					<th>Type</th>
					<th>Name</th>
					<th>Icone</th>
					<th>Model</th>
					<th v-if="showStories">Histoire</th>
					<th v-if="attr">Capacité Main</th>
					<th v-if="attr">Agi</th>
					<th v-if="attr">Inté</th>
					<th v-if="attr">Force</th>
					<th v-if="attr">+ Agi</th>
					<th v-if="attr">+ Inté</th>
					<th v-if="attr">+ Force</th>
					<th v-if="params">Ms</th>
					<th v-if="params">t Attk</th>
					<th v-if="params">Dmg</th>
					<th v-if="params">Vit Attk</th>
					<th v-if="params">A Rng</th>
					<th v-if="params">Arm</th>
					<th v-if="params">Vie</th>
					<th v-if="params">r Vie</th>
					<th v-if="params">Mana</th>
					<th v-if="params">r Mana</th>
					<th v-if="result">Buy</th>
					<th v-if="result">Pres</th>
					<th v-if="result">Struct</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="hero, index in heroes" :class="{ 'line-highlighted': clicked[index] }" @click="hightlightLine(index)">
					<td class="hero-cell">{{ index + 1 }}</td>
					<td class="hero-cell"><input type="text" class="small-input" v-model="hero.id"></td>
					<td class="hero-cell"><input type="text" v-model="hero.type"></td>
					<td class="hero-cell"><input type="text" v-model="hero.name"></td>
					<td class="hero-cell"><input type="text" v-model="hero.iconPath"></td>
					<td class="hero-cell"><input type="text" v-model="hero.modelPath"></td>
					<td v-if="showStories" class="hero-cell"><input type="text" v-model="hero.story"></td>
					<td v-if="attr" class="hero-cell">
						<select v-model="hero.mainAttribute">
							<option v-for="att in attributes">{{ att }}</option>
						</select>
					</td>
					<td v-if="attr" class="hero-cell"><input type="text" class="small-input" v-model="hero.baseAgi"></td>
					<td v-if="attr" class="hero-cell"><input type="text" class="small-input" v-model="hero.baseInt"></td>
					<td v-if="attr" class="hero-cell"><input type="text" class="small-input" v-model="hero.baseStr"></td>
					<td v-if="attr" class="hero-cell"><input type="text" class="small-input" v-model="hero.bonusAgi"></td>
					<td v-if="attr" class="hero-cell"><input type="text" class="small-input" v-model="hero.bonusInt"></td>
					<td v-if="attr" class="hero-cell"><input type="text" class="small-input" v-model="hero.bonusStr"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.moveSpeed"></td>
					<td v-if="params" class="hero-cell">
						<select v-model="hero.typeAttk">
							<option v-for="typ in typesAttack">{{ typ }}</option>
						</select>
					</td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.damages"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.attackRate"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.attackRange"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.armor"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.life"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.regenLife"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.mana"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="hero.regenMana"></td>
					<td v-if="result" class="hero-cell">{{ renderBuy(hero) }}</td>
					<td v-if="result" class="hero-cell">{{ renderPresentation(hero) }}</td>
					<td v-if="result" class="hero-cell">{{ renderStruct(hero) }}</td>
				</tr>
				<tr>
					<td class="hero-cell">
						<button @click="addHero">+</button>
					</td>
					<td class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.id" placeholder="id"></td>
					<td class="hero-cell"><input type="text" v-model="newHero.type" placeholder="type..."></td>
					<td class="hero-cell"><input type="text" v-model="newHero.name" placeholder="name..."></td>
					<td class="hero-cell"><input type="text" v-model="newHero.iconPath" placeholder="icon path..."></td>
					<td class="hero-cell"><input type="text" v-model="newHero.modelPath" placeholder="model path..."></td>
					<td v-if="showStories" class="hero-cell"><input type="text" v-model="newHero.story" placeholder="story..."></td>
					<td v-if="attr" class="hero-cell">
						<select v-model="newHero.mainAttribute">
							<option v-for="att in attributes">{{ att }}</option>
						</select>
					</td>
					<td v-if="attr" class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.baseAgi" placeholder="agi"></td>
					<td v-if="attr" class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.baseInt" placeholder="int"></td>
					<td v-if="attr" class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.baseStr" placeholder="str"></td>
					<td v-if="attr" class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.bonusAgi" placeholder="+ agi"></td>
					<td v-if="attr" class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.bonusInt" placeholder="+ int"></td>
					<td v-if="attr" class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.bonusStr" placeholder="+ str"></td>
					<td v-if="params" class="hero-cell small-input"><input type="text" class="small-input" v-model="newHero.moveSpeed" placeholder="ms"></td>
					<td v-if="params" class="hero-cell small-input">
						<select v-model="newHero.typeAttk">
							<option v-for="typ in typesAttack">{{ typ }}</option>
						</select>
					</td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.damages" placeholder="dmg"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.attackRate" placeholder="as"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.attackRange" placeholder="rng"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.armor" placeholder="arm"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.life" placeholder="hp"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.regenLife" placeholder="r hp"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.mana" placeholder="mp"></td>
					<td v-if="params" class="hero-cell"><input type="text" class="small-input" v-model="newHero.regenMana" placeholder="r mp"></td>
					<td v-if="result" class="hero-cell"></td>
					<td v-if="result" class="hero-cell"></td>
					<td v-if="result" class="hero-cell"></td>
				</tr>
			</tbody>
		</table>
		<textarea type="textarea" cols="60" rows="20" v-model="importHeroes" placeholder="to import..."></textarea>
		<button @click="importDatas">+</button>
		<textarea type="textarea" cols="60" rows="20">const defaultHeroes = {{ heroes }}</textarea>
		<table class="table-bordered table-striped" v-html="renderRepartition()">
		</table>
		<div>
			<div v-for="hero in heroes">{{ renderStruct(hero) }}</div>
		</div>
	</div>`,
	data() {
		return {
			attr: true,
			params: true,
			result: false,
			heroes: [],
			clicked: [],
			newHero: {},
			showStories: false,
			selectedRow: null,
			attributeRepartition: {},
			importHeroes: "",
			attributes: ["Agility", "Intelligence", "Strength"],
			typesAttack: ["Melee", "Ranged"],
		}
	},
	mounted() {
		this.heroes = defaultHeroes;

		this.clicked = this.emptyClickTable();

		this.getRepartition();
	},
	methods: {
		emptyClickTable: function() {
			var newArray = [];
			newArray.length = this.heroes.length;

			return newArray.fill(false);
		},
		renderBuy: function(hero) {
			return "Choose |cff7300e6" + hero.name + "|r the |cff00cc00" + hero.type + "|r";
		},
		hightlightLine: function(index) {
			if (index != this.selectedRow) {
				var newArray = this.emptyClickTable();
				newArray[index] = true;

				this.clicked = newArray;
				this.selectedRow = index;
			}
		},
		getRepartition: function() {
			var repartition = {};

			this.heroes.forEach(hero => {
				attr = hero.mainAttribute;

				if (repartition[attr]) {
					repartition[attr] = repartition[attr] + 1;
				} else {
					repartition[attr] = 1;
				}
			});

			this.attributeRepartition = repartition;
		},
		renderStruct: function(hero) {
			var result = encodeURI(hero.iconPath);
			var resultModel = encodeURI(hero.modelPath);

			return '	call Hero.addHero("' + hero.type + '", \'' + hero.id + '\', "' + hero.mainAttribute + '", "' + decodeURI(result.replace(/%5C/g,"%5C%5C")) + '", "' + decodeURI(resultModel.replace(/%5C/g,"%5C%5C")) + '")	//' + (hero.type).toUpperCase()
		},
		renderPresentation: function(hero) {
			var typeAttackColor = "99ccff";
			var attrColor = "ff9933";
			var paramColor = "1aff8c";
			var msColor = "ff6699";
			var descriptionColor = "b3b3b3";
			var primaryAttributeColor = "FFD700";
			var myPresentation = "";

			if (hero.story && hero.story != "") {
				myPresentation += '|cff' + descriptionColor + hero.story + '|r|n|n';
			}

			myPresentation += `|cff` + typeAttackColor + `Type|r: ` + hero.typeAttk;

			var agi = `|cff` + attrColor + `Agility|r: ` + hero.baseAgi + ` + ` + hero.bonusAgi + ` per lvl`;
			var int = `|cff` + attrColor + `Intelligence|r: ` + hero.baseInt + ` + ` + hero.bonusInt + ` per lvl`;
			var str = `|cff` + attrColor + `Strength|r: ` + hero.baseStr + ` + ` + hero.bonusStr + ` per lvl`;

			myPresentation += `|n|n`;

			if (hero.mainAttribute == 'Agility') {
				myPresentation += `|cff` + primaryAttributeColor + agi + `|r`;
			} else {
				myPresentation += agi;
			}

			myPresentation += `|n`;

			if (hero.mainAttribute == 'Intelligence') {
				myPresentation += `|cff` + primaryAttributeColor + int + `|r`;
			} else {
				myPresentation += int;
			}

			myPresentation += `|n`;

			if (hero.mainAttribute == 'Strength') {
				myPresentation += `|cff` + primaryAttributeColor + str + `|r`;
			} else {
				myPresentation += str;
			}

			myPresentation += `
				|n|n|cff` + paramColor + `Damages|r: ` + hero.damages + `
				|n|cff` + paramColor + `Attack Rate|r: ` + hero.attackRate + ` seconds
				|n|cff` + paramColor + `Armor|r: ` + hero.armor + `
				|n|cff` + paramColor + `Life|r: ` + hero.life + ` - ` + hero.regenLife + ` hp/s ` + `
				|n|cff` + paramColor + `Mana|r: ` + hero.mana + ` - ` + hero.regenMana + ` mana points/s` + `
				|n|n|cff` + msColor + `Move Speed|r: ` + hero.moveSpeed + ` ranges/s`;

			return myPresentation;
		},
		renderRepartition: function() {
			var repart = "";
			var keys = Object.keys(this.attributeRepartition);

			keys.forEach(key => {
				repart += '<tr><th class="hero-cell">' + key + '</th><td class="hero-cell">' + this.attributeRepartition[key] + '</td></tr>';
			});

			return repart;
		},
		addHero: function() {
			this.heroes.push(this.newHero);
			this.newHero = {};

			this.getRepartition();
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
				finalHeroArray.push(myHero);
			}

			//this.heroes = finalHeroArray;
			console.log(finalHeroArray);
		}
	},
});

const myVue = new Vue({
	el: "#app",
	data: {
		selectedId: 3,
		spells: [],
		typesSpell: [],
		defaultSpell: {},
		heroes: [],
		display: {
			"learning": {
				name: "LEARNING",
				show: true,
			},
			"basic": {
				name: "BASIC",
				show: false,
			},
			"edit": {
				name: "EDIT",
				show: false,
			},
			"new": {
				name: "NEW",
				show: false,
			},
			"json": {
				name: "JSON",
				show: false,
			},
			"struct": {
				name: "STRUCT",
				show: false,
			},
			"heroes": {
				name: "HEROES",
				show: false,
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

				this.orderSpells();

				this.selectedId = newSpell.id;
			}
		},
		getNewId: function() {
			var maxId = 0;

			this.spells.forEach(item => {
				if (item.id > maxId) {
					maxId = item.id;
				}
			});

			return maxId + 1;
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
