
let observer= {
    // 添加订阅者（函数）
    addSubscriber:function(callback){
        this.subscribers.push(callback);//callback是函数；
    },
    // 删除订阅者
    removeSubscriber:function(callback){
        let index = this.subscribers.indexOf(callback);
        this.subscribers.splice(index,1);
    },

    // 发布内容
    publish:function(what){
        for(let i in this.subscribers){
            this.subscribers[i](what);
        }
    },

    // 让某个对象具备发布订阅功能(让某个对象具备：添加订阅者，删除订阅者，发布内容)
    make:function(obj){ 
        obj.subscribers=[]; //存储着所有的订阅者（可以是对象，可以是函数）   
        for(let key in this){//this是 observer
            obj[key] = this[key];
        }
    }    
}