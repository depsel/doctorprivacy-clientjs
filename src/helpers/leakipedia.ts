import { LeakipediaRiskLevel, LeakipediaLeakedDataCategory } from '../modules/leakipedia/leakipedia.types';

export type LeakipediaReportQuery = {
  error: boolean;
  emails?: string[];
  domain?: string;
}

function uniq(stringList: string[]) {
  return stringList.sort().filter(function(item, pos, sl) {
    return (item!='' && (!pos || item != sl[pos - 1]));
  });
}

export function stringToLeakedDataCategory(s: string, exceptionOnError: boolean = false): LeakipediaLeakedDataCategory {
  switch (s.trim().toUpperCase()){
    // Critical
    case "CRYPTOCURRENCY_DATA": return LeakipediaLeakedDataCategory.CryptocurrencyData;
    case "CREDIT_CARD_CVV": return LeakipediaLeakedDataCategory.CreditCardCVV;
    case "CREDIT_CARD_NUMBERS": return LeakipediaLeakedDataCategory.CreditCardNumbers;
    case "PLAIN_PASSWORDS": return LeakipediaLeakedDataCategory.PlainPasswords;
    case "AUTH_TOKENS": return LeakipediaLeakedDataCategory.AuthTokens;
    case "KEYBOARD_LOGS": return LeakipediaLeakedDataCategory.KeyboardLogs;
    case "SENSITIVE_PHOTOS": return LeakipediaLeakedDataCategory.SensitivePhotos;
    case "SENSITIVE_VIDEOS": return LeakipediaLeakedDataCategory.SensitiveVideos;
    case "SEXUAL_ORIENTATION": return LeakipediaLeakedDataCategory.SexualOrientation;
    case "SEXUAL_PRACTICES": return LeakipediaLeakedDataCategory.SexualPractices;
    case "FINANCIAL_DATA": return LeakipediaLeakedDataCategory.FinancialData;
    case "PRIVATE_MESSAGES": return LeakipediaLeakedDataCategory.PrivateMessages;
    
    // High
    case "HASHED_PASSWORDS": return LeakipediaLeakedDataCategory.HashedPasswords;
    case "DEVICE_INFORMATION": return LeakipediaLeakedDataCategory.DeviceInformation;
    case "PURCHASES": return LeakipediaLeakedDataCategory.Purchases;
    case "PHOTOS": return LeakipediaLeakedDataCategory.Photos;
    case "VIDEOS": return LeakipediaLeakedDataCategory.Videos;
    case "AUDIOS": return LeakipediaLeakedDataCategory.Audios;
    case "PARTIAL_CREDIT_CARD_DATA": return LeakipediaLeakedDataCategory.PartialCreditCardData;
    case "CREDITICIAL_STATUS": return LeakipediaLeakedDataCategory.CrediticialStatus;
    case "DONATIONS": return LeakipediaLeakedDataCategory.Donations;
    case "TAXATION_RECORDS": return LeakipediaLeakedDataCategory.TaxationRecords;
    case "UTILITY_BILLS": return LeakipediaLeakedDataCategory.UtilityBills;

    // Medium
    case "PASSWORD_HINTS": return LeakipediaLeakedDataCategory.PasswordHints;
    case "ADDRESSES": return LeakipediaLeakedDataCategory.Addresses;
    case "PASSPORT_NUMBERS": return LeakipediaLeakedDataCategory.PassportNumbers;
    case "GOVERMENT_ISSUED_IDS": return LeakipediaLeakedDataCategory.GovermentIssuedIDs;
    case "BIOMETRIC_DATA": return LeakipediaLeakedDataCategory.BiometricData;
    case "PHONE_NUMBERS": return LeakipediaLeakedDataCategory.PhoneNumbers;
    case "EMAIL_ADDRESSES": return LeakipediaLeakedDataCategory.EmailAddresses;
    case "ASSETS_INFORMATION": return LeakipediaLeakedDataCategory.AssetsInformation;
    case "INCOME_LEVEL": return LeakipediaLeakedDataCategory.IncomeLevel;
    case "CONTACTS": return LeakipediaLeakedDataCategory.Contacts;
    case "HEALTH": return LeakipediaLeakedDataCategory.Health;
    case "POLITICAL_VIEWS": return LeakipediaLeakedDataCategory.PoliticalViews;
    case "HABITS": return LeakipediaLeakedDataCategory.Habits;
    case "INTERESTS": return LeakipediaLeakedDataCategory.Interests;
    case "IMEI_NUMBERS": return LeakipediaLeakedDataCategory.IMEINumbers;
    case "IMSI_NUMBERS": return LeakipediaLeakedDataCategory.IMSINumbers;
    case "WEBSITE_ACTIVITY": return LeakipediaLeakedDataCategory.WebsiteActivity;
    
    // Low
    case "NAME": return LeakipediaLeakedDataCategory.Name;
    case "GENDER": return LeakipediaLeakedDataCategory.Gender;
    case "BIRTHDATE": return LeakipediaLeakedDataCategory.Birthdate;
    case "LANGUAGES": return LeakipediaLeakedDataCategory.Languages;
    case "NATIONALITIES": return LeakipediaLeakedDataCategory.Nationalities;
    case "LOCATIONS": return LeakipediaLeakedDataCategory.Locations;
    case "ETHNICITY": return LeakipediaLeakedDataCategory.Ethnicity;
    case "PHYSICAL_ATTRIBUTES": return LeakipediaLeakedDataCategory.PhysicalAttributes;
    case "SKILLS": return LeakipediaLeakedDataCategory.Skills;

    case "RELIGION": return LeakipediaLeakedDataCategory.Religion;
    case "DECEASED_DATE": return LeakipediaLeakedDataCategory.DeceasedDate;
  
    case "SOCIAL_MEDIA_PROFILES": return LeakipediaLeakedDataCategory.SocialMediaProfiles;
    case "USER_NAMES": return LeakipediaLeakedDataCategory.UserNames;
    case "LOGIN_NAMES": return LeakipediaLeakedDataCategory.LoginNames;
    
    case "CONSUMER_HABITS": return LeakipediaLeakedDataCategory.ConsumerHabits;
    case "PAYMENT_METHODS": return LeakipediaLeakedDataCategory.PaymentMethods;
   
    case "RELATIONSHIPS": return LeakipediaLeakedDataCategory.Relationships;
    case "FAMILY": return LeakipediaLeakedDataCategory.Family;
    
    case "EDUCATION": return LeakipediaLeakedDataCategory.Education;
    case "OCCUPATIONS": return LeakipediaLeakedDataCategory.Occupations;
    case "EMPLOYER": return LeakipediaLeakedDataCategory.Employer;
    
    case "IP_ADDRESSES": return LeakipediaLeakedDataCategory.IPAddresses;
    case "MAC_ADDRESSES": return LeakipediaLeakedDataCategory.MACAddresses;
    
    case "OTHERS": return LeakipediaLeakedDataCategory.Others;
    
    default:
      if (exceptionOnError) 
        throw new Error("Invalid data category string");
      else
        return LeakipediaLeakedDataCategory.Others;
  }
}

