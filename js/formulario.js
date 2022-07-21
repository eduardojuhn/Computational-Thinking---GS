function enviar() {
    
    var msgE = 'Por favor preencha o campo ';
    
    if (document.getElementById('nome').value == '') {
        document.getElementById('nome').focus();
        mostrarMensagemErro(msgE, 'nome');
        return;
    }
    
    if (document.getElementById('email').value == '') {
        document.getElementById('email').focus();
        mostrarMensagemErro(msgE, 'email');
        return;
    }
    
    if (document.getElementById('cpf').value == '') {
        document.getElementById('cpf').focus();
        mostrarMensagemErro(msgE, 'cpf');
        return;
    }
    
    if (document.getElementById('telefone').value == '') {
        document.getElementById('telefone').focus();
        mostrarMensagemErro(msgE, 'telefone');
        return;
    }
    
    if (document.getElementById('cidade').value == '') {
        document.getElementById('cidade').focus();
        mostrarMensagemErro(msgE, 'cidade');
        return;
    }
    
    if (document.getElementById('estado').value == '') {
        document.getElementById('estado').focus();
        mostrarMensagemErro(msgE, 'estado');
        return;
    }
    
    if (document.getElementById('assunto').value == '') {
        document.getElementById('assunto').focus();
        mostrarMensagemErro(msgE, 'assunto');
        return;
    }
    
    if (document.getElementById('mensagem').value == '') {
        document.getElementById('mensagem').focus();
        mostrarMensagemErro(msgE, 'mensagem');
        return;
    }
    
    document.form.action="index.html";
    document.form.submit();
    }
    
    function mostrarMensagemErro(msgE, nomeCampo){
    document.getElementById(nomeCampo).focus(); 
    var campoMSG = document.getElementById('mensagemErro');
    campoMSG.style.display = "block";
    campoMSG.innerHTML = msgE + '' + nomeCampo;
    window.scroll(0, 0);
    }
    