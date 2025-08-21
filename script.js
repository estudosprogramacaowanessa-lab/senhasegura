// Espera o HTML ser completamente carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // Função que cria a senha aleatória
    function generatePassword() {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
        let password = "";
        const passwordLength = 12;

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Tenta encontrar o botão e o campo no HTML
    const generateButton = document.getElementById('generate-button');
    const passwordDisplay = document.getElementById('password-display');
    
    // Mostra uma mensagem no console para confirmar que o botão foi encontrado
    console.log('Botão encontrado:', generateButton);

    // Se o botão existir, adiciona o "ouvinte" de clique
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            const newPassword = generatePassword();
            passwordDisplay.value = newPassword;
        });
    }

});