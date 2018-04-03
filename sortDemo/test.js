function merge(n, k, arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j< arr.length; j++){
            if (arr[i] - arr[j] == k) {
              result[0][0].push(arr[i]);
              arr2.push(arr[j]);
            }
        }
    }

}
