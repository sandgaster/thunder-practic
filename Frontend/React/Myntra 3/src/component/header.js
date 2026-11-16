export function Header1(){
    return(
        <>
        <div  className="header1">

            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzQ39k2v4SJlFKmNNyqf6x9RHfufyWcHhOE4pKW-SIA&s" height={"40px"}/>

            <div className="option">
                <button className="btn" >men</button>
                <button className="btn">women</button>
                <button className="btn">kid</button>
                <button className="btn">home</button>
                <button className="btn">beauty</button>
            </div>

            <input  className="input" placeholder="search for product"></input>

            <div className="profile">
                <button className="btn">profile</button>
                <button className="btn">wishlish</button>
                <button className="btn">cart</button>
            </div>
        </div>
        </>
    )
}