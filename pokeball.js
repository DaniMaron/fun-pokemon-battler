const Pokemon = require("./pokemon")

class Pokeball {
    constructor(){
        this.storePokemon = {};
    }

    //const newPoke = new Pokemon("Pikachu");
    // newPoke.name

    throw(pokemon){
        if (pokemon === undefined) {
            if(this.isEmpty()){
                console.log("The Pokeball is empty");
            }else
                console.log(`GO ${this.storePokemon.name}!!`)
        }else{
             console.log(`You caught ${pokemon.name}`);
            this.storePokemon = pokemon;
        }
    }

    isEmpty(){
        if(this.storePokemon.name === undefined)
            return true
        return false
    }

    contains(){
        if(!this.isEmpty()){
            console.log(this.storePokemon.name);
            return this.storePokemon.name
        }
        return 'empty...';
    }

}






module.exports = Pokeball