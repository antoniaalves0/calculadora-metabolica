const form = document.getElementById('form')
function calcular(){
   /* const sexo = document.getElementById('txtsexo')
    const idade = document.getElementById('txtidade')
    const peso = document.getElementById('txtpeso')
    const altura = document.getElementById('txtaltura')
    const nivel = document.getElementById('txtnivel')
    const resultado = document.getElementById('resultado')*/

    const sexo = valorSelect('txtsexo')
    const idade = valorInput('txtidade')
    const peso = valorInput('txtpeso')
    const altura = valorInput('txtaltura')
    const nivel = valorSelect('txtnivel')
    const resultado = document.getElementById('resultado')
   
    const taxaMetabolica = sexo === 'feminino'? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)) 

    const manterPeso = taxaMetabolica * Number(nivel)
    const ganharPeso = taxaMetabolica + 450
    const perderPeso = taxaMetabolica - 450
    

    const layout = `
    <h2>Aqui está o resultado</h2>

    <div class="lista-resultados">
        <ul id="lista">
            <li> 
            Seu metabolismo basal é de ${taxaMetabolica} <span style="color:#F378C6; ">calorias</span>
            </li>

            <li>
            Para manter seu peso você precisa consumir ${manterPeso} <span style="color:#F378C6; ">calorias</span>
            </li>

            <li>
            Para ganhar peso você precisa consumir ${ganharPeso} <span style="color:#F378C6; ">calorias</span>
            </li>

            <li>
            Para perder peso você precisa consumir ${perderPeso} <span style="color:#F378C6; ">calorias</span>
            </li>
            
            
        </ul>


    </div>
    `

    resultado.style.textAlign='center'// vai acentralizar o resultado no meio
    resultado.innerHTML= layout;
    //resultado.innerHTML= `Seu metabolismo basal é de ${taxaMetabolica} calorias.`

}
function valorSelect(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
  }
  
  function valorInput(id) {
    return Number(document.getElementById(id).value);
  }
  


