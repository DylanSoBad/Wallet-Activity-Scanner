# 🔍 Web3 Wallet Activity Scanner

![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/runtime-Node.js-green)
![Web3](https://img.shields.io/badge/library-ethers.js-purple)
![Status](https://img.shields.io/badge/status-active-success)

A lightweight Web3 monitoring tool for scanning wallet activity across EVM-compatible blockchains.

This tool allows you to track wallet balances, monitor on-chain activity, and log wallet data automatically.

---

# 🚀 Features

• Scan multiple EVM wallets simultaneously  
• Retrieve real-time wallet balances  
• Monitor latest blockchain activity  
• Automatic logging of wallet data  
• Designed for airdrop hunters and Web3 researchers  

---

# 🧱 Architecture

The scanner connects to an RPC provider and queries wallet data using ethers.js.

Wallet List → RPC Provider → Scanner Engine → Log Output

Workflow:

1. Load wallet addresses from `wallets.txt`
2. Connect to blockchain RPC
3. Query balances and block data
4. Log results locally

---

# ⚙️ Tech Stack

Runtime: Node.js  
Blockchain Library: ethers.js  
Networking: RPC API  
Logging: File system

---

# 📦 Installation

Clone repository

git clone https://github.com/YOURNAME/web3-wallet-scanner.git

cd web3-wallet-scanner

Install dependencies

npm install

---

# 🧩 Configuration

Create `.env`

RPC_URL=https://rpc.ankr.com/eth  
SCAN_INTERVAL=60000

Add wallet addresses to

wallets.txt

Example:

0x742d35Cc6634C0532925a3b844Bc454e4438f44e  
0x00000000219ab540356cBB839Cbe05303d7705Fa

---

# ▶ Usage

Start scanner

npm start

The tool will continuously monitor wallet balances and log activity.

---

# 📄 Example Output

[12:30:04] 0x742d...f44e | balance=9.52 ETH | block=19382744  
[12:30:05] 0x0000...705Fa | balance=0.18 ETH | block=19382744  

Logs saved in

wallet-log.txt

---

# 📂 Project Structure

web3-wallet-scanner

├── index.js  
├── scanner.js  
├── config.js  
├── wallets.txt  
├── package.json  
└── README.md  

---

# ⚠ Disclaimer

This tool is intended for educational and research purposes only.

---

⭐ If you find this project useful, consider giving the repository a star.
