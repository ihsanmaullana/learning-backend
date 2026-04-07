// Task 1: Calculate read time
// Given a word count, return the estimated read time in minutes
// Assumes an average reading speed of 200 words per minute
const calculateReadTime = (wordCount) => {
    return wordCount / 200;
};

// Task 2: Categorize market direction based on percentage change
const categorizeMarket = (changePercent) => {
    if (changePercent > 1) {
        return "Bullish";
    } else if (changePercent < -1) {
        return "Bearish";
    } else {
        return "Sideways";
    }
};

// Task 3: Combine both functions into a single label
// This demonstrates a function calling other functions
const generateNewsLabel = (wordCount, changePercent) => {
    const readTime = calculateReadTime(wordCount);
    const market = categorizeMarket(changePercent);
    return `Market: ${market} | Read time: ${readTime} min`;
};

// Run all tests
console.log(calculateReadTime(400));          // 2
console.log(calculateReadTime(1000));         // 5
console.log(categorizeMarket(2.5));           // Bullish
console.log(categorizeMarket(-3));            // Bearish
console.log(categorizeMarket(0.5));           // Sideways
console.log(generateNewsLabel(400, 2.5));     // Market: Bullish | Read time: 2 min
