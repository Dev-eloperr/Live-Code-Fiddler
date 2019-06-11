var html_btn=false;
var css_btn=false;
var js_btn=false;
var op_btn=false;
var flag=0;
var area_selector;

$(".ui-button").click(function () {
    if(this.id === "html_btn"){
        html_btn = !html_btn;
        console.log(html_btn);
        area_selector = $("#html_area");
        if(html_btn === true) {
            flag = 1;
        }
        else flag=0;
    }
    if(this.id === "css_btn"){
        css_btn = !css_btn;
        console.log(css_btn);
        area_selector = $("#css_area");
        if(css_btn === true){
            flag = 1;
        }
        else flag=0;
    }
    if(this.id === "js_btn"){
        js_btn = !js_btn;
        console.log(js_btn);
        area_selector = $("#js_area");
        if(js_btn === true){
            flag = 1;
        }
        else flag=0
    }
    if(this.id === "op_btn"){
        op_btn = !op_btn;
        console.log(op_btn);
        area_selector = $("#op_area");
        if(op_btn === true){
            flag = 1;
        }
        else flag=0
    }
    if(flag===1) {
        $(this).addClass("ui-state-active");
        $(area_selector).removeClass("ui-helper-hidden");
        console.log(area_selector);
    }
    else {
        $(this).removeClass("ui-state-active");
        $(area_selector).addClass("ui-helper-hidden")
    }
    setWidth();
    flag = 0;
});
function setWidth(){
    var count=0;
    count=0;
    count = checkFn(html_btn) + count;
    count = checkFn(css_btn) + count;
    count = checkFn(js_btn) + count;
    count = checkFn(op_btn) + count;
    $(".textarea").css("width",""+$(window).width()/count-18);
}
function checkFn(element){
    if(element===false)
        return 0;
    else
        return 1;
}
$(".textarea").height($(window).height() - $("header").height() - $("footer").height()-100);
//$("iframe").height($("textarea").height());
/*
$("#sortable").draggable({
    revert:true
});
*/
$(window).resize(function () {

});
$("textarea").on('change keyup paste',function () {
    $("iframe").contents().find("html").html($("#html_area").val());
});


