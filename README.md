# lab-node
### API-Pessoas 
---
## Projeto da disciplina de Programação Back-End Avançada 2018 - UFG-INF
---
## Integrantes
 - __[Gilson Alves](https://github.com/gilsonalvess)__
 - __[Kaichiro Fukuda](https://github.com/kaichiro)__
 - __[Vitor Santos](https://github.com/VitorSantos1996)__
---

### Instruções para instalação

* Considerações iniciais: siga exatamente este passos

* 1 - abra um terminal de comandos de sua preferência;
* 2 - navegue até um diretório de sua preferência;
* 3 - clone este projeto estes dois projetos (no diretório do item anterior):
```sh
$ git clone https://github.com/gilsonalvess/api-node-master
$ git clone https://github.com/gilsonalvess/ufg-api-exames
```
* 4 - navegar até o diretório do primeiro projeto ( api-node-master ) e executar os instaladores abaixo:
```sh
$ npm install express --save
$ npm install mongoose
$ npm install body-parser
```
* 5 - quanto ao segundo projeto ( ufg-api-exames - em Java ), abra-o na IDE Eclipse e o execute
NOTA: este projeto contém uma base de dados em memória que será consumida pelo primeiro projeto
* 6 - volte ao primeiro projeto e execute o seguinte comando para navegar até o diretório do serviço
```sh
$ cd config/ 
```
* 7 - digite o comando abaixo para tornar disponível o serviço NODE Api ( http://localhost:3002/ )
```sh
$ node server.js
Server is runing in port 3002
```