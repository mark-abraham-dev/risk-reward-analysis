export interface OptionContract {
  type: 'Call' | 'Put';
  strike_price: number;
  bid: number;
  ask: number;
  long_short: 'long' | 'short';
  expiration_date: string;
}
