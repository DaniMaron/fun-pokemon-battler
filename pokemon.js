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
        this.types = [
            {'fire,grass': true},
            {'grass,water': true},
            {'water,fire': true},
            {'fire,water': false},
            {'water,grass': false},
            {'grass,fire': false},
        ]
    }

    takeDamage(damage){
        this.hitPoints -= damage;
    }

    useMove(){
        console.log(`${this.name} used ${this.move}`)
        return this.attackDamage;
    }

    hasFainted(){
       return this.hitPoints <= 0;
    }


}


class Water extends Pokemon{
    constructor(){
        super(name,hitPoints,attackDamage,move);
        this.type = "water";
    }

}

class Grass extends Pokemon{
    constructor(){
        super(name,hitPoints,attackDamage,move);
        this.type = "grasss";
    }

}

class Fire extends Pokemon{
    constructor(name,hitPoints, attackDamage,move){
        super(name,hitPoints,attackDamage,move);
        this.type = "fire";
    }

    isEffectiveAgainst(givenPokemon){
        // console.log(givenPokemon.type);
        console.log(this.type + ',' + givenPokemon.type);
        if(givenPokemon.type === 'normal')
            return false
       
        return this.types[0][this.type + ',' + this.givenPokemon.type]
    }
    
}

class Normal extends Pokemon{
    constructor(name,hitPoints, attackDamage, move){
        super(name,hitPoints,attackDamage,move);
        this.type = "normal";
    }

}

function isEffectiveAgainst(pokemon){

    

} 


module.exports = {Pokemon,Grass,Water,Fire, Normal}
