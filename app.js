function contemLetrasMaiusculasOuAcento(texto) {
    // Verifica se o texto contém letras maiúsculas ou acentos
    return /[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÃÕÇ]/.test(texto);
}

function criptografar(texto) {
    const resultado = texto
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
        
        return resultado; 
}

function descriptografar(texto) {
    const resultado = texto
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

        return resultado;
}

function criptografarMensagem() {
    var mensagemOriginal = document.getElementById('Mensagem').value;
    if (contemLetrasMaiusculasOuAcento(mensagemOriginal)) {
        alert('Por favor, insira apenas letras minúsculas e sem acentos.');
        return;
    }
    var mensagemCriptografada = criptografar(mensagemOriginal);
    document.getElementById('resultado').textContent = mensagemCriptografada;
    document.getElementById('Mensagem').value = '';
}

function descriptografarMensagem() {
    var mensagemCriptografada = document.getElementById('Mensagem').value;
    var mensagemDescodificada = descriptografar(mensagemCriptografada);
    document.getElementById('resultado').textContent = mensagemDescodificada;
    document.getElementById('Mensagem').value = '';
}

function copiar() {
    const textarea = document.getElementById('resultado');
    textarea.select();
    document.execCommand('copy');
    alert('Texto copiado!')
}

var botaoCriptografar = document.getElementById('botaoCriptografar');
botaoCriptografar.addEventListener('click', criptografarMensagem);

var botaoDescriptografar = document.getElementById('botaoDescriptografar');
botaoDescriptografar.addEventListener('click', descriptografarMensagem);

var botaoCopiar = document.getElementById('botaoCopiar');
botaoCopiar.addEventListener('click', copiar);