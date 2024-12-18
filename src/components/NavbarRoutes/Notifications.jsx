import Card from "../Card.jsx";
import NotiCard from "./NotificationCards/NotiCard.jsx";

export default function Notifications() {
    return (
        <>  
            <NotiCard username={"Hitesh Choudhary"} notiContent={"Let's build an authentication flow using using FreeAPI and Postman flows Video is up on English Channel"} userImg={"https://shorturl.at/1AAc1"}></NotiCard>            
            <NotiCard username={"Prasenjit Nayak"} notiContent={"commented on Mayank Ahuja's post: Then Leave it to sell DSA courses"} userImg={"https://shorturl.at/nIcCk"}></NotiCard>            
            <NotiCard username={"Ajain Raj Prashar"} notiContent={"commented on Rausham Kumar's post: Congratulations Sir!!"} userImg={"https://shorturl.at/EVhZX"}></NotiCard>            
        </>
    )
}