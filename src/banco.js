//https://www.youtube.com/watch?v=Irc3y08fFKg
var amqp = require("amqplib");
// Conectando com o rabbitmq
const level = require("level-party");
var db = level("./consumer/db");
// banco leveldb com multiplos niveis utilizando Round-Robin para escalonar as tarefas
var helpers = require("../utils/helpers/helpers");

amqp
  .connect("amqp://localhost")
  .then(function (conn) {
    console.log("Conectado!");
    return conn.createChannel();
  })
  .then(function (ch) {
    console.log("Canal criado!");

    ch.prefetch(1);
    ch.consume('banco', function (msg) {
      console.log("Requisição recebida %s", msg.properties.replyTo);
      var dados = [];
        db.createValueStream().on("data", function (data) {
          console.log("data:", data);
            dados.push(data);
        }).on("end", function () {
          console.log(dados);
          ch.sendToQueue(msg.properties.replyTo, helpers.JSONtoBuffer(dados));
          ch.ack(msg);
        });
    });
  });
