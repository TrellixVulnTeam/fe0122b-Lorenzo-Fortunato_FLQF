// 1. creare json - video/audio -----> ok
// 2. AUDIO
    // 2.1 crea lista (<a>) cliccabile tramite json
    // 2.2 per ogni lista inserisci un attributo src che cambierà in base all'url
    // 2.3 add.Event click scatena una function che riproduca l'audio (player)
    // 2.4 ai click successivi al primo interrompi la riporduzione e fai partire la successiva

// 3. VIDEO
    // 3.1 creare lista (<a>) cliccabile tramite json
    // 3.2 per ogni lista inserisci un attributo href che cambierà in base all'url
    // 3.3 al click scatena una function che riproduca il video (player)
    // 3.4 ai click successivi al primo interrompi la riporduzione e fai partire la successiva






////// AUDIO //////
fetch('../audio.json')
    .then(response => response.json())
    .then(data => {

        // console.log(data);
        data.forEach(element => {
            let mozart = document.querySelector('.a');
            let aFile = document.createElement('a');
            aFile.style.display = 'block';
            aFile.innerText = element.titolo;
            aFile.setAttribute('href', '#')
            // console.log(element.titolo)
            mozart.append(aFile)

            aFile.addEventListener('click', function(){
                let sorgenteAudio = document.querySelector('#sorgenteAudio');
                sorgenteAudio.setAttribute('src', element.url);

                playAudio(sorgenteAudio);



            });

            function playAudio(suono){
                suono.play();
            };

        });


    });




////// VIDEO //////
fetch('../video.json')
    .then(response => response.json())
    .then(dataVideo => {

        // console.log(dataVideo);
        dataVideo.forEach(elementVideo => {
            let yt = document.querySelector('.aVideo');
            let aFileVideo = document.createElement('a');
            aFileVideo.style.display = 'block';
            aFileVideo.innerText = elementVideo.titolo;
            aFileVideo.setAttribute('href', '#')
            // console.log(elementVideo.titolo)
            yt.append(aFileVideo)

            aFileVideo.addEventListener('click', function(){
                let sorgenteVideo = document.querySelector('#sorgenteVideo');
                sorgenteVideo.setAttribute('src', elementVideo.url);

                playVideo(sorgenteVideo);



            });

            function playVideo(visione){
                visione.play();
            };

        });


    });
