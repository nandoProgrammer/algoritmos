//Algoritmo
	var binarySearch = function(array, numberToFind){
		var min = 0;
		var max = array.length - 1;
                var guess;
		
		var i = 0;

		while(min <= max){

			i++;
			guess = Math.floor((max + min) / 2);

			if(array[guess] === numberToFind){
			     console.log('Número encontrado com '+ i +' tentativas');
			     return guess;
			}

			else if(array[guess] < numberToFind){
			     min = guess + 1;
			}

			else{
			     max = guess - 1;
			}

		}

		console.log('Número não encontrado');
	}

  //Fim do algoritmo
    
  /*Implementação*/

  //variável que contem o array a ser busacdo o valor
  var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    
 //Chamando a função com os parâmetros correspondentes
 //Primeiro parâmetro: faz referência ao array onde a busca ocorrerá
 //Segundo parâmetro: número a ser encontrado
 binarySearch(arr, 73);
