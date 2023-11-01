import { useState } from "react";
import Button from "../components/ui/Button";

const NewProduct = () => {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex flex-col items-center gap-3 mt-10 font-sans">
      <h2 className="font-bold text-xl">새로운 제품 등록</h2>
      {file && <img src={URL.createObjectURL(file)} alt={file} />}
      <div className="border-2 border-rose-600">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="file"
            required
            name="file"
            accept="image/*"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
            onChange={handleChange}
          />
          <input
            type="text"
            required
            name="title"
            placeholder="제품명"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />
          <input
            type="text"
            required
            name="price"
            placeholder="가격"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />
          <input
            type="text"
            required
            name="category"
            placeholder="카테고리"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />

          <input
            type="text"
            required
            name="description"
            placeholder="제품 설명"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />

          <input
            type="text"
            required
            name="options"
            placeholder="옵션들(','로 구분)"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />

          <Button type="submit">제품 등록하기</Button>
        </form>
      </div>
    </section>
  );
};

export default NewProduct;
