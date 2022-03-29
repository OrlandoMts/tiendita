import '../styles/globals.css'
import { store, wrapper } from '../src/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
