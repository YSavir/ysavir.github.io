window.onload = function(){
  var yes = document.getElementById('yes');
  var no = document.getElementById('no');
  var response = document.getElementById('response');

  yes.addEventListener('click', function(){
    response.style.display = 'block';
    response.className = 'pleased';
  });
  
  no.addEventListener('click', function(){
    response.style.display = 'block';
    response.className = 'displeased';
  });
};
