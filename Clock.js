const hourDiv = document.querySelector('.hour');
const minDiv = document.querySelector('.min');
const secDiv = document.querySelector('.sec');
const format = document.querySelector('.format');

const makeClcok=()=>{
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const hourRotate = 30 * hour + min/2;
    const minRotate = 6 * min;
    const secRotate = 6 * sec;
    hourDiv.style.transform = `rotate(${hourRotate}deg)`;
    minDiv.style.transform = `rotate(${minRotate}deg)`;
    secDiv.style.transform = `rotate(${secRotate}deg)`;

    if(hour > 12 ){
        format.innerHTML =hour + ":" + min + ":" + sec+ ' ' + 'PM';
    }else{
        format.innerHTML =hour + ":" + min + ":" + sec+ ' ' + 'AM';
    }

    if(sec < 10 ){
        format.innerHTML =hour + ":" + min + ":" + ('0'+sec)+ ' ' + 'PM';
    }
    if(min < 10 ){
        format.innerHTML =hour + ":" + ('0'+min) + ":" +sec+ ' ' + 'PM';
    }

    const btn = document.querySelector('.btn');

    btn.addEventListener('click',(e)=>{
        
    

    })
}
makeClcok();

setInterval(makeClcok,1000)

