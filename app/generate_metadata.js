const fs = require('fs');
const path = require('path');

// CID folder gambar di IPFS
const IMAGE_CID = "bafybeigiopsqhvapak4hsxvbdd46edckbxueb7hxh4r3izbtijrex7ryyu";
const OUTPUT_DIR = "./metadata"; // Folder output untuk metadata

// Buat folder jika belum ada
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

// Generate metadata untuk 80 NFT
for (let i = 1; i <= 80; i++) {
  const metadata = {
    name: `Farcaster NFT #${i}`,
    description: "NFT eksklusif untuk pengguna Farcaster di Base Sepolia",
    image: `ipfs://${IMAGE_CID}/${i}.png`, // Sesuaikan ekstensi (.png/.jpg)
    attributes: []
  };

  // Simpan ke file
  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${i}.json`),
    JSON.stringify(metadata, null, 2)
  );
}

console.log(`✅ Metadata untuk 80 NFT berhasil digenerate di folder "${OUTPUT_DIR}"`);