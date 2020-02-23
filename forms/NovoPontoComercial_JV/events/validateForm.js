function validateForm(form) {
  var msg = '';

  /*Requisitante*/

  if (form.getValue('nome') == '') {
    msg += '<br>Campo Nome não foi preenchido.';
  }
  if (form.getValue('email') == '') {
    msg += '<br>Campo E-mail não foi preenchido.';
  }
  if (form.getValue('documentoIdentidade') == '') {
    msg += '<br>Campo Documento de Identidade não foi preenchido.';
  }
  if (form.getValue('dataNascimento') == '') {
    msg += '<br>Campo Data de Nascimento não foi preenchido.';
  }

  /*Responsáveis*/

  var responsaveis = form.getChildrenIndexes('responsaveisTabela');

  if (responsaveis.length == 0) {
    msg += '<br>Campo Responsáveis não foi informado.';
  }

  /*Ponto Comercial*/

  if (form.getValue('tipoPonto') == '') {
    msg += '<br>Campo Tipo do Ponto não foi preenchido.';
  }
  if (
    form.getValue('domingo') &&
    form.getValue('segunda') &&
    form.getValue('terca') &&
    form.getValue('quarta') &&
    form.getValue('quinta') &&
    form.getValue('sexta') &&
    form.getValue('sabado') == ''
  ) {
    msg += '<br>Campo Dias de Funcionamento não foi informado.';
  }

  if (form.getValue('cep') == '') {
    msg += '<br>Campo CEP não foi preenchido.';
  }
  if (form.getValue('logradouro') == '') {
    msg += '<br>Campo Logradouro não foi preenchido.';
  }
  if (form.getValue('bairro') == '') {
    msg += '<br>Campo Bairro não foi preenchido.';
  }
  if (form.getValue('cidade') == '') {
    msg += '<br>Campo Cidade não foi preenchido.';
  }
  if (form.getValue('estado') == '') {
    msg += '<br>Campo Estado não foi preenchido.';
  }

  /*Financeiro*/

  if (form.getValue('valor') == '') {
    msg += '<br>Campo Valor não foi preenchido.';
  }

  if (msg != '') {
    throw msg;
  }
}
