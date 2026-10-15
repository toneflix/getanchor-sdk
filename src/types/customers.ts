import type {
  Address,
  FullName,
  Gender,
  IdentificationType,
  ListQuery,
  OpenString,
  RequestDocument,
  Resource,
} from './common'
import type { FileSource } from '../Files'

export type CustomerStatus = OpenString<'ACTIVE' | 'EXPIRED' | 'DELETED' | 'IN_ACTIVE'>

export type VerificationStatus = OpenString<
  'pending' | 'approved' | 'rejected' | 'pending.manual.review' | 'unverified'
>

export interface CustomerVerification {
  level?: string
  comment?: string
  status?: VerificationStatus
  details?: Record<string, unknown>[]
}

export interface IdentificationLevel2 {
  dateOfBirth?: string
  gender?: Gender
  bvn?: string
  /** Base64 encoded selfie. */
  selfieImage?: string
}

export interface IdentificationLevel3 {
  idType?: IdentificationType
  idNumber?: string
  expiryDate?: string
}

export type BusinessIndustry = OpenString<
  | 'Agriculture-AgriculturalCooperatives'
  | 'Agriculture-AgriculturalServices'
  | 'Commerce-Automobiles'
  | 'Commerce-DigitalGoods'
  | 'Commerce-PhysicalGoods'
  | 'Commerce-RealEstate'
  | 'Commerce-DigitalServices'
  | 'Commerce-LegalServices'
  | 'Commerce-PhysicalServices'
  | 'Commerce-ProfessionalServices'
  | 'Commerce-OtherProfessionalServices'
  | 'Education-NurserySchools'
  | 'Education-PrimarySchools'
  | 'Education-SecondarySchools'
  | 'Education-TertiaryInstitutions'
  | 'Education-VocationalTraining'
  | 'Education-VirtualLearning'
  | 'Education-OtherEducationalServices'
  | 'Gaming-Betting'
  | 'Gaming-Lotteries'
  | 'Gaming-PredictionServices'
  | 'FinancialServices-FinancialCooperatives'
  | 'FinancialServices-CorporateServices'
  | 'FinancialServices-PaymentSolutionServiceProviders'
  | 'FinancialServices-Insurance'
  | 'FinancialServices-Investments'
  | 'FinancialServices-AgriculturalInvestments'
  | 'FinancialServices-Lending'
  | 'FinancialServices-BillPayments'
  | 'FinancialServices-Payroll'
  | 'FinancialServices-Remittances'
  | 'FinancialServices-Savings'
  | 'FinancialServices-MobileWallets'
  | 'Health-Gyms'
  | 'Health-Hospitals'
  | 'Health-Pharmacies'
  | 'Health-HerbalMedicine'
  | 'Health-Telemedicine'
  | 'Health-MedicalLaboratories'
  | 'Hospitality-Hotels'
  | 'Hospitality-Restaurants'
  | 'Nonprofits-ProfessionalAssociations'
  | 'Nonprofits-GovernmentAgencies'
  | 'Nonprofits-NGOs'
  | 'Nonprofits-PoliticalParties'
  | 'Nonprofits-ReligiousOrganizations'
  | 'Nonprofits-Leisure_And_Entertainment'
  | 'Nonprofits-Cinemas'
  | 'Nonprofits-Nightclubs'
  | 'Nonprofits-Events'
  | 'Nonprofits-Press_And_Media'
  | 'Nonprofits-RecreationCentres'
  | 'Nonprofits-StreamingServices'
  | 'Logistics-CourierServices'
  | 'Logistics-FreightServices'
  | 'Travel-Airlines'
  | 'Travel-Ridesharing'
  | 'Travel-TourServices'
  | 'Travel-Transportation'
  | 'Travel-TravelAgencies'
  | 'Utilities-CableTelevision'
  | 'Utilities-Electricity'
  | 'Utilities-GarbageDisposal'
  | 'Utilities-Internet'
  | 'Utilities-Telecoms'
  | 'Utilities-Water'
  | 'Retail'
  | 'Wholesale'
  | 'Restaurants'
  | 'Construction'
  | 'Unions'
  | 'RealEstate'
  | 'FreelanceProfessional'
  | 'OtherProfessionalServices'
  | 'OnlineRetailer'
  | 'OtherEducationServices'
>

export type BusinessRegistrationType = OpenString<
  | 'Private_Incorporated'
  | 'Incorporated_Trustees'
  | 'Business_Name'
  | 'Free_Zone'
  | 'Gov'
  | 'Private_Incorporated_Gov'
  | 'Cooperative_Society'
  | 'Public_Incorporated'
>

export type BusinessOfficerRole = 'DIRECTOR' | 'OWNER'

export type BusinessOfficerTitle =
  | 'CEO'
  | 'COO'
  | 'CFO'
  | 'President'
  | 'CIO'
  | 'VP'
  | 'Treasurer'
  | 'Controller'
  | 'Manager'
  | 'Partner'
  | 'Member'

