// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(song){
    if (song) {
      this.models.push(new SongModel(song));
    }

    this.listenTo(this,'add', function(event){
      this.enqueue(event.attributes);
      console.dir('all: ' + event);

    });
  },

  enqueue: function(songData){
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.shift().play();
  }

});
