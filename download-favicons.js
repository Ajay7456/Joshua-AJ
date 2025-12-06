const fs = require('fs');
const https = require('https');
const path = require('path');

const favicons = [
  {
    name: 'android-chrome-192x192.png',
    url: 'https://i.ibb.co/tp8FRzw8/android-chrome-192x192.png'
  },
  {
    name: 'android-chrome-512x512.png',
    url: 'https://i.ibb.co/WvLkzqkw/android-chrome-512x512.png'
  },
  {
    name: 'apple-touch-icon.png',
    url: 'https://i.ibb.co/N6HcgT88/apple-touch-icon.png'
  },
  {
    name: 'favicon-32x32.png',
    url: 'https://i.ibb.co/95VLH1D/favicon-32x32.png'
  },
  {
    name: 'favicon-16x16.png',
    url: 'https://i.ibb.co/sJKxKnPG/favicon-16x16.png'
  },
  {
    name: 'favicon.ico',
    url: 'https://i.ibb.co/vxpdqYZ9/favicon.ico'
  }
];

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// Download function
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join('public', filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`❌ Failed to download ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Download all favicons
async function downloadAll() {
  console.log('📥 Downloading favicon files...');
  
  for (const favicon of favicons) {
    await downloadFile(favicon.url, favicon.name);
  }
  
  console.log('🎉 All favicons downloaded to /public/');
}

downloadAll().catch(console.error);