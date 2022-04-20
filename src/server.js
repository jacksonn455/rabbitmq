//https://www.youtube.com/watch?v=Irc3y08fFKg
var amqp = require("amqplib");
// Conectando com o rabbitmq
var http = require("http");

amqp.connect("amqp://localhost").then(function (conn) {
  http
    .Server(function (req, res) {
      var channel = null;
      conn.createChannel().then(function (ch) {
          channel = ch;
          return ch.assertQueue("", {
            exclusive: true,
          });
        })
        .then(function (q) {
        console.log("Fila criada: %s", q.queue);
        //Esperando resposta do cliente

          channel.consume(q.queue, function (msg) {
            res.writeHead(200, {
                "Content-Type": "application/json"
        });

            res.end(msg.content);
        }, {
            noAck: true
          });

        // Envia mensagem para a fila
        channel.sendToQueue('banco', new Buffer(''), {
            replyTo: q.queue
            });
        });

    }).listen(8080);
});
