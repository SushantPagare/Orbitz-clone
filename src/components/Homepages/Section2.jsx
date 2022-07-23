import "./Section2.css"

export const Section2 = ()=>{
    return(
        <div>
        <div className="travels" >
            <div className="travels-box" >
               <div><img src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_TravelAsYouAre_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" width="100%" height="100%" ></img></div>
               <div><img src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_Rewards_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" width="100%" height="100%" ></img></div>
               <div><img src="https://forever.travel-assets.com/flex/flexmanager/images/2022/02/09/ORB_BrandPromise_InsiderPrices_imgB_840x473_20220207.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh" width="100%" height="100%" ></img></div>
            </div>
        </div>

        <div className="featured" >
        <div className="featured-box"> 
            <div className="featured-heading" ><h1>Featured offers</h1></div>
          
            <div className="featured-img" >
                <div className="featured-img-1" >
                    <h2>Last minute deals</h2>
                    <p>Getaway today</p>
                </div>
                <div className="featured-img-2" >
                <h2>All-inclusive resorts</h2>
                    <p>Enjoy sun and fun</p>
                </div>
                <div className="featured-img-3" >
                <h2>Insider prices</h2>
                    <p>Members get rewarded</p>
                </div>
                <div className="featured-img-4" >
                <h2>Jet and reset</h2>
                    <p>Fly somewhere beachy and warm</p>
                </div>
            </div>   
            </div>
        </div>

        <div className="mgm-resort" >
            <div>
                <div className="mgm-img" ></div>
                <div className="mgm-txt" >
                    <div>
                        <img src="https://tpc.googlesyndication.com/simgad/609289044953893101?" height="25%" width="25%" ></img>
                        <h2>Fun in the sun is back</h2>
                        <p>Bookyour Las vegas stay today</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}   