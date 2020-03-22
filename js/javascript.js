banner(){
    let container=document.getElementsByClassName('banner')[i];
    if(i==0){
        container[1].style.display='none';
        container[2].style.display='none';
        container[3].style.display='none';
    }
    if(i==1){
        container[0].style.display='none';
        container[2].style.display='none';
        container[3].style.display='none';
    }
    if(i==2){
        container[1].style.display='none';
        container[0].style.display='none';
        container[3].style.display='none';
    }
    if(i==3){
        container[1].style.display='none';
        container[2].style.display='none';
        container[4].style.display='none';
    }
    if(1==4){
        i=-1;
    }
    i++;
}
    
