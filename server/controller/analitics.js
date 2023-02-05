const express = require('express');

app.express();

class analiticas {
  constructor(tempoResolucao, QdadeResposta, QdadeExcertos, QdadeRespostaerrada) {
    this.tempoResolucao = tempoResolucao;
    this.QdadeResposta = QdadeResposta;
    this.QdadeExcertos =QdadeExcertos;
    this.QdadeRespostaerrada =QdadeRespostaerrada;

  }
}

class UserFactory {
  createUser(tempoResolucao, QdadeResposta, QdadeExcertos, QdadeRespostaerrada) {
    return new User(tempoResolucao, QdadeResposta, QdadeExcertos, QdadeRespostaerrada);
  }
}

const userFactory = new UserFactory();
const analiticas = [
  userFactory.createUser('temp1', 'user1@qdaderesposta1, 4, 3')
  
];
app.get('/analiticas', (req, res) => {
    res.json(users);
  });
  