import{produtos} from"./produtos.js";

const elemento ={
    btnCurva:document.querySelectorAll(".btnCurva"),
    containerDisplay:document.querySelector("#containerDisplay"),
};

console.log(elemento.containerDisplay);

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
 // CRIA UMA UM OBJETO PARA GERAR OS PARAGRAFOS - AINDA SEM DADOS - PURO //
function inserirDadosCurvaABC(dados){
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
}