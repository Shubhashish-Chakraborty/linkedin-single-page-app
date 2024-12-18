import Card from "../../Card.jsx";

export default function NotiCard(props) {
    return (
        <>
            <div style={{
                display:"flex",
                justifyContent: "center"
            }}>
                <Card>
                        
                    <div style={{
                        display: "flex",

                    }}>

                        <img style={{
                            borderRadius: "50px",
                            width: "40px"
                        }} src={props.userImg} alt="notiImg1" />

                        <div style={{
                            backgroundColor: "#ebe8e8",
                            color: 'black',
                            padding: "10px",
                            marginLeft: "10px",
                            borderRadius: "10px"
                        }}>
                            <strong>{props.username}</strong> posted: {props.notiContent}
                            
                        </div>
                    
                    </div>

                    

                </Card>
            </div>
        </>
    )
}