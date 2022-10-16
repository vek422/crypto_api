import { useEffect,useState } from 'react';
import 'dracula-ui/styles/dracula-ui.css';
import axios from 'axios';
import Coin from './Coin';
import "./App.css"; 
import HCoin from './HCoin';
import { Box, Heading,Input } from 'dracula-ui';
function App() {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] =useState('');
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(resp=>{
      setCoins((resp.data));
      setIsLoading(false);
      // setFiltredCoins((resp.data));

    })
    .catch(error =>{
      console.log(error);
    })
    
  },[]);
  const handleChange = e =>{
    setSearch(e.target.value);
  }
  const filtredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
  // if(filtredCoins.length == 0)
  // {
  //   console.log("empty");
  // }
  // else{
  //   console.log(filtredCoins);
  // }
  
  return (
    <Box className="coin-app"  >
      <Box className='coin-search'>
        {/* <h1 className='coin-text'>Search A Currency</h1> */}
        <Heading color='orange'>Search A Currency</Heading>
        <form>
          {/* <input type={'text'} className="coin-input" placeholder='Search' onChange={handleChange} value={search} /> */}
          <Input type={'text'} placeholder='Search'
            onChange={handleChange} value={search}
            my="sm" color='purple' varient="outline"
            m="xs" borderSize='sm' />
        </form>
      </Box>
      {isLoading ? <Heading color="purple" style={{textAlign:'center'}}>Loading...</Heading>
      :<div className='coin-list'>
          {filtredCoins.length === 0 ? <Heading color='red' style={{textAlign:'center'}}>No Match Found</Heading> :<HCoin/>}
            {filtredCoins.map(coin =>{
              return(
                <Coin 
                  key={coin.id}
                  name={coin.name} 
                  image={coin.image} 
                  symbol={coin.symbol} 
                  volume={coin.market_cap}
                  price={coin.current_price}
                  priceChange ={coin.price_change_percentage_24h}
                  rank={coin.market_cap_rank}
                />
              )
            })}
          </div>
          }
    </Box>
  );
}

export default App;
