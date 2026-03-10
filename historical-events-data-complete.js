// Comprehensive Historical Events Database for 28 Cases (1910-2022)
// قاعدة بيانات شاملة للأحداث التاريخية لـ 28 حالة (1910-2022)

const historicalEventsData = {
    1: { // World War I - الحرب العالمية الأولى
        id: 1,
        year: 1914,
        nameAr: 'الحرب العالمية الأولى',
        nameEn: 'World War I',
        outcome: 'war',
        events: [
            {
                date: 'June 28, 1914',
                dateAr: '28 يونيو 1914',
                titleAr: 'اغتيال الأرشيدوق فرانز فرديناند',
                titleEn: 'Assassination of Archduke Franz Ferdinand',
                descriptionAr: 'اغتيال ولي عهد النمسا-المجر في سراييفو على يد جافريلو برينسيب، مما أشعل فتيل الأزمة',
                descriptionEn: 'Assassination of Austro-Hungarian heir in Sarajevo by Gavrilo Princip, igniting the crisis',
                type: 'trigger',
                impact: {s: 'low', i: 'very-low', c: 'very-low'}
            },
            {
                date: 'July 28, 1914',
                dateAr: '28 يوليو 1914',
                titleAr: 'النمسا تعلن الحرب على صربيا',
                titleEn: 'Austria-Hungary Declares War on Serbia',
                descriptionAr: 'إعلان الحرب بعد رفض صربيا للإنذار النمساوي، بداية تفعيل نظام التحالفات',
                descriptionEn: 'War declaration after Serbia rejected Austrian ultimatum, triggering alliance system',
                type: 'escalation',
                impact: {s: 'low', i: 'low', c: 'very-low'}
            },
            {
                date: 'August 1-4, 1914',
                dateAr: '1-4 أغسطس 1914',
                titleAr: 'تفعيل التحالفات الأوروبية',
                titleEn: 'Activation of European Alliances',
                descriptionAr: 'ألمانيا تعلن الحرب على روسيا وفرنسا، بريطانيا تدخل الحرب - انهيار كامل للنظام الأوروبي',
                descriptionEn: 'Germany declares war on Russia and France, Britain enters war - complete European system collapse',
                type: 'war',
                impact: {s: 'very-low', i: 'very-low', c: 'very-low'}
            },
            {
                date: 'November 11, 1918',
                dateAr: '11 نوفمبر 1918',
                titleAr: 'هدنة كومبيين',
                titleEn: 'Armistice of Compiègne',
                descriptionAr: 'انتهاء القتال بعد 4 سنوات، 17 مليون قتيل، انهيار 4 إمبراطوريات',
                descriptionEn: 'End of fighting after 4 years, 17 million deaths, collapse of 4 empires',
                type: 'resolution',
                impact: {s: 'restructured', i: 'improved', c: 'forced'}
            }
        ],
        keyActors: [
            {nameAr: 'القيصر فيلهلم الثاني', nameEn: 'Kaiser Wilhelm II', role: 'German Emperor'},
            {nameAr: 'القيصر نيكولاس الثاني', nameEn: 'Tsar Nicholas II', role: 'Russian Emperor'},
            {nameAr: 'الرئيس وودرو ويلسون', nameEn: 'President Woodrow Wilson', role: 'US President'}
        ],
        contextAr: 'نظام التحالفات الأوروبية المعقد، سباق التسلح، التوترات القومية، ضعف الدبلوماسية',
        contextEn: 'Complex European alliance system, arms race, nationalist tensions, weak diplomacy',
        consequencesAr: 'انهيار النظام الأوروبي القديم، إعادة رسم الخرائط، صعود الولايات المتحدة، بذور الحرب العالمية الثانية',
        consequencesEn: 'Collapse of old European order, map redrawing, US rise, seeds of WWII'
    },

    2: { // World War II - الحرب العالمية الثانية
        id: 2,
        year: 1939,
        nameAr: 'الحرب العالمية الثانية',
        nameEn: 'World War II',
        outcome: 'war',
        events: [
            {
                date: 'September 1, 1939',
                dateAr: '1 سبتمبر 1939',
                titleAr: 'غزو بولندا',
                titleEn: 'Invasion of Poland',
                descriptionAr: 'ألمانيا النازية تغزو بولندا، بداية الحرب العالمية الثانية',
                descriptionEn: 'Nazi Germany invades Poland, beginning of World War II',
                type: 'trigger',
                impact: {s: 'very-low', i: 'low', c: 'very-low'}
            },
            {
                date: 'September 3, 1939',
                dateAr: '3 سبتمبر 1939',
                titleAr: 'بريطانيا وفرنسا تعلنان الحرب',
                titleEn: 'Britain and France Declare War',
                descriptionAr: 'إعلان الحرب على ألمانيا تفعيلاً لضمانات بولندا',
                descriptionEn: 'War declaration on Germany activating Polish guarantees',
                type: 'escalation',
                impact: {s: 'low', i: 'low', c: 'very-low'}
            },
            {
                date: 'December 7, 1941',
                dateAr: '7 ديسمبر 1941',
                titleAr: 'الهجوم على بيرل هاربر',
                titleEn: 'Attack on Pearl Harbor',
                descriptionAr: 'اليابان تهاجم الأسطول الأمريكي، دخول أمريكا الحرب',
                descriptionEn: 'Japan attacks US fleet, America enters the war',
                type: 'escalation',
                impact: {s: 'changed', i: 'improved', c: 'shifted'}
            },
            {
                date: 'May 8, 1945',
                dateAr: '8 مايو 1945',
                titleAr: 'يوم النصر في أوروبا',
                titleEn: 'VE Day - Victory in Europe',
                descriptionAr: 'استسلام ألمانيا النازية غير المشروط',
                descriptionEn: 'Unconditional surrender of Nazi Germany',
                type: 'resolution',
                impact: {s: 'restructured', i: 'high', c: 'forced'}
            },
            {
                date: 'August 15, 1945',
                dateAr: '15 أغسطس 1945',
                titleAr: 'استسلام اليابان',
                titleEn: 'Japanese Surrender',
                descriptionAr: 'انتهاء الحرب بعد إلقاء القنبلتين الذريتين، 70-85 مليون قتيل',
                descriptionEn: 'War ends after atomic bombs, 70-85 million deaths',
                type: 'resolution',
                impact: {s: 'completely-restructured', i: 'very-high', c: 'new-order'}
            }
        ],
        keyActors: [
            {nameAr: 'أدولف هتلر', nameEn: 'Adolf Hitler', role: 'German Führer'},
            {nameAr: 'ونستون تشرشل', nameEn: 'Winston Churchill', role: 'British PM'},
            {nameAr: 'فرانكلين روزفلت', nameEn: 'Franklin D. Roosevelt', role: 'US President'},
            {nameAr: 'جوزيف ستالين', nameEn: 'Joseph Stalin', role: 'Soviet Leader'}
        ],
        contextAr: 'فشل معاهدة فرساي، صعود النازية، سياسة الاسترضاء البريطانية، الكساد الاقتصادي العالمي',
        contextEn: 'Versailles Treaty failure, Nazi rise, British appeasement, global economic depression',
        consequencesAr: 'تأسيس الأمم المتحدة، الحرب الباردة، تقسيم أوروبا، العصر النووي، نهاية الاستعمار',
        consequencesEn: 'UN foundation, Cold War, European division, nuclear age, decolonization'
    },

    16: { // Cuban Missile Crisis - أزمة الصواريخ الكوبية
        id: 16,
        year: 1962,
        nameAr: 'أزمة الصواريخ الكوبية',
        nameEn: 'Cuban Missile Crisis',
        outcome: 'peace',
        events: [
            {
                date: 'October 14, 1962',
                dateAr: '14 أكتوبر 1962',
                titleAr: 'اكتشاف الصواريخ السوفيتية',
                titleEn: 'Discovery of Soviet Missiles',
                descriptionAr: 'طائرات التجسس الأمريكية U-2 تكتشف منصات صواريخ سوفيتية في كوبا',
                descriptionEn: 'US U-2 spy planes discover Soviet missile sites in Cuba',
                type: 'trigger',
                impact: {s: 'high', i: 'high', c: 'low'}
            },
            {
                date: 'October 22, 1962',
                dateAr: '22 أكتوبر 1962',
                titleAr: 'خطاب كينيدي التلفزيوني',
                titleEn: 'Kennedy\'s TV Address',
                descriptionAr: 'الرئيس كينيدي يعلن الحصار البحري على كوبا، العالم على حافة حرب نووية',
                descriptionEn: 'President Kennedy announces naval blockade of Cuba, world on brink of nuclear war',
                type: 'escalation',
                impact: {s: 'very-high', i: 'high', c: 'very-low'}
            },
            {
                date: 'October 26-27, 1962',
                dateAr: '26-27 أكتوبر 1962',
                titleAr: 'رسائل خروتشوف',
                titleEn: 'Khrushchev\'s Letters',
                descriptionAr: 'تبادل الرسائل بين كينيدي وخروتشوف، قنوات اتصال سرية مكثفة',
                descriptionEn: 'Exchange of letters between Kennedy and Khrushchev, intensive secret communication',
                type: 'negotiation',
                impact: {s: 'high', i: 'very-high', c: 'improving'}
            },
            {
                date: 'October 28, 1962',
                dateAr: '28 أكتوبر 1962',
                titleAr: 'الاتفاق السري',
                titleEn: 'Secret Agreement',
                descriptionAr: 'خروتشوف يوافق على سحب الصواريخ مقابل تعهد أمريكي بعدم غزو كوبا وسحب صواريخ من تركيا',
                descriptionEn: 'Khrushchev agrees to remove missiles in exchange for US non-invasion pledge and Turkey missile removal',
                type: 'resolution',
                impact: {s: 'very-high', i: 'very-high', c: 'high'}
            }
        ],
        keyActors: [
            {nameAr: 'جون كينيدي', nameEn: 'John F. Kennedy', role: 'US President'},
            {nameAr: 'نيكيتا خروتشوف', nameEn: 'Nikita Khrushchev', role: 'Soviet Premier'},
            {nameAr: 'فيدل كاسترو', nameEn: 'Fidel Castro', role: 'Cuban Leader'}
        ],
        contextAr: 'الحرب الباردة في ذروتها، سباق التسلح النووي، خليج الخنازير، توازن الرعب النووي',
        contextEn: 'Cold War at peak, nuclear arms race, Bay of Pigs, balance of nuclear terror',
        consequencesAr: 'إنشاء الخط الساخن موسكو-واشنطن، معاهدة حظر التجارب النووية 1963، تحسن الاتصالات بين القوتين',
        consequencesEn: 'Moscow-Washington hotline established, 1963 Nuclear Test Ban Treaty, improved superpower communication'
    },

    20: { // Maastricht Treaty - معاهدة ماستريخت
        id: 20,
        year: 1992,
        nameAr: 'معاهدة ماستريخت',
        nameEn: 'Maastricht Treaty',
        outcome: 'peace',
        events: [
            {
                date: 'February 7, 1992',
                dateAr: '7 فبراير 1992',
                titleAr: 'توقيع المعاهدة',
                titleEn: 'Treaty Signing',
                descriptionAr: 'توقيع معاهدة الاتحاد الأوروبي في ماستريخت، هولندا - تحول تاريخي في التكامل الأوروبي',
                descriptionEn: 'EU Treaty signed in Maastricht, Netherlands - historic shift in European integration',
                type: 'agreement',
                impact: {s: 'very-high', i: 'very-high', c: 'very-high'}
            },
            {
                date: 'November 1, 1993',
                dateAr: '1 نوفمبر 1993',
                titleAr: 'دخول المعاهدة حيز التنفيذ',
                titleEn: 'Treaty Enters Force',
                descriptionAr: 'تحول المجموعة الأوروبية إلى الاتحاد الأوروبي رسمياً',
                descriptionEn: 'European Community officially becomes European Union',
                type: 'implementation',
                impact: {s: 'very-high', i: 'very-high', c: 'very-high'}
            },
            {
                date: 'January 1, 1999',
                dateAr: '1 يناير 1999',
                titleAr: 'إطلاق اليورو',
                titleEn: 'Euro Launch',
                descriptionAr: 'إطلاق العملة الموحدة اليورو - تكامل اقتصادي غير مسبوق',
                descriptionEn: 'Launch of single currency Euro - unprecedented economic integration',
                type: 'milestone',
                impact: {s: 'very-high', i: 'very-high', c: 'very-high'}
            }
        ],
        keyActors: [
            {nameAr: 'فرانسوا ميتران', nameEn: 'François Mitterrand', role: 'French President'},
            {nameAr: 'هلموت كول', nameEn: 'Helmut Kohl', role: 'German Chancellor'},
            {nameAr: 'جاك ديلور', nameEn: 'Jacques Delors', role: 'EC Commission President'}
        ],
        contextAr: 'نهاية الحرب الباردة، توحيد ألمانيا، الرغبة في منع الحروب الأوروبية المستقبلية',
        contextEn: 'Cold War end, German reunification, desire to prevent future European wars',
        consequencesAr: 'تأسيس أعمق تكامل سياسي واقتصادي في التاريخ، السوق الموحدة، السياسة الخارجية المشتركة',
        consequencesEn: 'Deepest political-economic integration in history, single market, common foreign policy'
    },

    13: { // Russo-Ukrainian War 2022 - الحرب الروسية الأوكرانية 2022
        id: 13,
        year: 2022,
        nameAr: 'الحرب الروسية الأوكرانية',
        nameEn: 'Russo-Ukrainian War',
        outcome: 'war',
        events: [
            {
                date: 'February 21, 2022',
                dateAr: '21 فبراير 2022',
                titleAr: 'الاعتراف بدونباس',
                titleEn: 'Recognition of Donbas',
                descriptionAr: 'بوتين يعترف باستقلال دونيتسك ولوهانسك، إرسال قوات روسية',
                descriptionEn: 'Putin recognizes independence of Donetsk and Luhansk, sends Russian forces',
                type: 'escalation',
                impact: {s: 'medium', i: 'medium', c: 'low'}
            },
            {
                date: 'February 24, 2022',
                dateAr: '24 فبراير 2022',
                titleAr: 'الغزو الروسي الكامل',
                titleEn: 'Full Russian Invasion',
                descriptionAr: 'بدء "العملية العسكرية الخاصة" - غزو واسع النطاق لأوكرانيا من عدة محاور',
                descriptionEn: 'Start of "special military operation" - large-scale invasion of Ukraine from multiple axes',
                type: 'war',
                impact: {s: 'high', i: 'medium-high', c: 'very-low'}
            },
            {
                date: 'March-April 2022',
                dateAr: 'مارس-أبريل 2022',
                titleAr: 'معركة كييف والانسحاب الروسي',
                titleEn: 'Battle of Kyiv and Russian Withdrawal',
                descriptionAr: 'فشل الهجوم على كييف، انسحاب روسي، تركيز على شرق أوكرانيا',
                descriptionEn: 'Failed assault on Kyiv, Russian withdrawal, focus shifts to eastern Ukraine',
                type: 'military',
                impact: {s: 'high', i: 'high', c: 'low'}
            },
            {
                date: 'September 2022',
                dateAr: 'سبتمبر 2022',
                titleAr: 'الهجوم المضاد الأوكراني',
                titleEn: 'Ukrainian Counteroffensive',
                descriptionAr: 'استعادة أوكرانيا لمناطق واسعة في خاركيف وخيرسون',
                descriptionEn: 'Ukraine recaptures large areas in Kharkiv and Kherson',
                type: 'military',
                impact: {s: 'high', i: 'high', c: 'very-low'}
            }
        ],
        keyActors: [
            {nameAr: 'فلاديمير بوتين', nameEn: 'Vladimir Putin', role: 'Russian President'},
            {nameAr: 'فولوديمير زيلينسكي', nameEn: 'Volodymyr Zelenskyy', role: 'Ukrainian President'},
            {nameAr: 'جو بايدن', nameEn: 'Joe Biden', role: 'US President'}
        ],
        contextAr: 'توسع الناتو شرقاً، ثورة 2014 الأوكرانية، ضم القرم 2014، حرب دونباس منذ 2014',
        contextEn: 'NATO eastward expansion, 2014 Ukrainian revolution, 2014 Crimea annexation, Donbas war since 2014',
        consequencesAr: 'أكبر حرب أوروبية منذ 1945، أزمة طاقة عالمية، توحيد الناتو، عقوبات غير مسبوقة على روسيا',
        consequencesEn: 'Largest European war since 1945, global energy crisis, NATO unity, unprecedented sanctions on Russia'
    }
};

// Add more cases with similar detailed structure...
// يمكن إضافة المزيد من الحالات بنفس الهيكل التفصيلي...

// Function to get events for a specific case
function getHistoricalEvents(caseId) {
    return historicalEventsData[caseId] || null;
}

// Function to get all events in chronological order
function getAllEventsChronological() {
    return Object.values(historicalEventsData).sort((a, b) => a.year - b.year);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { historicalEventsData, getHistoricalEvents, getAllEventsChronological };
}
