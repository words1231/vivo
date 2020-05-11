
jQuery.fn.extend({
    // 参数：
    // $subCheck：子复选框
    // $unBtn:反选按钮
    check: function ($subCheck,$unBtn) {            
        //1、 点击全选复选框
        this.click(function () {
            $subCheck.prop("checked", this.checked);
        });
        if($unBtn){
            // 点击反选按钮
            $unBtn.click(function () {
                $subCheck.each(function () {
                    // this: 循环时的当前元素
                    this.checked = !this.checked;
                });
                subChangeFather();
            });
        }
        // 点击子复选框
        $subCheck.click(function () {
            subChangeFather();
        })           

        var subChangeFather = ()=> {
            // 循环所有的复选框，看看是不是都选中了呢
            let allCheck = true;//假定都选中了
            $subCheck.each(function () {
                // this:循环时的当前dom对象。
                if (this.checked != true) {
                    allCheck = false;
                }
            });
            this.prop("checked", allCheck);
        }
    }
});