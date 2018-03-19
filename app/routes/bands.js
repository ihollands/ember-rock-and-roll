import Route from '@ember/routing/route';
import { A } from '@ember/array';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';

export default Route.extend({

  model() {
    // song instances
    let blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3
    });

    let yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4
    });

    let pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2
    });

    let twoBrothers = Song.create({
      title: 'Two Brothers',
      band: 'Hanni El Khatib',
      rating: 5
    });

    // band instances
    let ledZeppelin = Band.create({
      name: 'Led Zeppelin',
      songs: A([blackDog])
    });

    let pearlJam = Band.create({
      name: 'Pearl Jam',
      songs: A([yellowLedbetter])
    });

    let fooFighters = Band.create({
      name: 'Foo Fighters',
      songs: A([pretender])
    });

    let hanniEK = Band.create({
      name: 'Hanni El Khatib',
      songs: A([twoBrothers])
    });

    return A([ledZeppelin, pearlJam, fooFighters, hanniEK]);
  }
});
