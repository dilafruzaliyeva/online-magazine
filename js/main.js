const initSlider =()=>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".scroll .slide-button");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}

window.addEventListener("load", initSlider);


const initSlider2 =()=>{
    const imageList = document.querySelector(".category-item .category-list");
    const slideButtons = document.querySelectorAll(".scroll2 .slide-button2");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide2" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}
window.addEventListener("load", initSlider2);

const initSlider3 =()=>{
    const imageList = document.querySelector(".slider-our-product .product-list");
    const slideButtons = document.querySelectorAll(".scroll3 .slide-button3");

    slideButtons.forEach(button =>{
        button.addEventListener("click", ()=>{
            // console.log(button);
            const direction = button.id === "prev-slide3" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
}
window.addEventListener("load", initSlider3);


// document.querySelector('#signup-btn').addEventListener('click', function(){
//     myText();
//     Pass();
//     myEmail();
// });

// function myText(){
//     let message, name;
//     let errorElement = document.getElementById('name');
//     message = document.getElementById('error1 ');
//     name = document.getElementById('name').value;

//     try{
//         if(name == "") {
//             errorElement.classList.remove('valid');
//             errorElement.classList.add('error');
//             throw 'bosh'
//         }
//         if(name.length > 0){
//             errorElement.classList.remove('error');
//             errorElement.classList.add('valid'); 
//             message.innerHTML = '';
//         }
//     }catch(e){
//         message.innerHTML = 'Qiymat' + e
//     }

// };

// function myEmail(){
//     let message, email;
//     let errorElement = document.getElementById('email');
//     message = document.getElementById('error2 ');
//     email = document.getElementById('email').value;

//     try{
//         if(email == "") {
//             errorElement.classList.remove('valid');
//             errorElement.classList.add('error');
//             throw 'bosh'
//         }
//         if(email.length > 0){
//             errorElement.classList.remove('error');
//             errorElement.classList.add('valid'); 
//             message.innerHTML = '';
//         }
//     }catch(e){
//         message.innerHTML = 'Qiymat' + e
//     }

// };

// function Pass(){
//     let message, password;
//     let errorElement = document.getElementById('password');
//     message = document.getElementById('error3 ');
//     password = document.getElementById('password').value;

//     try{
//         if(password == "") {
//             errorElement.classList.remove('valid');
//             errorElement.classList.add('error');
//             throw 'bosh'
//         }
//         if(password.length > 0){
//             errorElement.classList.remove('error');
//             errorElement.classList.add('valid'); 
//             message.innerHTML = '';
//         }
//     }catch(e){
//         message.innerHTML = 'Qiymat' + e
//     }

// };