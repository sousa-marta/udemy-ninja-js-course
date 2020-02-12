/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let umaVariavel = [1, true, 'Marta', [2,3], function(){return 'nice'}]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function umaFuncao (array){
    return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
umaFuncao(umaVariavel)[1]

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaValor (array,posicao){
    return array[posicao]
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nomeLivro){
    let objeto = {
        'nome1' : {
            quantidadePaginas: 200,
            autor: 'Lily',
            editora: 'Rooco'
        },
        'nome2' : {
            quantidadePaginas : 150,
            autor: 'Proust',
            editora: 'Livre'
        },
        'nome3' : {
            quantidadePaginas: 1000,
            autor: 'Jorge Martin',
            editora: 'Master'
        }
    }

    return !nomeLivro ? objeto : objeto[nomeLivro] //como estamos recebendo uma strig, precisa usar essa notação entre [] e não '.'
}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro nome1 tem ' + book('nome1').quantidadePaginas + ' páginas.'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let nomeLivro = 'nome2'
'O autor do livro ' + nomeLivro + ' é ' + book(nomeLivro).autor

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
