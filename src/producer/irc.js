//config: https://webchat.freenode.net/
var irc = require("irc");
var amqp = require("amqplib");
var helpers = require("../../utils/helpers/helpers");

var client = new irc.Client("chat.freenode.net", "jackson", {
  channels: ["#jacktest"],
});

amqp
  .connect("amqp://localhost")
  .then(function (conn) {
    console.log("Conectado!");
    //http://localhost:15672/#/connections
    return conn.createChannel();
  })
  .then(function (ch) {
    client.addListener("message", function (from, to, message) {
      console.log("Novas mensagens: ", message);

      var buff = helpers.JSONtoBuffer({
        from: from,
        to: to,
        message: message,
      });

      ch.sendToQueue("mensagens", buff, {
        contentType:"application/json"
      });
    });
  });
