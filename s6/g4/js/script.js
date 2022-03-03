$( () => {

$('#clicca').on('click', function(){
    $('#barra').animate({
        width: '500px'
        },{
        duration : 4000,
        easing: 'linear',
        step: function(x){
            $('#progresso').text(Math.round(x*100/500) + '%')
        }
    })

    $('#barra').text('Loading..').css({color: "white",  padding: "5px"});
})












})