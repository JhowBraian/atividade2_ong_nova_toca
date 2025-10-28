// Aguarda o DOM carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // --- 1. Lógica do Menu Hambúrguer (Novo) ---
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('header nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('is-active');
        });
    }

    // --- 2. Máscaras de Input (Seu código, levemente ajustado) ---
    
    // Máscara de CPF
    const cpfInput = document.querySelector('input[name="cpf"]');
    if (cpfInput) {
        cpfInput.addEventListener("input", function (e) {
            let valor = e.target.value.replace(/\D/g, "");
            if (valor.length > 11) valor = valor.slice(0, 11);
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            e.target.value = valor;
        });
    }

    // Máscara de Telefone
    const telefoneInput = document.querySelector('input[name="telefone"]');
    if (telefoneInput) {
        telefoneInput.addEventListener("input", function (e) {
            let valor = e.target.value.replace(/\D/g, "");
            if (valor.length > 11) valor = valor.slice(0, 11);
            valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
            if (valor.length > 10) { // Celular (com 9)
                valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
            } else { // Fixo
                valor = valor.replace(/(\d{4})(\d)/, "$1-$2");
            }
            e.target.value = valor;
        });
    }

    // --- 3. Script de Auto-preenchimento do CEP (ViaCEP) ---
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        // Adiciona a máscara de CEP aqui também
        cepInput.addEventListener('input', function (e) {
            let valor = e.target.value.replace(/\D/g, "");
            if (valor.length > 8) valor = valor.slice(0, 8);
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
            e.target.value = valor;
        });

        // Adiciona o listener para o fetch do ViaCEP
        cepInput.addEventListener('keyup', (e) => {
            const cep = e.target.value.replace(/\D/g, ''); // Remove máscara
            if (cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        if (!data.erro) {
                            document.getElementById('logradouro').value = data.logradouro;
                            document.getElementById('bairro').value = data.bairro;
                            document.getElementById('cidade').value = data.localidade;
                            document.getElementById('uf').value = data.uf;
                            document.getElementById('numero').focus(); // Foca no número
                        } else {
                            console.log('CEP não encontrado.');
                            // Limpa campos se o CEP for inválido
                            document.getElementById('logradouro').value = "";
                            document.getElementById('bairro').value = "";
                            document.getElementById('cidade').value = "";
                            document.getElementById('uf').value = "";
                        }
                    })
                    .catch(error => console.error('Erro ao buscar CEP:', error));
            }
        });
    }

    // --- 4. Script de Validação de Formulário ---
    const form = document.getElementById('volunteer-form');
    const messageContainer = document.getElementById('message-container');

    if (form && messageContainer) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio real
            messageContainer.className = '';
            messageContainer.textContent = '';

            if (form.checkValidity()) {
                // Sucesso
                messageContainer.className = 'success';
                messageContainer.textContent = 'Formulário enviado com sucesso! Entraremos em contato em breve.';
                form.reset();
                messageContainer.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Erro
                messageContainer.className = 'error';
                messageContainer.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
                const firstInvalidField = form.querySelector(':invalid');
                if (firstInvalidField) {
                    firstInvalidField.focus();
                }
            }
        });
    }
});