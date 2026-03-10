# موقع رسالة الماجستير - الشروط المعلوماتية لفاعلية القيد البنيوي
# Master's Thesis Website - Informational Conditions for Structural Constraint Effectiveness

[![Status](https://img.shields.io/badge/Status-Live-success)](https://dsj8sie5.scispace.co)
[![Version](https://img.shields.io/badge/Version-2.0-blue)](https://dsj8sie5.scispace.co)
[![License](https://img.shields.io/badge/License-DAR_AL_HEKMA_UNIVERSITY-orange)](https://dsj8sie5.scispace.co)

---

## 📋 نظرة عامة / Overview

موقع إلكتروني تفاعلي شامل لرسالة ماجستير في العلاقات الدولية يدمج الواقعية البنيوية ونظريات المعلومات لتحليل 28 حالة تاريخية (1910-2022).

**Interactive comprehensive website for a Master's thesis in International Relations integrating Structural Realism and Information Theories to analyze 28 historical cases (1910-2022).**

---

## 🎯 المميزات الرئيسية / Key Features

### 1. 🌐 ثنائي اللغة / Bilingual
- ✅ دعم كامل للغة العربية والإنجليزية
- ✅ Full support for Arabic and English
- ✅ الإنجليزية هي اللغة الافتراضية / English is the default language

### 2. 📊 تحليلات تفاعلية / Interactive Analytics
- **6 رسوم بيانية تفاعلية** / 6 Interactive Charts (Chart.js)
- **9 إنفوجرافيكات شاملة** / 9 Comprehensive Infographics
- **شبكة استشهادات** / Citation Network (313 references)
- **خريطتان تفاعليتان** / 2 Interactive Maps (Leaflet.js)

### 3. 🗺️ خرائط تفاعلية / Interactive Maps
- **الخريطة العالمية**: توزيع الحالات جغرافياً
- **خريطة هيكل النظام الدولي** ⭐ جديد!:
  - خط زمني تفاعلي (1910-2022)
  - توازن المتغيرات (S, I, C)
  - تصفية ذكية (حرب/سلام)
  - رسوم بيانية مباشرة

### 4. 📚 قاعدة بيانات شاملة / Comprehensive Database
- **28 حالة تاريخية** / 28 Historical Cases
- **313 مرجع أكاديمي** / 313 Academic References
- **12 مجال بحثي** / 12 Research Fields
- **3 متغيرات رئيسية** / 3 Main Variables (S, I, C)

---

## 🚀 البدء السريع / Quick Start

### التنزيل / Download
```bash
# Download the compressed file
wget /home/sandbox/thesis-website-complete-20260309.tar.gz

# Extract
tar -xzf thesis-website-complete-20260309.tar.gz

# Navigate to project
cd thesis-enhanced-website
```

### الفتح المحلي / Open Locally
```bash
# Simply open any HTML file in your browser
open index.html  # Mac
start index.html # Windows
xdg-open index.html # Linux
```

### النشر على خادم / Deploy to Server
```bash
# Upload to your web server
scp -r thesis-enhanced-website/* user@server:/var/www/html/

# Or use FTP, GitHub Pages, Netlify, Vercel, etc.
```

---

## 📂 هيكل المشروع / Project Structure

```
thesis-enhanced-website/
├── index.html                          # الصفحة الرئيسية (إنجليزي)
├── index-ar.html                       # الصفحة الرئيسية (عربي)
├── index-en.html                       # الصفحة الرئيسية (إنجليزي)
├── dashboard-hub.html                  # مركز لوحة التحكم (عربي)
├── dashboard-hub-en.html               # مركز لوحة التحكم (إنجليزي)
├── quantitative-analysis.html          # التحليل الكمي (عربي)
├── quantitative-analysis-en.html       # التحليل الكمي (إنجليزي)
├── research-infographics.html          # الإنفوجرافيكات (عربي)
├── research-infographics-en.html       # الإنفوجرافيكات (إنجليزي)
├── citation-network.html               # شبكة الاستشهادات (عربي)
├── citation-network-en.html            # شبكة الاستشهادات (إنجليزي)
├── interactive-map.html                # الخريطة العالمية (عربي)
├── interactive-map-en.html             # الخريطة العالمية (إنجليزي)
├── interactive-system-structure.html   # خريطة هيكل النظام (عربي) ⭐
├── interactive-system-structure-en.html# خريطة هيكل النظام (إنجليزي) ⭐
├── data-28-cases.js                    # بيانات الحالات
└── dark-theme.css                      # ملف الثيم (غير مفعّل)
```

---

## 🛠️ التقنيات المستخدمة / Technologies Used

### Frontend
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) HTML5
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) Tailwind CSS
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) JavaScript ES6+

### Libraries
- ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white) Chart.js 4.4.0
- ![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white) Leaflet.js 1.9.4
- ![D3.js](https://img.shields.io/badge/D3.js-F9A03C?style=flat&logo=d3dotjs&logoColor=white) D3.js
- ![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=flat&logo=fontawesome&logoColor=white) Font Awesome 6.4.0

---

## 📊 إحصائيات المشروع / Project Statistics

| العنصر / Item | العدد / Count |
|--------------|--------------|
| صفحات HTML / HTML Pages | 22 |
| حالات تاريخية / Historical Cases | 28 |
| مراجع أكاديمية / Academic References | 313 |
| رسوم بيانية تفاعلية / Interactive Charts | 6 |
| إنفوجرافيكات / Infographics | 9 |
| خرائط تفاعلية / Interactive Maps | 2 |
| أيقونات Font Awesome / Font Awesome Icons | 301 |
| الحجم المضغوط / Compressed Size | 103 KB |

---

## 🌐 الروابط المباشرة / Live Links

### 🏠 الصفحة الرئيسية / Home
- [English (Default)](https://dsj8sie5.scispace.co/index.html)
- [العربية](https://dsj8sie5.scispace.co/index-ar.html)

### 📊 التحليل الكمي / Quantitative Analysis
- [English](https://dsj8sie5.scispace.co/quantitative-analysis-en.html)
- [العربية](https://dsj8sie5.scispace.co/quantitative-analysis.html)

### 🗺️ الخرائط التفاعلية / Interactive Maps
- [خريطة هيكل النظام الدولي (عربي)](https://dsj8sie5.scispace.co/interactive-system-structure.html) ⭐ **جديد!**
- [System Structure Map (English)](https://dsj8sie5.scispace.co/interactive-system-structure-en.html) ⭐ **New!**
- [الخريطة العالمية (عربي)](https://dsj8sie5.scispace.co/interactive-map.html)
- [World Map (English)](https://dsj8sie5.scispace.co/interactive-map-en.html)

### 🎨 الإنفوجرافيكات / Infographics
- [English](https://dsj8sie5.scispace.co/research-infographics-en.html)
- [العربية](https://dsj8sie5.scispace.co/research-infographics.html)

### 🔗 شبكة الاستشهادات / Citation Network
- [English](https://dsj8sie5.scispace.co/citation-network-en.html)
- [العربية](https://dsj8sie5.scispace.co/citation-network.html)

---

## 👥 الفريق / Team

### الباحث / Researcher
**زاهر العيسى** / **Zaher Al-Issa**

### المشرف الأكاديمي / Academic Supervisor
**د. صالح الحربي** / **Prof. Saleh Al-Harbi**

### المستشار الأكاديمي / Academic Advisor
**د. دارين عبدالمحسن** / **Dr. Dareen Al-Abdul Mohsen**

### الجامعة / University
**جامعة دار الحكمة** / **DAR AL-HEKMA UNIVERSITY**  
قسم العلاقات الدولية والدبلوماسية  
International Relations & Diplomacy Department

---

## 📝 الحقوق / License

```
© 2026 DAR AL-HEKMA UNIVERSITY | جامعة دار الحكمة
جميع الحقوق محفوظة | All Rights Reserved
```

النصوص، الرسوم البيانية، التحليلات، قاعدة البيانات، والنماذج الرياضية محمية بموجب قوانين الملكية الفكرية.

**Texts, Graphics, Analysis, Database, and Mathematical Models are protected under Intellectual Property Laws.**

---

## 📞 الدعم / Support

للاستفسارات والدعم الفني / For inquiries and technical support:
- **Email**: support@scispace.com
- **Intercom**: Available on website

---

## 🎯 الحالة / Status

✅ **مكتمل وجاهز للنشر** / **Complete and Ready for Deployment**

- **Version**: 2.0
- **Last Updated**: 2026-03-09
- **Status**: Live and Active
- **URL**: https://dsj8sie5.scispace.co

---

## 🚀 التحديثات الأخيرة / Recent Updates

### 2026-03-09
- ✅ إضافة خريطة هيكل النظام الدولي التفاعلية
- ✅ تحديث قاعدة البيانات إلى 313 مرجع
- ✅ تحديث بطاقة "النسبة المئوية" إلى "تحت التجارب"
- ✅ إضافة زر القفز السريع للرسوم البيانية
- ✅ استعادة الألوان الأصلية (إزالة الثيم الداكن)

### 2026-03-09 Updates
- ✅ Added Interactive System Structure Map
- ✅ Updated database to 313 references
- ✅ Updated "Percentage" card to "Under Testing"
- ✅ Added Quick Jump button to charts
- ✅ Restored original colors (removed dark theme)

---

## 📦 التنزيل / Download

**ملف المشروع الكامل** / **Complete Project File**:
```
thesis-website-complete-20260309.tar.gz (103 KB)
```

**الموقع المباشر** / **Live Site**:
```
https://dsj8sie5.scispace.co
```

---

## 🙏 شكر وتقدير / Acknowledgments

شكر خاص لـ:
- جامعة دار الحكمة
- قسم العلاقات الدولية والدبلوماسية
- المشرف الأكاديمي والمستشار
- SciSpace Platform

Special thanks to:
- Dar Al-Hekma University
- International Relations & Diplomacy Department
- Academic Supervisor and Advisor
- SciSpace Platform

---

**بناء بواسطة** / **Built with** ❤️ **من أجل البحث الأكاديمي** / **for Academic Research**

**تاريخ الإنشاء** / **Created**: 2026-03-09  
**الإصدار** / **Version**: 2.0  
**الحالة** / **Status**: ✅ Live
