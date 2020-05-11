class Menu{
    constructor(title,clsName,href,subClsName){
        this.title = title;
        this.clsName = clsName;
        this.href = href;
        this.children=[];
        this.subClsName = subClsName;
    }

    //给该菜单增加子菜单。
    appendSubMenu(obj){
        this.children.push(obj);
    }

    //
    render(boxDom){
        //1、创建li
        let liDom = document.createElement("li");
        liDom.className = this.clsName;
        boxDom.appendChild(liDom);

        //2、创建a
        if(this.href==""){
            let spanDom = document.createElement("span");
            spanDom.innerHTML = this.title;
            liDom.appendChild(spanDom);
        }else{
            let aDom = document.createElement("a");
            aDom.innerHTML = this.title;
            aDom.href = this.href;
            liDom.appendChild(aDom);
        }

        //3、创建孩子
        if(this.children.length>0){
            //1）、创建孩子的容器
            let ulDom = document.createElement("ul");
            ulDom.className = this.subClsName;
            liDom.appendChild(ulDom);
            //2）、创建孩子
            for(let i in this.children){
                this.children[i].render(ulDom);
            }
        }
    }
}

//根菜单没有外观，仅仅只是包含所有的一级菜单而已
class RootMenu{
    constructor(boxDom){
        this.boxDom = boxDom;
        this.children=[];//所有的一级菜单
    }

    appendSubMenu(menu){
        this.children.push(menu)
    }

    render(){
        for(let i in this.children){            
            this.children[i].render(this.boxDom);
        }
    }
}
//指定父菜单对象和子菜单数据，创建子菜单。
//参数：
//parentMenu:福菜单对象
//sonMenus:子菜单的数据

function createSonMenu(parentMenu,sonMenus){
    for(let i=0;i<sonMenus.length;i++){
        let menu = new Menu(sonMenus[i].title,sonMenus[i].className,sonMenus[i].href,sonMenus[i].ulClass);
        parentMenu.appendSubMenu(menu);
        if(sonMenus[i].children && Array.isArray(sonMenus[i].children)){
            //创建孩子的孩子        
            createSonMenu(menu,sonMenus[i].children);
        }
    }
}

function createMenu(boxDom,sonMenus){
    let rootMenu = new RootMenu(boxDom);
    //创建所有的菜单对象
    createSonMenu(rootMenu,sonMenus);
    //渲染
    rootMenu.render();
}
