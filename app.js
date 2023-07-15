const p1button = document.querySelector('#p1-button')
const p2button = document.querySelector('#p2-button')
const p1display = document.querySelector('#p1-display')
const p2display = document.querySelector('#p2-display')
const resett = document.querySelector('#resetbro')
const maxpoint = document.querySelector('#winpoint')

let scorep1 = 0;
let scorep2 = 0;
let winpoint = 2;
let gameover = false;

function reset() {
    gameover = false;
    scorep1 = 0;
    scorep2 = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
}


p1button.addEventListener('click', () => {
    if(!gameover) {
        scorep1 += 1;
        if(scorep1 === winpoint) {
            gameover = true;
        }
    }

    p1display.textContent = scorep1;
})
p2button.addEventListener('click', () => {
    if(!gameover) {
        scorep2 += 1;
        if(scorep2 === winpoint) {
            gameover = true;
        }
    }
    p2display.textContent = scorep2;
})

resett.addEventListener('click', reset)

maxpoint.addEventListener('change', function() {
    winpoint = parseInt(this.value)
    reset();
})

var audio = document.getElementById("backgroundAudio");
  audio.volume = 0.2; // Mengatur volume audio (0.0 - 1.0)

  // Fungsi untuk mengulang pemutaran audio setelah selesai
  audio.addEventListener("ended", function() {
    audio.currentTime = 0; // Mengatur waktu pemutaran kembali ke awal
    audio.play();
  });