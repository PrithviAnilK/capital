import Chart from "react-google-charts";
import Container from './Container';

const StockGraph = ({ data }) => {
    const dataKeys = Object.keys(data);
    const finalData = dataKeys.map((key) => ([key, parseFloat(data[key]['4. close'])])).reverse();
    return (
        <Container>
            <Chart
                width={'100%'}
                height={'600px'}
                chartType="Line"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        'Day',
                        'Price'
                    ],
                    ...finalData
                ]}
                options={{
                    chart: {
                        title: 'Box Office Earnings in First Two Weeks of Opening',
                        subtitle: 'in $ (USD)',
                    },
                }}
                rootProps={{ 'data-testid': '3' }}
            />
        </Container>
    )
}

export default StockGraph;