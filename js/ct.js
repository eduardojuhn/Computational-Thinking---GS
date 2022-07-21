function enviar() {
    
    var msgAlert = 'Por favor preencha o campo ';
    
    if (document.getElementById('nome').value == '') {
        document.getElementById('nome').focus();
        mostrarMensagemErro(msgAlert, 'nome');
        return;
    }
    
    if (document.getElementById('email').value == '') {
        document.getElementById('email').focus();
        mostrarMensagemErro(msgAlert, 'email');
        return;
    }
    
    if (document.getElementById('cpf').value == '') {
        document.getElementById('cpf').focus();
        mostrarMensagemErro(msgAlert, 'cpf');
        return;
    }
    
    if (document.getElementById('telefone').value == '') {
        document.getElementById('telefone').focus();
        mostrarMensagemErro(msgAlert, 'telefone');
        return;
    }
    
    if (document.getElementById('cidade').value == '') {
        document.getElementById('cidade').focus();
        mostrarMensagemErro(msgAlert, 'cidade');
        return;
    }
    
    if (document.getElementById('estado').value == '') {
        document.getElementById('estado').focus();
        mostrarMensagemErro(msgAlert, 'estado');
        return;
    }
    
    if (document.getElementById('assunto').value == '') {
        document.getElementById('assunto').focus();
        mostrarMensagemErro(msgAlert, 'assunto');
        return;
    }
    
    if (document.getElementById('mensagem').value == '') {
        document.getElementById('mensagem').focus();
        mostrarMensagemErro(msgAlert, 'mensagem');
        return;
    }
    
    alert("Mensagem Enviada!");
    document.form.submit();
}
    
    function mostrarMensagemErro(msgAlert, nomeCampo){
    document.getElementById(nomeCampo).focus(); 
    var campoMSG = document.getElementById('mensagemErro');
    campoMSG.style.display = "block";
    campoMSG.innerHTML = msgAlert + '' + nomeCampo;
    window.scroll(500, 1000);
    }
    