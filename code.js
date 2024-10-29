function fib(n) {
    const fibArray = [];
    function recurFib(x) {
        if(x==0) {
            fibArray.push(0);
            return 0;
        }
        else if(x==1) {
            fibArray.push(1);
            return 1;
        }
        else {
            fibArray.push(fib(x - 1) + fib(x - 2));
            return (fib(x - 1) + fib(x - 2));
        }
    }
    recurFib(n)
    return fibArray;
}
