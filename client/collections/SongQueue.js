// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(song){
    if (song) {
      this.models.push(new SongModel(song));
    }

    this.on('add', function(event) {
      if (this.length === 1) {
        this.playFirst();
      }
      console.dir('all: ' + event);

    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(event) {
      this.remove(event.attributes);
    }, this);
  },

  enqueue: function(songData){
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});
