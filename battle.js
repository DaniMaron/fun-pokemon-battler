const Trainer = require("./trainer")

class Battle {
    constructor(trainer1, trainer2, pokemon1, pokemon2) {
        this.trainer1 = trainer1
        this.trainer2 = trainer2
        this.pokemon1 = pokemon1
        this.pokemon2 = pokemon2
        this.playingPokemon = pokemon1
    }
    switchPokemon(pokemon) {
        if (pokemon === this.pokemon1)
            pokemon = this.pokemon2
        else
            pokemon = this.pokemon1

        return pokemon

    }

    fight(playingPokemon) {

        let effectiveness = ''
        let attacker = playingPokemon
        let defender = this.switchPokemon(attacker)
        const effective = 0.75
        const weak = 1.25

        if (defender.isEffectiveAgainst(attacker)) { 
            defender.takeDamage(attacker.attackDamage * effective)
            effectiveness = 'This was not very effective'
        }

        else if (defender.isWeakAgainst(attacker)){
            defender.takeDamage(attacker.attackDamage * weak)
            effectiveness = 'This was super effective'
        }

        else
            defender.takeDamage(attacker.attackDamage)
    
        attacker.useMove() 
        console.log(effectiveness);
         
        if(!defender.hasFainted())
            this.playingPokemon = defender
        else
            console.log(`${attacker.name} wins!`); 
         
    }
    


}

module.exports = Battle