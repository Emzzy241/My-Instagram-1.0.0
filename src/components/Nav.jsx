// starting by creating a nav component that returns a jsx code

// importing our images
import instaLogo from "../assets/images/instagram.png";

const Nav = ()=>{
    return (
        <nav>
            <button className="logo">
                <img src={instaLogo} alt="logo" />
            </button>

            {/* adding the search input */}
            <input type="text" className="search" placeholder=".....search"/>
            <span className="nav-links">
                <button>
                    {/* Home button we will be using font-awesome... Agter we have linked font-awesome in public/index.html file we can now use them */}
                    <i className="fas fa-home"></i>
                </button>
                
                <button>
                   <i className="fas fa-comment-alt"></i>
                </button>

                <button>
                   <i className="fas fa-compass"></i>
                </button>

                <button>
                   <i className="fas fa-heart"></i>
                </button>
            </span>
        </nav>
    )
}

// exporting nav as default 
export default Nav