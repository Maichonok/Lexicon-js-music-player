const songs = [
  {
    name: "Boys, Girls, Toys & Words",
    link: "assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.mp3",
    artists: "Modern Pitch",
    image: "assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg",
  },
  {
    name: "Higher and Higher",
    link: "assets/Higher_And_Higher_-_Scream_Inc._(3).mp3",
    artists: "Scream Inc.",
    image: "assets/Higher_And_Higher_-_Scream_Inc._(3).jpg",
  },
  {
    name: "Not My Problem",
    link: "assets/Not_My_Problem_-_All_My_Friends_Hate_Me.mp3",
    artists: "All My Friends Hate Me",
    image: "assets/Not_My_Problem_-_All_My_Friends_Hate_Me.jpg",
  },
  {
    name: "Old News",
    link: "assets/Old_News_-_Hot_Fiction.mp3",
    artists: "Hot Fiction",
    image: "assets/Old_News_-_Hot_Fiction.jpg",
  },
  {
    name: "Kinematic",
    link: "assets/Peyote_-_Kinematic.mp3",
    artists: "Peyote",
    image: "assets/Peyote_-_Kinematic.jpg",
  },
  {
    name: "Say Goodbye",
    link: "assets/Say_Goodbye_-_VITNE.mp3",
    artists: "VITNE",
    image: "assets/Say_Goodbye_-_VITNE.jpg",
  },
];
const progress = document.querySelector("#progress");
const song = document.querySelector("#song");
const playBtn = document.querySelector("#play i");
const index = 0;
const img = document.querySelector(".img img");

const title = document.querySelector("#title");
const thumb = document.querySelector("#thumb");
const artist = document.querySelector("#musician");

const start = document.querySelector("#start");
const end = document.querySelector("#end");

song.src = songs[index].link;

title.innerHTML = songs[index].name;
artist.innerHTML = songs[index].artists;
thumb.src = songs[index].image;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;

  setInterval(() => {
    const min = Math.floor(song.duration / 60);
    const sec = Math.floor(song.duration % 60);

    const curMin = Math.floor(song.currentTime / 60);
    const curSec = Math.floor(song.currentTime % 60);

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }

    end.innerHTML = min + ":" + sec;
    start.innerHTML = curMin + ":" + curSec;
  }, 1000);
};

function playPause() {
  if (playBtn.classList.contains("bx-pause")) {
    song.pause();
    playBtn.classList.remove("bx-pause");
    playBtn.classList.add("bx-play");
    img.classList.remove("play");
  } else {
    song.play();
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
    img.classList.add("play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    if (song.currentTime == song.duration) {
      nextPlay();
    }
  }, 1000);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  playBtn.classList.remove("bx-play");
  playBtn.classList.add("bx-pause");
  img.classList.add("play");
};

function nextPlay() {
  index = index + 1;
  if (index > songs.length) {
    index = 0;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  }
}

function prevPlay() {
  index = index - 1;
  if (index < 0) {
    index = songs.length;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    song.play();
  }
}
