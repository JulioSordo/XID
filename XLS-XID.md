# XLS-XID: eXistence ID Standard for XRPL

**Title:** eXistence ID (XID)  
**Author:** Julio A. Sordo  
**Created:** 2025-04  
**Status:** Draft  
**Type:** XRPL Standard Proposal (XLS)  
**Category:** Identity  

---

## Abstract

The eXistence ID (XID) is a decentralized digital identity standard built on the XRP Ledger (XRPL). It aims to empower individuals with sovereign control over their digital identities, enabling secure, verifiable, and portable identity management for use in financial, social, and humanitarian systems.

---

## Motivation

Current identity systems are fragmented, vulnerable, and inaccessible to billions of people. XID leverages XRPL’s efficiency, immutability, and global reach to create an inclusive identity solution that:

- Enables individuals to own and manage their identity data.
- Provides seamless verification and interoperability across platforms.
- Respects privacy and human rights by default.

---

## Specification

XID introduces the following components on XRPL:

### 1. XID Root NFT
A unique non-transferable NFT issued per individual representing their core identity anchor.

**Fields include:**
- DID (Decentralized Identifier)
- Public Key
- Metadata URI (off-chain or IPFS)

### 2. Verified Claims (VCs)
Signed credentials issued by trusted verifiers (governments, institutions, etc.) and linked to the XID NFT.

**Examples:**
- Nationality
- Age
- Professional License
- Health or Humanitarian Status

### 3. Life Mode Protocol
An emergency access mode triggered by the owner to temporarily reveal vital identity data (e.g., during disasters, migration, or medical need), using cryptographic thresholds.

---

## Use Cases

- Financial inclusion for the unbanked
- Identity verification for refugees or stateless persons
- Access to digital public services and education
- Secure sign-in and KYC integration

---

## Vision

XID lays the foundation for a universal identity layer for Web3 and beyond. It fosters human dignity, self-sovereignty, and global cooperation in a future where identity is not a barrier, but a bridge.

---

## Security Considerations

- All identity anchors are bound by cryptographic signatures.
- No private data is stored on-chain.
- Zero-knowledge proofs and selective disclosure are encouraged for privacy.

---

## License

This proposal is made available under the terms of the MIT License.
