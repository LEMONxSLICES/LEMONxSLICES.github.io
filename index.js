var pepsi_theme = "black" ;

function ChangePepsiTheme()
{
    if( pepsi_theme === "black" )
    {
        document.getElementById("pepsi-img").src="imgs/pepsi-white.png" ;
        pepsi_theme = "white" ;
    }
    else if( pepsi_theme === "white" )
    {
        document.getElementById("pepsi-img").src="imgs/pepsi-black.png" ;
        pepsi_theme = "black" ;
    }
}

let display = true ;

function ChangeDisplay( id )
{
    if( display )
    {
        document.getElementById( id ).style.display = 'none' ;
        display = false ;
    }
    else
    {
        document.getElementById( id ).style.display = 'block' ;
        display = true ;
    }
}

var step = 10 ;

function Move_10px_Right( id )
{
    let obj = document.getElementById(id) ;
    
    obj.style.marginLeft = String( step ) + "px" ;
    step += 10 ;
}