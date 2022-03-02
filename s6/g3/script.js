// quando il documento è pronto...(forma breve)...
$( () => {

    let carosello = $('#img-l');

    // TASTO SINISTRO
    $('#l-btn').on('click', () =>{
        let lProp = parseInt(carosello.css('left'))

        let newlProp = 0;
        // console.log(lProp)
        if(lProp-300 >= -1400 ){
            newlProp = lProp -300
        }
        carosello.animate({
            left: newlProp
        })
        
        // console.log(newlProp)
        
    
        
    });


    // TASTO DESTRO
    $('#r-btn').on('click', () =>{
        let lProp = parseInt(carosello.css('left'))

        let newlProp = 0;
        // console.log(lProp)
        if(lProp+300 >= -1400 ){
            newlProp = lProp +300
        }
        if(lProp == 0){
            newlProp = lProp -1200
        }
        // console.log(newlProp)
        carosello.animate({
            left: newlProp
        })
        
        // console.log(newlProp)
        
    
        
    });
    
    



        


})
