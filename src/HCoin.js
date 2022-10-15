export default ()=>{
    return(
    <div className='coin-container _h'>
        <div className='coin-row '>
            <div className='coin'>
                {/* <img src={image} alt="crypto" /> */}
                <span className="img">{"Logo"}</span>
                <p>{"Name"}</p>
                <p className='coin-symbol'>{"Symbol"}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>{"Price"}</p>
                <p className='coin-volume'>{"MarketCap"}</p>
                <p className="coin-percent" style={{textAlign:'right'}} >{"PriceChange"}</p> 
            </div>
        </div>
    </div>
    )
}