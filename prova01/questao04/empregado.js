class Empregado {
  constructor(nome, salario) {
      this.nome = nome;
      this.salario = salario;
  }

  getSalario() {
      return this.salario;
  }

  setSalario(novoSalario) {
      if (novoSalario >= 0) {
          this.salario = novoSalario;
      } else {
          console.log("Erro: O salário não pode ser negativo.");
      }
  }

  static somaSalarios(empregados) {
      let soma = 0;
      for (const empregado of empregados) {
          soma += empregado.getSalario();
      }
      return soma;
  }
}

// Criando duas instâncias da classe Empregado
const empregado1 = new Empregado("João", 50000);
const empregado2 = new Empregado("Maria", 60000);

// Exibindo o salário de cada instância
console.log(`Salário de ${empregado1.nome}: R$${empregado1.getSalario()}`);
console.log(`Salário de ${empregado2.nome}: R$${empregado2.getSalario()}`);

// Dando a cada empregado um aumento de 10%
empregado1.setSalario(empregado1.getSalario() * 1.10);
empregado2.setSalario(empregado2.getSalario() * 1.10);

// Exibindo o salário atualizado de cada empregado
console.log(`Novo salário de ${empregado1.nome}: R$${empregado1.getSalario()}`);
console.log(`Novo salário de ${empregado2.nome}: R$${empregado2.getSalario()}`);

// Criando uma lista de empregados e calculando a soma dos salários
const listaEmpregados = [empregado1, empregado2];
const somaSalarios = Empregado.somaSalarios(listaEmpregados);
console.log(`Soma dos salários dos empregados: R$${somaSalarios}`);
