// Project button alert

function projectAlert(){
alert("Project will open soon!");
}


// Contact form message

document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

this.reset();

});


// Smooth scrolling for navbar

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior:'smooth'
});

});

});
