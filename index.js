// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
};

// Test the roll method
adventurer.roll();

// Part 2: Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll() {
        const result = Math.floor(Math.random() * 20) + 1;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

// Create Robin using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3: Class Features
class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        this.roll();
    }
}

// Create Robin as an Adventurer
const adventurerRobin = new Adventurer("Robin", "Healer");

// Part 4: Class Uniforms
class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error("Invalid role!");
        }
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }
}

// Part 5: Gather Your Party
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

// Create a healer factory
const healers = new AdventurerFactory("Healer");
const robinHealer = healers.generate("Robin");

// Part 6: Developing Skills
class Adventurer extends Character {
   

    duel(opponent) {
        while (this.health > 50 && opponent.health > 50) {
            const myRoll = this.roll();
            const opponentRoll = opponent.roll();
            if (myRoll > opponentRoll) {
                opponent.health -= 1;
                console.log(`${this.name} wins this round! ${opponent.name} loses 1 health.`);
            } else {
                this.health -= 1;
                console.log(`${opponent.name} wins this round! ${this.name} loses 1 health.`);
            }
        }
        console.log(`Winner: ${this.health > 50 ? this.name : opponent.name}`);
    }
}

// Part 7: Adventure Forth
const healer1 = healers.generate("Gandalf");
robinHealer.duel(healer1);
