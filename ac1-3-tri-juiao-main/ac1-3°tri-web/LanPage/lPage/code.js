produto1 = document.getElementById('produto1');
produto2 = document.getElementById('produto2');
produto3 = document.getElementById('produto3');

function ytb() {
    window.location.href='https://www.youtube.com/@SimpsonGamer';
}

function insta() {
    window.location.href='https://www.instagram.com/oficialednaldopereira';
}

function rblx() {
    window.location.href='https://www.roblox.com/users/2678001507/profile';
}

function inicio() {
    document.getElementById('produto').style.display = 'none'
    document.getElementById('inicio').style.display = 'block'
}

function choose(produto) {
    switch (produto) {
        case 1:
            document.getElementById('nome').innerHTML = 'Abacaxi Xl 45 GB rtx 4090 pro max HD'
            document.getElementById('preview').src = '/ac1-3°tri-web/LanPage/lPage/abaca.png'
            break;
        case 2:
            document.getElementById('nome').innerHTML = 'Danone'
            document.getElementById('preview').src = '/ac1-3°tri-web/LanPage/lPage/danonaoGrosso.png'
            break;
         case 3:
            document.getElementById('nome').innerHTML = 'Paçoca Coletiva'
            document.getElementById('preview').src =  '/ac1-3°tri-web/LanPage/lPage/pacoca.png'
            break;
    
        default:
            break;
    }
    document.getElementById('quantidade').value = 0;
    document.getElementById('produto').style.display = 'block';
    document.getElementById('inicio').style.display = 'none';
}

function add() {
    quan = document.getElementById('quantidade');
    if (quan.value==''){
        quan.value=1;
    }
    else{
        quan.value=parseInt(quan.value)+1;
    }
    
}

function dim() {
    quan = document.getElementById('quantidade');
    if (parseInt(quan.value)>0){
        quan.value=parseInt(quan.value)-1;
    }
}

function heheBoy() {
    window.location.href='https://youtu.be/zw087wEq678?si=F335DFeo5BuZOC2l';
}