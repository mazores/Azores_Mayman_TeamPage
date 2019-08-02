(() => {
	console.log("working!");

 	var buttonMikka = document.querySelector("#button-mikka");
	var bioMikka = document.querySelector("#bio-mikka");
	var buttonKateh = document.querySelector("#button-kateh");
	var bioKateh = document.querySelector("#bio-kateh");
	var fromMikka = document.querySelector(".from-mikka");
	var fromKateh = document.querySelector(".from-kateh");

	function showMikka() {
		console.log("Mikka!");
		bioMikka.classList.toggle("slideToggle");
	}

	function showKateh() {
		console.log("Kateh!");
		bioKateh.classList.toggle("slideToggle");
	}

	function homefromMikka() {
		console.log("Back home!");
		bioMikka.classList.toggle("slideToggle");
	}

	function homefromKateh() {
		console.log("Back home!");
		bioKateh.classList.toggle("slideToggle");
	}

	buttonMikka.addEventListener("click", showMikka);
	buttonKateh.addEventListener("click", showKateh);
	fromMikka.addEventListener("click", homefromMikka);
	fromKateh.addEventListener("click", homefromKateh);
})();