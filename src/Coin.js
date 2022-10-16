// import React from 'react'
import { Box,Text} from 'dracula-ui';
import './Coin.css';
const Coin = ({name,image,symbol,price,volume ,priceChange,rank}) => {
  return (
    <Box className='coin-row' variant="subtle" color="blackSecondary" rounded='lg' borderColor='purple' >
        <Box className='coin' p='sm'>
                <Text color="cyan" >{rank}</Text>
                <Box className="text"><img src={image} alt="crypto" className=''/></Box>
                <Text color="cyan" className='text'>{name}</Text>
                {/* <Text className='coin-symbol text' color="cyan">{symbol}</Text> */}

                <Text  color="cyan" className='coin-price'>${price}</Text>
                <Text  color="cyan" className='coin-volume'>${volume.toLocaleString()}</Text>
                  { priceChange<0 ? 
                    (<Text color="green"className="coin-percent" >{priceChange.toFixed(2)}%</Text>)
                    :(<Text color="red" className="coin-percent" >{priceChange.toFixed(2)}%</Text>)
              }
        </Box>
      </Box>
    
  )
}

export default Coin;