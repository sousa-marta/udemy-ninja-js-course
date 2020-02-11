let carro = {
  assentos : 5,
  quantidadePessoas : 0
}

carro.adicionarPessoas = function(pessoas) {
  let singularOuPlural = carro.quantidadePessoas == 1 ? 'pessoa' : 'pessoas'

  if (pessoas < carro.assentos) {
    carro.assentos -= pessoas
    carro.quantidadePessoas += pessoas
    return 'O carro tem ' + carro.quantidadePessoas + ' ' + singularOuPlural
  } else if (pessoas == carro.assentos){
    carro.assentos = 0
    carro.quantidadePessoas += pessoas 
    return 'Carro lotado!'
  }
  if (pessoas > carro.assentos) {
    return 'Carro lotado!'
  } 
}


/*
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/