import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import DefaultLayout from '../layouts/DefaultLayout';

function MyApp({ Component, pageProps }) {
  return (
		<DefaultLayout>
			<Component {...pageProps} />
		</DefaultLayout>
	)
}

export default MyApp
