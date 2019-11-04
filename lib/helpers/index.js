"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leakipedia_types_1 = require("../modules/leakipedia/leakipedia.types");
function uniq(stringList) {
    return stringList.sort().filter(function (item, pos, sl) {
        return (item != '' && (!pos || item != sl[pos - 1]));
    });
}
function stringToLeakedDataCategory(s, exceptionOnError = false) {
    switch (s.trim().toUpperCase()) {
        // Critical
        case "CRYPTOCURRENCY_DATA": return leakipedia_types_1.LeakipediaLeakedDataCategory.CryptocurrencyData;
        case "CREDIT_CARD_CVV": return leakipedia_types_1.LeakipediaLeakedDataCategory.CreditCardCVV;
        case "CREDIT_CARD_NUMBERS": return leakipedia_types_1.LeakipediaLeakedDataCategory.CreditCardNumbers;
        case "PLAIN_PASSWORDS": return leakipedia_types_1.LeakipediaLeakedDataCategory.PlainPasswords;
        case "AUTH_TOKENS": return leakipedia_types_1.LeakipediaLeakedDataCategory.AuthTokens;
        case "KEYBOARD_LOGS": return leakipedia_types_1.LeakipediaLeakedDataCategory.KeyboardLogs;
        case "SENSITIVE_PHOTOS": return leakipedia_types_1.LeakipediaLeakedDataCategory.SensitivePhotos;
        case "SENSITIVE_VIDEOS": return leakipedia_types_1.LeakipediaLeakedDataCategory.SensitiveVideos;
        case "SEXUAL_ORIENTATION": return leakipedia_types_1.LeakipediaLeakedDataCategory.SexualOrientation;
        case "SEXUAL_PRACTICES": return leakipedia_types_1.LeakipediaLeakedDataCategory.SexualPractices;
        case "FINANCIAL_DATA": return leakipedia_types_1.LeakipediaLeakedDataCategory.FinancialData;
        case "PRIVATE_MESSAGES": return leakipedia_types_1.LeakipediaLeakedDataCategory.PrivateMessages;
        // High
        case "HASHED_PASSWORDS": return leakipedia_types_1.LeakipediaLeakedDataCategory.HashedPasswords;
        case "DEVICE_INFORMATION": return leakipedia_types_1.LeakipediaLeakedDataCategory.DeviceInformation;
        case "PURCHASES": return leakipedia_types_1.LeakipediaLeakedDataCategory.Purchases;
        case "PHOTOS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Photos;
        case "VIDEOS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Videos;
        case "AUDIOS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Audios;
        case "PARTIAL_CREDIT_CARD_DATA": return leakipedia_types_1.LeakipediaLeakedDataCategory.PartialCreditCardData;
        case "CREDITICIAL_STATUS": return leakipedia_types_1.LeakipediaLeakedDataCategory.CrediticialStatus;
        case "DONATIONS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Donations;
        case "TAXATION_RECORDS": return leakipedia_types_1.LeakipediaLeakedDataCategory.TaxationRecords;
        case "UTILITY_BILLS": return leakipedia_types_1.LeakipediaLeakedDataCategory.UtilityBills;
        // Medium
        case "PASSWORD_HINTS": return leakipedia_types_1.LeakipediaLeakedDataCategory.PasswordHints;
        case "ADDRESSES": return leakipedia_types_1.LeakipediaLeakedDataCategory.Addresses;
        case "PASSPORT_NUMBERS": return leakipedia_types_1.LeakipediaLeakedDataCategory.PassportNumbers;
        case "GOVERMENT_ISSUED_IDS": return leakipedia_types_1.LeakipediaLeakedDataCategory.GovermentIssuedIDs;
        case "BIOMETRIC_DATA": return leakipedia_types_1.LeakipediaLeakedDataCategory.BiometricData;
        case "PHONE_NUMBERS": return leakipedia_types_1.LeakipediaLeakedDataCategory.PhoneNumbers;
        case "EMAIL_ADDRESSES": return leakipedia_types_1.LeakipediaLeakedDataCategory.EmailAddresses;
        case "ASSETS_INFORMATION": return leakipedia_types_1.LeakipediaLeakedDataCategory.AssetsInformation;
        case "INCOME_LEVEL": return leakipedia_types_1.LeakipediaLeakedDataCategory.IncomeLevel;
        case "CONTACTS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Contacts;
        case "HEALTH": return leakipedia_types_1.LeakipediaLeakedDataCategory.Health;
        case "POLITICAL_VIEWS": return leakipedia_types_1.LeakipediaLeakedDataCategory.PoliticalViews;
        case "HABITS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Habits;
        case "INTERESTS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Interests;
        case "IMEI_NUMBERS": return leakipedia_types_1.LeakipediaLeakedDataCategory.IMEINumbers;
        case "IMSI_NUMBERS": return leakipedia_types_1.LeakipediaLeakedDataCategory.IMSINumbers;
        case "WEBSITE_ACTIVITY": return leakipedia_types_1.LeakipediaLeakedDataCategory.WebsiteActivity;
        // Low
        case "NAME": return leakipedia_types_1.LeakipediaLeakedDataCategory.Name;
        case "GENDER": return leakipedia_types_1.LeakipediaLeakedDataCategory.Gender;
        case "BIRTHDATE": return leakipedia_types_1.LeakipediaLeakedDataCategory.Birthdate;
        case "LANGUAGES": return leakipedia_types_1.LeakipediaLeakedDataCategory.Languages;
        case "NATIONALITIES": return leakipedia_types_1.LeakipediaLeakedDataCategory.Nationalities;
        case "LOCATIONS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Locations;
        case "ETHNICITY": return leakipedia_types_1.LeakipediaLeakedDataCategory.Ethnicity;
        case "PHYSICAL_ATTRIBUTES": return leakipedia_types_1.LeakipediaLeakedDataCategory.PhysicalAttributes;
        case "SKILLS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Skills;
        case "RELIGION": return leakipedia_types_1.LeakipediaLeakedDataCategory.Religion;
        case "DECEASED_DATE": return leakipedia_types_1.LeakipediaLeakedDataCategory.DeceasedDate;
        case "SOCIAL_MEDIA_PROFILES": return leakipedia_types_1.LeakipediaLeakedDataCategory.SocialMediaProfiles;
        case "USER_NAMES": return leakipedia_types_1.LeakipediaLeakedDataCategory.UserNames;
        case "LOGIN_NAMES": return leakipedia_types_1.LeakipediaLeakedDataCategory.LoginNames;
        case "CONSUMER_HABITS": return leakipedia_types_1.LeakipediaLeakedDataCategory.ConsumerHabits;
        case "PAYMENT_METHODS": return leakipedia_types_1.LeakipediaLeakedDataCategory.PaymentMethods;
        case "RELATIONSHIPS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Relationships;
        case "FAMILY": return leakipedia_types_1.LeakipediaLeakedDataCategory.Family;
        case "EDUCATION": return leakipedia_types_1.LeakipediaLeakedDataCategory.Education;
        case "OCCUPATIONS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Occupations;
        case "EMPLOYER": return leakipedia_types_1.LeakipediaLeakedDataCategory.Employer;
        case "IP_ADDRESSES": return leakipedia_types_1.LeakipediaLeakedDataCategory.IPAddresses;
        case "MAC_ADDRESSES": return leakipedia_types_1.LeakipediaLeakedDataCategory.MACAddresses;
        case "OTHERS": return leakipedia_types_1.LeakipediaLeakedDataCategory.Others;
        default:
            if (exceptionOnError)
                throw new Error("Invalid data category string");
            else
                return leakipedia_types_1.LeakipediaLeakedDataCategory.Others;
    }
}
exports.stringToLeakedDataCategory = stringToLeakedDataCategory;
function leakedDataCategoryToString(category, exceptionOnError = false) {
    switch (category) {
        // Critical
        case leakipedia_types_1.LeakipediaLeakedDataCategory.CryptocurrencyData: return "CRYPTOCURRENCY_DATA";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.CreditCardCVV: return "CREDIT_CARD_CVV";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.CreditCardNumbers: return "CREDIT_CARD_NUMBERS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PlainPasswords: return "PLAIN_PASSWORDS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.AuthTokens: return "AUTH_TOKENS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.KeyboardLogs: return "KEYBOARD_LOGS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.SensitivePhotos: return "SENSITIVE_PHOTOS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.SensitiveVideos: return "SENSITIVE_VIDEOS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.SexualOrientation: return "SEXUAL_ORIENTATION";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.SexualPractices: return "SEXUAL_PRACTICES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.FinancialData: return "FINANCIAL_DATA";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PrivateMessages: return "PRIVATE_MESSAGES";
        // High
        case leakipedia_types_1.LeakipediaLeakedDataCategory.HashedPasswords: return "HASHED_PASSWORDS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.DeviceInformation: return "DEVICE_INFORMATION";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Purchases: return "PURCHASES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Photos: return "PHOTOS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Videos: return "VIDEOS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Audios: return "AUDIOS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PartialCreditCardData: return "PARTIAL_CREDIT_CARD_DATA";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.CrediticialStatus: return "CREDITICIAL_STATUS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Donations: return "DONATIONS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.TaxationRecords: return "TAXATION_RECORDS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.UtilityBills: return "UTILITY_BILLS";
        // Medium
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PasswordHints: return "PASSWORD_HINTS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Addresses: return "ADDRESSES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PassportNumbers: return "PASSPORT_NUMBERS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.GovermentIssuedIDs: return "GOVERMENT_ISSUED_IDS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.BiometricData: return "BIOMETRIC_DATA";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PhoneNumbers: return "PHONE_NUMBERS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.EmailAddresses: return "EMAIL_ADDRESSES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.AssetsInformation: return "ASSETS_INFORMATION";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.IncomeLevel: return "INCOME_LEVEL";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Contacts: return "CONTACTS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Health: return "HEALTH";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PoliticalViews: return "POLITICAL_VIEWS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Habits: return "HABITS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Interests: return "INTERESTS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.IMEINumbers: return "IMEI_NUMBERS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.IMSINumbers: return "IMSI_NUMBERS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.WebsiteActivity: return "WEBSITE_ACTIVITY";
        // Low
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Name: return "NAME";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Gender: return "GENDER";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Birthdate: return "BIRTHDATE";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Languages: return "LANGUAGES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Nationalities: return "NATIONALITIES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Locations: return "LOCATIONS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Ethnicity: return "ETHNICITY";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PhysicalAttributes: return "PHYSICAL_ATTRIBUTES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Skills: return "SKILLS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Religion: return "RELIGION";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.DeceasedDate: return "DECEASED_DATE";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.SocialMediaProfiles: return "SOCIAL_MEDIA_PROFILES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.UserNames: return "USER_NAMES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.LoginNames: return "LOGIN_NAMES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.ConsumerHabits: return "CONSUMER_HABITS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.PaymentMethods: return "PAYMENT_METHODS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Relationships: return "RELATIONSHIPS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Family: return "FAMILY";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Education: return "EDUCATION";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Occupations: return "OCCUPATIONS";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Employer: return "EMPLOYER";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.IPAddresses: return "IP_ADDRESSES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.MACAddresses: return "MAC_ADDRESSES";
        case leakipedia_types_1.LeakipediaLeakedDataCategory.Others: return "OTHERS";
        default:
            if (exceptionOnError)
                throw new Error("Invalid data category");
            else
                return category.toString();
    }
}
exports.leakedDataCategoryToString = leakedDataCategoryToString;
function stringToRiskLevel(s, exceptionOnError = false) {
    switch (s.trim().toUpperCase()) {
        case "LOW": return leakipedia_types_1.LeakipediaRiskLevel.Low;
        case "MEDIUM": return leakipedia_types_1.LeakipediaRiskLevel.Medium;
        case "HIGH": return leakipedia_types_1.LeakipediaRiskLevel.High;
        case "CRITICAL": return leakipedia_types_1.LeakipediaRiskLevel.Critical;
        default:
            if (exceptionOnError)
                throw new Error("Invalid risk level string");
            else
                return leakipedia_types_1.LeakipediaRiskLevel.None;
    }
}
exports.stringToRiskLevel = stringToRiskLevel;
function riskLevelToString(risk, exceptionOnError = false) {
    switch (risk) {
        case leakipedia_types_1.LeakipediaRiskLevel.None: return "NONE";
        case leakipedia_types_1.LeakipediaRiskLevel.Low: return "LOW";
        case leakipedia_types_1.LeakipediaRiskLevel.Medium: return "MEDIUM";
        case leakipedia_types_1.LeakipediaRiskLevel.High: return "HIGH";
        case leakipedia_types_1.LeakipediaRiskLevel.Critical: return "CRITICAL";
        default:
            if (exceptionOnError)
                throw new Error("Invalid risk level");
            else
                return risk.toString();
    }
}
exports.riskLevelToString = riskLevelToString;
function stringsToDataCategories(strings) {
    let result = [];
    if (Array.isArray(strings)) {
        let set = new Set();
        strings.map((item) => {
            try {
                const ldc = stringToLeakedDataCategory(item, false);
                set.add(ldc);
            }
            finally {
            }
        });
        result = [...set];
    }
    result.sort(function (a, b) {
        return a - b;
    });
    return result;
}
exports.stringsToDataCategories = stringsToDataCategories;
function dataCategoriesToStrings(dataCategories) {
    let result = new Set();
    if (Array.isArray(dataCategories)) {
        let sortedDC = [...dataCategories];
        sortedDC.sort(function (a, b) {
            return a - b;
        });
        sortedDC.map((item) => {
            try {
                const ldc = leakedDataCategoryToString(item, false);
                result.add(ldc);
            }
            finally {
            }
        });
    }
    return [...result];
}
exports.dataCategoriesToStrings = dataCategoriesToStrings;
const VALIDATE_MAILBOX_REGEXP = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*$/;
const VALIDATE_DOMAIN_REGEXP = /^[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
function validateMailbox(mailbox) {
    if (typeof mailbox !== "string")
        return false;
    const ml = mailbox.length;
    if (ml < 1 || ml > 64)
        return false;
    return VALIDATE_MAILBOX_REGEXP.test(mailbox);
}
exports.validateMailbox = validateMailbox;
function validateDomain(domain) {
    if (typeof domain !== "string")
        return false;
    const dl = domain.length;
    if (dl < 2 || dl > 255)
        return false;
    if (domain[dl - 1] === ".")
        return false;
    return VALIDATE_DOMAIN_REGEXP.test(domain);
}
exports.validateDomain = validateDomain;
function validateEmail(email) {
    if (typeof email !== "string")
        return false;
    if (email.length > 254)
        return false;
    var parts = email.split("@");
    if (parts.length != 2)
        return false;
    if (parts[0].length > 64)
        return false;
    return validateMailbox(parts[0]) && validateDomain(parts[1]);
}
exports.validateEmail = validateEmail;
function leakipediaReportQueryParser(query) {
    let result = {
        error: true,
    };
    if (typeof query === 'string') {
        let slices = uniq(query
            .toLowerCase() // Lowercase all query
            .replace(/[,;\r\n]+/g, " ")
            .split(" ") // Split pieces
            .map(s => s.trim()) // Trim all pieces
        ); // Sort and remove duplicated
        if (slices.length > 0) {
            let domains = 0;
            let emails = 0;
            for (let slice of slices) {
                let parts = slice.split("@");
                const pl = parts.length;
                if (pl == 1) {
                    if (emails > 0 || domains > 0)
                        return result;
                    if (!validateDomain(parts[0]))
                        return result;
                    domains++;
                }
                else if (pl == 2) {
                    if (domains > 0)
                        return result;
                    if (!validateMailbox(parts[0]))
                        return result;
                    if (!validateDomain(parts[1]))
                        return result;
                    emails++;
                }
                else
                    return result;
            }
            if (emails > 0) {
                result.emails = slices;
            }
            else {
                result.domain = slices[0];
            }
            result.error = false;
            return result;
        }
    }
    return result;
}
exports.leakipediaReportQueryParser = leakipediaReportQueryParser;
