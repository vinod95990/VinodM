'use strict'

const allslide=document.querySelectorAll('.slide');



const btn=document.querySelector('.btn');

const lenslide=allslide.length;

let cslide=1;

const btncontainer=document.querySelector('.dotscontainer');



for(let i=0;i<lenslide;i++){
btncontainer.insertAdjacentHTML('beforeend',`<div class="dots dot-${i}" data-tag-number=${i}></div>`);
}



document.querySelector('.dots').classList.add('activedot');

const alldots=document.querySelectorAll('.dots');





const activedot=function(x){
    alldots.forEach(function(v){
        v.classList.remove('activedot');
    });
    document.querySelector(`.dot-${x}`).classList.add('activedot');
}

alldots.forEach(function(v){
    
    v.addEventListener('click',function(){
        activedot(Number(v.dataset.tagNumber));
        allslide.forEach(function(slide,i){
            slide.style.transform=`translateX(${100*(i-(Number(v.dataset.tagNumber)))}%)`;

        });

        cslide=Number(v.dataset.tagNumber)+1;
        
    }); // (Number(v.dataset.tagNumber))
});


document.querySelector('body').addEventListener('keyup',function(e){
 

    if(e.code=='ArrowRight')
    {
        if(cslide==1)
        {
            
            allslide.forEach(function(slide,i){
                slide.style.transform=`translateX(${100*(i-(Number(cslide)))}%)`;

            });
            activedot(cslide);
            cslide=2;
            
        }
        else if(cslide==2)
        {
            allslide.forEach(function(slide,i){
                slide.style.transform=`translateX(${100*(i-(Number(cslide)))}%)`;

            });
           activedot(cslide);
            cslide=3;
           
        }
        else{
            allslide.forEach(function(slide,i){
                slide.style.transform=`translateX(${(100*i)}%)`;

            });
           activedot(0);
            cslide=1;
           
        }

        
    }
    else if(e.code=='ArrowLeft')
    {
        if(cslide==1)
        {
            
          return;
            
        }
        else if(cslide==2)
        {
            allslide.forEach(function(slide,i){
                slide.style.transform=`translateX(${100*i}%)`;

            });
           activedot(0);
            cslide=1;
           
        }

        else{
            // allslide[0].style.transform=`translateX(-200%)`;
            allslide[0].style.transform=`translateX(-100%)`;
            allslide[1].style.transform=`translateX(0%)`;
            allslide[2].style.transform='translateX(100%)';
            activedot(1);
            cslide=2;
        }
    }
});


// navigation

const nav=document.querySelector('.nav-description').children;

for(let i=0;i<nav.length;++i)
{
    nav[i].addEventListener('click',function(e){

        if(e.target.textContent=='About')
        {
            if(cslide==1)
            {
                return;
            }
            allslide.forEach(function(slide,i){
                slide.style.transform=`translateX(${100*i}%)`;

            });
           activedot(0);
            cslide=1;
           
        }
        else if(e.target.textContent=='Projects')
        {
            if(cslide==2)
            {
                return;
            }
            allslide.forEach(function(slide,i){
                slide.style.transform=`translateX(${-100+100*(i)}%)`;

            });
           activedot(1);
            cslide=2;
        }
        else{
            if(cslide==3)
            {
                return;
            }
            allslide[0].style.transform=`translateX(-200%)`;
            allslide[1].style.transform=`translateX(-100%)`;
            allslide[2].style.transform=`translateX(0%)`;
            cslide=3;
            activedot(2);
            
        }

        
    })
}