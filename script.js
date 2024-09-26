function calculateZodiac() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getMonth() + 1;
    const day = birthdate.getDate();
    const year = birthdate.getFullYear();

    const zodiacSign = getZodiacSign(month, day);
    const age = getAge(year, month, day);
    const tarotReading = getTarotReading(zodiacSign);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Your zodiac sign is:</strong> ${zodiacSign}</p>
        <p><strong>Your age is:</strong> ${age}</p>
        <p><strong>Your tarot reading:</strong> ${tarotReading}</p>
        <button onclick="showCompatibilityCheck()">Check Compatibility</button>
    `;
}

function getZodiacSign(month, day) {
    const signs = [
        { name: "Capricorn", start: [1, 1], end: [1, 19] },
        { name: "Aquarius", start: [1, 20], end: [2, 18] },
        { name: "Pisces", start: [2, 19], end: [3, 20] },
        { name: "Aries", start: [3, 21], end: [4, 19] },
        { name: "Taurus", start: [4, 20], end: [5, 20] },
        { name: "Gemini", start: [5, 21], end: [6, 20] },
        { name: "Cancer", start: [6, 21], end: [7, 22] },
        { name: "Leo", start: [7, 23], end: [8, 22] },
        { name: "Virgo", start: [8, 23], end: [9, 22] },
        { name: "Libra", start: [9, 23], end: [10, 22] },
        { name: "Scorpio", start: [10, 23], end: [11, 21] },
        { name: "Sagittarius", start: [11, 22], end: [12, 21] },
        { name: "Capricorn", start: [12, 22], end: [12, 31] }
    ];

    for (let sign of signs) {
        if (
            (month === sign.start[0] && day >= sign.start[1]) ||
            (month === sign.end[0] && day <= sign.end[1])
        ) {
            return sign.name;
        }
    }
    return "Unknown";
}

function getAge(year, month, day) {
    const today = new Date();
    let age = today.getFullYear() - year;
    const m = today.getMonth() + 1 - month;
    if (m < 0 || (m === 0 && today.getDate() < day)) {
        age--;
    }
    return age;
}

function getTarotReading(zodiacSign) {
    const readings = {
        "Aries": "The Emperor - You have the strength and determination to achieve your goals. Use your leadership skills wisely.",
        "Taurus": "The Hierophant - You value tradition and seek stability. Trust your intuition to guide you on your spiritual journey.",
        "Gemini": "The Lovers - You are faced with important decisions. Balance your head and heart to make the best choices.",
        "Cancer": "The Moon - Emotions may be heightened, but trust your intuition. Reflect on your inner thoughts and feelings.",
        "Leo": "Strength - You have the courage and confidence to overcome obstacles. Use your creativity and passion to inspire others.",
        "Virgo": "The Hermit - Take time for introspection and self-reflection. Seek wisdom from within to guide your path.",
        "Libra": "Justice - Strive for balance and fairness in your relationships and decision-making.",
        "Scorpio": "Death - Embrace change and transformation. Let go of the past to make room for new beginnings.",
        "Sagittarius": "Temperance - Maintain balance and moderation in your life. Seek harmony between your mind and body.",
        "Capricorn": "The Devil - Examine your limitations and break free from any restrictive patterns or addictions.",
        "Aquarius": "The Star - You have a unique perspective to offer. Share your insights and vision with the world.",
        "Pisces": "The Moon - Tune into your intuition and emotions. Seek clarity and understanding in your spiritual journey."
    };
    return readings[zodiacSign] || "Sorry, we couldn't find a tarot reading for your zodiac sign.";
}

function showCompatibilityCheck() {
    document.getElementById('compatibilityCheck').style.display = 'block';
}

function checkCompatibility() {
    const sign1 = document.getElementById('sign1').value.toLowerCase();
    const sign2 = document.getElementById('sign2').value.toLowerCase();
    const compatibilityResult = document.getElementById('compatibilityResult');

    const compatibilityPairs = {
        "aries-leo": "Aries and Leo are highly compatible!",
        "taurus-virgo": "Taurus and Virgo make a great match!",
        "gemini-libra": "Gemini and Libra have a natural connection!",
        "cancer-pisces": "Cancer and Pisces are highly compatible emotionally!",
        "leo-sagittarius": "Leo and Sagittarius are a dynamic duo!",
        "virgo-capricorn": "Virgo and Capricorn have similar goals and values!",
        "libra-aquarius": "Libra and Aquarius understand each other well!",
        "scorpio-pisces": "Scorpio and Pisces are deeply intuitive and connected!",
        "sagittarius-aries": "Sagittarius and Aries are full of adventure and energy!",
        "capricorn-taurus": "Capricorn and Taurus understand each other's need for stability!",
        "aquarius-gemini": "Aquarius and Gemini share intellectual pursuits!",
        "pisces-cancer": "Pisces and Cancer have a deep emotional bond!"
    };

    const pair = `${sign1}-${sign2}`;
    const reversePair = `${sign2}-${sign1}`;

    if (compatibilityPairs[pair]) {
        compatibilityResult.textContent = compatibilityPairs[pair];
    } else if (compatibilityPairs[reversePair]) {
        compatibilityResult.textContent = compatibilityPairs[reversePair];
    } else {
        compatibilityResult.textContent = `Compatibility between ${sign1} and ${sign2} is uncertain. More research required!`;
    }
}
