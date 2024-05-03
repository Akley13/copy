function copiarTexto(id) {
  const texto = document.getElementById(id).innerText;
  navigator.clipboard.writeText(texto).then(function() {
  }, function(err) {
    console.error('Erro ao copiar texto: ', err);
  });
}
