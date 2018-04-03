/********
判断输入是否是正确的邮箱格式

示例输入:'邮箱字符串';
示例输出：true表示格式正确
*********/

/**
 * 方法一
 * @param  {[type]}  sEmail [description]
 * @return {Boolean}        [description]
 */
function isAvailableEmail(sEmail) {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(sEmail);
}

/**
 * 方法二
 * @param  {[type]}  sEmail [description]
 * @return {Boolean}        [description]
 */

function isAvailableEmail(sEmail) {
    var reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return reg.test(sEmail);
}
