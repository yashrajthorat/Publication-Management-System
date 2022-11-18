document.getElementById('openbtn').click();
document.getElementById('openbtn').click();
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  if (document.getElementById("mySidebar").style.width == '0px') {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  else {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
let open = 0;
  document.getElementById('custom-navbar-toggle-button').addEventListener('click' , (e) => {
    e.preventDefault();
    // if(document.getElementById('mySidebar').style.marginTop == '215px')
    // {
    //   document.getElementById('mySidebar').classList.remove('toggle-sidenav');
    //   console.log("if");
    // }
    // else
    // {
    //   document.getElementById('mySidebar').classList.add('toggle-sidenav');
    //   console.log('else');
    // }
    if(open)
    {
        document.getElementById('mySidebar').classList.remove('toggle-sidenav');
        open = 0;
    }
    else
    {
        document.getElementById('mySidebar').classList.add('toggle-sidenav');
        open = 1;
    }
  })