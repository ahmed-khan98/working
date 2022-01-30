let showAbout=()=>
{
    let para= document.getElementById("about-para");
    para.innerHTML= `Universal Concept Skin Care & Hair Centreis the best hair transplant and skin care clinic in karachi. We are dedicated to the treatment of hair loss in men and women using the most advanced technologies. We are one of pioneer institute that offers variety of cosmetic services under one roof.
    <br> <br>Hair transplant surgery is performed using the Follicular Unit Transplantation (FUT) andFollicular Unit Extraction (FUE) techniques...that All hair transplant procedures are led by experienced and professional surgeon. We take pride in providing the highest level of treatment and care for our patients. `
}
let topbtn =document.getElementById("top");
let scroll=()=>{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topbtn.style.display = "block";
      } else {
        topbtn.style.display = "none";
      }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }