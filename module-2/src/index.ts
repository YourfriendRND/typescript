import {
    AccountDaily,
    AccountDailyReducer
} from './i-faces';

const accountDaily: AccountDailyReducer = (accountId, ledger): AccountDaily[]=> {
    const accountDates = new Set<string>();
    const ledgersByAccount = ledger.filter((record) => record.creditAccountId === accountId || record.debitAccountId === accountId)
        .map((record) => {
        const [ day ] = record.posted.split("T");
        accountDates.add(day);
        return {
            ...record,
            posted: day
        }
    });

    return Array.from(accountDates).map((date) => {
        const debitAccountId = ledgersByAccount.reduce((prev, current, i) => {
            if (current.posted === date && current.debitAccountId === accountId) {           
                return prev + current.amount;
            }
            return prev;
        }, 0);
        const creditDayTotal = ledgersByAccount.reduce((prev, current, i) => {
            if (current.posted === date && current.creditAccountId === accountId) {
                return prev + current.amount;
            }
            return prev;
        }, 0)

        return {
            date,
            debitDayTotal: debitAccountId,
            creditDayTotal: creditDayTotal,
        };
    });
};


export default accountDaily;
