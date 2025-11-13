"use client";
import { useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import styles from "./page.module.css";

export default function Home() {
  const { isFrameReady, setFrameReady } = useMiniKit();

  // Initialize the miniapp
  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleMint = () => {
    console.log("Mint button clicked");
    // TODO: Add minting logic here
  };

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} type="button">
        ✕
      </button>
      
      <div className={styles.content}>
        <div className={styles.waitlistForm}>
          <h1 className={styles.title}>Ghost Pool</h1>
          
          <p className={styles.subtitle}>
             Hey there, A ghost NFT created for the Farcaster community. It does not guarantee utility for the NFT, but owning the NFT allows for the possibility of earning unlimited incentives in the future. Minting means supporting Ghost, and Ghost will do its best..
          </p>

          <div className={styles.priceBox}>
            <p className={styles.priceText}>Price: 0.0002</p>
          </div>

          <button onClick={handleMint} className={styles.joinButton}>
            MINT
          </button>
        </div>
      </div>
    </div>
  );
}
