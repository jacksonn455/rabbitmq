//https://www.youtube.com/watch?v=Irc3y08fFKg
var amqp = require("amqplib");
// Conectando com o rabbitmq
const level = require('level-party')
var db = level('../../db', { valueEncoding: 'json' })
// banco leveldb com multiplos niveis utilizando Round-Robin para escalonar as tarefas
var uuid = require("uuid");

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
        db.put(uuid.v4(), msg.content.toString(), function (err) {
          if(err){
            console.log("Erro ao salvar mensagem: ", err.stack);
            return ch.nack(msg);
          }
          console.log("Mensagem salva!");
          ch.ack(msg);
        });

        /*setTimeout(function () {
          console.log("%s Mensagem recebida: %s", new Date(), msg.content.toString());

          //Esta tudo ok
          ch.ack(msg);
          },2000); */
    });
  });
