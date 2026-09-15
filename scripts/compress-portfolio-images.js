/**
 * Compress and normalize portfolio project images in /public.
 * - Renames *.jpg.jpeg -> *.jpg
 * - Resizes to max 1920px wide
 * - Writes optimized JPEG (quality 75)
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const publicDir = path.join(__dirname, "..", "public");
const MAX_WIDTH = 1920;
const QUALITY = 75;

const patterns = [
  /^patio_project_\d+_.*\.(jpe?g)(\.jpeg)?$/i,
  /^backyard_poolside_retreat_.*\.jpe?g$/i,
  /^front_entry_walkway_rebuild_.*\.jpe?g$/i,
];

function shouldProcess(filename) {
  return patterns.some((re) => re.test(filename));
}

function normalizeName(filename) {
  return filename.replace(/\.jpg\.jpeg$/i, ".jpg").replace(/\.jpeg$/i, ".jpg");
}

async function processFile(filename) {
  const inputPath = path.join(publicDir, filename);
  const outName = normalizeName(filename);
  const outputPath = path.join(publicDir, outName);
  const tempPath = path.join(publicDir, `.__tmp_${outName}`);

  const before = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .rotate()
    .resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
    })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tempPath);

  // Replace original(s)
  if (inputPath !== outputPath && fs.existsSync(inputPath)) {
    fs.unlinkSync(inputPath);
  }
  if (fs.existsSync(outputPath) && outputPath !== tempPath) {
    fs.unlinkSync(outputPath);
  }
  fs.renameSync(tempPath, outputPath);

  const after = fs.statSync(outputPath).size;
  const pct = Math.round((1 - after / before) * 100);
  console.log(
    `${filename} → ${outName} | ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024).toFixed(0)}KB (−${pct}%)`
  );
}

async function main() {
  const files = fs.readdirSync(publicDir).filter(shouldProcess);
  console.log(`Compressing ${files.length} portfolio images...\n`);

  for (const file of files) {
    try {
      await processFile(file);
    } catch (err) {
      console.error(`Failed: ${file}`, err.message);
    }
  }

  console.log("\nDone.");
}

main();
