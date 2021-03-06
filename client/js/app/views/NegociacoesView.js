class NegociacoesView extends View {
  constructor(elemento) {
    super(elemento);
  }

  template(model) {
    return `
    <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                ${model.negociacoes.map((n) => {
                  return `

                <tr>
                  <td>${DataHelper.dataParaTexto(n.data)}
                  <td>${n.quantidade}</td>
                  <td>${n.valor}</td>
                  <td>${n.obterVolume}</td>
                </tr>

                 `
                }).join('')}
                </tbody>
                <tfoot>
                <td colspan="3"></td>
                <td>
                ${model.negociacoes.reduce((total, numero) => total + numero.obterVolume,0.0)}
                </td>
                </tfoot>
    </table>
        `;
  }

}
