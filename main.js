
var myTextarea = document.getElementById("html_area");
var html_editor= CodeMirror.fromTextArea(myTextarea, {
    mode: "xml",
    lineNumbers: true,
    extraKeys: {"Ctrl-Space":"autocomplete"},
    theme: "dracula",
    autoCloseTags: true,
    autoCloseBrackets: true,
    styleActiveLine: true

});
myTextarea = $("#css_area")[0];
var css_editor = CodeMirror.fromTextArea(myTextarea, {
    mode: "css",
    lineNumbers: true,
    extraKeys: {"Ctrl-Space":"autocomplete"},
    theme: "dracula",
    autoCloseTags: true,
    autoCloseBrackets: true,
    styleActiveLine: true
});
myTextarea = $("#js_area")[0];
var js_editor = CodeMirror.fromTextArea(myTextarea, {
    mode: "javascript",
    lineNumbers: true,
    extraKeys: {"Ctrl-Space":"autocomplete"},
    theme: "dracula",
    autoCloseTags: true,
    autoCloseBrackets: true,
    styleActiveLine: true
});

CodeMirror.commands.autocomplete = function(cm) {
    cm.showHint({hint: CodeMirror.hint.anyword});
};



var html_btn=false;
var css_btn=false;
var js_btn=false;
var op_btn=false;
var flag=0;
var area_selector;
var e_hight= $(window).height() - $("header").height() - $("footer").height()-80;
setWidth();
$(".ui-button").click(function () {
    if(this.id === "html_btn"){
        html_btn = !html_btn;
        console.log(html_btn);
        area_selector = $("#html_area");
        if(html_btn === true) {

            flag = 1;
            $(this).addClass("ui-state-active");
        }
        else {
            flag=0;
            $(this).removeClass("ui-state-active");
        }
    }
    if(this.id === "css_btn"){
        css_btn = !css_btn;
        console.log(css_btn);
        area_selector = $("#css_area");
        if(css_btn === true) {

            flag = 1;
            $(this).addClass("ui-state-active");
        }
        else {
            flag=0;
            $(this).removeClass("ui-state-active");
        }
    }
    if(this.id === "js_btn"){
        js_btn = !js_btn;
        console.log(js_btn);
        area_selector = $("#js_area");
        if(js_btn === true) {

            flag = 1;
            $(this).addClass("ui-state-active");
        }
        else {
            flag=0;
            $(this).removeClass("ui-state-active");
        }
    }
    if(this.id === "op_btn"){
        op_btn = !op_btn;
        console.log(op_btn);
        area_selector = $("#op_area");
        if(op_btn === true){
            flag = 1;
            $(this).addClass("ui-state-active");
            $(area_selector).removeClass("ui-helper-hidden");
        }
        else {
            flag=0;
            $(this).removeClass("ui-state-active");
            $(area_selector).addClass("ui-helper-hidden");
        }

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
    var wid = $(window).width()/count-30;
    //$(".CodeMirror").css("width",""+);
    $("iframe").css("width",""+wid);

    if (checkFn(html_btn))
        html_editor.setSize(wid,e_hight);
    else
        html_editor.setSize(0,0);
    if (checkFn(css_btn))
        css_editor.setSize(wid,e_hight);
    else
        css_editor.setSize(0,0);
    if (checkFn(js_btn))
        js_editor.setSize(wid,e_hight);
    else
        js_editor.setSize(0,0);

}
function checkFn(element){
    if(element===false)
        return 0;
    else
        return 1;
}

$("iframe").height(e_hight);
//$("iframe").height($("textarea").height());
/*
$("#sortable").draggable({
    revert:true
});
*/
$(window).resize(function () {
    setWidth();
});
$("textarea").on('change keyup paste',function () {
    $("iframe").contents().find("html").html("<html><head><style>"+$("#css_area").val()+"</style></head><body>"+$("#html_area").val()+"</body></html>");

    document.getElementsByTagName('iframe')[0].contentWindow.eval($("#js_area").val());
});


