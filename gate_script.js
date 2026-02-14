// gate_script.js
document.addEventListener('DOMContentLoaded', function(){
  const gate = document.getElementById('gate');
  const pwd = document.getElementById('pwd');
  const unlock = document.getElementById('unlock');
  const msg = document.getElementById('msg');
  const flowerStep = document.getElementById('flowerStep');
  const roseBtn = document.getElementById('roseBtn');
  const flowerMsg = document.getElementById('flowerMsg');
  const toMemories = document.getElementById('toMemories');

  unlock.addEventListener('click', function(){
    if((pwd.value||'').trim().toLowerCase() === 'lolo'){
      gate.style.display = 'none';
      flowerStep.classList.remove('hidden');
    } else {
      msg.textContent = 'Wrong password — try again 💌';
      pwd.value = '';
      pwd.focus();
    }
  });

  roseBtn.addEventListener('click', function(){
    flowerMsg.innerHTML = `أنتِ ظلّي وخِلّي ورفيقتي،<br>
أنتِ الأمان الذي أُحارب به خوفي.<br>
وكيف يكون الحديث عن الحُبّ،<br>
وأنتِ الحديث، وأنتِ الحُبّ؟<br>
لا أرغب سوى أن نُكمل العُمر سويًّا،<br>
بشقائه وراحته، بحزنه ومسرّاته ♥️🦋✨`;
    toMemories.classList.remove('hidden');
  });

  toMemories.addEventListener('click', function(){
    // navigate to memories page
    window.location.href = 'memories.html';
  });

  pwd.addEventListener('keydown', function(e){
    if(e.key === 'Enter') unlock.click();
  });
});
