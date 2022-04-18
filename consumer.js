//https://www.youtube.com/watch?v=Irc3y08fFKg
var amqp = require('amqplib');
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

    setInterval(function () {
    console.log("Enviando mensagem...");

    ch.sendToQueue('mensagens', Buffer('Hello world'));
    //http://localhost:15672/#/queues/%2F/mensagens
    }, 1000);
  });
