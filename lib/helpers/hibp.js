"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const __1 = require("..");
const HIBP_DATA_CLASSES = {
    "Email addresses": "EMAIL_ADDRESSES",
    "IP addresses": "IP_ADDRESSES",
    "Names": "NAME",
    "Passwords": "PLAIN_PASSWORDS",
    "Device information": "DEVICE_INFORMATION",
    "Usernames": "USER_NAMES",
    "Dates of birth": "BIRTHDATE",
    "Genders": "GENDER",
    "Geographic locations": "LOCATIONS",
    "Employers": "EMPLOYER",
    "Job titles": "OCCUPATIONS",
    "Phone numbers": "PHONE_NUMBERS",
    "Physical addresses": "ADDRESSES",
    "Social media profiles": "SOCIAL_MEDIA_PROFILES",
    "Password hints": "PASSWORD_HINTS",
    "Races": "ETHNICITY",
    "Relationship statuses": "RELATIONSHIPS",
    "Sexual orientations": "SEXUAL_ORIENTATION",
    "Spoken languages": "LANGUAGES",
    "Website activity": "WEBSITE_ACTIVITY",
    "Years of birth": "BIRTHDATE",
    "Address book contacts": "CONTACTS",
    "Apps installed on devices": "DEVICE_INFORMATION",
    "Cellular network names": "DEVICE_INFORMATION",
    "IMEI numbers": "IMEI_NUMBERS",
    "IMSI numbers": "IMSI_NUMBERS",
    "Profile photos": "PHOTOS",
    "Email messages": "PRIVATE_MESSAGES",
    "Homepage URLs": "WEBSITE_ACTIVITY",
    "Instant messenger identities": "SOCIAL_MEDIA_PROFILES",
    "Salutations": "PRIVATE_MESSAGES",
    "Ages": "BIRTHDATE",
    "Auth tokens": "AUTH_TOKENS",
    "Employment statuses": "OCCUPATIONS",
    "Marital statuses": ["FAMILY", "RELATIONSHIPS"],
    "Private messages": "PRIVATE_MESSAGES",
    "Bios": "BIOGRAPHY",
    "Avatars": "PHOTOS",
    "Ethnicities": "ETHNICITY",
    "Payment histories": "PURCHASES",
    "Security questions and answers": "PASSWORD_HINTS",
    "Account balances": "FINANCIAL_DATA",
    "Beauty ratings": "PHYSICAL_ATTRIBUTES",
    "Car ownership statuses": "ASSETS_INFORMATION",
    "Drinking habits": "HABITS",
    "Education levels": "EDUCATION",
    "Home ownership statuses": "ASSETS_INFORMATION",
    "Income levels": "INCOME_LEVEL",
    "Personal descriptions": "BIOGRAPHY",
    "Personal interests": "INTERESTS",
    "Physical attributes": "PHYSICAL_ATTRIBUTES",
    "Smoking habits": "HABITS",
    "Credit cards": "CREDIT_CARD_NUMBERS",
    "Survey results": "WEBSITE_ACTIVITY",
    "Career levels": "OCCUPATIONS",
    "User website URLs": "WEBSITE_ACTIVITY",
    "Browser user agent details": "WEBSITE_ACTIVITY",
    "Purchases": "PURCHASES",
    "Historical passwords": "PLAIN_PASSWORDS",
    "Taxation records": "TAXATION_RECORDS",
    "Payment methods": "PAYMENT_METHODS",
    "Family members' names": "FAMILY",
    "Biometric data": "BIOMETRIC_DATA",
    "Passport numbers": "PASSPORT_NUMBERS",
    "Buying preferences": "CONSUMER_HABITS",
    "Charitable donations": "DONATIONS",
    "Credit status information": "CREDITICIAL_STATUS",
    "Family structure": "FAMILY",
    "Financial investments": "FINANCIAL_DATA",
    "Net worths": "INCOME_LEVEL",
    "Political donations": "DONATIONS",
    "Eating habits": "HABITS",
    "Partial credit card data": "PARTIAL_CREDIT_CARD_DATA",
    "Deceased date": "DECEASED_DATE",
    "Government issued IDs": "GOVERNMENT_ISSUED_IDS",
    "Utility bills": "UTILITY_BILLS",
    "Occupations": "OCCUPATIONS",
    "Religions": "RELIGION",
    "Purchasing habits": "CONSUMER_HABITS",
    "Vehicle details": "ASSETS_INFORMATION",
    "Sexual fetishes": "SEXUAL_PRACTICES",
    "School grades (class levels)": "EDUCATION",
    "Professional skills": "SKILLS",
    "Years of professional experience": "OCCUPATIONS",
    "Bank account numbers": "FINANCIAL_DATA",
    "Social security numbers": "GOVERNMENT_ISSUED_IDS",
    "Social connections": "RELATIONSHIPS",
    "Time zones": "LOCATIONS",
    "Health insurance information": "HEALTH_INSURANSE",
    "Personal health data": "HEALTH",
    "Nicknames": "USER_NAMES",
    "Nationalities": "NATIONALITIES",
    "Recovery email addresses": "EMAIL_ADDRESSES",
    "Deceased statuses": "OTHERS",
    "Astrological signs": "OTHERS",
    "Drug habits": "HABITS",
    "Fitness levels": "HEALTH",
    "Parenting plans": "OTHERS",
    "Political views": "POLITICAL_VIEWS",
    "Travel habits": "INTERESTS",
    "Work habits": "HABITS",
    "Device usage tracking data": "DEVICE_INFORMATION",
    "Age groups": "OTHERS",
    "Chat logs": "PRIVATE_MESSAGES",
    "User statuses": "OTHERS",
    "Home loan information": "FINANCIAL_DATA",
    "Customer feedback": "WEBSITE_ACTIVITY",
    "Financial transactions": "FINANCIAL_DATA",
    "PINs": "PLAIN_PASSWORDS",
    "Credit card CVV": "CREDIT_CARD_CVV",
    "Audio recordings": "AUDIOS",
    "Browsing histories": "WEBSITE_ACTIVITY",
    "Photos": "PHOTOS",
    "SMS messages": "PRIVATE_MESSAGES",
    "Support tickets": "WEBSITE_ACTIVITY",
    "Customer interactions": "WEBSITE_ACTIVITY",
    "MAC addresses": "MAC_ADDRESSES",
    "Reward program balances": "WEBSITE_ACTIVITY"
};
function dataclassesToDataCategoriesText(dataClasses) {
    let result = new Set();
    dataClasses.forEach((v) => {
        let dataClass = HIBP_DATA_CLASSES[v];
        if (Array.isArray(dataClass)) {
            dataClasses.forEach((v) => {
                if (typeof v === 'string')
                    result.add(v);
            });
        }
        else if (typeof dataClass === 'string') {
            if (typeof v === 'string')
                result.add(v);
        }
        else {
            result.add('OTHERS');
        }
    });
    return Array.from(result);
}
function estimateRiskLevel(categories) {
    let maxRiskLevel = __1.LeakipediaRiskLevel.Low;
    const mediumCategories = [
        "EMAIL_ADDRESSES", "BIOMETRIC_DATA", "PHONE_NUMBERS", "ADDRESSES", "PASSWORD_HINTS", "CONTACTS",
        "INTERESTS", "IMEI_NUMBERS", "IMSI_NUMBERS", "INCOME_LEVEL", "PASSPORT_NUMBER",
        "GOVERNMENT_ISSUED_ID", "ASSETS_INFORMATION", "HEALTH", "POLITICAL_VIEWS", "HABITS", "WEBSITE_ACTIVITY"
    ];
    const highCategories = [
        "HASHED_PASSWORDS", "PURCHASES", "DEVICE_INFORMATION", "PHOTOS", "AUDIOS", "VIDEOS",
        "CREDITICIAL_STATUS", "DONATIONS", "UTILITY_BILLS", "PARTIAL_CREDIT_CARD_DATA", "TAXATION_RECORDS",
    ];
    const criticalCategories = [
        "PLAIN_PASSWORDS", "SEXUAL_ORIENTATION", "PRIVATE_MESSAGES",
        "AUTH_TOKENS", "CREDIT_CARD_NUMBERS", "FINANCIAL_DATA", "SEXUAL_PRACTICES",
        "CREDIT_CARD_CVV", "SENSITIVE_PHOTOS", "SENSITIVE_VIDEOS", "CRYPTOCURRENCY_DATA"
    ];
    categories.forEach((v) => {
        if (maxRiskLevel < __1.LeakipediaRiskLevel.Medium && mediumCategories.includes(v))
            maxRiskLevel = __1.LeakipediaRiskLevel.Medium;
        if (maxRiskLevel < __1.LeakipediaRiskLevel.High && highCategories.includes(v))
            maxRiskLevel = __1.LeakipediaRiskLevel.High;
        if (maxRiskLevel < __1.LeakipediaRiskLevel.Critical && criticalCategories.includes(v))
            maxRiskLevel = __1.LeakipediaRiskLevel.Critical;
    });
    return maxRiskLevel;
}
function hIBPBreachToLeakipediaSource(breach) {
    const DATE_FORMAT = 'YYYYMMDD';
    const breachDate = moment_1.default(breach.BreachDate).format(DATE_FORMAT);
    const publicationDate = moment_1.default(breach.AddedDate).format(DATE_FORMAT);
    const entryDate = moment_1.default().format(DATE_FORMAT);
    const dataCategories = dataclassesToDataCategoriesText(breach.DataClasses);
    const riskLevel = estimateRiskLevel(dataCategories);
    return {
        name: breach.Name.toLocaleLowerCase(),
        title: breach.Title,
        website: breach.Domain,
        breachDate,
        publicationDate,
        entryDate,
        lastModifyDate: entryDate,
        totalVictims: breach.PwnCount,
        risk: riskLevel,
        riskText: __1.riskLevelToString(riskLevel),
        logoUrl: breach.LogoPath,
        isVerified: breach.IsVerified,
        isFabricated: breach.IsFabricated,
        isSensitive: breach.IsSensitive,
        isRetired: breach.IsRetired,
        isSpamList: breach.IsSpamList,
        leakedDataCategories: dataCategories,
        summary: "",
        details: breach.Description,
    };
}
exports.hIBPBreachToLeakipediaSource = hIBPBreachToLeakipediaSource;
