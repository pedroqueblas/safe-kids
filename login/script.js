const senha = document.getElementById("senha");
const barra = document.getElementById("barra");
const btn = document.getElementById("btnEntrar");
const msg = document.getElementById("msg");

// Dicas
const tamanho = document.getElementById("tamanho");
const maiuscula = document.getElementById("maiuscula");
const numero = document.getElementById("numero");
const especial = document.getElementById("especial");

senha.addEventListener("input", () => {
  
  const val = senha.value;
  let força = 0;

  // Testes
  const temTamanho = val.length >= 8;
  const temMaiuscula = /[A-Z]/.test(val);
  const temNumero = /\d/.test(val);
  const temEspecial = /[!@#$%^&*()_\-+=]/.test(val);

  // Atualiza lista visual
  updateTip(tamanho, temTamanho);
  updateTip(maiuscula, temMaiuscula);
  updateTip(numero, temNumero);
  updateTip(especial, temEspecial);

  // Soma força
  força += temTamanho + temMaiuscula + temNumero + temEspecial;

  // Atualiza barra de força
  const cores = ["#ff3d3d", "#ffa43d", "#fff03d", "#9cff3d", "#00ff7b"];
  barra.style.width = (força * 25) + "%";
  barra.style.background = cores[força];

  // Habilitar botão somente se tudo OK
  if(força === 4){
    btn.disabled = false;
    btn.classList.add("enabled");
  } else {
    btn.disabled = true;
    btn.classList.remove("enabled");
  }
});

function updateTip(elemento, ok){
  if(ok){
    elemento.classList.add("ok");
  } else {
    elemento.classList.remove("ok");
  }
}

btn.addEventListener("click", () => {
  msg.textContent = "Senha forte! Excelente trabalho!";
});
