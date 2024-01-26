// A Pokemon will need to have the following properties:

// name: the name its given
// hitPoints: the amount of health the Pokemon has, represented as a number
// attackDamage: the amount of damage a Pokemon can inflict (should be a number)
// move: This is the move the Pokemon does when battling, this should default to "tackle"

class Pokemon{
    constructor(name,hitPoints,attackDamage,move){
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move;
    }

    takeDamage(damage){
        this.hitPoints -= damage; 
    }  

    useMove(){
        console.log(`${this.name} used ${this.move}!\n`)
        return this.attackDamage;
    }

    hasFainted(){
       return this.hitPoints <= 0;
    }


}


class Fire extends Pokemon{
    constructor(name,hitPoints, attackDamage,move){
        super(name,hitPoints,attackDamage,move);
        this.type = "fire";
    }
    
    isEffectiveAgainst(givenPokemon){
        if(givenPokemon.type === 'normal')
        return false
    //return this.types[0][this.type + ',' + this.givenPokemon.type]
    return givenPokemon.type === "grass" ? true : false;
}

    isWeakAgainst(givenPokemon){
        if(givenPokemon.type === 'normal')
            return false

        return givenPokemon.type === "water" ? true : false;
    }

}

class Water extends Pokemon{
    constructor(name,hitPoints,attackDamage,move){
        super(name,hitPoints,attackDamage,move);
        this.type = "water";
    }

    isEffectiveAgainst(givenPokemon){
        if(givenPokemon.type === 'normal')
            return false

        return givenPokemon.type === "fire" ? true : false;
    }
    
    isWeakAgainst(givenPokemon){        this.move = "vine whip"

        if(givenPokemon.type === 'normal')
            return false

        return givenPokemon.type === "grass" ? true : false;
    }

}
class Grass extends Pokemon{
    constructor(name,hitPoints,attackDamage,move){
        super(name,hitPoints,attackDamage,move);
        this.type = "grass";
    }
    isEffectiveAgainst(givenPokemon){
        if(givenPokemon.type === 'normal')
            return false
       
        return givenPokemon.type === "water" ? true : false;
    }

    isWeakAgainst(givenPokemon){
        if(givenPokemon.type === 'normal')
            return false
       
        return givenPokemon.type === "fire" ? true : false;
    }

}


class Normal extends Pokemon{
    constructor(name,hitPoints, attackDamage, move){
        super(name,hitPoints,attackDamage,move);
        this.type = "normal";
    }

    isEffectiveAgainst(givenPokemon){     
        return false;
    }

    isWeakAgainst(givenPokemon){    
        return false;
    }

}

class Charmander extends Fire{
    constructor(hitPoints, attackDamage){
        super(hitPoints, attackDamage);
        
        this.name = 'Charmander';  
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage 
        this.move = "ember" 
    }; 
 
}

class Squirtle extends Water{
    constructor(hitPoints, attackDamage){
        super(hitPoints, attackDamage);
        
        this.name = 'Squirtle'
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage 
        this.move = "water gun"
    };

}

class Bulbasaur extends Grass{
    constructor(hitPoints, attackDamage){
        super(hitPoints, attackDamage);
        
        this.name = 'Bulbasaur';  
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage 
        this.move = "vine whip"
    };

}

class Rattata  extends Normal{
    constructor(hitPoints, attackDamage,move){
        super(hitPoints, attackDamage,move);
        
        this.name = 'Rattata';  
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage 
        this.move =  move
    };
}






module.exports = {Pokemon,Grass,Water,Fire, Normal, Charmander, Squirtle, Bulbasaur, Rattata}
