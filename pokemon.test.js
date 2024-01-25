const {Pokemon,Grass,Water, Fire,Normal} = require("./pokemon")
//const Fire = require("./fire")
// const Grass = require("./pokemon")
//const Normal = require("./pokemon")
// const Water = require("./pokemon")

describe('Pokemon', () => {

    test('return class properties', () => {
        const pokemon = new Pokemon("Charmander",44,17,"Flamethrower");

         expect(pokemon.name).toBe("Charmander");
         expect(pokemon.hitPoints).toBe(44);
         expect(pokemon.attackDamage).toBe(17);
         expect(pokemon.move).toBe("Flamethrower");
    });

    test('update hitPoints after damage taken', () => {
        const pokemon = new Pokemon("Charmander",44,17,"Flamethrower");
        pokemon.takeDamage(10);

         expect(pokemon.hitPoints).toBe(34);
    });

    test('return attackDamage of the pokemon', () => {
        const pokemon = new Pokemon("Charmander",44,17,"Flamethrower");

         expect(pokemon.useMove()).toBe(17);
    });

    test('return true or false if the pokemon has fainted', () => {
        const pokemon = new Pokemon("Charmander",44,17,"Flamethrower");
        pokemon.takeDamage(43);
        expect(pokemon.hasFainted()).toBe(false);

        pokemon.takeDamage(60);
        expect(pokemon.hasFainted()).toBe(true);
        
        pokemon.takeDamage(1);
        expect(pokemon.hasFainted()).toBe(true);
    });
    test('returns false when given pokemon is of type normal', () => {
        const currentPokemon = new Fire("Charmander",44,17,"Flamethrower");
        const givenPokemon = new Normal('Eevee',55,18,'Headbutt');
        expect(currentPokemon.isEffectiveAgainst(givenPokemon)).toEqual(false)
    });
    // test('returns true when current pokemon is effective against given pokemon', () => {
    //     const currentPokemon = new Fire("Charmander",44,17,"Flamethrower");
    //     const givenPokemon = new Grass('Bulbasaur',45,16,'Razor leaf')
    //     expect(currentPokemon.isEffectiveAgainst(givenPokemon)).toBe(true)
    // });
    
})
