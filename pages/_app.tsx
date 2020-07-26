import { ThemeProvider } from 'styled-components'
import Page from '../components/Page';
import '../css/index.css';

const theme = {
	colors: {
		primary: '#0070f3',
	},
}

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Page>
				<Component {...pageProps} />
			</Page>
		</ThemeProvider>
	)
}

export default App;