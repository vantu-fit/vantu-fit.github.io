document.addEventListener("DOMContentLoaded",function(){
    var result=document.querySelectorAll('li');
    var button=document.querySelector('.rand');
  
    
    button.addEventListener('click',function(){
        for ( var i=0;i<3;i++) {
            for (var j=1;j<=6;j++){
                var rev="add"+j;
                result[i].classList.remove(rev);
            }    
        }
        
        for ( var i=0;i<3;i++) {
            var cla="add"+ (1+Math.floor(Math.random() * 6));
            result[i].classList.add(cla);
        }
    })
})