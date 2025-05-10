# 🌿 Weed420 Blockchain

Weed420 is a culturally themed, Substrate-based blockchain designed around the ethos of decentralization, community governance, and timed token distribution. Built with Rust and Substrate, Weed420 leverages advanced blockchain features such as staking, DAO voting, and programmable on-chain logic.

---

## 🚀 Project Overview

- **Name:** Weed420
- **Token:** $WEED
- **Supply:** 4.2 Billion WEED
- **Minting Mechanism:** Timed minting at **4:20 UTC**
- **Governance:** On-chain DAO via Democracy pallet
- **Consensus:** Nominated Proof-of-Stake (NPoS)
- **Role Accounts:** Sudo (Root), Validators, Nominators
- **Status:** Development / Testnet

---

## 🌐 Network Architecture

Weed420 is powered by a Substrate node that includes:

- **Custom Pallets:**
  - `pallet-weed`: Controls timed minting and supply
  - `pallet-rewards`: Manages block rewards at 4:20 UTC
- **Native Token:** WEED
- **Chain Spec:** Custom genesis config with pre-funded accounts and initial validators

---

## 🧱 Key Features

| Feature                | Description |
|------------------------|-------------|
| 🕓 Timed Minting       | Blocks mined at 4:20 UTC have additional WEED rewards |
| 👨‍🌾 Staking           | Users can stake WEED to become validators or nominate others |
| 🗳️ DAO Governance     | Token holders can propose and vote on-chain changes |
| 🔒 Sudo Access         | Root-level control during early stages of development |
| 🧪 Testnet Ready       | Easily deployable local testnet for development and testing |
| 📦 Docker Support      | Full containerized setup for easy deployment |

---

## 🔧 Setup Instructions

### 🛠️ Prerequisites

- [Rust & Cargo](https://rustup.rs/)
- Node.js (for optional frontend explorer)
- Docker & Docker Compose (for containerized setup)
- Substrate CLI tools (`cargo install --force --locked substrate`)

---

### 💻 Run Locally (Native)

```bash
# Clone the repo
git clone https://github.com/yourusername/weed420
cd weed420

# Build the node
cargo build --release

# Run the node
./target/release/weed420-node --dev
