class DataHelper {
  constructor() {
    throw new Error("DataHelper não pode ser instanciada");
  }

  static dataParaTexto(data) {
    //return data.getDate() + " / " + (data.getMonth() + 1) + " / " + data.getFullYear();
    return `${data.getDate()} / ${data.getMonth() + 1} / ${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
      throw new Error("Deve estar no formato aaaa-mm-dd");
    }

    return new Date(
      ...texto.split("-").map((item, indice) => {
        if (indice == 1) {
          return item - 1;
        }
        return item;
      })
    );
  }
}
