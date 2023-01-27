export interface GeneralLedgerEntry {
  generalLedgerId: number;
  posted: string;
  debitAccountId: string;
  creditAccountId: string;
  amount: number;
  referenceId: string;
}

export interface AccountDaily {
  date: string;
  debitDayTotal: number;
  creditDayTotal: number;
}

type ShortLedger = Omit<GeneralLedgerEntry, 'generalLedgerId' | 'referenceId'>;

export type AccountDailyReducer = (accountId: string, ledger: ShortLedger[]) => AccountDaily[];