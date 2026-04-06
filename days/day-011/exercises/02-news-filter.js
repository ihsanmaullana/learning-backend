const newsArticle = {
  title: "Harga emas meningkat tajam",
  source: "cnbc.com",
  ageInHours: 16,
  isVerified: true
};

if (newsArticle.ageInHours > 24) {
  console.log("Berita terlalu lama, skip");
} else if (!newsArticle.isVerified) {
  console.log("Sumber tidak terverifikasi, skip");
} else if (!newsArticle.title) {
  console.log("Judul tidak ada, skip");
} else {
  console.log(`Berita layak ditampilkan: ${newsArticle.title}`);
}
