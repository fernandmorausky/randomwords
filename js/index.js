
  
  
  var n ; 
  var $word1 = document.body.children[0].children[0].children[1];
  var $word2 = document.body.children[0].children[0].children[2];
  var words=[];
  var countWords=0;
  setInterval(function(){
    $word1.innerHTML= words[countWords];
    $word2.innerHTML=  words[countWords];
    countWords++;
    if (countWords>words.length -1) {
      countWords=0;
    };
  },2000);

  function postWord () {
    words=[];
    var word=document.getElementById('input').value
    word=word.split('');
    
    n =  word.length
    Permutaciones(word)




      //var word = words[Math.floor(Math.random() * words.length)] + "!";
      
    }

function   Permutaciones( cad,  l=0) {   
  var c;    
  /* variable auxiliar para intercambio */   
  var i, j;  
  /* variables para bucles */   
    
  for(i = 0; i < n-l; i++)   {      
    if(n-l > 2) Permutaciones(cad, l+1);      
    else {
      var length=words.length
        // words[length]=(cad.toString().replace(new RegExp(",",'g'),"")).replace("0","");
        words.push((cad.toString().replace(new RegExp(",",'g'),"")).replace("0",""));
        $word1.innerHTML= (cad.toString().replace(new RegExp(",",'g'),"")).replace("0","");
        $word2.innerHTML= (cad.toString().replace(/,/g,"")).replace("0","");
    }//alert(cad);      
    /* Intercambio de posiciones */      
    c = cad[l];      
    cad[l] = cad[l+i+1];      
    cad[l+i+1] = c;      
    if(l+i == n-1)      
    {         
      for(j = l; j < n; j++) 
        cad[j] = cad[j+1];         
      cad[n] = 0;      
    }
  } 
} 
