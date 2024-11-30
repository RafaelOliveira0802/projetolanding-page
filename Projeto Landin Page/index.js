var leonardo = window.document.getElementById("leonardo");
var samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna");
var setaDir = window.document.getElementById("seta-dir");
var setaEsq = window.document.getElementById("seta-esq");

function RolarParaDreita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDir.style = "display:none"
    setaEsq.style = "display:flex; margin-top:65px"
}

function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDir.style = "display:flex; margin-top:55px"
    setaEsq.style = "display:none"
}