export default function Card({children}) {
    return (
        <>
            <div style={{
                backgroundColor:"gray",
                color: "azure",
                borderRadius:"10px",
                padding:"10px",
                margin:"10px",
                boxShadow: "0px 0px 20px 1px black",
            }}>
                {children}
            </div>
        </>
    )
}