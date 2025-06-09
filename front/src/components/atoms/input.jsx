import { Search } from "lucide-react";

export const TextInput = ({ title, setName, value }) => {
  return (
    <input
      type="text"
      name={title}
      value={value}
      onChange={setName}
      placeholder={title}
      className="text-black text-[15px] bg-white w-85 h-12 p-4 mx-10 border-2 border-black rounded-2xl"
    />
  );
};

export const NumberInput = ({
  title,
  quantityValue,
  setQuantity,
}) => {
  return (
    <input
      type="number"
      name={title}
      value={quantityValue}
      onChange={setQuantity}
      placeholder={title}
      className="text-black text-[15px] bg-white w-65 h-12 p-4 ml-10 border-2 border-black rounded-2xl"
    />
  );
};

export const LongTextInput = ({ title, value, onChange }) => {
  return (
    <textarea
      name={title}
      value={value}
      onChange={onChange}
      placeholder={title}
      className="text-black text-[15px] bg-white w-100 h-24 p-4 mx-10 border-2 border-black rounded-2xl resize-none"
    />
  );
};

export const SimpleNumberInput = ({ title, value, onChange }) => {
  return (
    <input
      type="number"
      name={title}
      value={value}
      onChange={onChange}
      placeholder={title}
      className="text-black text-[15px] bg-white w-85 h-12 p-4 mx-10 border-2 border-black rounded-2xl"
    />
  );
};

export const UnitSelect = ({ value, onChange }) => {
  return (
    <select
      className="text-black text-[15px] bg-white w-85 h-12 p-2 mx-10 border-2 border-black rounded-2xl"
      value={value}
      onChange={onChange}
    >
      <option value="kg">kg</option>
      <option value="L">L</option>
      <option value="p/ces">p/ces</option>
      <option value="boîte">boîte</option>
      <option value="sachet">sachet</option>
    </select>
  );
};

export const DateInput = ({ title, value, onChange }) => {
  return (
    <input
      type="date"
      name={title}
      value={value}
      onChange={onChange}
      placeholder={title}
      className="text-black text-[15px] bg-white w-85 h-12 p-4 mx-10 border-2 border-black rounded-2xl"
    />
  );
};

export const SearchInput = ({ value, onChange }) => {
  return (
    <div className="flex justify-center items-center h-12 bg-transparent flex-row gap-1 border-1 rounded-2xl shadow-md w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full h-12 px-2 rounded-2xl focus:outline-none"
        placeholder="Search"
      />
      <Search className="w-5 mx-2" />
    </div>
  );
};

export const SortInput = ({ value, onChange }) => {
  return (
    <select
      className="flex h-12 rounded-md border-1 border-gray-300 text-black justify-center items-center transition mx-4 duration-200 cursor-pointer shadow-md"
      value={value}
      onChange={onChange}
    >
      <option value="Category">Catégorie</option>
      <option value="stockQuantity">Quantity</option>
      <option value="productName">Name</option>
      <option value="status">Status</option>
      <option value="expirationDate">Date d'éxpiration</option>
    </select>
  );
};
