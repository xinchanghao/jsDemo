/**
 * 斐波那契数列三种实现
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */

//使用递归
function fibonacci(n){
    if(n<=2){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
//使用数组动态规划记录
function fibonacci(n){
    var val = [];
    if(n<=2){
        return 1;
    }else{
        val[1]=1; //n为2
        val[2]=2; //n为3
        for(var i=3; i<n; ++i){
            val[i] = val[i-1] + val[i-2];
        }
        return val[n-1];
    }
}
//循环迭代
function fibonacci(n){
    if(n<=2){
        return 1;
    }else{
        var first = 1;
        var second = 1;
        var third = 0;
        for(var i=3; i<=n; i++){
            third = first + second;
            first = second;
            second = third;
        }
        return third;
    }
}
