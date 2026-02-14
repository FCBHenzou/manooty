// mem_script.js
document.addEventListener('DOMContentLoaded', function(){
  const audio = document.getElementById('audio');
  const play = document.getElementById('playBtn');
  const pause = document.getElementById('pauseBtn');

  play.addEventListener('click', async function(){
    try { await audio.play(); } catch(e){ console.warn('play blocked', e); }
  });
  pause.addEventListener('click', function(){ audio.pause(); });

  // Timer since 2019-08-17
  function updateTimer(){
    const start = new Date('2019-08-17T00:00:00');
    const now = new Date();
    let diff = Math.max(0, now - start);
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const mins = Math.floor((diff / (1000*60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    document.getElementById('loveTimer').innerHTML = `We've been together for 💜<br>${days} days, ${hours} hrs, ${mins} mins, ${secs} secs 💜`;
  }
  setInterval(updateTimer, 1000);
  updateTimer();
});
