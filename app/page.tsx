"use client";
import { useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import styles from "./page.module.css";

export default function Home() {
  const { isFrameReady, setFrameReady, context } = useMiniKit();

  // Initialize the  miniapp
  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} type="button">
        ✕
      </button>
      
      <div className={styles.content}>
        <div className={styles.waitlistForm}>
          <h1 className={styles.title}>Mint Ghost NFT</h1>
          
          <p className={styles.subtitle}>
             Hey {context?.user?.displayName || "there"}, A ghost NFT created for the Farcaster community. It does not guarantee utility for the NFT, but owning the NFT allows for the possibility of earning unlimited incentives in the future. Minting means supporting Ghost, and Ghost will do its best..
          </p>
        </div>
      </div>
    </div>
  );
}
