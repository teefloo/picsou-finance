import type { AccountType } from '@/types/api'

export const ACCOUNT_TYPES: { value: AccountType; labelKey: string }[] = [
  { value: 'CHECKING', labelKey: 'accountTypes.checking' },
  { value: 'SAVINGS', labelKey: 'accountTypes.savings' },
  { value: 'LEP', labelKey: 'accountTypes.lep' },
  { value: 'PEA', labelKey: 'accountTypes.pea' },
  { value: 'COMPTE_TITRES', labelKey: 'accountTypes.compteTitres' },
  { value: 'CRYPTO', labelKey: 'accountTypes.crypto' },
  { value: 'REAL_ESTATE', labelKey: 'accountTypes.realEstate' },
  { value: 'LOAN', labelKey: 'accountTypes.loan' },
  { value: 'OTHER', labelKey: 'accountTypes.other' },
]

/**
 * Curated list of valid ISO 4217 codes offered in the account form's currency
 * dropdown (EUR first). Labels are rendered live via `Intl.DisplayNames`, so this
 * stays codes-only and is trivial to extend. The backend `@ValidCurrency` constraint
 * accepts any real ISO 4217 code, so this list can grow without backend changes.
 */
export const SUPPORTED_CURRENCIES = [
  'EUR', 'USD', 'GBP', 'CHF', 'JPY', 'CAD', 'AUD', 'CNY',
  'SEK', 'NOK', 'DKK', 'NZD', 'HKD', 'SGD', 'PLN',
] as const

export interface CountryDialCode {
  countryCode: string
  dial: string
  flag: string
  labelKey: string
}

/**
 * Countries where Trade Republic operates, for the phone number country-code
 * dropdown. France first (fallback locale), rest alphabetical by country name.
 */
export const COUNTRY_DIAL_CODES: CountryDialCode[] = [
  { countryCode: 'FR', dial: '+33', flag: '🇫🇷', labelKey: 'sync.tr.countries.FR' },
  { countryCode: 'DE', dial: '+49', flag: '🇩🇪', labelKey: 'sync.tr.countries.DE' },
  { countryCode: 'AT', dial: '+43', flag: '🇦🇹', labelKey: 'sync.tr.countries.AT' },
  { countryCode: 'BE', dial: '+32', flag: '🇧🇪', labelKey: 'sync.tr.countries.BE' },
  { countryCode: 'ES', dial: '+34', flag: '🇪🇸', labelKey: 'sync.tr.countries.ES' },
  { countryCode: 'IT', dial: '+39', flag: '🇮🇹', labelKey: 'sync.tr.countries.IT' },
  { countryCode: 'NL', dial: '+31', flag: '🇳🇱', labelKey: 'sync.tr.countries.NL' },
  { countryCode: 'PT', dial: '+351', flag: '🇵🇹', labelKey: 'sync.tr.countries.PT' },
  { countryCode: 'IE', dial: '+353', flag: '🇮🇪', labelKey: 'sync.tr.countries.IE' },
  { countryCode: 'LU', dial: '+352', flag: '🇱🇺', labelKey: 'sync.tr.countries.LU' },
  { countryCode: 'FI', dial: '+358', flag: '🇫🇮', labelKey: 'sync.tr.countries.FI' },
  { countryCode: 'GR', dial: '+30', flag: '🇬🇷', labelKey: 'sync.tr.countries.GR' },
  { countryCode: 'SK', dial: '+421', flag: '🇸🇰', labelKey: 'sync.tr.countries.SK' },
  { countryCode: 'SI', dial: '+386', flag: '🇸🇮', labelKey: 'sync.tr.countries.SI' },
  { countryCode: 'HR', dial: '+385', flag: '🇭🇷', labelKey: 'sync.tr.countries.HR' },
  { countryCode: 'EE', dial: '+372', flag: '🇪🇪', labelKey: 'sync.tr.countries.EE' },
]

export const DEFAULT_DIAL_CODE = '+33'

export const ACCOUNT_COLORS = [
  '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
  '#ec4899', '#f43f5e', '#ef4444', '#f97316',
  '#eab308', '#84cc16', '#22c55e', '#10b981',
  '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6',
]

export const QUERY_STALE_TIMES = {
  dashboard: 5 * 60 * 1000,
  accounts: 1 * 60 * 1000,
  accountDetail: 2 * 60 * 1000,
  sync: 30 * 1000,
  goals: 2 * 60 * 1000,
} as const
