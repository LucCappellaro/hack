const katalscript = document.createElement('script'); 
katalscript.src = 'https://d2beun48pmgqbs.cloudfront.net/katal.flo.components.abbbd86b4836081e037a.min.js'; 
document.head.insertBefore(katalscript, document.getElementsByTagName('script')[0]);

const katalcss = document.createElement('link'); 
katalcss.rel = "stylesheet";
katalcss.href = 'https://d2beun48pmgqbs.cloudfront.net/katal.flo.components.7ab5eca7e6ecca63134f.css'; 
document.head.insertBefore(katalcss, document.getElementsByTagName('script')[0]);

const katalstyle = document.createElement('style'); 
katalstyle.innerHTML = ''
+'.kat-satisfaction-rating li {'
+'	float: left;'
+'	list-style-type: none;'
+'}'
+'.hmd2-emoji {'
+'	background:url(https://m.media-amazon.com/images/G/01/katal/hmd/hmdfaces.png);'
+'	height:34px;'
+'	width:35px;'
+'	display:block;'
+'	margin-right:.5rem;'
+'	cursor:pointer'
+'}'
+'.hmd2-emoji.hmd2-emoji-1 {background-position:197px -83px}'
+'.hmd2-emoji.hmd2-emoji-2 {background-position:157px -83px}'
+'.hmd2-emoji.hmd2-emoji-3 {background-position:117px -83px}'
+'.hmd2-emoji.hmd2-emoji-4 {background-position: 77px -83px}'
+'.hmd2-emoji.hmd2-emoji-5 {background-position: 37px -83px}'
+'.hmd2-emoji.hmd2-emoji-1:hover, .hmd2-emoji.hmd2-emoji-1:focus {background-position: 197px -43px;}'
+'.hmd2-emoji.hmd2-emoji-2:hover, .hmd2-emoji.hmd2-emoji-2:focus {background-position: 157px -43px;}'
+'.hmd2-emoji.hmd2-emoji-3:hover, .hmd2-emoji.hmd2-emoji-3:focus {background-position: 117px -43px;}'
+'.hmd2-emoji.hmd2-emoji-4:hover, .hmd2-emoji.hmd2-emoji-4:focus {background-position:  77px -43px;}'
+'.hmd2-emoji.hmd2-emoji-5:hover, .hmd2-emoji.hmd2-emoji-5:focus {background-position:  37px -43px;}'
;
document.head.insertBefore(katalstyle, document.getElementsByTagName('script')[0]);

const divBorder = document.createElement('div');
divBorder.style="position: fixed; bottom: 0px; right: 100px";
divBorder.innerHTML = ''
	+'<svg id="feedback" width="224" height="40">'
	+'	<rect x="2" y="2" width="220" height="36"  rx="4" ry="4" style="fill:transparent;stroke:gray;stroke-width:2" />'
	+'</svg>';
document.body.append(divBorder);

const divRating = document.createElement('div');
divRating.style="position: fixed; bottom: 7px; right: 100px";
divRating.innerHTML = ''
	+'<ul class="kat-satisfaction-rating kat-hmd-form-item-spacing">'
	+'	<li class="rating-1"><a tabindex="0" class="hmd-rating-item-icon hmd2-emoji hmd2-emoji-1" data-rating="1" aria-label="very unsatisfied"></a></li>'
	+'	<li class="rating-2"><a tabindex="0" class="hmd-rating-item-icon hmd2-emoji hmd2-emoji-2" data-rating="2" aria-label="unsatisfied"></a></li>'
	+'	<li class="rating-3"><a tabindex="0" class="hmd-rating-item-icon hmd2-emoji hmd2-emoji-3" data-rating="3" aria-label="neutral"></a></li>'
	+'	<li class="rating-4"><a tabindex="0" class="hmd-rating-item-icon hmd2-emoji hmd2-emoji-4" data-rating="4" aria-label="satisfied"></a></li>'
	+'	<li class="rating-5"><a tabindex="0" class="hmd-rating-item-icon hmd2-emoji hmd2-emoji-5" data-rating="5" aria-label="very satisfied"></a></li>'
	+'</ul>';
document.body.append(divRating);

const katal = document.createElement('kat-hmd'); 
katal.locale="en-US";
katal.title="Feedback";
katal.mode="modal";
katal.rating="0";
katal.subject="other";
katal.addEventListener("submit", ()=>{
	alert('POST to API'
		+'\nRating: '+katal.rating
		+'\nPage: '+window.location
	);
});
document.body.append(katal);

for (const li of divRating.firstChild.childNodes ) {
	li.addEventListener('click', e => popup(li.className));	
	li.addEventListener('keydown', e => {if(e.key === "Enter") popup(li.className);});	
}

function popup(id) {
	katal.rating=id.slice(-1); 
	katal.visible=true;
}
