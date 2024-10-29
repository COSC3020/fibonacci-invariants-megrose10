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
            let nextNum = (recurFib(x - 1) + recurFib(x - 2));
            fibArray.push(nextNum);
            return (recurFib(x - 1) + recurFib(x - 2));
        }
    }
    recurFib(n);
    return fibArray;
}
