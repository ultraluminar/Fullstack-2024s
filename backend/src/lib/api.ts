import yahooFinance from "yahoo-finance2";

yahooFinance.quote('AAPL').then((value) => {
    console.log(value)
});
