const button = document.querySelector('.submit_btn');
const emailDiv = document.querySelector('.email');
let icon = document.querySelector('.error-icon');
let outline = document.querySelector('.email-input');
let submit = document.querySelector('.submit_btn');
icon.style.display = 'none';
let x = window.matchMedia('(max-width:769px)');


button.addEventListener('click', validateEntry);


    function validateEntry(e) {
      
      const email = document.querySelector('.email-input');
      const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
      if(!email.value || !re.test(email.value)){
        errorMessage();
      } else{
        successMessage();
      }
      
      e.preventDefault();

      
    }

    function errorMessage(){
      icon.style.display = 'inline-block';
      submit.style.background = 'linear-gradient(135deg,hsl(0, 0%, 100%),hsl(0, 80%, 86%))';          
      outline.style.outline = '2px solid hsl(0, 93%, 68%)';         
      var node= document.createElement('div');
      node.className = "message";
      var errorMessage = document.createTextNode("Please enter a valid email address");
      node.appendChild(errorMessage);
      var parent = emailDiv;
      parent.appendChild(node);

      /*setTimeout(function(){ parent.removeChild(node) }, 3000);*/
      setTimeout(function(){ icon.style.display = 'none'; }, 3000);
      setTimeout(function(){submit.style.background ='linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))'},3000);    
    }

    function successMessage(){
      var node= document.createElement('div');
      node.className = "message";
      var errorMessage = document.createTextNode("Thank you! Check your email to confirm your email subscription.");
      node.appendChild(errorMessage);
      var parent = emailDiv;
      parent.appendChild(node);

      setTimeout(function(){ parent.removeChild(node) }, 5000);
      
    }
    
  function media(width){
      if(width.matches){
          document.querySelector('.base-info').insertAdjacentHTML('beforebegin','<div class="img-conatiner"><img class="mobile--model-img" src="images/hero-mobile.jpg" alt="model"></div>');
      }
  }

  media(x);
  x.addListener(media);
 