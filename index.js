// ----------------------------------------------------------------toggle-theme-mode section----------------------------------------------------------------

const theme1 = document.getElementById("theme1");
const theme2 = document.getElementById("theme2");
const theme3 = document.getElementById("theme3");


arr = [];
arr.push(theme1, theme2, theme3);

arr.forEach(function (theme) {
  theme.addEventListener("click", function () {


    if (theme.id === "theme1") {

      changeTheme(theme.id)
      changethemebtn(theme.id);

      document.getElementById("theme1").classList.add("theme1-ball1");
      document.getElementById("theme2").classList.remove("theme2-ball2");
      document.getElementById("theme3").classList.remove("theme3-ball3");


    } else if (theme.id === "theme2") {
      changeTheme(theme.id)
      changethemebtn(theme.id);

      document.getElementById("theme2").classList.add("theme2-ball2");
      document.getElementById("theme1").classList.remove("theme1-ball1");
      document.getElementById("theme3").classList.remove("theme3-ball3");


    }else if (theme.id ==="theme3"){
       changeTheme(theme.id)
       changethemebtn(theme.id);

       document.getElementById("theme3").classList.add("theme3-ball3");
       document.getElementById("theme1").classList.remove("theme1-ball1");
       document.getElementById("theme2").classList.remove("theme2-ball2");
      
    }
  });
});













// --------------------------------------------------------function  changing themes button section  --------------------------------------------------------------------------------------------------------------------
let themesNumber = ["theme1", "theme2", "theme3"];
let themesToShow =[];
let themesNotToShow =[];

const btn = document.querySelectorAll("button");
arrBtn = [];

btn.forEach(function (item) {
  arrBtn.push(item.id);
});



const changethemebtn = function (theme) {
       themesToShow =[];
       themesNotToShow =[];
      themesNumber.forEach(function(number){
      if(number === theme){
        themesToShow.push(number)
      }else{
        themesNotToShow.push(number)
      }
    })
  
  
  arrBtn.forEach(function (btn) {
    if (btn === "del") {
      document.getElementById(`${btn}`).classList.add(`${themesToShow[0]}-btn-del`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[0]}-btn-del`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[1]}-btn-del`);
    } else if (btn === "reset") {
      document.getElementById(`${btn}`).classList.add(`${themesToShow[0]}-btn-reset`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[0]}-btn-reset`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[1]}-btn-reset`);
    } else if (btn === "equal") {
      document.getElementById(`${btn}`).classList.add(`${themesToShow[0]}-btn-equal`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[0]}-btn-equal`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[1]}-btn-equal`);
    } else {
      document.getElementById(`${btn}`).classList.add(`${themesToShow[0]}-btn`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[0]}-btn`);
      document.getElementById(`${btn}`).classList.remove(`${themesNotToShow[1]}-btn`);
    }
   }
  )
};

// --------------------------------------------------------function  changing rest of  section  --------------------------------------------------------------------------------------------------------------------

let toShow = [];
let notToShow = [];

const changeTheme =function(theme){
  toShow =[];
  notToShow =[];
 themesNumber.forEach(function(number){

 if(number === theme){
  toShow.push(number)
 }else{
  notToShow.push(number)
 }

  document.getElementById("logo").classList.add(`${toShow[0]}`)
  document.getElementById("logo").classList.remove(`${notToShow[0]}`)
  document.getElementById("logo").classList.remove(`${notToShow[1]}`)

  document.getElementById("theme-text").classList.add(`${toShow[0]}`)
  document.getElementById("theme-text").classList.remove(`${notToShow[0]}`)
  document.getElementById("theme-text").classList.remove(`${notToShow[1]}`)

  document.getElementById("number-text-toggle").classList.add(`${toShow[0]}`)
  document.getElementById("number-text-toggle").classList.remove(`${notToShow[0]}`)
  document.getElementById("number-text-toggle").classList.remove(`${notToShow[1]}`)

  document.body.classList.add(`${toShow[0]}`);
  document.body.classList.remove(`${notToShow[0]}`);
  document.body.classList.remove(`${notToShow[1]}`);


  document.getElementById("bottom-screen").classList.add(`${toShow[0]}-bottom-screen`);
  document.getElementById("bottom-screen").classList.remove(`${notToShow[0]}-bottom-screen`);
  document.getElementById("bottom-screen").classList.remove(`${notToShow[1]}-bottom-screen`);

  document.getElementById("toggle").classList.add(`${toShow[0]}-toggle`);
  document.getElementById("toggle").classList.remove(`${notToShow[0]}-toggle`);
  document.getElementById("toggle").classList.remove(`${notToShow[1]}-toggle`);

  document.getElementById("top-screen").classList.add(`${toShow[0]}-top-screen`);
  document.getElementById("top-screen").classList.remove(`${notToShow[0]}-top-screen`);
  document.getElementById("top-screen").classList.remove(`${notToShow[1]}-top-screen`);





 })
};


















// ----------------------------------------------------------------calculator section  ----------------------------------------------------------------

const btnclick = document.querySelectorAll(".btncal")

let sum = 0;
let calString1 = "";

btnclick.forEach(function (btn) {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  let value = event.target.id;
  if (value === "equal") {
    if(sum!== 0){
      sum = eval(sum)
      document.getElementById("top-content").innerHTML = sum
    }else{
      sum = eval(calString1);
      document.getElementById("top-content").innerHTML = sum;
    }
   
  
    
  } else if (value === "del") {
    if (sum !== 0) {
      calString1 = "";
      document.getElementById("top-content").innerHTML = "";
    } else {
      calString1 = calString1.slice(0, -1);
      document.getElementById("top-content").innerHTML = calString1;
    }
  } else if (value === "reset") {
    sum=0
    calString1 = "";
    document.getElementById("top-content").innerHTML = "";
  } else if (value === "x") {
    if(sum!==0){
      let mutiple = "*";
      value = mutiple;
      sum +=value
    }else{
      let mutiple = "*";
      value = mutiple;
      calString1 += value;
      document.getElementById("top-content").innerHTML = calString1;
    }
    
  } else {
    if(sum!== 0 ){
    sum +=value
    }else{
    calString1 += value;
    document.getElementById("top-content").innerHTML = calString1;
    }
    
  }
}

const replacedmutiple = function (string) {
  for (i = 0; i < string.length; ++i) {
    if (string[i] === "x") {
      let newString = string.replace(/x/g, "*");
    } else {
      let newString = "";
    }
  }
};
