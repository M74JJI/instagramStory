const song = {
    name: 'Long Night pt.||',
    src: 'assets/song.mp3',
    cover: 'assets/song.jpg',
    artist: 'JPB',
    lyrics:
        '2.8 | We gon turn the crib into a club like\n' +
        "5.7 | Hennessy and Buddah screamin' thug life'\n" +
        " 8 | Get it baby, you know I'm the plug, right'\n" +
        " 10 | Buggin' got a feelin' that it's gonna be a long night'\n" +
        " 11 | Whoa'\n" +
        " 13 | Everything I touch turned gold'\n" +
        " 15 | Need no introduction, 'cause they know briggin more''\n" +
        " 17.3 | I hit the lotto, my motto roll up Gelato and Throttle'\n" +
        " 20 | A couple models to caudal who fuckin' brought out the bottles'\n" +
        " 22 | I'm goin' ham'\n" +
        " 23 | This ain't even luck, all planned'\n" +
        " 25 | Y'all know who the fucks I am'\n" +
        " 27 | Burnin' bucks mo bands'\n" +
        " 29 | Always been the M.O. since the start of this'\n" +
        " 30.5 | And now I'm on a mission like I'm Optimus, aye'\n" +
        "  33.5| We gon turn the crib into a club like'\n" +
        "  36 | Hennessy and Buddah screamin' thug life'\n" +
        "  39 | Get it baby, you know I'm the plug, right'\n" +
        "  40 | Buggin' got a feelin' that it's gonna be a long night'\n" +
        "  51 | Got a feelin' that it's gonna be a long night'\n" +
        "  62 | Yеah, never an averagе night'\n" +
        "  64 | Two, four hours up in a day I gotta make it right'\n" +
        "  67 | 18 of those I'm in a cave I gotta make some light'\n" +
        "  69 | Make it hype, even if we breakin' night'\n" +
        "72 | And even if things go left we gotta make 'em right'\n" +
        "74 |  Chillin' with M.I.M.E we triple up aye 'onna double UP'\n" +
        "76.4 | Triple dub, came from the basement we only goin' up'\n" +
        "79 | They lovin' us, up in the booth I'm getting dizzy,'\n" +
        "80  | but aye, the cup is up'\n" +
        "82  | Toast to my people, that's on the come up, aye'\n" +
        "84  | You lit with us, in order by the trigger buzz'\n" +
        "86  | Lookin' at my watches a spirit bomb both hands are goin' up'\n" +
        "88.5  | You comin' coast to coast with us'\n" +
        "90  | See the flows are flowin' over, flowin' yeah'\n" +
        "92  | The cup it run it over title wave up in the ocean,ah'\n" +
        "95  | We gon turn the crib into a club like'\n" +
        "97  | Hennessy and Buddah screamin' thug life'\n" +
        "100  | Get it baby, you know I'm the plug, right'\n" +
        "102  | Buggin' got a feelin' that it's gonna be a long night'\n" +
        "112  | Got a feelin' that it's gonna be a long night'\n",
};
var audioPlayer = document.getElementsByTagName('audio')[0];
var play = document.querySelector('.play');
var pause = document.querySelector('.pause');
var mute = document.querySelector('.mute');
var unmute = document.querySelector('.unmute');
var progress_bar = document.querySelector('.progress_bar');
var lyrics = document.querySelector('.lyrics');
var cover = document.querySelector('.cover');
var song_wrapper = document.querySelector('.song_wrapper');

play.addEventListener('click', function () {
    audioPlayer.play();
    this.style.display = 'none';
    pause.style.display = 'block';
});
pause.addEventListener('click', function () {
    audioPlayer.pause();
    this.style.display = 'none';
    play.style.display = 'block';
});
mute.addEventListener('click', function () {
    audioPlayer.volume = 0;
    this.style.display = 'none';
    unmute.style.display = 'block';
});
unmute.addEventListener('click', function () {
    audioPlayer.volume = 1;
    this.style.display = 'none';
    mute.style.display = 'block';
});

var size = 420;
setInterval(function () {
    var width = parseInt(
        (audioPlayer.currentTime * size) / audioPlayer.duration
    );
    progress_bar.style.width = width + 'px';
}, 100);

const lines = song.lyrics.trim().split('\n');

const data = [];

lines.map(function (line) {
    const [time, lyric] = line.split('|');
    data.push({
        time: time,
        lyric: lyric,
    });
});

audioPlayer.addEventListener('timeupdate', function () {
    data.forEach((item) => {
        if (audioPlayer.currentTime >= item.time) {
            lyrics.innerText = item.lyric;
        }
    });
});
var type = 'cover';
song_wrapper.addEventListener('click', function () {
    if (type == 'cover') {
        cover.style.display = 'none';
        lyrics.style.display = 'block';
        type = 'lyrics';
    } else {
        lyrics.style.display = 'none';
        cover.style.display = 'flex';
        type = 'cover';
    }
});
