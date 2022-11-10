function welcome(){
    let welcome_text = '欢迎光顾Maxenton的安全小屋~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n请大家打开声音获取更好的体验！',
        imageUrl: "/img/head.jpg",
        timer: 1500,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})
