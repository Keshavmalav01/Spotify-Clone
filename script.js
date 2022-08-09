

//initialize the variables 
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [

    {songName: " Tujhe kitna chahne lage hum" ,filePath: "Songs/1.mp3",coverpath: "Covers/3.jpg"},
    {songName: " 295  sidhu moose wala" ,filePath: "Songs/2.mp3",coverpath: "Covers/1.jpg"},
    {songName: " Excuses " ,filePath: "Songs/3.mp3",coverpath: "Covers/3.jpg"},
    {songName: " Hanuman Chalisha " ,filePath: "Songs/4.mp3",coverpath: "Covers/4.jpg"},
    {songName: " Jab koi baat bigad jaaye " ,filePath: "Songs/5.mp3",coverpath: "Covers/1.jpg"},
]

songItems.forEach((Element,i)=>{
   
    Element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    Element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
})



//Handle Play/pause click
 masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update the seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})

Array.from(document.getElementsByClassName ('songItemPlay')).forEach((Element)=>{

    Element.addEventListener('click', (e)=>{
        makeAllPlays();  
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause') ;
        audioElement.src =`Songs/${songIndex+1}.mp3`;
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.play(); 
        audioElement.currentTime =0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        
        
      
    })
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName ('songItemPlay')).forEach((Element)=>{
        Element.classList.add('fa-circle-play');
        Element.classList.remove('fa-circle-pause');

    })

}

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>=4){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src =`Songs/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.play(); 
    audioElement.currentTime =0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})

document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src =`Songs/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.play(); 
    audioElement.currentTime =0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');


})