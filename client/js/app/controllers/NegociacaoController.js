class NegociacaoController {
  #inputData;
  #inputQuantidade;
  #inputValor;

  constructor() {
    let $ = document.querySelector.bind(document); // bind indica que o valor the this será document

    this.#inputData = $("#data");
    this.#inputQuantidade = $("#quantidade");
    this.#inputValor = $("#valor");
  }

  adiciona(event) {
    event.preventDefault();
    let data = new Date(
      ...this.#inputData.value.split("-").map((item, indice) => {
        if (indice == 1) {
          return item - 1;
        }
        return item;
      })
    );

    let negociacao = new Negociacao(
      data,
      this.#inputQuantidade.value,
      this.#inputValor.value
    );

    this.limpa()
  }

  limpa() {
    this.#inputQuantidade.value = 1;
    this.#inputValor.value = 0,0;
    this.#inputData.focus();
  }
}
