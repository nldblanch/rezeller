"use client";
import { loginUser } from "../actions";

export default async function Login() {
  return (
    <main>
      <form className="flex flex-col items-center justify-center">
        <ul className="grid grid-cols-12 gap-4">
          {["1", "2", "3", "4", "5"].map((value) => {
            return (
              <li key={value} className="col-span-full flex justify-center">
                <button
                  className="w-fit border p-2"
                  type="button"
                  name="login"
                  value={value}
                  onClick={async () => {
                    await loginUser(value);
                  }}
                >
                  Login as user {value}
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </main>
  );
}
