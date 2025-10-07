import { useState } from "react";
import apiGet from "./components/projects/CurrencyConvertor/services/dataUtils";
import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const initialState = {
  amount: "0",
  from: "USD",
  to: "INR",
  result: 0,
};

const Currencies = ["USD", "EUR", "INR", "GBP", "AUD"];

const CurrencyConvertorAxiosApp = () => {
  const [curconState, setCurconState] = useState(initialState);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeAmount = (e) => {
    e.preventDefault();

    try {
      const { name, value } = e.target;

      setCurconState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } catch (error) {
      setError(error);

      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  };

  const handleChangeCurrency = (e) => {
    e.preventDefault();

    try {
      const { name, value } = e.target;

      setCurconState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } catch (error) {
      setError(error);

      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }
  };

  const handleCurrencyConvert = async (e) => {
    setIsLoading(true);

    try {
      e.preventDefault();

      const { amount, from, to } = curconState;

      if (amount === undefined || amount === "0") {
        alert("Please enter Amount");
        return;
      } else if (from === undefined || from === "") {
        alert("Please select From Currency");
        return;
      } else if (to === undefined || to === "") {
        alert("Please select To Currency");
        return;
      } else {
        const APIResponse = await apiGet(`pair/${from}/${to}/${amount}`);

        if (
          APIResponse != null &&
          APIResponse.data != null &&
          APIResponse.status === 200
        ) {
          console.log(APIResponse.data);

          const { conversion_result } = APIResponse.data;

          await setCurconState((prevState) => ({
            ...prevState,
            result: conversion_result.toFixed(2),
          }));
        } else {
          setError("Error while converting currency");
        }
      }
    } catch (error) {
      setError("Error while converting currency");

      console.error("Error Message ", error.message);
      console.error("Error Status ", error.response.status);
      console.error("Error Data ", error.response.data);
    }

    setIsLoading(false);
  };

  return (
    <section className="cc-container">
      <div className="cc-div">
        <div>
          <h2>Currency Converter</h2>
        </div>
        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              id="currency_amount"
              name="amount"
              type="number"
              value={curconState.amount}
              onChange={(e) => handleChangeAmount(e)}
            />
          </label>
        </div>
        <div className="cc-selector">
          <label htmlFor="currency_from">
            From:
            <select
              id="currency_from"
              name="from"
              value={curconState.from}
              onChange={(e) => handleChangeCurrency(e)}
            >
              {Currencies.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="currency_to">
            From:
            <select
              id="currency_to"
              name="to"
              value={curconState.to}
              onChange={(e) => handleChangeCurrency(e)}
            >
              {Currencies.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button
          disabled={isLoading || curconState.amount <= 0}
          onClick={(e) => handleCurrencyConvert(e)}
        >
          {isLoading ? <div class="loader">Converting...</div> : "Convert"}
        </button>
        <hr />
        {curconState.result && (
          <div>
            <h2>
              {`${curconState.amount} ${curconState.from} = ${curconState.result}
              ${curconState.to}`}
            </h2>
          </div>
        )}

        {error && <h2>{error}</h2>}
      </div>
    </section>
  );
};

const CurrencyConvertorReactQueryAxiosApp = () => {
  const [curconState, setCurconState] = useState(initialState);

  const handleChangeAmount = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setCurconState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeCurrency = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setCurconState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data, isLoading, isError, Error, refetch } = useQuery({
    queryKey: ["currency"],
    queryFn: async () =>
      await apiGet(
        `pair/${curconState.from}/${curconState.to}/${curconState.amount}`
      ),
    enabled: false,
  });

  const handleCurrencyConvert = async (e) => {
    try {
      e.preventDefault();

      const { amount, from, to } = curconState;

      if (amount === undefined || amount === "0") {
        alert("Please enter Amount");
        return;
      } else if (from === undefined || from === "") {
        alert("Please select From Currency");
        return;
      } else if (to === undefined || to === "") {
        alert("Please select To Currency");
        return;
      } else {
        const APIResponse = await refetch();

        if (
          APIResponse != null &&
          APIResponse.data != null &&
          APIResponse.status === "success" &&
          APIResponse.data.data != null
        ) {
          console.log(APIResponse.data);

          const { conversion_result } = APIResponse.data.data;

          await setCurconState((prevState) => ({
            ...prevState,
            result: conversion_result?.toFixed(2),
          }));
        }
      }
    } catch (error) {
      console.error(`Error while converting currency ${error}`);

      console.error("Error Message ", error.message);
      console.error("Error Status ", error.status);
      console.error("Error Data ", error.data);
    }
  };

  return (
    <section className="cc-container">
      <div className="cc-div">
        <div>
          <h2>Currency Converter</h2>
        </div>
        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              id="currency_amount"
              name="amount"
              type="number"
              value={curconState.amount}
              onChange={(e) => handleChangeAmount(e)}
            />
          </label>
        </div>
        <div className="cc-selector">
          <label htmlFor="currency_from">
            From:
            <select
              id="currency_from"
              name="from"
              value={curconState.from}
              onChange={(e) => handleChangeCurrency(e)}
            >
              {Currencies.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="currency_to">
            From:
            <select
              id="currency_to"
              name="to"
              value={curconState.to}
              onChange={(e) => handleChangeCurrency(e)}
            >
              {Currencies.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button
          disabled={isLoading || curconState.amount <= 0}
          onClick={(e) => handleCurrencyConvert(e)}
        >
          {isLoading ? <div className="loader">Converting...</div> : "Convert"}
        </button>
        <hr />

        {curconState.result > 0 && (
          <div>
            <h2>
              {`${curconState.amount} ${curconState.from} = ${curconState.result}
              ${curconState.to}`}
            </h2>
          </div>
        )}

        {isError ? Error && <h2>{Error}</h2> : ""}
      </div>
    </section>
  );
};

const CurrencyConvertorApp = (props) => {
  const { APICallingWay } = props;

  const queryClient = new QueryClient();

  return APICallingWay === "reactquery" ? (
    <QueryClientProvider client={queryClient}>
      <CurrencyConvertorReactQueryAxiosApp />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  ) : (
    <CurrencyConvertorAxiosApp />
  );
};

export default CurrencyConvertorApp;
