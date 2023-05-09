import Link from "next/link"
import React from "react"
import { ConnectButton } from "web3uikit"
export const Header = () => {
    return (
        <nav>
            <h1 className="py-4 px-4 font-bold text-3xl">NFT</h1>
            <div className="">
                <Link href="/">NFT Marketplace</Link>
                <Link href="/Sell">Sell NFT</Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
