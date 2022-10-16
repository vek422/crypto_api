// import React from 'react'
import { Box,Text,Card } from 'dracula-ui';
import './Coin.css';
const Coin = ({name,image,symbol,price,volume ,priceChange}) => {
  return (
    <Card className='coin-row' variant="subtle" color="pink"  >
        <Box className='coin' p='sm'>
                <Box className="text"><img src={image} alt="crypto" className=''/></Box>
                <Text color="cyan" className='text'>{name}</Text>
                <Text className='coin-symbol text' color="cyan">{symbol}</Text>

                <Text  color="cyan" className='coin-price'>${price}</Text>
                <Text  color="cyan" className='coin-volume'>${volume.toLocaleString()}</Text>
                  { priceChange<0 ? 
                    (<Text color="green"className="coin-percent" >{priceChange.toFixed(2)}%</Text>)
                    :(<Text color="red" className="coin-percent" >{priceChange.toFixed(2)}%</Text>)
              }
        </Box>
        </Card>
    
  )
}

export default Coin;