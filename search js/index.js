const input = document.getElementById('search1');

console.log(input);

input.addEventListener('keyup',search);
function search(){
  
  const li=document.getElementsByTagName('li');
  const key = input.value;
  for(i=0;i<li.length;i++){
    if(li[i].innerText.toLowerCase().includes(key)){

        li[i].style.display="";
    }else{
        li[i].style.display="none";
    }
  }
   
}