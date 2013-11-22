Template.leaderboard.events({
  'click input.inc': function () {
    Players.update(Session.get("selected_player"), {$inc: {score: 5}});
  }
});

Template.player.events({
  'click': function () {
    Session.set("selected_player", this._id);
  }
});