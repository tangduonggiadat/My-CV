$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.on_top').fadeIn();
        } else {
            $('.on_top').fadeOut();
        }
    });
    $('#on_top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
});
function ChangeON(){
        var a =document.getElementById("header_area");
        var b =document.getElementById("menu");
        var c =document.getElementById("about");
        var d =document.getElementById("Blog");
        var e =document.getElementById("nd");
        var f =document.getElementById("nd2");
        var g =document.getElementById("nd3");
        a.style.backgroundColor= "#001D38";
        a.style.color= "white";
        b.style.backgroundColor= "#001D38";
        c.style.backgroundColor= "#001D38";
        d.style.backgroundColor= "Gray";
        e.style.color= "black";
        f.style.color= "black";
        g.style.color= "black";
    }
    function Change2OFF(){
        var a =document.getElementById("header_area");
        var b =document.getElementById("menu");
        var c =document.getElementById("about");
        var d =document.getElementById("Blog");
        var e =document.getElementById("nd");
        a.style.backgroundColor= "#ffffff";
        a.style.color= "black";
        b.style.backgroundColor= "#ffffff";
        c.style.backgroundColor= "#ffffff";
        d.style.backgroundColor= "#F5FBFF";
        e.style.color= "#919191";
    }
mediumZoom('.zoom',{
    margin:50,
    scrollOffset:200
})