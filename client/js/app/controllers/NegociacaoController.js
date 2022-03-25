class NegociacaoController {
  #inputData;
  #inputQuantidade;
  #inputValor;
  #listaNegociacoes;
  #negociacoesView;
  #mensagem;
  #mensagemView;

  constructor() {
    let $ = document.querySelector.bind(document); // bind indica que o valor the this será document

    this.#inputData = $("#data");
    this.#inputQuantidade = $("#quantidade");
    this.#inputValor = $("#valor");

    this.#listaNegociacoes = new ListaNegociacoes();
    this.#negociacoesView = new NegociacoesView($(".negociacaoView"));
    this.#negociacoesView.update(this.#listaNegociacoes)

    this._mensagem = new Mensagem();
    this.#mensagemView = new MensagemView($("#mensagemView"));
    this.#mensagemView.update(this._mensagem);
  }

  _criaNegociacao() {
    return new Negociacao(
      DataHelper.textoParaData(this.#inputData.value),
      this.#inputQuantidade.value,
      this.#inputValor.value
    );
  }

  adiciona(event) {
    event.preventDefault();

    this.#listaNegociacoes.adiciona(this._criaNegociacao());
    this._mensagem.texto = 'Negociacao adicionada com sucesso';
    this.#negociacoesView.update(this.#listaNegociacoes)
    this.#mensagemView.update(this._mensagem);

    this.limpa();
    console.log(this.#listaNegociacoes.negociacoes);
  }

  limpa() {
    this.#inputQuantidade.value = 1;
    (this.#inputValor.value = 0), 0;
    this.#inputData.focus();
  }
}
