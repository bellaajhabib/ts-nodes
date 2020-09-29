import {Hero, ThrowingHero,ShootingHero,BlastingHero} from '../Hero/hero';

class Avengers {
    private ensemble: Hero[] = [];

    recruit(hero: Hero) {
        this.ensemble = this.ensemble
            .filter(({name}) => name === hero.name)
            .concat(hero);
    }

    fight() {
        this.ensemble.forEach(hero => hero.attack());
    }
}

const a = new Avengers();
 a.recruit(new ThrowingHero('Habib', "f"));
 a.recruit(new ShootingHero('Habib', "f"));
 a.recruit(new BlastingHero('Bellaaj', "f"));

a.fight();

