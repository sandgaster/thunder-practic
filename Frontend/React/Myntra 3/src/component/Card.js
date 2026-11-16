function Card(props) {
    return (
        <div  
        style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            flex:"wrap"
        }}>

            <img
                src="https://www.ownd.in/cdn/shop/files/1267769-32580618.jpg?v=1790953277&width=1200"
                alt="T-shirt"
                style={{
                    height: "auto",
                    width: "300px",
                    objectFit: "cover"
                }}
            />

            <div style={{ textAlign: "center" }}>
                <p>{props.name}</p>
                <h1>{props.offer}</h1>
                <p>Shop now</p>
            </div>

        </div>
    );
}

export default Card