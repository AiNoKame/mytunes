// SongQueueEntryView.js - Defines a backbone view class for
// the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: "tr",

  template: _.template('<td>(**!!<%= artist %>!!**)</td><td><%= title %></td>'),

  events: {
    'click': function(e) {
      //the superior-ish way
      if (e.metaKey) {
        this.model.dequeue(this.model);
      }
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
