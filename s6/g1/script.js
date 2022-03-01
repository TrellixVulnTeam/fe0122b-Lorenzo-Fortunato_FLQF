$(document).ready( () => {
    $('#iscr-news').click( () => {
        let check = $('#nome').val();

        if (check == ""){
            $("#nome").next().text('* richiesto');
        }else{
            $("#nome").next().text('bravo');
        }

        let email1 = $('#email-1').val();
        if (email1 == ""){
            $("#email-1").next().text('* richiesto');
        }else{
            $("#email-1").next().text('bravo');
        }

        let email2 = $('#email-2').val();
        if (email2 == ""){
            $("#email-2").next().text('* richiesto');
        }else{
            $("#email-2").next().text('bravo');
        }
        
        if (email1 != email2){
            alert('Email diverse!');
        }else if(check != '' && email1 != '' && email2 != ''){
            alert('Sei uno sbruffone');
            
        }
    });
    
    $('#pulisci-form').click( () => {
        $('#nome, #email-1, #email-2').val('');
    });
    




});


        







       
        
        
        

        


