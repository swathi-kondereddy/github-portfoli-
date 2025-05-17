/*========================================toggle icon navbar===============*/
let nemuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
/*========================================scroll section active link ===============*/
let sections = document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        
         if(top >= offset && top <  offset + height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id  + ']').classList.add('active');
            });
         };
    });

    /*========================================stickly navbar ===============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*======================================== remove toggle icon and navbar ===============*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const emailSubject = document.getElementById('emailSubject').value;
    const message = document.getElementById('message').value;

    if (!fullName || !email || !mobileNumber || !emailSubject || !message) {
        alert('Please fill in all fields.');
        event.preventDefault();
    }
});

