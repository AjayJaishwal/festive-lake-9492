// abstracting the elements of Automatic  carosel
const slideContainer = document.querySelector('.main-img');
const slide = document.querySelector('.slides');
let slides = document.querySelectorAll('.slide');
const nextBtn= document.querySelector('.next-btn');
const prevBtn= document.querySelector('.prev-btn');

// abstracting the elements of caresol 1 
let items= document.querySelectorAll('.item1');

// abstracting the elements of caresol 2
let items2= document.querySelectorAll('.item2');

// abstracting the elements of caresol 3
let items3= document.querySelectorAll('.item3');

// abstracting the elements of caresol 4
let items4= document.querySelectorAll('.item4');

// abstracting the elements of caresol 5
let items5= document.querySelectorAll('.item5');

// abstracting the elements of caresol 6
let items6= document.querySelectorAll('.item6');

// initial slide count for auto carosel
let index =1;
// initial slide count for caresol 1
let count=0;
//initial slide count for caresol 2
let countTwo=0;
//initial slide count for caresol 3
let countThree=0;
//initial slide count for caresol 4
let countFour=0;
//initial slide count for caresol 5
let countFive=0;
//initial slide count for caresol 5
let countSix=0;

// cloning the first slide  of auto carosel  
const firstClone = slides[0].cloneNode(true);

// cloning the last slide of auto carosel
const lastClone = slides[slides.length-1].cloneNode(true);

// assigning the id to the clone slides
firstClone.id='first-clone';
lastClone.id='last-clone';

// appending the cloned slides into original slides 
slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

// rearranging the slides 
slide.style.transform=`translateX(${-slideWidth*index}px)`;

// to make the slides moves automatically
const startSlide =()=>{
  setInterval(()=>{
    slideMoves()
  },5000); 
 } 
function slideMoves(){
  let slides = document.querySelectorAll('.slide');
  if(index>=slides.length-1) return;
  index ++;
slide.style.transform=`translateX(${-slideWidth*index}px)`;
// to make the transition smooth 
slide.style.transition ='.7s';
}

  // to make the transition infinite
  slide.addEventListener('transitionend',()=>{
    let slides = document.querySelectorAll('.slide');
    if(slides[index].id===firstClone.id){
      slide.style.transition = 'none';
      index=1;
      slide.style.transform=`translateX(${-slideWidth*index}px)`;
    }
    if(slides[index].id===lastClone.id){
      slide.style.transition='none';
      index=slides.length-2;
      slide.style.transform=`translateX(${-slideWidth*index}px)`;
    }
  })

  // changing the slides with help next buttons
nextBtn.addEventListener('click',()=>{
  slideMoves()
})

// changing the slides with help of previous slides  
prevBtn.addEventListener('click',()=>{
  if(index<=0) return;
    index --;
  slide.style.transform=`translateX(${-slideWidth*index}px)`;
  // to make the transition smooth 
  slide.style.transition ='.7s';
})

// to change the slides of carosel-1 with buttons
items.forEach(
  (items,index)=>{
    items.style.left=`${index*100}%`
  }
)
const goNext=()=>{
  if(count>=items.length-5)return;
  count ++
  slideImage()
}
const goPrev=()=>{
  if(count<=0) return;
  count --
  slideImage()
}
const slideImage=()=>{
  items.forEach(
    (items)=>{
      items.style.transform=`translateX(-${count*100}%)`
      items.style.transition ='.7s'
    }
  )
}
// to change the slides of carosel-2 with buttons
items2.forEach(
  (items2,index)=>{
    items2.style.left=`${index*100}%`
  }
)
const goNext2=()=>{
  if(countTwo>=items2.length-6)return;
  countTwo ++
  slideImage2()
}
const goPrev2=()=>{
  if(countTwo<=0) return;
  countTwo --
  slideImage2()
}
const slideImage2=()=>{
  items2.forEach(
    (items2)=>{
      items2.style.transform=`translateX(-${countTwo*100}%)`
      items2.style.transition ='.7s'
    }
  )
}
// to change the slides of carosel-3 with buttons
items3.forEach(
  (items3,index)=>{
    items3.style.left=`${index*100}%`
  }
)
const goNext3=()=>{
  if(countThree>=items3.length-3)return;
  countThree ++
  slideImage3()
}
const goPrev3=()=>{
  if(countThree<=0) return;
  countThree --
  slideImage3()
}
const slideImage3=()=>{
  items3.forEach(
    (items3)=>{
      items3.style.transform=`translateX(-${countThree*100}%)`
      items3.style.transition ='.7s'
    }
  )
}
// to change the slides of carosel-4 with buttons
items4.forEach(
  (items4,index)=>{
    items4.style.left=`${index*100}%`
  }
)
const goNext4=()=>{
  if(countFour>=items4.length-6)return;
  countFour ++
  slideImage4()
}
const goPrev4=()=>{
  if(countFour<=0) return;
  countFour --
  slideImage4()
}
const slideImage4=()=>{
  items4.forEach(
    (items4)=>{
      items4.style.transform=`translateX(-${countFour*100}%)`
      items4.style.transition ='.7s'
    }
  )
}
// to change the slides of carosel-5 with buttons
items5.forEach(
  (items5,index)=>{
    items5.style.left=`${index*100}%`
  }
)
const goNext5=()=>{
  if(countFive>=items5.length-2) return;
  countFive ++
  slideImage5()
}
const goPrev5=()=>{
  if(countFive<=0) return;
  countFive --
  slideImage5()
}
const slideImage5=()=>{
  items5.forEach(
    (items5)=>{
      items5.style.transform=`translateX(-${countFive*100}%)`
      items5.style.transition ='.7s'
    }
  )
}
// to change the slides of carosel-6 with buttons
items6.forEach(
  (items6,index)=>{
    items6.style.left=`${index*100}%`
  }
)
const goNext6=()=>{
  if(countSix>=items6.length-4) return;
  countSix ++
  slideImage6()
}
const goPrev6=()=>{
  if(countSix<=0) return;
  countSix --
  slideImage6()
}
const slideImage6=()=>{
  items6.forEach(
    (items6)=>{
      items6.style.transform=`translateX(-${countSix*100}%)`
      items6.style.transition ='.7s'
    }
  )
}

// calling the function of auto slide 
startSlide();