const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

var arr = ["https://wallpapercave.com/wp/wp4937436.jpg",
  "https://i.pinimg.com/736x/2f/7a/81/2f7a814ccf09bab9a2ccd13f6d627e5e.jpg",
  "https://e0.pxfuel.com/wallpapers/143/970/desktop-wallpaper-portrait-nature-portrait-thumbnail.jpg",
  "https://e1.pxfuel.com/desktop-wallpaper/718/392/desktop-wallpaper-nature-portrait-portrait-natural-thumbnail.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFphNl3Fc7ffPSnbgUkCV_hjMre0cIN3ZJuA&s"];

let move = document.querySelector("#heading");
var body = document.querySelector("#main");
move.addEventListener("mousemove",
  throttleFunction((details) => {

      let newDiv = document.createElement('div');
      newDiv.classList.add("addimage");
      console.log(newDiv);
      body.appendChild(newDiv);
      newDiv.style.top = details.clientY + 'px';
      newDiv.style.left = details.clientX + 'px';
      let r= Math.floor(Math.random() * 2);
      if(r===0){
          newDiv.style.transform = "rotate(5deg)";
      } else{
          newDiv.style.transform = "rotate(355deg)";
      }

      let img= document.createElement('img');
      img.classList.add("addimage-img");
      let n = Math.floor(Math.random() * arr.length);
      console.log(n);

      img.setAttribute("src", arr[n]);
      newDiv.appendChild(img);

      
      setTimeout(()=>{
          newDiv.remove();

      },800);  

          
  },200)
);

let galarr=[["pics/2_1.jpg",
  "pics/2_2.jpg",
  "pics/2_3.jpg","pics/2_4.jpg"],
   ["pics/3_1.jpg",
    "pics/3_2.jpg",
    "pics/3_3.jpg",
    "pics/3_4.jpg"
   ]]
let btn = document.querySelector("#Viewbtn");
let mainGal = document.querySelector("#mainGal");
let g=-1;
btn.addEventListener("click",()=>{
  g++;
  if(g<2){
    
  let gal = document.createElement('div');
  gal.classList.add("gallery1");
  mainGal.appendChild(gal);

  requestAnimationFrame(() => {
    gal.classList.add("show");
  });

  for(let i=0;i<=3;i++){
  let img= document.createElement('img');
  img.setAttribute("src", galarr[g][i]);
  img.classList.add("images");
  gal.appendChild(img);
  
  
  img.addEventListener("click", () => {
    document.getElementById("package").scrollIntoView({ behavior: "smooth" });
  });
  }

  if(g==1){
    document.querySelector("#pbtn").innerText="View Less";

  }

  }

  let galremove = document.querySelectorAll("gallery1");

  if (g == 2) {
    let galremove = document.querySelectorAll(".gallery1");
    galremove.forEach(gallery => {
      gallery.classList.remove("show");
      gallery.classList.add("hide");

      // After the fade-out transition, remove the element
      gallery.addEventListener('transitionend', () => {
        gallery.remove();
      }, { once: true });
    });

    g = -1;
    document.querySelector("#pbtn").innerText = "View More"; // Reset button text
    document.getElementById('gal').scrollIntoView({});
  }
});


document.querySelectorAll('.images').forEach(image => {
  image.addEventListener('click', () => {
      // Scroll to the section with ID #contact
      document.getElementById('package').scrollIntoView({});
  });
});

document.querySelectorAll('#book').forEach(book => {
  book.addEventListener('click', () => {
      // Scroll to the section with ID #contact
      document.getElementById('hire').scrollIntoView({});
  });
});

let submit = document.querySelector("#submit");
let names = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let thankyou = document.querySelector("#thank-you");
let hire = document.querySelector("#hide-form");
submit.addEventListener("click", (event)=>{
  if(names.value!="" && email.value!="" && phone.value!=""){
    event.preventDefault();
    hire.style.display = "none";
    thankyou.style.display = "block";
  }
});