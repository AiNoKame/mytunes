// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // this.render();
    this.collection.listenTo(this.collection,'all', function(e){
      console.log('sogwiqiview');
    });
  },

  render: function() {
    return this.$el.html('<th>Queued!</th>').append(
      $('<div style="background-color: red"><marquee width=20>1995!</marquee></div>')
      // this.collection.map(function(song) {
      //   return SongQueueEntryView({model: song}).render();
      // })
    );
  }

});
