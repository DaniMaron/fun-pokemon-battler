const {Pokemon,Grass,Water, Fire,Normal, Charmander, Squirtle, Bulbasaur, Rattata } = require("./pokemon");
const Pokeball = require("./pokeball");
const Trainer = require("./trainer");
const Battle = require('./battle')

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
        const givenPokemon = new Water('Squirtle', 44, 16, 'Surf')
        expect(currentPokemon.attackDamage).toEqual(17)
        expect(givenPokemon.attackDamage).toEqual(16)
        expect(currentPokemon.isWeakAgainst(givenPokemon)).toBe(true);
        expect(givenPokemon.isEffectiveAgainst(currentPokemon)).toBe(true);
    });
    
    test('return Charmander class with its name and move ', () => {
        const currentPokemon = new Charmander(44,17);
        const currentPokemon2 = new Squirtle(44, 16);
        
        expect(currentPokemon.attackDamage).toEqual(17)
        expect(currentPokemon.move).toEqual('ember')
        expect(currentPokemon2.attackDamage).toEqual(16)

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

    test('return trainer name', () => {
        const newTrainer = new Trainer("Ash");
         expect(newTrainer.name).toBe("Ash")
    });
    
    test('return the belt amount when we catch a pokemon', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44,17);

        expect(newTrainer.belt.length).toEqual(0);
        newTrainer.catch(newPokemon);
        expect(newTrainer.belt.length).toEqual(1);
    });

    test('return the belt amount when we catch a certain amount of pokemon ', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44,17);

        expect(newTrainer.belt.length).toEqual(0);
        newTrainer.catch(newPokemon);
        expect(newTrainer.belt.length).toEqual(1);
        newTrainer.catch(newPokemon);
        newTrainer.catch(newPokemon);
        newTrainer.catch(newPokemon);
        newTrainer.catch(newPokemon);
        newTrainer.catch(newPokemon);
        expect(newTrainer.belt.length).toEqual(6);
        expect(newTrainer.catch(newPokemon)).toEqual("you dont have any empty poke balls!!");
        
    });

    test('returns correct pokemon name when using throw method and pokemon exists in the belt', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44,17);
        const consoleLogSpy = jest.spyOn(console,'log')

        newTrainer.getPokemon("Charmander");
        expect(consoleLogSpy).toHaveBeenCalledWith('GO Charmander!!');
    });
    test('displays message if pokemon is not in belt', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44,17);
        const consoleLogSpy = jest.spyOn(console,'log')
        expect(newTrainer.getPokemon("Squirtle")).toBe("You don't own this pokemon");
    });
    test('returning correct hitpoints when attacker type is weak against defender type', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44, 17);
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2 = new Squirtle(44,16);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon)
        expect(newPokemon2.hitPoints).toBe(31.25)
    });
    test('returning correct hitpoints when attacker type is effective against defender type', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44, 17);
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2 = new Bulbasaur(45,16);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon)
        expect(newPokemon2.hitPoints).toBe(23.75)
    });
    test('returning correct hitpoints when attacker type is neither strong nor weak against defender type', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Rattata(47, 15,'uselesness');
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2 = new Bulbasaur(45,16);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon)
        expect(newPokemon2.hitPoints).toBe(30)
    });
    test('displays correct message when attack is super effective', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44, 17);
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2 = new Bulbasaur(45,16);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon)
        const consoleLogSpy = jest.spyOn(console, 'log')
        expect(consoleLogSpy).toHaveBeenCalledWith('Charmander used ember!\n');
        expect(consoleLogSpy).toHaveBeenCalledWith('This was super effective');
    });
    test('displays correct message when attack is not very effective', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44, 17);
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2 = new Squirtle(44,16);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon)
        const consoleLogSpy = jest.spyOn(console, 'log')
        expect(consoleLogSpy).toHaveBeenCalledWith('Charmander used ember!\n');
        expect(consoleLogSpy).toHaveBeenCalledWith('This was not very effective');
    });
    test('displays correct message when attack is neither effective nor weak', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Rattata(47, 15,'uselesness');
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2= new Charmander(44, 17);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon)
        const consoleLogSpy = jest.spyOn(console, 'log')
        expect(consoleLogSpy).toHaveBeenCalledWith('Rattata used uselesness!\n');
    });
    test('displays correct message when a pokemon wins', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44, 17);
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2 = new Squirtle(44, 16);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon)
        newBattle.fight(newPokemon)
        newBattle.fight(newPokemon)
        newBattle.fight(newPokemon)
        const consoleLogSpy = jest.spyOn(console, 'log')
        expect(consoleLogSpy).toHaveBeenCalledWith('Charmander wins!');
    })
    test('displays correct message when a pokemon wins', () => {
        const newTrainer = new Trainer("Ash");
        const newPokemon = new Charmander(44, 17);
        const newTrainer2 = new Trainer("Misty");
        const newPokemon2 = new Squirtle(44, 16);
        const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)
        newBattle.fight(newPokemon2)
        newBattle.fight(newPokemon2)
        newBattle.fight(newPokemon2)
        const consoleLogSpy = jest.spyOn(console, 'log')
        expect(consoleLogSpy).toHaveBeenCalledWith('Squirtle wins!');
    })








})
