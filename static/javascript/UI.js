var client = io();
function i_hide()
{
    $("#inter").animate({ bottom: "-100%" }, 250);
    $("#hide_i").animate({ bottom: "-100%" }, 250);    
    $("#show_i").animate({ bottom: "7px" }, 250);
    $('#show_e').animate({ bottom: "57px" }, 250);
    return;
}
function i_show ()
{
    $("#inter").animate({ bottom: "7px" }, 250);
    $("#hide_i").animate({ bottom: "7px" }, 250);
    $("#show_i").animate({ bottom: "-100%" }, 250);
    $('#show_e').animate({ bottom: "-100%" }, 250);
    return;
}
function e_hide()
{
    $("#editor").animate({ bottom: "-100%" }, 250);
    $("#hide_e").animate({ bottom: "-100%" }, 250);
    $("#show_i").animate({ bottom: "7px" }, 250);
    $('#show_e').animate({ bottom: "57px" }, 250);
    return;
}
function e_show()
{
    $("#editor").animate({ bottom: "7px" }, 250);
    $("#hide_e").animate({ bottom: "7px" }, 250);
    $("#show_i").animate({ bottom: "-100%" }, 250);
    $('#show_e').animate({ bottom: "-100%" }, 250);
    return;
}
function changeInstance(target)
{
    console.log(target.style.backgroundColor);
    return;
}
function acception()
{
    var data = document.getElementById('logg');
    client.emit("login", {
        login: data.value
    })
    var check;
    client.on("message", function (data)
    {
        alert(data);
    })
    data.parentNode.parentNode.removeChild(data.parentNode);
    return;
}
