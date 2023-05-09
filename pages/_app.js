import { MoralisProvider } from "react-moralis"
import { Header } from "@/components/Header"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
    return (
        <MoralisProvider appId="ZhO4OulyxjUaIm7Y1mm9xpSKtG3VKERznKaIhgfjgh5YjAdQfDdmYMBDM3zxpefh">
            <Header />
            <Component {...pageProps} />
        </MoralisProvider>
    )
}
