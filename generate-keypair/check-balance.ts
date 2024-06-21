import {Connection, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";

const publicKey = new PublicKey("EUD155rGJfXHWKV4foNsSn86X2zWzuABxGPCKXPzdf9E");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
);
