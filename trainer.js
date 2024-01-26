const Pokeball = require("./pokeball")

class Trainer{
    constructor(name){
        this.name = name
        this.belt = []
    }

    catch(pokemon){
    const pokeBall = new Pokeball();
    
    if (this.belt.length < 6) {
        pokeBall.throw(pokemon); 
        this.belt.push(pokeBall);
    }
    else{
        return "you dont have any empty poke balls!!";
    }

    }

    getPokemon(pokemonName){
        for (const ball of this.belt) {
            if (ball.name === pokemonName.name) {
                ball.throw();
            }
        }
        return "You don't own this pokemon"
        
    }




}






module.exports = Trainer