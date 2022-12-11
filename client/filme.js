const url =('http://localhost:8080/filme')
//POST
async function fetchApiFilme(event) {
    try {
      event.preventDefault();
      const body = {
        nome: document.querySelector('#filme').value,
        horario: document.querySelector('#hora').value,
        genero: document.querySelector('#genero').value,
        classificacao: document.querySelector('#classificacao').value,
        duracao: document.querySelector('#duracao').value,
        
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
  const elementoCrudFilme = document.querySelector('#data')

  async function getFilme(){
      const retorno = await fetch(url)
      const filme = await retorno.json()
      naTelaFilme(filme);
  }
  
  function naTelaFilme(filme){
    filme.forEach(element => {
          const filmeHTML = `
          <th>${element.id}</th>
          <th>${element.nome}</th>
          <th>${element.horario}</th>
          <th>${element.genero}</th>
          <th>${element.classificacao}</th>
          <th>${element.duracao}</th>
                    
                  
          `
          elementoCrudFilme.innerHTML = elementoCrudFilme.innerHTML + filmeHTML
      })
  }
  
  //DELETE
  async function deletarFilme(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`url+${id}`, {
        method: 'DELETE',
      })
      alert('filme deletado com sucesso')
    } catch (error) {
      alert('erro ao deletar o filme')
      throw new Error(error);
    }
  }
  
  //UPTADE
  async function uptadeFilme(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`url+${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          id: document.querySelector('#id').value,
          nome: document.querySelector('#filme').value,
          horario: document.querySelector('#hora').value,
          genero: document.querySelector('#genero').value,
          classificacao: document.querySelector('#classificacao').value,
          duracao: document.querySelector('#duracao').value,
          
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
      alert('filme atualizado com sucesso')
    } catch (error) {
      alert('erro ao atualizar o filme')
      throw new Error(error);
    }
  }