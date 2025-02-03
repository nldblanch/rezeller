"use client"
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
          className="flex h-full w-full items-center gap-2 p-1"
          onSubmit={handleSubmit}
        >
          <fieldset className="box-border h-full w-full">
            <div className="relative flex w-full items-center rounded-sm bg-white py-1">
              <p className="z-50 text-xs text-black">£</p>
              <label
                htmlFor="min-price"
                className={`z-50 bg-white px-1 text-center text-[8px] text-black ${
                  priceState.minFocused || priceState.minValue
                    ? "-translate-y-3/4 text-[6px]"
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
                className="absolute h-4/5 w-full appearance-none px-3 text-[8px] text-black"
                onFocus={() => handleFocus("min")}
                onBlur={() => handleBlur("min")}
                value={priceState.minValue}
                onChange={(e) => handleChange(e, "min")}
              />
            </div>
          </fieldset>
  
          <p className="text-[8px]">to</p>
  
          <fieldset className="box-border h-full w-full">
            <div className="relative flex w-full items-center rounded-sm bg-white py-1">
              <p className="z-50 text-xs text-black">£</p>
              <label
                htmlFor="max-price"
                className={`z-50 bg-white px-1 text-center text-[8px] text-black ${
                  priceState.maxFocused || priceState.maxValue
                    ? "-translate-y-3/4 text-[6px]"
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
                className="absolute h-4/5 w-full appearance-none px-3 text-[8px] text-black"
                onFocus={() => handleFocus("max")}
                onBlur={() => handleBlur("max")}
                value={priceState.maxValue}
                onChange={(e) => handleChange(e, "max")}
              />
            </div>
          </fieldset>
  
          <button
            type="submit"
            className="aspect-square rounded-full bg-white p-1 text-[8px] text-black"
          >
            go
          </button>
        </form>
      </>
    );
  };