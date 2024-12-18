import Card from "../Card.jsx";

export default function Home() {
    const commonStyle_1 = {
        margin: "15px",
        border: "3px solid black",
        padding: "5px",
        borderRadius: "10px",
        color: "black",
        backgroundColor: "white",
        cursor:'pointer'
    }

    return (
        <>  
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Card>
                    <img style={{borderRadius: "50px" , width: "50px"}} src="https://shorturl.at/VO3Ck" alt="sample" />
                    <input style={{borderRadius: "40px" , padding:'10px' , width:"300px"}} type="text" placeholder="Start a post, try writing with AI"/>
                    
                    <div style={{
                        display: "flex",
                        justifyContent:"center"
                    }}> 
                    
                        <div style={commonStyle_1}>Photo</div>
                        <div style={commonStyle_1}>Video</div>
                        <div style={commonStyle_1}>Write article</div>
                    </div>
                </Card>
            </div>
        </>
    )
}