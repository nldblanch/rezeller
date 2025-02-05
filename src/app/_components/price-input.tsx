"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useURLParams } from "../hooks/URLParams";

export const PriceInput = () => {
  const [priceState, setPriceState] = useState({
    minValue: "",
    maxValue: "",
    minFocused: false,
    maxFocused: false,
  });
  const router = useRouter();
  const { params, createURLParamString } = useURLParams();

  const handleBlur = (field: "min" | "max") => {
    const { minValue, maxValue } = priceState;
    if (minValue && maxValue && Number(minValue) > Number(maxValue)) {
      setPriceState((prev) => ({
        ...prev,
        minValue: maxValue,
        maxValue: minValue,
      }));
    }
    setPriceState((prev) => ({ ...prev, [`${field}Focused`]: false }));
  };

  const handleFocus = (field: "min" | "max") => {
    setPriceState((prev) => ({ ...prev, [`${field}Focused`]: true }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "min" | "max",
  ) => {
    setPriceState((prev) => ({ ...prev, [`${field}Value`]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { minValue, maxValue } = priceState;
    if (minValue) {
      params.min_price = String(Number(minValue) * 100);
    }
    if (maxValue) {
      params.max_price = String(Number(maxValue) * 100);
    }

    router.push(`/items?${createURLParamString(params)}`);
  };

  return (
    <>
      <form
        className="flex flex-col desktop:flex-row h-full w-full desktop:items-center gap-2 p-1"
        onSubmit={handleSubmit}
      >
        <fieldset className="box-border h-full w-full max-w-32">
          <div className="relative flex w-full items-center rounded-sm bg-white py-2">
            <p className="z-50 text-base text-black">£</p>
            <label
              htmlFor="min-price"
              className={`z-50 absolute bg-white px-1 left-[8%] text-center text-base text-black ${
                priceState.minFocused || priceState.minValue
                  ? "-translate-y-[100%] text-xxs"
                  : ""
              }`}
            >
              Min
            </label>
            <input
              type="text"
              inputMode="numeric"
              id="min-price"
              name="min-price"
              className="absolute h-4/5 w-full appearance-none px-3 text-base text-black"
              onFocus={() => handleFocus("min")}
              onBlur={() => handleBlur("min")}
              value={priceState.minValue}
              onChange={(e) => handleChange(e, "min")}
            />
          </div>
        </fieldset>

        <p className="text-base">to</p>

        <fieldset className="box-border h-full w-full max-w-32">
          <div className="relative flex w-full items-center rounded-sm bg-white py-2">
            <p className="z-50 text-base text-black">£</p>
            <label
              htmlFor="max-price"
              className={`z-50 absolute bg-white px-1 left-[8%] text-base text-black ${
                priceState.maxFocused || priceState.maxValue
                  ? "-translate-y-[100%] text-xxs"
                  : ""
              }`}
            >
              Max
            </label>
            <input
              type="text"
              inputMode="numeric"
              id="max-price"
              name="max-price"
              className="absolute h-4/5 w-full appearance-none px-3 text-base bg-white text-black"
              onFocus={() => handleFocus("max")}
              onBlur={() => handleBlur("max")}
              value={priceState.maxValue}
              onChange={(e) => handleChange(e, "max")}
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="aspect-square rounded-full bg-blue-500 p-2 text-sm text-white font-bold max-h-8 max-w-8 flex justify-center items-center"
        >
          go
        </button>
      </form>
    </>
  );
};
