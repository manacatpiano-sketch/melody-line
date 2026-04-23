import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = './public/assets';
const PUBLIC_DIR = './public';
const MAX_WIDTH = 1920;
const QUALITY = 80;

async function compressImage(inputPath, outputPath, maxWidth = MAX_WIDTH) {
    const metadata = await sharp(inputPath).metadata();
    const inputSize = fs.statSync(inputPath).size;
    
    let pipeline = sharp(inputPath);
    
    // Resize if wider than max
    if (metadata.width > maxWidth) {
        pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
    }
    
    await pipeline
        .webp({ quality: QUALITY })
        .toFile(outputPath);
    
    const outputSize = fs.statSync(outputPath).size;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   ${(inputSize / 1024 / 1024).toFixed(2)}MB → ${(outputSize / 1024).toFixed(0)}KB (${reduction}% reduction)`);
}

async function main() {
    console.log('🖼️ MelodyLINE LP画像圧縮開始...\n');
    
    // Process assets directory
    const files = fs.readdirSync(ASSETS_DIR);
    let totalBefore = 0;
    let totalAfter = 0;
    
    for (const file of files) {
        if (!/\.(png|jpg|jpeg)$/i.test(file)) continue;
        
        const inputPath = path.join(ASSETS_DIR, file);
        const outputPath = path.join(ASSETS_DIR, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
        
        totalBefore += fs.statSync(inputPath).size;
        await compressImage(inputPath, outputPath);
        totalAfter += fs.statSync(outputPath).size;
    }
    
    // Process logo.png in public root
    const logoPath = path.join(PUBLIC_DIR, 'logo.png');
    if (fs.existsSync(logoPath)) {
        const logoOutput = path.join(PUBLIC_DIR, 'logo.webp');
        totalBefore += fs.statSync(logoPath).size;
        await compressImage(logoPath, logoOutput, 512);
        totalAfter += fs.statSync(logoOutput).size;
    }
    
    console.log(`\n📊 合計: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📉 削減率: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
}

main().catch(console.error);
