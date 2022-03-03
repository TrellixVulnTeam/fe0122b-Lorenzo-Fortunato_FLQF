

    
$( () =>{
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];
    
    for (i = 0; i < 16; i++){
        let random = Math.floor(Math.random() * mieImg.length );
        // console.log(random)
        let eliminata = mieImg.splice(random, 1);

        $('<div class="images" id="emoji'+i+'"><img id="'+i+'" src="img/'+eliminata+'.png"  width="130" height="130"></div>').appendTo('#memory');
        // console.log(elemento)
    }   
        
        let serbatoio = [];
        $('.images').click(function(){
            
            // CONTATORE
            let conteggio = $('#clicks').text();
            conteggio++;
            $('#clicks').text(conteggio)
            
            
            if(serbatoio.length < 2){
                $(this).children().show();
                let imgId = $(this).children().attr('id');
                let imgSrc = $(this).children().attr('src');
                let obj = {
                    id: imgId,
                    src: imgSrc
                }
                
                serbatoio.push(obj);
                console.log(serbatoio)
                if(serbatoio.length == 2){
                    if(serbatoio[0].src == serbatoio[1].src){
                        serbatoio = [];
                        
                    }else{
                        setTimeout(function(){
                            $('#' + serbatoio[0].id).hide();
                            $('#' + serbatoio[1].id).hide();

                            serbatoio = [];
                        }, 1000);
                        
                    }
                }
                
                
                
            }
            
            
            
        });

    

                    
});