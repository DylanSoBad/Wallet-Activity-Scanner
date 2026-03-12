import dotenv from "dotenv"

dotenv.config()

export const RPC_URL =
  process.env.RPC_URL || "https://rpc.ankr.com/eth"

export const SCAN_INTERVAL =
  parseInt(process.env.SCAN_INTERVAL || "60000", 10)
