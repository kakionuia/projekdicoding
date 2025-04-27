function fibonacci(n) {
    const sqrt5 = Math.sqrt(5);
    const phi = (1 + sqrt5) / 2;
    const psi = (1 - sqrt5) / 2;
  
    return Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / sqrt5);

}

// Jangan hapus kode di bawah ini!
export default fibonacci;
