function factorial(u) {
    for (let i = u - 1; i > 0; i--) {
        u *= i;
    }

    return u
}

// Jangan hapus kode di bawah ini!
export default factorial;
