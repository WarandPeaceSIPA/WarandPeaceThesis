// Enhanced Citation Network Data - 313 Academic References
// Organized by 12 Research Fields

const citationNetworkData = {
    thesis: {
        id: 0,
        name: 'الشروط المعلوماتية لفاعلية القيد البنيوي',
        nameEn: 'Informational Conditions for Structural Constraint Effectiveness',
        type: 'thesis',
        totalReferences: 313,
        totalCitations: 237,
        researchFields: 12,
        color: '#FFD700'
    },
    
    fields: [
        {
            id: 1,
            name: 'نظرية العلاقات الدولية',
            nameEn: 'International Relations Theory',
            color: '#3B82F6',
            references: 45,
            keyScholars: [
                { name: 'Kenneth Waltz', citations: 12, works: ['Theory of International Politics (1979)'] },
                { name: 'John Mearsheimer', citations: 8, works: ['The Tragedy of Great Power Politics (2001)'] },
                { name: 'Robert Jervis', citations: 7, works: ['Perception and Misperception (1976)'] },
                { name: 'Alexander Wendt', citations: 6, works: ['Social Theory of International Politics (1999)'] },
                { name: 'Stephen Walt', citations: 5, works: ['The Origins of Alliances (1987)'] }
            ]
        },
        {
            id: 2,
            name: 'نظرية المعلومات',
            nameEn: 'Information Theory',
            color: '#10B981',
            references: 38,
            keyScholars: [
                { name: 'Claude Shannon', citations: 10, works: ['A Mathematical Theory of Communication (1948)'] },
                { name: 'Thomas Cover', citations: 7, works: ['Elements of Information Theory (2006)'] },
                { name: 'David MacKay', citations: 6, works: ['Information Theory, Inference and Learning (2003)'] },
                { name: 'Robert Gallager', citations: 5, works: ['Information Theory and Reliable Communication (1968)'] },
                { name: 'Sergio Verdú', citations: 4, works: ['Empirical Processes and Information Theory (1991)'] }
            ]
        },
        {
            id: 3,
            name: 'نظرية الألعاب',
            nameEn: 'Game Theory',
            color: '#8B5CF6',
            references: 32,
            keyScholars: [
                { name: 'John Nash', citations: 9, works: ['Equilibrium Points in N-Person Games (1950)'] },
                { name: 'Thomas Schelling', citations: 8, works: ['The Strategy of Conflict (1960)'] },
                { name: 'Robert Aumann', citations: 7, works: ['Rationality and Knowledge in Game Theory (1995)'] },
                { name: 'Ariel Rubinstein', citations: 6, works: ['Modeling Bounded Rationality (1998)'] },
                { name: 'Drew Fudenberg', citations: 5, works: ['Game Theory (1991)'] }
            ]
        },
        {
            id: 4,
            name: 'الاقتصاد السياسي الدولي',
            nameEn: 'International Political Economy',
            color: '#F59E0B',
            references: 28,
            keyScholars: [
                { name: 'Robert Keohane', citations: 8, works: ['After Hegemony (1984)'] },
                { name: 'Susan Strange', citations: 7, works: ['States and Markets (1988)'] },
                { name: 'Robert Gilpin', citations: 6, works: ['Global Political Economy (2001)'] },
                { name: 'Joseph Nye', citations: 5, works: ['Soft Power (2004)'] },
                { name: 'Peter Katzenstein', citations: 4, works: ['Between Power and Plenty (1978)'] }
            ]
        },
        {
            id: 5,
            name: 'دراسات الحرب والسلام',
            nameEn: 'War and Peace Studies',
            color: '#EF4444',
            references: 42,
            keyScholars: [
                { name: 'James Fearon', citations: 11, works: ['Rationalist Explanations for War (1995)'] },
                { name: 'Barbara Walter', citations: 9, works: ['Reputation and Civil War (2009)'] },
                { name: 'Paul Huth', citations: 7, works: ['Standing Your Ground (1996)'] },
                { name: 'Bruce Russett', citations: 6, works: ['Grasping the Democratic Peace (1993)'] },
                { name: 'Dan Reiter', citations: 5, works: ['Democracies at War (2002)'] }
            ]
        },
        {
            id: 6,
            name: 'التعلم البايزي',
            nameEn: 'Bayesian Learning',
            color: '#EC4899',
            references: 25,
            keyScholars: [
                { name: 'Thomas Bayes', citations: 8, works: ['An Essay towards solving a Problem (1763)'] },
                { name: 'Andrew Gelman', citations: 7, works: ['Bayesian Data Analysis (2013)'] },
                { name: 'Judea Pearl', citations: 6, works: ['Probabilistic Reasoning (1988)'] },
                { name: 'David Spiegelhalter', citations: 5, works: ['Bayesian Approaches to Clinical Trials (2004)'] },
                { name: 'Michael Jordan', citations: 4, works: ['Learning in Graphical Models (1998)'] }
            ]
        },
        {
            id: 7,
            name: 'الدبلوماسية والتفاوض',
            nameEn: 'Diplomacy and Negotiation',
            color: '#06B6D4',
            references: 22,
            keyScholars: [
                { name: 'Roger Fisher', citations: 7, works: ['Getting to Yes (1981)'] },
                { name: 'William Zartman', citations: 6, works: ['The Negotiation Process (1978)'] },
                { name: 'Howard Raiffa', citations: 5, works: ['The Art and Science of Negotiation (1982)'] },
                { name: 'Dean Pruitt', citations: 4, works: ['Negotiation Behavior (1981)'] },
                { name: 'P. Terrence Hopmann', citations: 3, works: ['The Negotiation Process and Resolution (1996)'] }
            ]
        },
        {
            id: 8,
            name: 'الأمن الدولي',
            nameEn: 'International Security',
            color: '#14B8A6',
            references: 27,
            keyScholars: [
                { name: 'Barry Posen', citations: 8, works: ['The Sources of Military Doctrine (1984)'] },
                { name: 'Stephen Van Evera', citations: 7, works: ['Causes of War (1999)'] },
                { name: 'Charles Glaser', citations: 6, works: ['Rational Theory of International Politics (2010)'] },
                { name: 'Robert Art', citations: 5, works: ['The Use of Force (2009)'] },
                { name: 'Michael Desch', citations: 4, works: ['Power and Military Effectiveness (2008)'] }
            ]
        },
        {
            id: 9,
            name: 'الاقتصاد القياسي',
            nameEn: 'Econometrics',
            color: '#84CC16',
            references: 18,
            keyScholars: [
                { name: 'James Stock', citations: 6, works: ['Introduction to Econometrics (2015)'] },
                { name: 'Jeffrey Wooldridge', citations: 5, works: ['Econometric Analysis (2010)'] },
                { name: 'Joshua Angrist', citations: 4, works: ['Mostly Harmless Econometrics (2008)'] },
                { name: 'Guido Imbens', citations: 3, works: ['Causal Inference (2015)'] },
                { name: 'David Card', citations: 2, works: ['Minimum Wages and Employment (1994)'] }
            ]
        },
        {
            id: 10,
            name: 'التاريخ الدبلوماسي',
            nameEn: 'Diplomatic History',
            color: '#A855F7',
            references: 20,
            keyScholars: [
                { name: 'Henry Kissinger', citations: 7, works: ['Diplomacy (1994)'] },
                { name: 'Paul Kennedy', citations: 6, works: ['The Rise and Fall of Great Powers (1987)'] },
                { name: 'John Lewis Gaddis', citations: 5, works: ['The Cold War (2005)'] },
                { name: 'Margaret MacMillan', citations: 4, works: ['Paris 1919 (2001)'] },
                { name: 'Niall Ferguson', citations: 3, works: ['The Pity of War (1998)'] }
            ]
        },
        {
            id: 11,
            name: 'نظرية القرار',
            nameEn: 'Decision Theory',
            color: '#F43F5E',
            references: 12,
            keyScholars: [
                { name: 'Daniel Kahneman', citations: 5, works: ['Thinking, Fast and Slow (2011)'] },
                { name: 'Amos Tversky', citations: 4, works: ['Judgment under Uncertainty (1974)'] },
                { name: 'Herbert Simon', citations: 3, works: ['Models of Bounded Rationality (1982)'] },
                { name: 'Richard Thaler', citations: 2, works: ['Nudge (2008)'] },
                { name: 'Gerd Gigerenzer', citations: 2, works: ['Simple Heuristics (1999)'] }
            ]
        },
        {
            id: 12,
            name: 'المنهجية الكمية',
            nameEn: 'Quantitative Methods',
            color: '#6366F1',
            references: 14,
            keyScholars: [
                { name: 'Gary King', citations: 5, works: ['Designing Social Inquiry (1994)'] },
                { name: 'James Mahoney', citations: 4, works: ['Comparative Historical Analysis (2015)'] },
                { name: 'Bear Braumoeller', citations: 3, works: ['The Great Powers (2012)'] },
                { name: 'Andrew Bennett', citations: 2, works: ['Case Studies and Theory Development (2005)'] },
                { name: 'Colin Elman', citations: 2, works: ['Progress in International Relations Theory (2003)'] }
            ]
        }
    ]
};

// Calculate total scholars
citationNetworkData.totalScholars = citationNetworkData.fields.reduce((sum, field) => sum + field.keyScholars.length, 0);

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = citationNetworkData;
}
