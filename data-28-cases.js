// Complete dataset of 28 historical cases (1910-2022)
const casesData = [
    // War Cases (14)
    {id: 1, nameAr: 'الحرب العالمية الأولى', nameEn: 'World War I', year: 1914, s: 3, i: 2, c: 1, outcome: 'war', region: 'Europe'},
    {id: 2, nameAr: 'الحرب العالمية الثانية', nameEn: 'World War II', year: 1939, s: 3, i: 2, c: 1, outcome: 'war', region: 'Europe'},
    {id: 3, nameAr: 'الحرب الكورية', nameEn: 'Korean War', year: 1950, s: 6, i: 4, c: 2, outcome: 'war', region: 'Asia'},
    {id: 4, nameAr: 'حرب السويس', nameEn: 'Suez Crisis', year: 1956, s: 5, i: 4, c: 2, outcome: 'war', region: 'Middle East'},
    {id: 5, nameAr: 'حرب فيتنام', nameEn: 'Vietnam War', year: 1965, s: 4, i: 3, c: 2, outcome: 'war', region: 'Asia'},
    {id: 6, nameAr: 'حرب فوكلاند', nameEn: 'Falklands War', year: 1982, s: 5, i: 5, c: 3, outcome: 'war', region: 'South America'},
    {id: 7, nameAr: 'حرب الخليج الأولى', nameEn: 'Gulf War I', year: 1991, s: 5, i: 4, c: 2, outcome: 'war', region: 'Middle East'},
    {id: 8, nameAr: 'حرب البوسنة', nameEn: 'Bosnian War', year: 1992, s: 5, i: 4, c: 2, outcome: 'war', region: 'Europe'},
    {id: 9, nameAr: 'حرب أفغانستان', nameEn: 'Afghanistan War', year: 2001, s: 5, i: 4, c: 2, outcome: 'war', region: 'Asia'},
    {id: 10, nameAr: 'حرب العراق', nameEn: 'Iraq War', year: 2003, s: 4, i: 3, c: 2, outcome: 'war', region: 'Middle East'},
    {id: 11, nameAr: 'الحرب الروسية الجورجية', nameEn: 'Russo-Georgian War', year: 2008, s: 6, i: 5, c: 3, outcome: 'war', region: 'Europe'},
    {id: 12, nameAr: 'الحرب الأهلية السورية', nameEn: 'Syrian Civil War', year: 2011, s: 4, i: 3, c: 2, outcome: 'war', region: 'Middle East'},
    {id: 13, nameAr: 'الحرب الروسية الأوكرانية', nameEn: 'Russo-Ukrainian War', year: 2022, s: 6, i: 5, c: 3, outcome: 'war', region: 'Europe'},
    {id: 14, nameAr: 'حرب الخليج الثانية', nameEn: 'Gulf War II', year: 1990, s: 7, i: 6, c: 3, outcome: 'war', region: 'Middle East'},
    
    // Peace Cases (14)
    {id: 15, nameAr: 'أزمة برلين', nameEn: 'Berlin Crisis', year: 1961, s: 8, i: 7, c: 6, outcome: 'peace', region: 'Europe'},
    {id: 16, nameAr: 'أزمة الصواريخ الكوبية', nameEn: 'Cuban Missile Crisis', year: 1962, s: 9, i: 8, c: 7, outcome: 'peace', region: 'North America'},
    {id: 17, nameAr: 'الانفراج الأمريكي الصيني', nameEn: 'US-China Détente', year: 1972, s: 8, i: 8, c: 7, outcome: 'peace', region: 'Asia'},
    {id: 18, nameAr: 'اتفاقية السلام المصرية الإسرائيلية', nameEn: 'Egypt-Israel Peace Treaty', year: 1979, s: 8, i: 8, c: 7, outcome: 'peace', region: 'Middle East'},
    {id: 19, nameAr: 'معاهدة INF', nameEn: 'INF Treaty', year: 1987, s: 9, i: 8, c: 7, outcome: 'peace', region: 'Europe'},
    {id: 20, nameAr: 'معاهدة ماستريخت', nameEn: 'Maastricht Treaty', year: 1992, s: 9, i: 9, c: 8, outcome: 'peace', region: 'Europe'},
    {id: 21, nameAr: 'اتفاقية أوسلو', nameEn: 'Oslo Accords', year: 1993, s: 7, i: 7, c: 6, outcome: 'peace', region: 'Middle East'},
    {id: 22, nameAr: 'اتفاقية دايتون', nameEn: 'Dayton Agreement', year: 1995, s: 8, i: 7, c: 6, outcome: 'peace', region: 'Europe'},
    {id: 23, nameAr: 'أزمة تايوان', nameEn: 'Taiwan Strait Crisis', year: 1996, s: 8, i: 8, c: 7, outcome: 'peace', region: 'Asia'},
    {id: 24, nameAr: 'الأزمة الهندية الباكستانية', nameEn: 'India-Pakistan Kargil Crisis', year: 1999, s: 7, i: 7, c: 6, outcome: 'peace', region: 'Asia'},
    {id: 25, nameAr: 'الاتفاقية النووية الإيرانية', nameEn: 'Iran Nuclear Deal', year: 2015, s: 8, i: 8, c: 7, outcome: 'peace', region: 'Middle East'},
    {id: 26, nameAr: 'أزمة جزر سبراتلي', nameEn: 'Spratly Islands Dispute', year: 2016, s: 7, i: 7, c: 6, outcome: 'peace', region: 'Asia'},
    {id: 27, nameAr: 'الأزمة الكورية الشمالية', nameEn: 'North Korea Nuclear Crisis', year: 2017, s: 8, i: 7, c: 6, outcome: 'peace', region: 'Asia'},
    {id: 28, nameAr: 'أزمة الخليج', nameEn: 'Gulf Crisis', year: 2019, s: 7, i: 7, c: 6, outcome: 'peace', region: 'Middle East'}
];

