const url =('http://localhost:8080/lanchonete')
//POST
async function fetchApiLanchonte(event) {
    try {
      event.preventDefault();
      const body = {
        combo: document.querySelector('#combo').value,
        valor: document.querySelector('#valor').value,
        pipoca: document.querySelector('#pipoca').value,
        refrigerante: document.querySelector('#refrigerante').value,
        doce: document.querySelector('#doce').value
        
      };
  
      await fetch( url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log(response);
        console.log(body);
  
  
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  
  //GET
  const elementoCrudLanchonete = document.querySelector('#datal')

  async function getLanchonete(){
      const retorno = await fetch(url)
      const lanchonete = await retorno.json()
      naTelaLanchonete(lanchonete);
  }
  
  function naTelaLanchonete(lanchonete){
    lanchonete.forEach(element => {
          const lanchoneteHTML = `
          <th>${element.id}</th>
          <th>${element.combo}</th>
          <th>${element.valor}</th>
          <th>${element.pipoca}</th>
          <th>${element.refrigerante}</th>
          <th>${element.doce}</th>
                    
                  
          `
          elementoCrudLanchonete.innerHTML = elementoCrudLanchonete.innerHTML + lanchoneteHTML
      })
  }
  
  //DELETE
  async function deletarInsumo(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`url+${id}`, {
        method: 'DELETE',
      })
      alert('insumo deletado com sucesso')
    } catch (error) {
      alert('erro ao deletar o insumo')
      throw new Error(error);
    }
  }
  
  //UPTADE
  async function uptadeInsumo(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`url+${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
        id: document.querySelector('#id').value,
        combo: document.querySelector('#combo').value,
        valor: document.querySelector('#valor').value,
        pipoca: document.querySelector('#pipoca').value,
        refrigerante: document.querySelector('#refrigerante').value,
        doce: document.querySelector('#doce').value
          
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        return response.json();
       }).then((data) => {
         console.log(data);
      })
      alert('insumo atualizado com sucesso')
    } catch (error) {
      alert('erro ao atualizar o insumo')
      throw new Error(error);
    }
  }