export function leakedDataCategoryToString(category: LeakipediaLeakedDataCategory, exceptionOnError: boolean = false): string {
  switch (category){
    // Critical
    case LeakipediaLeakedDataCategory.CryptocurrencyData: return "CRYPTOCURRENCY_DATA";
    case LeakipediaLeakedDataCategory.CreditCardCVV: return "CREDIT_CARD_CVV";
    case LeakipediaLeakedDataCategory.CreditCardNumbers: return "CREDIT_CARD_NUMBERS";
    case LeakipediaLeakedDataCategory.PlainPasswords: return "PLAIN_PASSWORDS";
    case LeakipediaLeakedDataCategory.AuthTokens: return "AUTH_TOKENS";
    case LeakipediaLeakedDataCategory.KeyboardLogs: return "KEYBOARD_LOGS";
    case LeakipediaLeakedDataCategory.SensitivePhotos: return "SENSITIVE_PHOTOS";
    case LeakipediaLeakedDataCategory.SensitiveVideos: return "SENSITIVE_VIDEOS";
    case LeakipediaLeakedDataCategory.SexualOrientation: return "SEXUAL_ORIENTATION";
    case LeakipediaLeakedDataCategory.SexualPractices: return "SEXUAL_PRACTICES";
    case LeakipediaLeakedDataCategory.FinancialData: return "FINANCIAL_DATA";
    case LeakipediaLeakedDataCategory.PrivateMessages: return "PRIVATE_MESSAGES"
        
    // High
    case LeakipediaLeakedDataCategory.HashedPasswords: return "HASHED_PASSWORDS";
    case LeakipediaLeakedDataCategory.DeviceInformation: return "DEVICE_INFORMATION";
    case LeakipediaLeakedDataCategory.Purchases: return "PURCHASES";
    case LeakipediaLeakedDataCategory.Photos: return "PHOTOS";
    case LeakipediaLeakedDataCategory.Videos: return "VIDEOS";
    case LeakipediaLeakedDataCategory.Audios: return "AUDIOS";
    case LeakipediaLeakedDataCategory.PartialCreditCardData: return "PARTIAL_CREDIT_CARD_DATA";
    case LeakipediaLeakedDataCategory.CrediticialStatus: return "CREDITICIAL_STATUS";
    case LeakipediaLeakedDataCategory.Donations: return "DONATIONS";
    case LeakipediaLeakedDataCategory.TaxationRecords: return "TAXATION_RECORDS";
    case LeakipediaLeakedDataCategory.UtilityBills: return "UTILITY_BILLS"
    
    // Medium
    case LeakipediaLeakedDataCategory.PasswordHints: return "PASSWORD_HINTS";
    case LeakipediaLeakedDataCategory.Addresses: return "ADDRESSES";
    case LeakipediaLeakedDataCategory.PassportNumbers: return "PASSPORT_NUMBERS";
    case LeakipediaLeakedDataCategory.GovermentIssuedIDs: return "GOVERMENT_ISSUED_IDS";
    case LeakipediaLeakedDataCategory.BiometricData: return "BIOMETRIC_DATA";
    case LeakipediaLeakedDataCategory.PhoneNumbers: return "PHONE_NUMBERS";
    case LeakipediaLeakedDataCategory.EmailAddresses: return "EMAIL_ADDRESSES";
    case LeakipediaLeakedDataCategory.AssetsInformation: return "ASSETS_INFORMATION";
    case LeakipediaLeakedDataCategory.IncomeLevel: return "INCOME_LEVEL";
    case LeakipediaLeakedDataCategory.Contacts: return "CONTACTS";
    case LeakipediaLeakedDataCategory.Health: return "HEALTH";
    case LeakipediaLeakedDataCategory.PoliticalViews: return "POLITICAL_VIEWS";
    case LeakipediaLeakedDataCategory.Habits: return "HABITS";
    case LeakipediaLeakedDataCategory.Interests: return "INTERESTS";
    case LeakipediaLeakedDataCategory.IMEINumbers: return "IMEI_NUMBERS";
    case LeakipediaLeakedDataCategory.IMSINumbers: return "IMSI_NUMBERS";
    case LeakipediaLeakedDataCategory.WebsiteActivity: return "WEBSITE_ACTIVITY"
        
    // Low
    case LeakipediaLeakedDataCategory.Name: return "NAME";
    case LeakipediaLeakedDataCategory.Gender: return "GENDER";
    case LeakipediaLeakedDataCategory.Birthdate: return "BIRTHDATE";
    case LeakipediaLeakedDataCategory.Languages: return "LANGUAGES";
    case LeakipediaLeakedDataCategory.Nationalities: return "NATIONALITIES";
    case LeakipediaLeakedDataCategory.Locations: return "LOCATIONS";
    case LeakipediaLeakedDataCategory.Ethnicity: return "ETHNICITY";
    case LeakipediaLeakedDataCategory.PhysicalAttributes: return "PHYSICAL_ATTRIBUTES";
    case LeakipediaLeakedDataCategory.Skills: return "SKILLS"

    case LeakipediaLeakedDataCategory.Religion: return "RELIGION";
    case LeakipediaLeakedDataCategory.DeceasedDate: return "DECEASED_DATE"

    case LeakipediaLeakedDataCategory.SocialMediaProfiles: return "SOCIAL_MEDIA_PROFILES";
    case LeakipediaLeakedDataCategory.UserNames: return "USER_NAMES";
    case LeakipediaLeakedDataCategory.LoginNames: return "LOGIN_NAMES"

    case LeakipediaLeakedDataCategory.ConsumerHabits: return "CONSUMER_HABITS";
    case LeakipediaLeakedDataCategory.PaymentMethods: return "PAYMENT_METHODS"

    case LeakipediaLeakedDataCategory.Relationships: return "RELATIONSHIPS";
    case LeakipediaLeakedDataCategory.Family: return "FAMILY"

    case LeakipediaLeakedDataCategory.Education: return "EDUCATION";
    case LeakipediaLeakedDataCategory.Occupations: return "OCCUPATIONS";
    case LeakipediaLeakedDataCategory.Employer: return "EMPLOYER"

    case LeakipediaLeakedDataCategory.IPAddresses: return "IP_ADDRESSES";
    case LeakipediaLeakedDataCategory.MACAddresses: return "MAC_ADDRESSES"

    case LeakipediaLeakedDataCategory.Others: return "OTHERS"

    
    default:
      if (exceptionOnError) 
        throw new Error("Invalid data category");
      else
        return (category as number).toString();
  }
}

