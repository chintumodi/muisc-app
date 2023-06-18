const play = document.getElementById('play')
const music = document.querySelector('audio')
const img = document.querySelector('img')
const artist = document.getElementById('artist')
const title = document.getElementById('title')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

const songs = [
    {
        name:"music/music1.mp3",
        title:"Lotus Lane",
        artist:"the Loyalist",
        img:"img/img1.jpg"
    },
    {
        name:"music/music2.mp3",
        title:"music 2",
        artist:"Artist 2",
        img:"img/img2.jpg"
    },
    {
        name:"music/music3.mp3",
        title:"music 3",
        artist:"Artist 3",
        img:"img/img3.jpg"
    },
]



let isplaying = false;
// for play function
const playMusic = ()=>{
    isplaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
img.classList.add('anime')

}

// for pause function
const pauseMusic = ()=>{
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
img.classList.remove('anime')

}

play.addEventListener('click',()=>{
    // if(isplaying){
    //     // if it is true
    //     pauseMusic()
    // }else{
    //     // if it is false
    //     playMusic()
    // }

    isplaying ? pauseMusic() : playMusic()

})


// changing the music data

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
music.src = `${songs.name}`
img.src = `${songs.img}`
}

// loadSong(songs[2]);
songsIndex = 0;
function nextSong(){
    // songsIndex++;
    songsIndex = (songsIndex + 1) % songs.length;
    loadSong(songs[songsIndex]);
    playMusic()
}
function prevSong(){
    // songsIndex++;
    songsIndex = (songsIndex - 1) % songs.length;
    loadSong(songs[songsIndex]);
    playMusic()
}

next.addEventListener('click',nextSong)
prev.addEventListener('click',prevSong)
