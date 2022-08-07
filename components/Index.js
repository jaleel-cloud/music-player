

// intializing variables
let songIndex = 0;
let AudioElement = new Audio("/songs/Aaj-bhi.mp3");
let MasterPlay = document.getElementById("MasterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let Pause = document.getElementById("Pause");
let Gif = document.getElementById("Gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));



// songlist
let songs = [
    {
        songName: "Aaj-bhi-VishalMishra", Timestamp: "", filePath: "/songs/Aaj-bhi.mp3", coverPath: ""
    },
    {
        songName: "Afreen-Afreen", Timestamp: "04:01", filePath: "/songs/Afreen-Afreen.mp3", coverPath: ""
    },
    {
        songName: "Dil-diyyan-gallan", Timestamp: "03:29", filePath: "/songs/dil-diyyan-gallan.mp3", coverPath: ""
    },
    {
        songName: "i-love-you", Timestamp: "04:20", filePath: "/songs/i-love-you.mp3", coverPath: ""
    },
    {
        songName: "jiyein-kyun", Timestamp: "02:31", filePath: "/songs/jiyein-kyun.mp3", coverPath: ""
    },
    {
        songName: "kaise-hua", Timestamp: "03:36", filePath: "/songs/kaise-hua.mp3", coverPath: ""
    },
    {
        songName: "marjaeen", Timestamp: "04:41", filePath: "/songs/marjaeen.mp3", coverPath: ""
    },
    {
        songName: "Mere-paas-tum-ho", Timestamp: "4:52", filePath: "/songs/Mere-paas-tum-ho.mp3", coverPath: ""
    },
    {
        songName: "pachtaoge", Timestamp: "04:30", filePath: "/songs/pachtaoge.mp3", coverPath: ""
    },
    {
        songName: "pehli-nazar-mein", Timestamp: "03:37", filePath: "/songs/pehli-nazar-mein.mp3", coverPath: ""
    },
    {
        songName: "Rang-sharbaton-ka", Timestamp: "4:26", filePath: "/songs/rang-sharbaton-ka.mp3", coverPath: ""
    },
    {
        songName: "Sajna", Timestamp: "03:44", filePath: "/songs/Sajna.mp3", coverPath: ""
    },
    {
        songName: "sapna-jahan", Timestamp: "5:41", filePath: "/songs/sapna-jahan.mp3", coverPath: ""
    },
    {
        songName: "Shayad", Timestamp: "03:43", filePath: "/songs/Shayad.mp3", coverPath: ""
    },
    {
        songName: "subhanallah", Timestamp: "04:02", filePath: "/songs/subhanallah.mp3", coverPath: ""
    },
    {
        songName: "Tere-hoke-rahoon", Timestamp: "03:03", filePath: "/songs/Tere-hoke-rahoon.mp3", coverPath: ""
    },
    {
        songName: "Teri-hogaiyyan", Timestamp: "04:12", filePath: "/songs/ateri-hogaiyyan.mp3", coverPath: ""
    },
    {
        songName: "tum-hi-ho", Timestamp: "04:56", filePath: "/songs/tum-hi-ho.mp3", coverPath: ""
    },
    {
        songName: "waalian", Timestamp: "03:23", filePath: "/songs/waalian.mp3", coverPath: ""
    },
    {
        songName: "zaroori-tha", Timestamp: "05:56", filePath: "/songs/zaroori-tha.mp3", coverPath: ""
    },
    {
        songName: "mere-rashke-qamar", Timestamp: "3:23", filePath: "/songs/mere-rashke-qamar.mp3", coverPath: ""
    },

]
// adding songs to html from js
songItems.forEach((Element, i) => {
    Element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;

})

// adding click event to play button
MasterPlay.addEventListener("click", () => {
    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        AudioElement.play();

        MasterPlay.style.display = "none";
        if (MasterPlay.style.display = "none") {
            Pause.style.display = "inline";
            Gif.style.opacity = 1;

        }

    }

})
Pause.addEventListener("click", () => {

    if (AudioElement.play) {
        AudioElement.pause();
        Pause.style.display = "none"
        if (Pause.style.display = "none") {
            MasterPlay.style.display = "inline";
            Gif.style.opacity = 0;
        }
    }
})


// progress bar changing

AudioElement.addEventListener("timeupdate", () => {

    let progress = parseInt((AudioElement.currentTime / AudioElement.duration) * 100);
    myProgressBar.value = progress;
})
// when we click on any part of progress bar the sing should resume at current time

myProgressBar.addEventListener("change", () => {
    AudioElement.currentTime = myProgressBar.value * AudioElement.duration / 100;
})

// songItemsPlay changing icon when played to pause icon




Array.from(document.getElementsByClassName("songItemsPlay")).forEach((elements) => {
    elements.addEventListener("click", (e) => {

        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        AudioElement.src = `/songs/${songIndex}.mp3`;
        AudioElement.currentTime = 0;
        AudioElement.play();
        MasterPlay.style.display = "none";
        if (MasterPlay.style.display = "none") {
            Pause.style.display = "inline";
            Gif.style.opacity = 1;

        }

    })
})
// pause to play icon 

// Array.from(document.getElementsByClassName("songsItemsPlay")).forEach((elements) => {
//     elements.addEventListener("click", (e) => {
// if(AudioElement.play){
//     AudioElement.pause();
//             e.target.classList.remove("fa-pause-circle");
//             e.target.classList.add("fa-play-circle");
// }
//     })
// })



// previous and next button

document.getElementById("previous").addEventListener("click",()=>{

    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    AudioElement.src = `/songs/${songIndex}.mp3`;
    AudioElement.currentTime = 0;
    AudioElement.play();
    MasterPlay.style.display = "none";
    if (MasterPlay.style.display = "none") {
        Pause.style.display = "inline";
        Gif.style.opacity = 1;

    }

})

document.getElementById("next").addEventListener("click",()=>{

    if(songIndex>=20){
        songIndex=21;
    }
    else{
        songIndex +=1;

    }
    AudioElement.src = `/songs/${songIndex+1}.mp3`;
    AudioElement.currentTime = 0;
    AudioElement.play();
    MasterPlay.style.display = "none";
    if (MasterPlay.style.display = "none") {
        Pause.style.display = "inline";
        Gif.style.opacity = 1;

    }

})