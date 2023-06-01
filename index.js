function opennav(){
document.getElementById('navlinks').style.height = '100vh';
  document.getElementById('navlinks').style.transition = '0.9s'
  document.getElementById('navlinks').style.position = 'fixed'
  document.getElementById('navlinks').style.top = '0'
  document.getElementById('navlinks').style.zIndex = '99'
  }
  function closenav(){
    document.getElementById('navlinks').style.height = '0';
    document.body.style.opacity = '1'
  }