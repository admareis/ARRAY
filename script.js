import{produtos} from"./produtos.js";

const elemento ={
    btnCurva:document.querySelectorAll(".btnCurva"),
    containerDisplay:document.querySelector("#containerDisplay"),
    btnListarTodos: document.getElementById("listarTodos"),
};

console.log(elemento.btnListarTodos);

elemento.btnCurva.forEach((item)=>{
item.addEventListener("click", (evento)=>{
    //console.log(evento.target.id);//
    listarProdutosPorCurva(evento.target.id)    
    });
});

function listarProdutosPorCurva(curva){
    let produtoCurva = produtos.filter((produto => produto.curva_abc == curva.toUpperCase()))
    //console.table(produtoCurva);//
    inserirDadosCurvaABC(produtoCurva);
    return produtoCurva;
}
 // CRIA UM OBJETO PARA GERAR OS PARAGRAFOS - AINDA SEM DADOS - PURO //
function inserirDadosCurvaABC(dados){
    elemento.containerDisplay.innerHTML = ""; // reset html// 
    let colunasGRID = {
        id: document.createElement("p"),   
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque:document.createElement("p"),
    };

    // DEFININDO O VALOR QUE CADA PARAGRAFO TERÁ: // 
    colunasGRID.id.innerText = "ID";
    colunasGRID.nome.innerText = "NOME";
    colunasGRID.preco_venda.innerText = "PREÇO VENDA";
    colunasGRID.estoque.innerText = "ESTOQUE";

    elemento.containerDisplay.append(colunasGRID.id,colunasGRID.nome,colunasGRID.preco_venda,colunasGRID.estoque)

    console.table(dados);

    let dadosFiltrados = dados;

    dadosFiltrados.forEach((item)=>{
        let produto ={
            id:item.id,
            nome:item.nome,
            preco_venda:item.preco_venda,
            estoque:item.estoque,
        };

        // CRIAÇÃO DOS PARAGRAFOS(ITEM) DA COLUNA // 

        let id = document.createElement("p");
        let nome= document.createElement("p");
        let preco_venda= document.createElement("p");
        let estoque = document.createElement("p");

        // DEFINIÇÃO DO TEXTO DE CADA COLUNA //

        id.innerText = produto.id;
        nome.innerText = produto.nome;
        preco_venda.innerText = produto.preco_venda;
        estoque.innerText = produto.estoque;

        // ADICIONAR (APPEND) NA DETERMINADA ORDEM // 
        elemento.containerDisplay.append(id, nome, preco_venda, estoque);

    });
}

elemento. btnListarTodos.addEventListener("click", (evento)=>{
    console.log(evento);
});

function listaIDeNome() {
  return produtos.map((produto) => ({
    id: produto.id,
    nome: produto.nome,
  }));
}