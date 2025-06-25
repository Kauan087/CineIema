function enviarWhatsApp() {
  const nome = document.getElementById("nome").value.trim();
  const qtd = parseInt(document.getElementById("quantidade").value.trim());

  if (!nome || !qtd || qtd <= 0) {
    alert("Preencha seu nome e a quantidade de ingressos!");
    return;
  }

  const valor = qtd * 5;
  const numero = "5598970069561";
  const pix = "98981707167";
  const msg = `Olá! Quero reservar ingressos para o Cinema.\n\n - Nome: ${nome}\n - Quantidade: ${qtd}\n - Total: R$${valor.toFixed(2)}\n - PIX para pagamento: ${pix}\n\nAssim que fizer o pagamento, envio o comprovante aqui mesmo.`;

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
  window.open(link, "_blank");
}
