const urlParams = new URLSearchParams(window.location.search)
const token = urlParams.get('token')
var newweb = window.location.href.split("token=")[1]
sessionStorage.setItem('nextpage',true)
if(sessionStorage.getItem("token") != token){
  //  window.location.href = "https://jayashreebalinani.github.io/Redirect_to_newwebpage/"
}

function getback()
{
    window.location.href="https://jayashreebalinani.github.io/Redirect_to_newwebpage/"
}
