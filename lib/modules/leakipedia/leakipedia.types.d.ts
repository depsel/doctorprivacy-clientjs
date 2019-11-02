import { DPApiResultBase } from '../base/base.types';
export declare enum LeakipediaRiskLevel {
    None = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4
}
export declare enum LeakipediaLeakedDataCategory {
    CreditCardNumbers = 20,
    CreditCardCVV = 40,
    CryptocurrencyData = 60,
    AuthTokens = 80,
    PlainPasswords = 100,
    KeyboardLogs = 120,
    HashedPasswords = 140,
    PasswordHints = 160,
    SexualOrientation = 180,
    SexualPractices = 200,
    SensitivePhotos = 220,
    PrivateMessages = 240,
    PoliticalViews = 260,
    Health = 280,
    EmailAddresses = 300,
    PhoneNumbers = 320,
    Name = 340,
    SocialSecurityNumber = 360,
    PassportNumber = 380,
    BiometricData = 400,
    Gender = 420,
    Birthdate = 440,
    Addresses = 460,
    Languages = 480,
    Nationalities = 500,
    Locations = 520,
    Ethnicity = 540,
    PhysicalAttributes = 560,
    Interests = 600,
    Skills = 620,
    Religion = 640,
    DigitalIdentities = 660,
    UserNames = 680,
    LoginNames = 700,
    Photos = 720,
    Videos = 740,
    Audios = 760,
    AssetsInformation = 780,
    ConsumerHabits = 800,
    PaymentMethods = 820,
    CrediticialStatus = 840,
    FinancialData = 860,
    TaxationRecords = 880,
    Donations = 900,
    Contacts = 920,
    Relationships = 940,
    Family = 960,
    Education = 980,
    IncomeLevel = 1000,
    Occupations = 1020,
    Employer = 1040,
    IMEINumbers = 1060,
    IMSINumbers = 1080,
    IPAddresses = 1100,
    MACAddresses = 1120,
    Others = 2000
}
export declare type LeakipediaLeakedDataItemType = 'string' | 'json';
export interface LeakipediaLeakedDataItem {
    label?: string;
    type?: LeakipediaLeakedDataItemType;
    value?: string;
}
export interface LeakipediaVictimSource {
    name?: string;
    leakedData?: LeakipediaLeakedDataItem[];
    raw?: any;
}
export interface LeakipediaVictimSources {
    [sourceId: number]: LeakipediaVictimSource;
}
export interface LeakipediaVictim {
    email?: string;
    phone?: string;
    domainMailboxesCompromised: number;
    occurrences?: number;
    maximumRisk?: LeakipediaRiskLevel;
    maximumRiskText?: string;
    fullname?: string;
    avatarUrl?: string;
    partIndex?: number;
    combinedLeakedDataCategories?: string[];
    combinedLeakedDataCategoriesText?: string[];
    sources?: LeakipediaVictimSources;
}
export interface LeakipediaSource {
    risk: LeakipediaRiskLevel;
    riskText: string;
    isSensitive: boolean;
    isVerified: boolean;
    isFabricated: boolean;
    isSpamList: boolean;
    isRetired: boolean;
    leakedDataCategories?: string[];
    leakedDataCategoriesText?: string[];
    name?: string;
    title?: string;
    website?: string;
    breachDate?: string;
    publicationDate?: string;
    entryDate?: string;
    lastModifyDate?: string;
    summary?: string;
    details?: string;
    logoUrl?: string;
    totalVictims?: number;
    others?: Object;
}
export interface LeakipediaSources {
    [sourceId: number]: LeakipediaSource;
}
export interface DPApiResultLeakipediaStatus extends DPApiResultBase {
    totalVictims: number;
    totalBreachs: number;
    sources?: LeakipediaSources;
}
export interface DPApiResultLeakipediaReport extends DPApiResultBase {
    totalVictims: number;
    listings?: LeakipediaVictim[];
    sources?: LeakipediaSources;
}
export interface DPApiResultLeakipediaReportToken extends DPApiResultBase {
    token: string;
}
