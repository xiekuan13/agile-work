function fibonacci(n){
    if(n==1|n==2) {
        return 1
    }
    if (n<1) {
        return false
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
module.exports = fibonacci;