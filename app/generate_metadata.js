// app/generate_metadata.js

import fs from 'fs';
import path from 'path';

export function generateMetadata() {
  const metadataDir = path.join(process.cwd(), 'public', 'metadata');
  if (!fs.existsSync(metadataDir)) {
    fs.mkdirSync(metadataDir, { recursive: true });
  }

  const attributes = [
    { trait_type: 'Background', value: 'Purple' },
    { trait_type: 'Eyes', value: 'Red' },
    { trait_type: 'Mouth', value: 'Smile' },
  ];

  for (let i = 1; i <= 100; i++) {
    const metadata = {
      name: `Ghost #${i}`,
      description: 'A unique and spooky ghost NFT from the Ghost Pool collection.',
      image: `https://your-project-url.vercel.app/ghosts/${i}.png`, // Ganti dengan URL project Anda
      attributes: attributes,
    };

    fs.writeFileSync(
      path.join(metadataDir, `${i}.json`),
      JSON.stringify(metadata, null, 2)
    );
  }

  console.log('Generated 100 metadata files.');
}