const newsArticle = {
  title: "Gold prices surge sharply",
  source: "cnbc.com",
  ageInHours: 16,
  isVerified: true
};

if (newsArticle.ageInHours > 24) {
  console.log("Article is too old, skipping");
} else if (!newsArticle.isVerified) {
  console.log("Source is not verified, skipping");
} else if (!newsArticle.title) {
  console.log("Article has no title, skipping");
} else {
  console.log(`Article is safe to display: ${newsArticle.title}`);
}
