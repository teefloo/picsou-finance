import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { COUNTRY_DIAL_CODES, DEFAULT_DIAL_CODE } from '@/lib/constants'

function splitPhoneNumber(value: string): { dial: string; rest: string } {
  const match = COUNTRY_DIAL_CODES
    .filter((c) => value.startsWith(c.dial))
    .sort((a, b) => b.dial.length - a.dial.length)[0]

  if (!match) return { dial: DEFAULT_DIAL_CODE, rest: value }
  return { dial: match.dial, rest: value.slice(match.dial.length) }
}

interface PhoneNumberInputProps {
  id?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  autoFocus?: boolean
  className?: string
}

export function PhoneNumberInput({ id, value, onChange, required, autoFocus, className }: PhoneNumberInputProps) {
  const { t } = useTranslation()
  const { dial, rest } = useMemo(() => splitPhoneNumber(value), [value])

  return (
    <div className="flex gap-2">
      <select
        aria-label={t('sync.tr.countryCode')}
        value={dial}
        onChange={(e) => onChange(e.target.value + rest.replace(/\s+/g, ''))}
        className={cn(
          'flex h-7 shrink-0 rounded-md border border-input bg-input/20 px-2 py-0.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 dark:bg-input/30',
          className
        )}
      >
        {COUNTRY_DIAL_CODES.map((c) => (
          <option key={c.countryCode} value={c.dial}>
            {c.flag} {t(c.labelKey)} ({c.dial})
          </option>
        ))}
      </select>
      <Input
        id={id}
        type="tel"
        value={rest}
        onChange={(e) => onChange(dial + e.target.value.replace(/\s+/g, ''))}
        required={required}
        placeholder="6 12 34 56 78"
        autoFocus={autoFocus}
        className={cn('flex-1', className)}
      />
    </div>
  )
}
