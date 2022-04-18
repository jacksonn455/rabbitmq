Gerenciando filas no RabbitMQ
===============================================
- *SOBRE*: <br>
- PUBLISHER - SUBSCRIBER/CONSUMER <br>
- PADRAO DE COMUNICACAO ENTRE SISTEMAS <br>
- PADRAO SIMPLES <br>
- MULTITECNOLOGIA <br>

- *VANTAGENS* <br>
- Normalmente não há verificação de recebimento na outra ponta. <br>
- O Publisher não possui idéia de quem é o SUBSCRIBER/CONSUMER e o SUBSCRIBER/CONSUMER não possui idéia de quem é o publisher. <br>
- Não há pooling. <br>

- *PONTOS IMPORTANTES*: <br>
- Em geral o consumidor da mensagem não “fala de volta" com o publicador enviando qualquer tipo de
confirmação de recebimento ou algo do tipo. Logo, você não tem controle total da leitura/recebimento
das mensagens.  <br>
- Alguns serviços possibilitam "voltar no tempo" e refazer o broadcast das mensagens.  <br>
- Múltiplos recebedores.  <br>
- Canais Pub/Sub tendem a ser efêmeros, logo se ninguém estiver ouvindo o canal, a mensagem pode
ser perdida. <br>

- *MICROSERVIÇOS*: <br>
- Otima solução para microserviços <br>

- *SOLUÇÕES QUE PODEM SER UTILIZADOS*: <br>
- APACHE KAFKA <br>
- REDIS <br>
- PUB SUB/MESSAGING <br>

- *RabbitMQ*: <br>
- Message Broker <br>
- Implementa AMQP, MQTT, STOMP e HTTP <br>
- Desenvolvido em Erlang <br>
- Desacoplamento entre serviços <br>
- Rápido e Poderoso <br>
- Padrão de Mercado <br>

- *Como acessar*: <br>
- Diretorio + comando: C:\Program Files\RabbitMQ Server\rabbitmq_server-3.9.15\sbin>rabbitmq-service start <br>
- http://localhost:15672/ <br>
- Login: guest/guest <br>

## Autor
 | [<img src="https://avatars1.githubusercontent.com/u/46221221?s=460&u=0d161e390cdad66e925f3d52cece6c3e65a23eb2&v=4" width=115><br><sub>@jacksonn455</sub>](https:- github.com/jacksonn455) |
  | :---: |
--------------------
