// calling by id 
let $ = name => document.getElementById(name);

$('profile').addEventListener('click' , function (){

    // if window width is 1010px meaning don't show modal 
    if(window.innerWidth < 1011){
        return ;
    }

    let showModal = $('content-profile') ;
    if(showModal.dataset.modal == "false"){
        showModal.style.visibility = "visible";
        showModal.dataset.modal = 'true' ;
    }else{
        showModal.style.visibility = "hidden";
        showModal.dataset.modal = 'false' ;
    }
})



$('closeNav').addEventListener('click' , function (){
    $('navbar').style.right = '-50rem';
});

$('show_nav').addEventListener('click' , function (){
    $('navbar').style.right = 0 ;
})