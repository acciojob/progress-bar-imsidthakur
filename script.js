//your JS code here. If required.

const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 1;

prev.addEventListener("click",(e)=>{
	if(current == 1) return;
	if(current == 2)
	{
		prev.classList.add("disabled");
		e.target.disabled = true;
	}
	next.removeAttribute("disabled");

	next.classList.remove("disabled");
	e.target.disabled = false;

	const circle = document.getElementById("circle-" + current);
	current--;
	const line = document.getElementById("line-" + current);
	line.classList.remove("activeLine");
	circle.classList.remove("active");
})


next.addEventListener("click",(e)=>{
	if(current == 5) return;
	prev.classList.remove("disabled");
	prev.removeAttribute("disabled");
	e.target.disabled = false;

	if(current == 4)
	{ 
		next.classList.add("disabled");
		e.target.disabled = true;
	}
	const line = document.getElementById("line-" + current);
	current++;
	const circle = document.getElementById("circle-" + current);
	line.classList.add("activeLine");
	circle.classList.add("active");
})

