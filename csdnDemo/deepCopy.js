const data = {
    arr: ["test0", "test1"],
    obj: { title: '标题', dataIndex: "name" },
    onClick: () => { console.log('this is a function') },
    date: new Date(),
}

// const deepCopy = function (obj) {
//     var str, newobj = obj.constructor === Array ? [] : {};
//     if (typeof obj !== 'object') {
//         return;
//     } else if (window.JSON) {
//         str = JSON.stringify(obj), //json对象转字符串，系列化
//             newobj = JSON.parse(str); //还原为json对象
//     } else {
//         for (var i in obj) {
//             newobj[i] = typeof obj[i] === 'object' ?
//                 deepCopy(obj[i]) : obj[i];
//         }
//     }
//     return newobj;
// };


const result1 = JSON.parse(JSON.stringify(data));
const result2 = deepCopy(data);

console.log('------------------------------------');
console.log(result1);
console.log('------------------------------------');

console.log('------------------------------------');
console.log(result2);
console.log('------------------------------------');



//解决方案：

const deepCopy = (obj, hash = new WeakMap()) => {
    let cloneObj
    let Constructor = obj.constructor
    switch (Constructor) {
        case Object:
            cloneObj = new Constructor(obj)
            break
        case RegExp:
            cloneObj = new Constructor(obj)
            break
        case Date:
            cloneObj = new Constructor(obj.getTime())
            break
        default:
            if (hash.has(obj)) return hash.get(obj)
            cloneObj = new Constructor()
            hash.set(obj, cloneObj)
    }
    for (let key in obj) {
        cloneObj[key] = obj[key].constructor === constructor ? deepCopy(obj[key], hash) : obj[key];
    }
    return cloneObj
}

const result3 = deepCopy(data);

console.log('------------------------------------');
console.log(result3);
console.log('------------------------------------');
