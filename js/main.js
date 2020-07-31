(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button');

  function playAudio() {
    document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
    document.querySelector("#typelayout").classList.add('container-turn');
    document.querySelector(".freddie-svg").classList.add('zoom-freddie');

    audio.play();
  }


  playButton.addEventListener("click", playAudio);

})();
