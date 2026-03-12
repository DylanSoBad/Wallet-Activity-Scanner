import { ethers } from "ethers"
import fs from "fs"
import { RPC_URL } from "./config.js"

const provider = new ethers.JsonRpcProvider(RPC_URL)

export async function scanWallet(wallet) {

  try {

    const balance = await provider.getBalance(wallet)

    const block = await provider.getBlockNumber()

    const ethBalance = ethers.formatEther(balance)

    const log =
      `[${new Date().toLocaleTimeString()}] ` +
      `${wallet} | balance=${ethBalance} ETH | block=${block}`

    console.log(log)

    fs.appendFileSync("wallet-log.txt", log + "\n")

  } catch (err) {

    console.error("scan error", err.message)

  }
}
