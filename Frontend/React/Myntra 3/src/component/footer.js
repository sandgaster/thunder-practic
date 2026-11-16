
function Footer() {
    return (
        <footer style={{
            backgroundColor: "#fafbfc",
            padding: "40px 10%",
            color: "#282c3f",
            fontSize: "13px"
        }}>

            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "30px"
            }}>

                {/* Online Shopping */}
                <div>
                    <h4>ONLINE SHOPPING</h4>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Home</p>
                    <p>Beauty</p>
                    <p>Genz</p>
                    <p>Gift Cards</p>
                </div>

                {/* Customer Policies */}
                <div>
                    <h4>CUSTOMER POLICIES</h4>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>Terms Of Use</p>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Cancellation</p>
                    <p>Privacy Policy</p>
                </div>

                {/* Useful Links */}
                <div>
                    <h4>USEFUL LINKS</h4>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Site Map</p>
                    <p>Corporate Information</p>
                </div>

                {/* App & Social */}
                <div>
                    <h4>KEEP IN TOUCH</h4>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>YouTube</p>
                    <p>Download App</p>
                </div>

            </div>

            <hr style={{ margin: "30px 0" }} />

            <div style={{ textAlign: "center" }}>
                <p>100% ORIGINAL guarantee for all products</p>
                <p>© 2026 Myntra-style Footer</p>
            </div>

        </footer>
    );
}

export default Footer;