export interface BusinessAddress {
  main: Address
  registered?: Address
}

export interface BusinessDetail {
  businessName?: string
  businessBvn?: string
  industry?: BusinessIndustry
  registrationType?: BusinessRegistrationType
  dateOfRegistration?: string
  description?: string
  country?: string
  website?: string
}

export interface BusinessContact {
  email?: { general: string }
  phoneNumber?: string
  address?: BusinessAddress
}

export interface BusinessOfficer {
  officerId?: string
  role?: BusinessOfficerRole
  fullName?: FullName
  dateOfBirth?: string
  email?: string
  phoneNumber?: string
  nationality?: string
  address?: Address
  bvn?: string
  percentOwned?: number
  title?: BusinessOfficerTitle
  identificationType?: IdentificationType
  idDocumentNumber?: string
  verification?: CustomerVerification
  status?: string
}

export interface IndividualCustomerAttributes {
  fullName?: FullName
  email?: string
  phoneNumber?: string
  address?: Address
  createdAt?: string
  updatedAt?: string
  soleProprietor?: boolean
  description?: string
  doingBusinessAs?: string
  identificationLevel2?: IdentificationLevel2
  identificationLevel3?: IdentificationLevel3
  /** Present on the legacy `IndividualCustomerNG` shape. */
  tier1?: { gender?: Gender; dateOfBirth?: string; selfieImage?: string }
  /** Present on the legacy `IndividualCustomerNG` shape. */
  tier2?: { identificationType?: IdentificationType; identityNumber?: string; expiryDate?: string }
  nationality?: string
  metadata?: Record<string, string> | string[]
  status?: CustomerStatus
  verification?: CustomerVerification
}

export interface BusinessCustomerAttributes {
  /** Present on the `BusinessCustomer` shape. */
  detail?: BusinessDetail
  /** Present on the `BusinessCustomer` shape. */
  contact?:
    BusinessContact | { email?: string; phoneNumber?: string; fullName?: FullName; bvn?: string }
  /** Present on the `BusinessCustomer` shape. */
  officers?: BusinessOfficer[]
  /** The remaining fields are present on the flattened `BusinessCustomerV2` shape. */
  businessName?: string
  industry?: BusinessIndustry
  registrationType?: BusinessRegistrationType
  dateOfRegistration?: string
  description?: string
  country?: string
  website?: string
  phoneNumber?: string
  email?: { general: string }
  address?: BusinessAddress
  isRoot?: boolean
  createdAt?: string
  metadata?: Record<string, string> | string[]
  status?: CustomerStatus
  verification?: CustomerVerification
}

export type IndividualCustomerType = 'IndividualCustomer' | 'IndividualCustomerNG'
export type BusinessCustomerType = 'BusinessCustomer' | 'BusinessCustomerV2'
export type CustomerType = IndividualCustomerType | BusinessCustomerType

export type IndividualCustomer = Resource<IndividualCustomerType, IndividualCustomerAttributes>
export type BusinessCustomer = Resource<BusinessCustomerType, BusinessCustomerAttributes>
export type Customer = IndividualCustomer | BusinessCustomer

export interface CreateIndividualCustomerAttributes {
  fullName: FullName
  email: string
  phoneNumber: string
  address: Address
  isSoleProprietor?: boolean
  description?: string
  doingBusinessAs?: string
  identificationLevel2?: IdentificationLevel2
  identificationLevel3?: IdentificationLevel3
  metadata?: Record<string, string>
}

export interface BusinessOfficerInput {
  role: BusinessOfficerRole
  fullName: FullName
  dateOfBirth: string
  email: string
  phoneNumber: string
  nationality: string
  address: Address
  bvn: string
  title?: BusinessOfficerTitle
  percentageOwned?: number
  identificationType?: IdentificationType
  idDocumentNumber?: string
}

export interface CreateBusinessCustomerAttributes {
  basicDetail: {
    businessName: string
    businessBvn: string
    industry: BusinessIndustry
    registrationType: BusinessRegistrationType
    dateOfRegistration: string
    description: string
    country: string
    website?: string
  }
  contact: {
    email: { general: string }
    phoneNumber: string
    address: BusinessAddress
  }
  officers: BusinessOfficerInput[]
  metadata?: Record<string, string>
}

export type CreateCustomerInput =
  | RequestDocument<{ type: 'IndividualCustomer'; attributes: CreateIndividualCustomerAttributes }>
  | RequestDocument<{ type: 'BusinessCustomer'; attributes: CreateBusinessCustomerAttributes }>

export type UpdateCustomerInput =
  | RequestDocument<{
      type: 'IndividualCustomer'
      attributes: {
        email: string
        phoneNumber: string
        description?: string
        doingBusinessAs?: string
        identificationLevel2?: IdentificationLevel2
        identificationLevel3?: IdentificationLevel3
      }
    }>
  | RequestDocument<{
      type: 'BusinessCustomer'
      attributes: Partial<CreateBusinessCustomerAttributes>
    }>

