import { SearchIcon } from "lucide-react";

const ProductSearch = () => {
  return (
    <div className="flex items-center relative">
      <input
        placeholder="Enter Product Link"
        className="placeholder:text-sm outline-1 outline-neutral-500 bg-neutral-900 gap-1 flex border-neutral-600 border rounded-xl p-1 px-2 items-center"
      />
      <button type="submit" className=" absolute right-2.5">
        <SearchIcon className="text-neutral-400 size-4" />
      </button>
    </div>
  );
};

export default ProductSearch;
