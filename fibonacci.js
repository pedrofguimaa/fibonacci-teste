// Função recursiva 
function funcRecursiva(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    let fib = funcRecursiva(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
}

// Função linear 
function funcLinear(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}


console.log(funcRecursiva(12)); 
console.log(funcLinear(12));     