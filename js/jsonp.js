

// 功能：jsonp的封装
// 参数：
// url：请求地址
// params: 请求时传递的参数

// 调用示例：
// jsonp("https://suggest.taobao.com/sug",
//     {
//         "code":"utf-8",
//         "_ksTS":"1515120676355_323",
//         "area":"c2c",
//         "bucketid":"15",
//         "callback":"fn",
//         "q":"运动鞋"
//     }
// );

function jsonp(url,params){
    
    // jsonp发送请求
    let scriptDom = document.createElement("script");

    // 拼接url和它后面的参数
    let urlAndParams = url+"?";
    for(let key in params){
        urlAndParams += key+"="+params[key]+"&";
    }
    // 去掉最后一个字符（&）
    urlAndParams = urlAndParams.substring(0,urlAndParams.length-1);

    // 把拼接好的url和参数赋给script标签的src属性
    scriptDom.src = urlAndParams;

    document.body.appendChild(scriptDom);
    scriptDom.remove();
}