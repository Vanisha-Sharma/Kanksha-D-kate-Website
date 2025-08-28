"use client";

import { useState } from "react";
import { countries } from "@/lib/countries";

export default function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find((c) => c.name === e.target.value);
    if (selected) {
      setSelectedCountry(selected);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-sm">
      <label className="text-sm font-medium">Select Country</label>
      <select
        value={selectedCountry.name}
        onChange={handleCountryChange}
        className="border rounded px-3 py-2"
      >
        {countries.map((country) => (
          <option key={country.name} value={country.name}>
            {country.name} ({country.code})
          </option>
        ))}
      </select>

      <label className="text-sm font-medium">Phone Number</label>
      <div className="flex items-center gap-2">
        <span className="px-3 py-2 border rounded bg-gray-100 text-sm">
          {selectedCountry.code}
        </span>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="flex-1 border rounded px-3 py-2"
        />
      </div>
    </div>
  );
}
