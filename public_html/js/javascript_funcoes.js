

function carregar(pagina) {
    $("#conteudo").load(pagina);
}
function inicial(pagina) {
    $("#pg").load(pagina);
}
function imprimir(pagina) {
    var url = pagina;
    window.open(url, '_blank');
}
function carregar_imagem(pagina) {
    $("#projeto").load(pagina);
}