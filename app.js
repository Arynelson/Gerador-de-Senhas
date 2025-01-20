//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Função para gerar uma senha
function gerarSenha() {
    const palavraBase = document.getElementById("palavraBase").value.trim();
    const comprimento = parseInt(document.getElementById("comprimento").value, 10) || 8;
    const incluirLetras = document.getElementById("letras").checked;
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;

    if (!incluirLetras && !incluirNumeros && !incluirSimbolos) {
        alert("Selecione ao menos um tipo de caractere para gerar a senha.");
        return;
    }

    // Caracteres disponíveis
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

    let caracteres = "";
    if (incluirLetras) caracteres += letras;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    // Inicializar senha com a palavra base
    let senha = palavraBase;

    // Adicionar caracteres aleatórios até atingir o comprimento desejado
    while (senha.length < comprimento) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[randomIndex];
    }

    // Embaralhar a senha
    senha = embaralharString(senha);

    // Exibir a senha gerada
    const senhaGerada = document.getElementById("senhaGerada");
    senhaGerada.textContent = senha;
}

// Função para embaralhar uma string
function embaralharString(string) {
    return string.split('').sort(() => Math.random() - 0.5).join('');
}

// Função para copiar a senha para a área de transferência
function copiarSenha() {
    const senhaGerada = document.getElementById("senhaGerada").textContent;

    if (!senhaGerada) {
        alert("Nenhuma senha gerada para copiar.");
        return;
    }

    navigator.clipboard.writeText(senhaGerada).then(() => {
        alert("Senha copiada para a área de transferência!");
    }).catch((err) => {
        console.error("Erro ao copiar senha: ", err);
    });
}
