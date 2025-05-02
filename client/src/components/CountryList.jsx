import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import CountryDetail from './CountryDetail';

export default function CountryList({ countries }) {
  const [visible, setVisible] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountryCode(country.cca3);
    setVisible(true);
  };

  const handleBorderClick = (borderCode) => {
    setSelectedCountryCode(borderCode);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country) => (
            <div
              key={country.cca3}
              onClick={() => handleCountryClick(country)}
              className="bg-white overflow-hidden transition-shadow cursor-pointer"
            >
              <div className="p-4">
                <div className="flex items-center mb-3">
                  {country.flags?.png && (
                    <img
                      src={country.flags.png}
                      alt={`Flag of ${country.name.common}`}
                      className="w-10 h-6 object-cover mr-2 border border-gray-200"
                    />
                  )}
                  <h3 className="font-semibold text-lg">{country.name.common}</h3>
                </div>

                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Population:</span> {country.population.toLocaleString()}</p>
                  <p><span className="font-medium">Region:</span> {country.region}</p>
                  <p><span className="font-medium">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        style={{ width: '40vw' }}
        className="p-sidebar-lg"
      >
        {selectedCountryCode && (
          <CountryDetail
            countryCode={selectedCountryCode}
            inline
            onBorderClick={handleBorderClick}
          />
        )}
      </Sidebar>
    </>
  );
}
