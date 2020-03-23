let i=0;
console.log(i);

function banner(){
    let container=document.getElementsByClassName('banner');
    console.log(i);
    for (let index = 0; index < container.length; index++) {
        const element = container[index];
        element.style.display='none'
    }

    if(i==0){
        container[0].style.display='flex';
    }
    if(i==1){
        container[1].style.display='flex';
      
    }
    if(i==2){
        container[2].style.display='flex';
    }
    if(i==3){
        container[3].style.display='flex';
    }
    if(i==4){
        i=0;
    }
}

function increment(){
    i++
    banner()
    console.log(i);
}

function decrement(){
    i--
    banner();
    console.log(i);
}
    









