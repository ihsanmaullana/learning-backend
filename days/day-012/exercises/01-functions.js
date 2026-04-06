// Tugas 1
const calculateReadTime = (wordCount) => {
    return wordCount / 200
}

// Tugas 2
const categorizeMarket = (changePercent) => {
    if (changePercent > 1) {
        return "Bullish"
    } else if (changePercent < -1) {
        return "Bearish"
    } else {
        return "Sideways"
    }
}

// Tugas 3
const generateNewsLabel = (wordCount, changePercent) => {
    const readTime = calculateReadTime(wordCount)
    const market = categorizeMarket(changePercent)
    return `Market: ${market} | Read time: ${readTime} min`
}

// Test semua
console.log(calculateReadTime(400))
console.log(calculateReadTime(1000))
console.log(categorizeMarket(2.5))
console.log(categorizeMarket(-3))
console.log(categorizeMarket(0.5))
console.log(generateNewsLabel(400, 2.5))
