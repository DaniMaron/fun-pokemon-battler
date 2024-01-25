const {Pokemon,Grass,Water, Fire,Normal, Charmander, Squirtle } = require("./pokemon");
const Pokeball = require("./pokeball");
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
        expect(currentPokemon.isEffectiveAgainst(givenPokemon)).toEqual(false);
        expect(givenPokemon.isEffectiveAgainst(currentPokemon)).toBe(false);
    });
    test('returns true when current pokemon is effective against given pokemon', () => {
        const currentPokemon = new Fire("Charmander",44,17,"Flamethrower");
        const givenPokemon = new Grass('Bulbasaur',45,16,'Razor leaf')
        expect(currentPokemon.isEffectiveAgainst(givenPokemon)).toBe(true)
    });
    test('returns true when current pokemon is weak against against given pokemon', () => {
        const currentPokemon = new Fire("Charmander",44,17,"Flamethrower");
        const givenPokemon = new Water('Squirtle',44,16,'Surf')
        expect(currentPokemon.isWeakAgainst(givenPokemon)).toBe(true);
        expect(givenPokemon.isEffectiveAgainst(currentPokemon)).toBe(true);
    });

    test('return Charmander class with its name and move ', () => {
        const currentPokemon = new Charmander(44,17);
        const currentPokemon2 = new Squirtle(44,17);

         expect(currentPokemon.name).toBe("Charmander");
         expect(currentPokemon.move).toBe("ember");
         expect(currentPokemon2.name).toBe("Squirtle");
    });

    test('return pokemon name when caught', () => {
        const newPokemon = new Pokemon("Charmander",44,17,"Flamethrower");
        const newPokemon2 = new Squirtle(44,17);
        const newPokeBall = new Pokeball();
        //newPokeBall.isEmpty = false;
        const consoleLogSpy = jest.spyOn(console,'log')

        expect(newPokeBall.isEmpty()).toBe(true)
        expect(newPokeBall.contains()).toBe('empty...')

        newPokeBall.throw()
        expect(consoleLogSpy).toHaveBeenCalledWith('The Pokeball is empty');
        expect(newPokeBall.contains()).toBe('empty...')


        expect(newPokeBall.isEmpty()).toBe(true)

        newPokeBall.throw(newPokemon)
        expect(consoleLogSpy).toHaveBeenCalledWith('You caught Charmander');

        expect(newPokeBall.isEmpty()).toBe(false)
        expect(newPokeBall.contains()).toBe('Charmander')

        newPokeBall.throw()
        expect(consoleLogSpy).toHaveBeenCalledWith('GO Charmander!!');
        
        newPokeBall.throw(newPokemon2);
        expect(consoleLogSpy).toHaveBeenCalledWith('You caught Squirtle');
        expect(newPokeBall.contains()).toBe('Squirtle')


        newPokeBall.throw()
        expect(consoleLogSpy).toHaveBeenCalledWith('GO Squirtle!!');
        

      
    });

    
    
    
    
})
