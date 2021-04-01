import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import LayoutWrapper from '../layouts/LayoutWrapper';

function MyApp({ Component, pageProps }) {
	
  return (
		<LayoutWrapper>
			<Component {...pageProps} />
		</LayoutWrapper>
	)
}

export default MyApp
