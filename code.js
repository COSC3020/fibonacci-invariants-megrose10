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
        return array;
    }
    for(let i=0; i<n; i++){
        if(n==0) {
            array.push(0);
        }
        else if(n==1) {
            array.push(1);
        }
        else if(n==2) {
            array.push(1);
        }
        else if(n==3) {
            array.push(2);
        }
        else {
            for(let i=0; i<n; i++){
                array.push(fib(n-1) + fib(n-2) + n);
            }
            return array;
        }
    }
}
