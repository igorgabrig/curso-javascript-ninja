/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var vet = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function myFunction(array){
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(vet[2]);//3

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(array, i){
    return array[i];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var vet2 = [1,'a','abc',-4,5.5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction2(vet2,0)
myFunction2(vet2,1)
myFunction2(vet2,2)
myFunction2(vet2,3)
myFunction2(vet2,4)

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
function myFunction3(name){
    var livros = { 
        'O Pequeno Principe': { 
            quantidadePaginas: 110,
            autor: 'Antoine de Saint-Exupéry',
            editora: 'eynal & Hitchcock'
        },
        'Método Bullet Journal':{
        	quantidadePaginas: 326,
        	autor: 'Ryder Carroll',
        	editora: 'Fontanar',
        },
        'Harry Potter': {
        	quantidadePaginas: 325,
        	autor: 'JK Rolling',
        	editora: 'pottermore limited'
        }
    };

    return !name ? livros : livros[name];
};


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
myFunction3();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O autor do livro O Pequeno Principe tem " + myFunction3('O Pequeno Principe').quantidadePaginas + " paginas";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro Método Bullet Journal é " +myFunction3("Método Bullet Journal").autor+".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro Harry Potter foi publicado pela editora " + myFunction3('Harry Potter').editora + ".";