// Statistical calculations
function calculateStats() {
    const warCases = casesData.filter(c => c.outcome === 'war');
    const peaceCases = casesData.filter(c => c.outcome === 'peace');
    
    const allS = casesData.map(c => c.s);
    const allI = casesData.map(c => c.i);
    const allC = casesData.map(c => c.c);
    
    const warS = warCases.map(c => c.s);
    const warI = warCases.map(c => c.i);
    const warC = warCases.map(c => c.c);
    
    const peaceS = peaceCases.map(c => c.s);
    const peaceI = peaceCases.map(c => c.i);
    const peaceC = peaceCases.map(c => c.c);
    
    function mean(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    
    function stdDev(arr) {
        const avg = mean(arr);
        const squareDiffs = arr.map(value => Math.pow(value - avg, 2));
        return Math.sqrt(mean(squareDiffs));
    }
    
    function median(arr) {
        const sorted = [...arr].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }
    
    function correlation(x, y) {
        const n = x.length;
        const meanX = mean(x);
        const meanY = mean(y);
        
        let numerator = 0;
        let denomX = 0;
        let denomY = 0;
        
        for (let i = 0; i < n; i++) {
            const diffX = x[i] - meanX;
            const diffY = y[i] - meanY;
            numerator += diffX * diffY;
            denomX += diffX * diffX;
            denomY += diffY * diffY;
        }
        
        return numerator / Math.sqrt(denomX * denomY);
    }
    
    return {
        overall: {
            s: { mean: mean(allS).toFixed(2), median: median(allS).toFixed(2), std: stdDev(allS).toFixed(2) },
            i: { mean: mean(allI).toFixed(2), median: median(allI).toFixed(2), std: stdDev(allI).toFixed(2) },
            c: { mean: mean(allC).toFixed(2), median: median(allC).toFixed(2), std: stdDev(allC).toFixed(2) }
        },
        war: {
            s: { mean: mean(warS).toFixed(2), median: median(warS).toFixed(2), std: stdDev(warS).toFixed(2) },
            i: { mean: mean(warI).toFixed(2), median: median(warI).toFixed(2), std: stdDev(warI).toFixed(2) },
            c: { mean: mean(warC).toFixed(2), median: median(warC).toFixed(2), std: stdDev(warC).toFixed(2) }
        },
        peace: {
            s: { mean: mean(peaceS).toFixed(2), median: median(peaceS).toFixed(2), std: stdDev(peaceS).toFixed(2) },
            i: { mean: mean(peaceI).toFixed(2), median: median(peaceI).toFixed(2), std: stdDev(peaceI).toFixed(2) },
            c: { mean: mean(peaceC).toFixed(2), median: median(peaceC).toFixed(2), std: stdDev(peaceC).toFixed(2) }
        },
        correlations: {
            overall: {
                s_i: correlation(allS, allI).toFixed(3),
                s_c: correlation(allS, allC).toFixed(3),
                i_c: correlation(allI, allC).toFixed(3)
            },
            war: {
                s_i: correlation(warS, warI).toFixed(3),
                s_c: correlation(warS, warC).toFixed(3),
                i_c: correlation(warI, warC).toFixed(3)
            },
            peace: {
                s_i: correlation(peaceS, peaceI).toFixed(3),
                s_c: correlation(peaceS, peaceC).toFixed(3),
                i_c: correlation(peaceI, peaceC).toFixed(3)
            }
        }
    };
}
