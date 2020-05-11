// 封装：就是抽象，把具体的变成抽象的（通用）；把具体值变成变量；
// 功能：发送ajax请求
// 参数：
// 请求的方式
// 请求地址 (key1=value1&key2=value2)
// 请求参数
// 回调函数
// 返回值：无


function ajax(method, url, params, callback) {
    //1、 创建对象
    let xhr = new XMLHttpRequest();

    //2、设置请求参数
    let urlAndParams = url;
    if (method.toLowerCase() == "get" && params != "") {
        urlAndParams += "?" + params;
    }
    xhr.open(method, urlAndParams, true);

    // 3、设置回调函数（后端响应回来后调用的函数）
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // xhr.responseText;
            callback && callback(xhr.responseText);
        }
    }

    if (method.toLowerCase() == "post") {
        // Content-type:表示前端发个后端的内容的类型；
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    }

    // 4、发送请求
    if (method.toLowerCase() == "get") {
        xhr.send();
    } else if (method.toLowerCase() == "post") {
        xhr.send(params);
    }

}


//参数用对象进行封装

function ajax02(obj) {
    let defaultObj = {
        method: "get",
        url: "#", //loadMore.php
        params: "", //"pageIndex=1"
        callback: null, //show
        isAsync: true
    };
    // 把参数obj和defaultObj进行合并
    for (let key in obj) {
        defaultObj[key] = obj[key];
    }
    // ajax步骤
    // 1、创建对象
    let xhr = new XMLHttpRequest();
    // 2、设置请求的参数（请求方式，请求地址，请求参数，是否异步）
    // 1）、处理请求地址和参数
    let urlAndParams = defaultObj.url;
    if (defaultObj.method.toLowerCase() == "get" && defaultObj.params != "") {
        urlAndParams += "?" + defaultObj.params;
    }
    xhr.open(defaultObj.method, urlAndParams, defaultObj.isAsync);

    // 3、设置回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // &&运算符的运算规则； 
            // 同真为真，即：前面的表达式为真，那么还需要看看后面的表达式结果。
            // 一假为假：前面的表达式结果是假；那么后面的表达式就不参与运算了。
            // 此时的callback是show
            defaultObj.callback && defaultObj.callback(xhr.responseText);
        }
    }

    // 4、发送请求
    if (defaultObj.method.toLowerCase() == "get") {
        xhr.send();
    } else if (defaultObj.method.toLowerCase() == "post") {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(defaultObj.params);
    }

}


function ajax03(obj) {
    let defaultObj = {
        method: "get",
        url: "#", //loadMore.php
        params: "", //"pageIndex=1"
        isAsync: true
    };
    // 把参数obj和defaultObj进行合并
    for (let key in obj) {
        defaultObj[key] = obj[key];
    }
    // ajax步骤
    // 1、创建对象
    let xhr = new XMLHttpRequest();
    // 2、设置请求的参数（请求方式，请求地址，请求参数，是否异步）
    // 1）、处理请求地址和参数
    let urlAndParams = defaultObj.url;
    if (defaultObj.method.toLowerCase() == "get" && defaultObj.params != "") {
        urlAndParams += "?" + defaultObj.params;
    }
    xhr.open(defaultObj.method, urlAndParams, defaultObj.isAsync);

    return new Promise(function (resolve, reject) {
        // 3、设置回调函数
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve && resolve(xhr.responseText);
                } else {
                    reject && reject("服务器出错了");
                }
            }
        }
        // 4、发送请求
        if (defaultObj.method.toLowerCase() == "get") {
            xhr.send();
        } else if (defaultObj.method.toLowerCase() == "post") {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(defaultObj.params);
        }
    });


}