export function stringToRiskLevel(s: string, exceptionOnError: boolean = false): LeakipediaRiskLevel {
  switch (s.trim().toUpperCase()){
    case "LOW": return LeakipediaRiskLevel.Low;
    case "MEDIUM": return LeakipediaRiskLevel.Medium;
    case "HIGH": return LeakipediaRiskLevel.High;
    case "CRITICAL": return LeakipediaRiskLevel.Critical;

    default:
      if (exceptionOnError) 
        throw new Error("Invalid risk level string");
      else
        return LeakipediaRiskLevel.None;
  }
}

export function riskLevelToString(risk: LeakipediaRiskLevel, exceptionOnError: boolean = false): string {
  switch (risk){
    case LeakipediaRiskLevel.None: return "NONE";
    case LeakipediaRiskLevel.Low: return "LOW";
    case LeakipediaRiskLevel.Medium: return "MEDIUM";
    case LeakipediaRiskLevel.High: return "HIGH";
    case LeakipediaRiskLevel.Critical: return "CRITICAL";

    default:
      if (exceptionOnError) 
        throw new Error("Invalid risk level");
      else
        return (risk as number).toString();
  }
}

export function stringsToDataCategories(strings: string[]): LeakipediaLeakedDataCategory[] {
  let result: LeakipediaLeakedDataCategory[] = [];

  if (Array.isArray(strings)){
    let set: Set<LeakipediaLeakedDataCategory> = new Set();
    
    strings.map((item: string)=>{
      try {
        const ldc: LeakipediaLeakedDataCategory = stringToLeakedDataCategory(item, false);
        set.add(ldc);
      } finally {
      }
    });

    result = [...set];
  }

  result.sort(function(a: LeakipediaLeakedDataCategory, b: LeakipediaLeakedDataCategory) {
    return a - b;
  });

  return result;
}

