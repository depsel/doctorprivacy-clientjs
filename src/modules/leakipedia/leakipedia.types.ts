import { DPApiResultBase } from '../base/base.types';

export enum LeakipediaRiskLevel { None=0, Low=1, Medium=2, High=3, Critical=4 }

export enum LeakipediaLeakedDataCategory {
  // Critical
  CryptocurrencyData = 1000,
  CreditCardCVV = 1020,
  CreditCardNumbers = 1040,
  PlainPasswords = 1060,
  AuthTokens = 1080,
  KeyboardLogs = 1100,
  SensitivePhotos = 1120,
  SensitiveVideos = 1140,
  SexualOrientation = 1160,
  SexualPractices = 1180,
  FinancialData = 1200,
  PrivateMessages = 1220,

  // High
  HashedPasswords = 2000,
  DeviceInformation = 2020,
  Purchases = 2040,
  Photos = 2060,
  Videos = 2080,
  Audios = 2100,
  PartialCreditCardData = 2120,
  CrediticialStatus = 2140,
  Donations = 2160,
  TaxationRecords = 2180,
  UtilityBills = 2200,

  // Medium
  PasswordHints = 3000,
  Addresses = 3020,
  PassportNumbers = 3040,
  GovermentIssuedIDs = 3060,
  BiometricData = 3080,
  PhoneNumbers = 3100,
  EmailAddresses = 3120,
  AssetsInformation = 3140,
  IncomeLevel = 3160,
  Contacts = 3180,
  Health = 3200,
  PoliticalViews = 3220,
  Habits = 3240,
  Interests = 3260,
  IMEINumbers = 3280,
  IMSINumbers = 3300,
  WebsiteActivity = 3320,

  //Low
  Name = 4000,
  Gender = 4020,
  Birthdate = 4040,
  Languages = 4060,
  Nationalities = 4080,
  Locations = 4100,
  Ethnicity = 4120,
  PhysicalAttributes = 4140,
  Skills = 4160,

  Religion = 4180,
  DeceasedDate = 4200,

  SocialMediaProfiles = 4220,
  UserNames = 4240,
  LoginNames = 4260,
  
  ConsumerHabits = 4280,
  PaymentMethods = 4300,
 
  Relationships = 4320,
  Family = 4340,
  
  Education = 4360,
  Occupations = 4380,
  Employer = 4400,
  
  IPAddresses = 4420,
  MACAddresses = 4440,
  
  Others = 10000
}

export type LeakipediaLeakedDataItemType = 'string'|'json';

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
  [sourceId: number]: LeakipediaSource
}

// Endpoint results types

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

