function beforeTaskSave(colleagueId, nextSequenceId, userList) {
  var anexos = hAPI.listAttachments();
  var temAnexos = false;

  for (i = 0; i < anexos.size(); i++) {
    var anexoAtual = anexos.get(i);
    if (anexoAtual.getDocumentDescription() == 'Proposta Comercial.pdf') {
      var temAnexos = true;
    }
  }

  if (!temAnexos) {
    throw 'A proposta Comercial não foi anexada';
  }
}
