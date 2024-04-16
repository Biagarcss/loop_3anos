
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual a área da saúde que se utiliza laboratório?");

    
    if (respostaTime.toLowerCase() === "biomedicina") {
      alert("Isso mesmo! È na Biomedicina que se utiliza laboratório para exames e analises!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
