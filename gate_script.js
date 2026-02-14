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
    if((pwd.value||'').trim().toLowerCase() === 'manoshty'){
      gate.style.display = 'none';
      flowerStep.classList.remove('hidden');
    } else {
      msg.textContent = 'Wrong password — try again 💌';
      pwd.value = '';
      pwd.focus();
    }
  });

roseBtn.addEventListener('click', function(){
    flowerMsg.innerHTML = `أنا بحب كل التفاصيل اللي ما بينّا… 🤍✨<br>
اللحظات اللي بنفهم بعض فيها من غير كلام، والرغي اللي ملوش لازمة بس ما ينفعش يعدّي يوم من غيره، ضحكتنا اللي بتيجي فجأة، وصياحنا وإحنا بنلعب ببجي وبنصحي البيت كله 😂😂😂<br>
سكوتنا الطويل اللي بيبقى أصدق من أي كلام، خناقاتنا الصغيرة اللي بترجعنا أقرب 😤🤝، والحاجات اللي الناس ممكن تسميها عادية… وأنا عمري ما حسّيتها كده 🌙🤍<br>
بالرغم إني مدتكيش حقك في الحب، وإنتِ حرفيًا تستحقي حب بجد وحد يحبك من قلبه، لأنك شخص نظيف ولطيف وزي القمر 🤍<br>
وأتمنى تفضلي موجودة معايا، كأني عمر أو مي…<br>
لكن لكن لكن…<br>
وجودك في حياتي راحة شبه الأمان… كأني برجع بيتي 🤍<br>
قريبة لقلبي كإنك جزء مني، وصاحبة عمري قبل ما تكوني أي مسمّى تاني 🤍✨`;
    
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
