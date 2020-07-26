import Chart from "react-google-charts";
import { Skeleton, Divider } from 'antd';
import Container from './Container';


const StockGraph = ({ data, assetTicker }) => {
    const dataKeys = Object.keys(data);
    const finalData = dataKeys.map((key) => ([key, parseFloat(data[key]['4. close'])])).reverse();
    return (
        <Container>
            <Chart
                width={'100%'}
                height={'600px'}
                chartType="Line"
                loader={<Skeleton paragraph={{ rows: 15 }} active />}
                data={[
                    [
                        'Day',
                        'Price'
                    ],
                    ...finalData
                ]}
                options={{
                    chart: {
                        title: `${assetTicker}`,
                        subtitle: 'in $ (USD)',
                    },
                }}
                rootProps={{ 'data-testid': '3' }}
            />
            <Divider />

        </Container>
    )
}

export default StockGraph;