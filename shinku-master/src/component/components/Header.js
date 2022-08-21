import '../../App.css';

function Header (){

    return(
        <header className = "header">
            <div id="banner">
                <img src="../../images/PETMILY_LOGO.png" alt="" className='logo'/>
                <img src="../../images/cuteDog.png" alt="" className='cuteDog'/>
                <p class="txt">WELCOME TO PETMILY HOUSE!</p>
                <img src="../../images/dog1.jpg" alt="" className='backdrop'/>
            </div>
        </header>
    );
    
}

export default Header;