import fs from "fs"
import { scanWallet } from "./scanner.js"
import { SCAN_INTERVAL } from "./config.js"

const wallets = fs.readFileSync("wallets.txt","utf8")
  .split("\n")
  .map(w => w.trim())
  .filter(Boolean)

async function loop() {

  while (true) {

    for (const wallet of wallets) {

      await scanWallet(wallet)

    }

    await new Promise(r => setTimeout(r, SCAN_INTERVAL))

  }

}

loop()
