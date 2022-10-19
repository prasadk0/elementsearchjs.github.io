const input = document.getElementById('search1');



input.addEventListener('keyup',search);
function search(){
  
  const li=document.getElementsByTagName('li');
  const key = input.value;
   const rev=key.toLowerCase();
  for(i=0;i<li.length;i++){
    if(li[i].innerText.toLowerCase().includes(rev)){

        li[i].style.display="";
    }else{
        li[i].style.display="none";
    }
  }
   
}
