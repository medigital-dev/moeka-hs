$(document).ready(function(){
    const date = new Date();
    const month = date.getMonth();
    const year1 = date.getFullYear();
    var tp = (year1+1)+"/"+(year1+2);
    $('#tp').text(tp);
    console.log(tp);
});