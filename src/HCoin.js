import { Box, Card, Text } from "dracula-ui"
export default () => {
    return (
            <Card className='coin-row' variant="subtle" color="red" glowColor="" >
                <Box className='coin' p='sm'>
                    <Text className="" color="purpleCyan" >Rank</Text>
                    <Text className="" color="purpleCyan">{"Logo"}</Text>
                    <Text color="purpleCyan">{"Name"}</Text>
                    <Text color="purpleCyan" className='coin-price'>{"Price"}</Text>
                    <Text color="purpleCyan" className='coin-volume'>{"MarketCap"}</Text>
                    <Text color="purpleCyan" className="coin-percent"  >{"PriceChange"}</Text>
                </Box>
            </Card>
    )
}