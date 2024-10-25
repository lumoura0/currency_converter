// Cotação de moedas do dia.
const USD = 5.68
const EUR = 6.15
const GBP = 7.37

// Obtendo os elementos do formúlarios.
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result');

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Manipulando o evento de submissão do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
        default:
    }
}

const a = 2
a = 5
console.log(a)

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Exibe a cotação da moeda selecionada.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total.
        let total = amount * price

        // Exiba o resultado total.
        result.textContent = `R$ ${formatCurrencyBRL(total)}`

        // Aplica a classe que exibe o footer para mostrar o resultado.
        footer.classList.add('show-result')
    } catch (error) {
        console.log(error)
        footer.classList.remove('show-result')
        alert("Por favor, insira um valor numérico.")
    }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
    // Converte para número e formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}