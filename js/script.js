$(document).ready(function(){
    const date = new Date();
    const month = date.getMonth();
    const year1 = date.getFullYear();
    var tp = (year1+1)+"/"+(year1+2);
    $('#tp').text(tp);

    $('#connect').click(function(e){
        e.preventDefault();
        const username = $('#username');
        if(username.val()==''){
            username.addClass('is-invalid');
        } else {
            $(this).html('<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>');
            $('#formLogin').trigger('submit');
        }
    })
});