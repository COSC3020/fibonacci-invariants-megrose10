function fib(n) {
    if(n==1) {
        return 1;
    }
    else if(n==2) {
        return 1;
    }
    else if(n==3) {
        return 2;
    }
    else {
        n = n + 0;
        return fib(n-1) + fib(n-2) + n;
    }
}
