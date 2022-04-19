//https://www.youtube.com/watch?v=Irc3y08fFKg
var amqp = require("amqplib");
// Conectando com o rabbitmq
amqp
  .connect("amqp://localhost")
  .then(function (conn) {
    console.log("Conectado!");
    //http://localhost:15672/#/connections
    return conn.createChannel();
  })
  .then(function (ch) {
    console.log("Canal criado!");
    //http://localhost:15672/#/channels

      ch.prefetch(1);
      ch.consume("mensagens", function (msg) {
          setTimeout(function () {
          console.log("%s Mensagem recebida: %s", new Date(), msg.content.toString());

          //Esta tudo ok
          ch.ack(msg);
          },2000);
    });
  });
