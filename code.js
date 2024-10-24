function fib(n) {
    if(n==0) {
        fibArray.push(0);
    }
    else if(n==1) {
        fibArray.push(1);
    }
    else if(n==2) {
        fibArray.push(1);
    }
    else if(n==3) {
        fibArray.push(2);
    }
    else {
        fibArray = fib(n - 1) + fib(n - 2);
    }

    return fibArray;
}