export function dataCategoriesToStrings(dataCategories: LeakipediaLeakedDataCategory[]): string[] {
  let result: Set<string> = new Set();

  if (Array.isArray(dataCategories)){

    let sortedDC: LeakipediaLeakedDataCategory[] = [...dataCategories];
    sortedDC.sort(function(a: LeakipediaLeakedDataCategory, b: LeakipediaLeakedDataCategory) {
      return a - b;
    });

    sortedDC.map((item: LeakipediaLeakedDataCategory)=>{
      try {
        const ldc: string = leakedDataCategoryToString(item, false);
        result.add(ldc);
      } finally {
      }
    });
    
  }

  return [...result];
}

const VALIDATE_MAILBOX_REGEXP: RegExp = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*$/;
const VALIDATE_DOMAIN_REGEXP: RegExp = /^[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export function validateMailbox(mailbox: string): boolean {
  if (typeof mailbox !== "string") return false;

  const ml: number = mailbox.length;

  if (ml < 1 || ml > 64) return false;

  return VALIDATE_MAILBOX_REGEXP.test(mailbox);
}

export function validateDomain(domain: string): boolean {
  if (typeof domain !== "string") return false;

  const dl: number = domain.length;
  if (dl < 2 || dl > 255) return false;

  if (domain[dl - 1] === ".") return false;

  return VALIDATE_DOMAIN_REGEXP.test(domain);
}

export function validateEmail(email: string): boolean {
  if (typeof email !== "string") return false;

  if (email.length > 254) return false;

  var parts = email.split("@");
  if (parts.length != 2) return false;

  if (parts[0].length > 64) return false;

  return validateMailbox(parts[0]) && validateDomain(parts[1]);
}

export function leakipediaReportQueryParser(query: string): LeakipediaReportQuery {

  let result: LeakipediaReportQuery = {
    error: true,
  };

  if (typeof query === 'string'){

    let slices: string[] = uniq(
      query
        .toLowerCase() // Lowercase all query
        .replace(/[,;\r\n]+/g, " ")
        .split(" ")  // Split pieces
        .map(s => s.trim()) // Trim all pieces
    ); // Sort and remove duplicated
    
    if (slices.length>0){
      let domains: number=0;
      let emails: number=0;
      for (let slice of slices){
        let parts: string[] = slice.split("@");
        const pl=parts.length;
        if (pl==1){
          if (emails>0 || domains>0) return result;

          if (!validateDomain(parts[0])) return result;

          domains++;
        } else if (pl==2){
          if (domains>0) return result;

          if (!validateMailbox(parts[0])) return result;
          if (!validateDomain(parts[1])) return result;

          emails++;
        } else return result;
      }

      if (emails>0){
        result.emails = slices;
      } else {
        result.domain = slices[0];
      }
    
      result.error = false;
      return result;
    }
  }

  return result;
}

