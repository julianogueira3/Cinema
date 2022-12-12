const url =('http://localhost:8080/funcionario')
//POST
async function fetchApiFuncionario(event) {
    try {
      event.preventDefault();
      const body = {
        nome: document.querySelector('#nome').value,
        local: document.querySelector('#local').value,
        salario: document.querySelector('#salario').value,
        jornada: document.querySelector('#jornada').value,
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
  const elementoCrudFuncionario = document.querySelector('#dataf')

  async function getFuncionario(){
      const retorno = await fetch(url)
      const funcionario = await retorno.json()
      naTelaFuncionario(funcionario);
  }
  
  function naTelaFuncionario(funcionario){
    funcionario.forEach(element => {
          const funcionarioHTML = `
       
          <th>${element.id}</th>
          <th>${element.nome}</th>
          <th>${element.local}</th>
          <th>${element.salario}</th>
          <th>${element.jornada}</th>
                      
                  
          `
          elementoCrudFuncionario.innerHTML = elementoCrudFuncionario.innerHTML + funcionarioHTML
      })
  }
  
  //DELETE
  async function deletarFuncionario(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`url+${id}`, {
        method: 'DELETE',
      })
      alert('funcionario deletado com sucesso')
    } catch (error) {
      alert('erro ao deletar o funcionario')
      throw new Error(error);
    }
  }
  
  //UPTADE
  async function uptadeFuncionario(event) {
    try {
      event.preventDefault();
      const id = document.querySelector('#id').value
      await fetch(`url+${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          nome: document.querySelector('#nome').value,
          local: document.querySelector('#local').value,
          salario: document.querySelector('#salario').value,
          jornada: document.querySelector('#jornada').value,
          
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
      alert('funcionario atualizado com sucesso')
    } catch (error) {
      alert('erro ao atualizar o funcionario')
      throw new Error(error);
    }
  }