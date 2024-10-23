/*function fib(n) {
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
        return fib(n-1) + fib(n-2) + n;
    }
}
*/
function fib(n, array) {
    if(n==0) {
        array.append(0);
    }
    else if(n==1) {
        array.append(1);
    }
    else if(n==2) {
        array.append(1);
    }
    else if(n==3) {
        array.append(2);
    }
    else {
        for(let i=0; i<n; i++){
            array.append(fib(n-1) + fib(n-2) + n);
        }
    }
}
