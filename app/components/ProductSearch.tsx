"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const ProductSearch = () => {
  const [productUrl, setProductUrl] = useState<string>("");
  const [urlError, setUrlError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductUrl(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (productUrl) {
      const id = new URL(productUrl).searchParams.get("id");
      if (id) {
        window.location.href = `${window.location}/product?id=${id}`;
      } else {
        setUrlError(true);
        setProductUrl("");
        setTimeout(() => {
          setUrlError(false);
        }, 1000);
      }
    }
  };

  return (
    <form
      className="flex items-center h-fit relative outline-neutral-600"
      onSubmit={handleSubmit}
    >
      <input
        placeholder={urlError ? "invalid url" : "enter product url"}
        onChange={handleChange}
        value={productUrl}
        className={`placeholder:text-sm ${urlError ? "outline-red-800" : "outline-neutral-600"} focus:outline-2 outline-0 transition-all bg-neutral-900 gap-1 flex border-neutral-600 border rounded-xl p-1 px-2 items-center`}
      />
      <button type="submit" className=" absolute right-2.5 cursor-pointer">
        <SearchIcon className="text-neutral-400 size-4 hover:opacity-70 transition-all" />
      </button>
    </form>
  );
};

export default ProductSearch;
