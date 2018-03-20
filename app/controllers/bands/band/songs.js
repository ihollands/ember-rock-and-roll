import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
import Song from 'rarwe/models/song';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',

  isAddButtonDisabled: empty('newSongTitle'),

  actions: {

    addSong() {
      this.set('isAddingSong', true);
    },

    cancelAddSong() {
      this.set('isAddingSong', false);
    },

    saveSong(e) {
      e.preventDefault();
      let newSong = Song.create({ title: this.get('newSongTitle')});
      this.get('model.songs').pushObject(newSong);
      this.set('newSongTitle', '');
    }
  }
});
