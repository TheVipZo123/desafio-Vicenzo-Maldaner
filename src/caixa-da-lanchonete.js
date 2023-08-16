class CaixaDaLanchonete {

 

      

    calcularValorDaCompra(metodoDePagamento, itens) {

        
    
        //atributos

    let  codigo = ["cafe", "chantily","suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];

    let  preco = [3.00, 1.50, 6.20, 6.50, 2.00, 7.25, 9.50, 7.50];
    let precoDoProduto = 0.00;

    let produtosLista = [];

    let  quantidade = 0;
    let  precoFinal = 0;


    //Caso itens for vazio ou "" , retornar Nao ha itens no carrinho de compra.
    if ((itens == null) || (itens === "")){

        return "Não há itens no carrinho de compra!";



    } else 


    //Caso metodoDePagamento for diferente do padrao, retornar Forma de pagamento inválida!
    
    if (((metodoDePagamento === "debito") || (metodoDePagamento === "credito") || (metodoDePagamento === "dinheiro")) == false){

        return "Forma de pagamento inválida!";


    } else 


    //varrer o array itens. 


        for (let i = 0; i < itens.length; i++) {

            //atributos do for 
            let produto = "";
            let produtoPrincipal = "";
            let quantidadeCerta = 0;

            //varrer o array de codigo procurando algum match no array itens. 

            for (let z = 0; z < codigo.length; z++) {
             produto = itens[i].match(codigo[z]);

             //caso produto for nao-nulo ou seja, um match, entrar no if.

            if (produto) {
                
              let virgula =  itens[i].indexOf(",", 0); //procurar o index da virgula no itens.


                //caso o substring do index 0 ate o index da virgula nao for igual ao item do codigo, retornar "Item inválido!". Ex: "cafed" ou "dcafe", retorna "Item inválido!".
                if ( (itens[i].substr(0, virgula) === codigo[z]) == false){

                    return "Item inválido!";
                } else

                
                produtosLista.push(produto[0]); // Colocar o produto certo no array produtosLista.

                

                produtoPrincipal = produto[0]; // Colocar o produto certo no produtoPrincipal. 
                
                 precoDoProduto = preco[z]; // Colocar o valor da posicao z do array preco no precoDoProduto 
                 //para que o precoDoProduto seja o mesmo do produto. 

                 precoDoProduto = precoDoProduto.toFixed(2); //colocar o precoDoProduto com 2 casas decimais.
                
            }
            
            }

            // Caso nao ha match do codigo, retornar "Item inválido!". 
            if (produtoPrincipal === ""){
                return "Item inválido!";
            } else

            

            quantidade = itens[i].match(/\d+/g);

            //caso a quantidade for nao-nulo ou seja, um match, entrar no if.

            if (quantidade) {
                
                // caso o produtoPrincipal for combo1 ou combo 2, 
                // a quantidadeCerta sera igual ao segundo numero do array quantidade,
                // pois senao a quantidade sera 1 ou 2, ao inves da quantidade certa, 
                // pois o match(/\d+/g) pega todos os numeros da String, inclusive o 1 do "combo1" e o 2 do "combo2". 
                

                if( (produtoPrincipal === "combo1") || (produtoPrincipal=== "combo2")){

                    quantidadeCerta = quantidade[1] ;
    
    
                } else

                quantidadeCerta = quantidade[0] ;

                 //caso a quantidade for 0 ou menor que zero, retornar "Quantidade inválida!".

                if (quantidadeCerta <= 0){
                    return "Quantidade inválida!";
                } else

                precoFinal = precoFinal + (quantidadeCerta *  precoDoProduto); 


                
            }
          }



          produtosLista.sort(); //colocar produtosLista em ordem alphabetica.
          
          
          //varrer produtosLista para ver se tem o item queijo sem o item sanduiche.
          for (let i = 0; i < produtosLista.length; i++) {

            //
            if (produtosLista[i] === "queijo") {
                let e = i ;
          

                while ((produtosLista[e] === "sanduiche") == false){

                    
                for ( e ; e < produtosLista.length; e++) {

                    if (produtosLista[e] === "sanduiche") break;
                    
                
            } 

            //caso nao ha o item sanduiche, retornar "Item extra não pode ser pedido sem o principal".
           if  ((produtosLista[e] === "sanduiche") == false){
            return "Item extra não pode ser pedido sem o principal";
           }
        }
    }

          }

          produtosLista.reverse();  //colocar produtosLista em ordem alphabetica decrescente.


          //varrer produtosLista para ver se tem o item chantily sem o item cafe.

          for (let i = 0; i < produtosLista.length; i++) {

            if (produtosLista[i] === "chantily") {
                let e = i ;
          

                while ((produtosLista[e] === "cafe") == false){

                    
                for ( e ; e < produtosLista.length; e++) {

                    if (produtosLista[e] === "cafe") break;
                    
                
            } 

            //caso nao ha o item cafe, retornar "Item extra não pode ser pedido sem o principal".
           if  ((produtosLista[e] === "cafe") == false){
            return "Item extra não pode ser pedido sem o principal";
           }
        }
    }

          }

          

          // caso metodoDePagamento for dinheiro, ter um desconto de 5% no valor final.
          if (metodoDePagamento === "dinheiro"){

            precoFinal = precoFinal - (precoFinal * 0.05);

            // caso metodoDePagamento for credito, ter um acrescimo de 3% no valor final.
          } else if( metodoDePagamento === "credito"){

            precoFinal = precoFinal + (precoFinal * 0.03);

          }

          // caso precoFinal for zero, retornar "Não há itens no carrinho de compra!".

          if ((precoFinal == 0)){

            return "Não há itens no carrinho de compra!";
    
    
    
        } else 

          precoFinal = precoFinal.toFixed(2);

          //colocar precoFinal em um String em trocar o "." por "," e adicionar "R$".

         let  precoFinalString = precoFinal.toString();

          precoFinalString = precoFinalString.replace(".", ",");

          precoFinalString =  "R$ " + precoFinalString ;
       
        return precoFinalString;
    }

    

}



export { CaixaDaLanchonete };
