import React from "react";

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: React.FormEventHandler<HTMLFormElement>;
}

const Form = ({ name, setName, handleSearch }: Props) => {
  return (
    <form onSubmit={handleSearch} className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
      <div className=" relative ">
        <input
          type="text"
          id="name"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Masukan nama produk"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button
        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        type="submit"
      >
        Cari
      </button>
    </form>
  );
};

export default Form;