export interface CustomerListQuery extends ListQuery {
  customerType?: OpenString<CustomerType>
  metadata?: string
  query?: string
}

export interface CustomerSearchQuery {
  /** Required by Anchor: which kind of customer to search. */
  customerType: 'IndividualCustomer' | 'BusinessCustomer'
  /** A BVN, email, phone number or RC number. */
  searchValue: string
  include?: string | string[]
}

export type KycLevel = 'TIER_2' | 'TIER_3'

export type VerifyIndividualInput = RequestDocument<{
  type: 'Verification'
  attributes: {
    level: KycLevel
    level2?: {
      bvn?: string
      /** Base64 encoded selfie. */
      selfie?: string
      dateOfBirth?: string
      gender?: Gender
    }
    level3?: {
      idType?: IdentificationType
      idNumber?: string
      expiryDate?: string
    }
  }
}>

/** The acknowledgement returned when a KYC/KYB check starts; results arrive by webhook. */
export type VerificationStarted = Resource<
  string,
  {
    message?: string
    events?: { type: string; description?: string }[]
  }
>

export interface OfficersRequirement {
  minimumDirectors?: number
  minimumOwners?: number
  minimumPercentageOwned?: number
}

export type UpdateBusinessInput = RequestDocument<{
  type: 'BusinessCustomerV2'
  attributes: {
    businessName?: string
    registrationType?: BusinessRegistrationType
    dateOfRegistration?: string
    industry?: BusinessIndustry
    description?: string
    website?: string
    address?: Partial<BusinessAddress>
  }
}>

export type BusinessOfficerResource = Resource<'BusinessOfficer', BusinessOfficer, 'customer'>

export type CreateBusinessOfficerInput = RequestDocument<{
  type: 'BusinessOfficer'
  attributes: BusinessOfficerInput
}>

export type UpdateBusinessOfficerInput = RequestDocument<{
  type: 'BusinessOfficer'
  attributes: Partial<BusinessOfficerInput>
}>

export interface NextOfKinAttributes {
  fullName: FullName
  relationship: string
  phoneNumber: string
  email: string
  address: Address
}

export type NextOfKin = Resource<
  'NextOfKin',
  Partial<NextOfKinAttributes>,
  'customer' | 'organization'
>

export type NextOfKinInput = RequestDocument<{ type: 'NextOfKin'; attributes: NextOfKinAttributes }>

export type DocumentType = OpenString<
  | 'TIN'
  | 'CERTIFICATE_OF_INCORPORATION'
  | 'CERTIFICATE_OF_BUSINESS_NAME'
  | 'RC_NUMBER'
  | 'BN_NUMBER'
  | 'MEMORANDUM_OF_ASSOCIATION'
  | 'FORM_CAC_2'
  | 'FORM_CAC_3'
  | 'FORM_CAC_7'
  | 'FORM_CAC_1_1'
  | 'FORM_CAC_BN_1'
  | 'CAC_IT_1'
  | 'CAC_IT_NUMBER'
  | 'CAC_STATUS_REPORT'
  | 'DRIVERS_LICENSE_FRONT'
  | 'DRIVERS_LICENSE_BACK'
  | 'VOTERS_CARD_FRONT'
  | 'VOTERS_CARD_BACK'
  | 'NATIONAL_ID_BACK'
  | 'NATIONAL_ID_FRONT'
  | 'NIN_SLIP_DOCUMENT'
  | 'PASSPORT_DOCUMENT'
  | 'INDIVIDUAL_IDENTIFICATION'
  | 'OPERATING_LICENSE'
  | 'CTC_OF_NOTICE_OF_SITUATION'
  | 'PARTICULARS_OF_DIRECTORS'
  | 'CERTIFICATE_OF_REGISTRATION'
  | 'STATEMENT_OF_SHARE_CAPITAL'
  | 'NEPZA_NUMBER'
  | 'PAYMENT_COLLECTION_AUTHORIZATION_LETTER'
  | 'OFFICIAL_GAZETTE'
  | 'GOVERNMENT_APPROVAL'
  | 'COOPERATIVE_CERTIFICATE'
  | 'CERTIFIED_APPLICATION_FORM'
  | 'PROOF_OF_ADDRESS'
>

export interface CustomerDocumentAttributes {
  format?: 'TEXT' | 'FILE'
  documentType?: DocumentType
  description?: string
  data?: string
  submitted?: boolean
  verified?: boolean
  expires?: boolean
  fileName?: string
  createdAt?: string
  requiredDocuments?: Resource<'DocumentType', { type?: DocumentType; description?: string }>[]
}

export type CustomerDocument = Resource<
  'Document',
  CustomerDocumentAttributes,
  'customer' | 'officers'
>

/**
 * Either a file (multipart upload) or a text value such as a TIN or RC number.
 * `file` may be a Blob, raw bytes, an absolute path (or `file://` URL), or an
 * `http(s)` URL that is downloaded first.
 */
export type DocumentUploadInput =
  { file: FileSource; fileName?: string; contentType?: string } | { text: string }
