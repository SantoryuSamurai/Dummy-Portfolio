const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector('#h3').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },20);
}

document.querySelector('#home').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },40);
}

document.querySelector('#explore').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },20);
}

document.querySelector('#contact').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },20);
}
document.querySelector('#DevOps').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },20);
}
document.querySelector('#C').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },40);
}
document.querySelector('#html').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },40);
}
document.querySelector('#css').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },50);
}
document.querySelector('#skills').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },20);
}
document.querySelector('.Twitter').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },30);
}
document.querySelector('.Instagram').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },20);
}
document.querySelector('.Github').onmouseover = event => {
  let iterations = 0;
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("").map((letter, index) => {
    if(index < iterations) {
      return event.target.dataset.value[index];
    }
    
    return letters[Math.floor(Math.random()* 26)]}).join("");
  
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);
    iterations += 1 / 3;
  },30);
}

