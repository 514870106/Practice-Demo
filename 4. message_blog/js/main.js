new Vue().$mount('#app')
$(document).ready(function () {
    //请求sever返回留言人数，写入页面
    $.ajax({
        type:"get",
        url:"http://localhost:8080",
        data:{
            type : 'nb'
        },
        dataType:"json",
        success:function(data){
            console.log(data);
            $('.nb_person').text('已有'+data+'人在此留言');
        }
       })
    // $('#submit').click(function(){
    //     var time =
    // })
})