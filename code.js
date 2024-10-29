function fib(n) {
    const fibArray = [];
    function recurFib(x) {
        if(n==0) {
            fibArray.push(0);
            return 0;
        }
        else if(n==1) {
            fibArray.push(1);
            return 1;
        }
        else {
            fibArray.push(fib(n - 1) + fib(n - 2));
            return (fib(n - 1) + fib(n - 2));
        }
    }
    recurFib(n)
    return fibArray;
}
