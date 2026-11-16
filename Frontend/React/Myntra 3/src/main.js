
import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import { Header1 } from "./component/header";
import Footer from "./component/footer";
import arr from "./utiles/dummy";



// Card component

//header



// Main App component
function App() {
    return (
        <>
        <div>
        
            <Header1/>
        


            <div  
            className="Card"
            style={{
                display: "flex",
                gap: "3px"
            }}>
                {arr.map((value, index) => (
                    <Card
                        key={index}
                        name={value.name}
                        offer={value.offer}
                    />
                ))}
            </div>

            <Footer/>

        </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
