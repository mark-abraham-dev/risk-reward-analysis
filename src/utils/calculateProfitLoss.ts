import { OptionContract } from '../types/OptionContract';

export function calculateProfitLoss(
    options: OptionContract[],
    underlyingPrice: number
): number {
    return options.reduce((acc, option) => {
        const { type, strike_price, bid, ask, long_short } = option;
        let profitLoss = 0;

        if (type === 'Call') {
            if (long_short === 'long') {
                profitLoss = Math.max(underlyingPrice - strike_price, 0) - ask;
            } else {
                profitLoss = bid - Math.max(underlyingPrice - strike_price, 0);
            }
        } else if (type === 'Put') {
            if (long_short === 'long') {
                profitLoss = Math.max(strike_price - underlyingPrice, 0) - ask;
            } else {
                profitLoss = bid - Math.max(strike_price - underlyingPrice, 0);
            }
        }

        return acc + profitLoss;
    }, 0);
}
