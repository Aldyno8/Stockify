export const TextInput = ({ title, setName, value }) => {
  return (
    <input
      type="text"
      name={title}
      value={value}
      onChange={setName}
      placeholder={title}
      className="text-black text-xl bg-white w-85 h-12 p-4 mx-10 border-2 border-black rounded-2xl"
    />
  );
};

export const NumberInput = ({ title,quantityValue,unityValue, setQuantity, setUnity }) => {
  return (
    <div className="flex">
      <input
        type="number"
        name={title}
        value={quantityValue}
        onChange={setQuantity}
        placeholder={title}
        className="text-black text-xl bg-white w-65 h-12 p-4 ml-10 border-2 border-black rounded-2xl"
      />
      <select
        className="text-black text-[15px] bg-white w-20 h-12 p-2 ml-2 border-2 border-black rounded-2xl"
        onChange={setUnity}
        value={unityValue}
      >
        <option value="kg">kg</option>
        <option value="p/ces">p/ces</option>
      </select>
    </div>
  );
};
