function tabuada(primeiroElemento, segundoElemento){
  if(segundoElemento > 10){
    return segundoElemento;
  }
  else{
    document.querySelector('audio').play();
    const colunas = document.getElementById('tabuada');
    colunas.innerHTML += `<li>${primeiroElemento} X ${segundoElemento} = ${primeiroElemento * segundoElemento}</li>`
    return tabuada(primeiroElemento, segundoElemento + 1);
    
  }
}
document.getElementById('button').addEventListener('click',()=>{
  const primeiroElemento = parseInt(document.getElementById('input').value);
  document.getElementById("tabuada").innerHTML = ""; 
	tabuada(primeiroElemento, 1);
});

