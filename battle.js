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
        // console.log(attacker, '----attacker');
        // console.log(attacker.attackDamage,'--------attacker damage');
        // console.log(defender,'-------defender');
        // console.log(defender.hitPoints, '-------defender hitpoints after');
        
        // console.log(defender.hitPoints,'-------defender hitpoints before');
        let effectiveness = ''
        let attacker = playingPokemon
        let defender = this.switchPokemon(attacker)

        if (defender.isEffectiveAgainst(attacker)) {
            defender.hitPoints -= attacker.attackDamage * 0.75
        }
        else if (defender.isWeakAgainst(attacker)){
        defender.hitPoints -= attacker.attackDamage * 1.25
        effectiveness = 'This was super effective'}

        else
            defender.hitPoints -= attacker.attackDamage
    
        console.log(`${attacker.name} used ${attacker.move} on ${defender.name}!\n${effectiveness}`);
            
 


        this.playingPokemon = defender 

    }
}

module.exports = Battle