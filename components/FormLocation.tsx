import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa";

interface Province {
  province_id: string;
  province: string;
}

interface City {
  city_id: string;
  city_name: string;
  province_id: string;
}

const FormProvinces: React.FC = () => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get<{
          rajaongkir: { results: Province[] };
        }>(
          "https://api.rajaongkir.com/starter/province?key=a28014ff2341ff4a082434646adf943f"
        );
        setProvinces(response.data.rajaongkir.results);
      } catch (err) {
        setError((err as Error).message || "Failed to fetch provinces");
      } finally {
        setLoading(false);
      }
    };

    fetchProvinces();
  }, []);

  const fetchCities = async (provinceId: string) => {
    try {
      const response = await axios.get<{
        rajaongkir: { results: City[] };
      }>(
        `https://api.rajaongkir.com/starter/city?key=a28014ff2341ff4a082434646adf943f&province=${provinceId}`
      );
      setCities(response.data.rajaongkir.results);
    } catch (err) {
      setError((err as Error).message || "Failed to fetch cities");
    }
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    if (provinceId) fetchCities(provinceId);
    else setCities([]);
  };


  return (
    <div className="w-full space-y-4">
      {/* Dropdown Provinsi */}
      <div className="relative">
        <select
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black-400 focus:border-black-500 appearance-none bg-white"
          onChange={handleProvinceChange}
        >
          <option value="">Pilih Provinsi</option>
          {provinces.map((province) => (
            <option key={province.province_id} value={province.province_id}>
              {province.province}
            </option>
          ))}
        </select>

        {/* Panah Kustom */}
        <FaChevronDown className="absolute top-4 right-4 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {/* Dropdown Kota */}
      <div className="relative">
        <select
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black-400 focus:border-black-500 appearance-none bg-white"
          disabled={!selectedProvince}
        >
          <option value="">
            {selectedProvince ? "Pilih Kota" : "Pilih Provinsi Terlebih Dahulu"}
          </option>
          {cities.map((city) => (
            <option key={city.city_id} value={city.city_id}>
              {city.city_name}
            </option>
          ))}
        </select>

        {/* Panah Kustom */}
        <FaChevronDown className="absolute top-4 right-4 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
};

export default FormProvinces;
