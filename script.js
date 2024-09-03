function checkFibonacci() {
    const num = parseInt(document.getElementById('numberInput').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('result').textContent = "Por favor, insira um número válido.";
        return;
    }

    let a = 0, b = 1, nextTerm = 0;

    while (nextTerm < num) {
        nextTerm = a + b;
        a = b;
        b = nextTerm;
    }

    if (num === 0 || num === 1 || nextTerm === num) {
        document.getElementById('result').textContent = `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        document.getElementById('result').textContent = `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}
