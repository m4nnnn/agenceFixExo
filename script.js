// Minimal lightbox modal (few lines)
document.addEventListener('DOMContentLoaded', function(){
	console.log('lightbox script: DOMContentLoaded');
	try{
		const lightbox = document.getElementById('lightbox');
		console.log('lightbox element found:', !!lightbox);
		if(!lightbox) return;
		const imgEl = lightbox.querySelector('.lightbox-img');

		document.addEventListener('click', (e)=>{
			const trigger = e.target.closest('.lightbox-trigger');
			if(trigger){
				console.log('lightbox open trigger', trigger);
				imgEl.src = trigger.src || trigger.querySelector('img')?.src || '';
				imgEl.alt = trigger.alt || trigger.querySelector('img')?.alt || '';
				lightbox.classList.add('show');
				lightbox.setAttribute('aria-hidden','false');
				return;
			}

			if(e.target.closest('.lightbox-close')){
				console.log('lightbox close button clicked');
				lightbox.classList.remove('show');
				lightbox.setAttribute('aria-hidden','true');
				imgEl.src = '';
				return;
			}

			if(lightbox.classList.contains('show') && !e.target.closest('.lightbox-inner')){
				console.log('lightbox overlay clicked, closing');
				lightbox.classList.remove('show');
				lightbox.setAttribute('aria-hidden','true');
				imgEl.src = '';
				return;
			}
		});

		document.addEventListener('keydown', (e)=>{
			if(e.key === 'Escape' && lightbox.classList.contains('show')){
				console.log('lightbox closed by Escape');
				lightbox.classList.remove('show');
				lightbox.setAttribute('aria-hidden','true');
				imgEl.src = '';
			}
		});

	}catch(err){
		console.error('lightbox script error', err);
	}
});

