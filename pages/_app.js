import { MoralisProvider } from "react-moralis"
import { Header } from "@/components/Header"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Header />
            <Component {...pageProps} />
        </MoralisProvider>
    )
}
