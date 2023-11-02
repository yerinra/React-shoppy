import { useState } from "react";
import Button from "../components/ui/Button";

import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

const NewProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState();
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
    setIsLoading(true);

    uploadImage(file)
      .then((url) => addNewProduct(product, url))
      .then(() => {
        setSuccess("제품이 성공적으로 등록되었습니다.");
        setProduct({});
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="flex flex-col items-center gap-3 mt-10 font-sans">
      <h2 className="font-bold text-xl">새로운 제품 등록</h2>
      {success && <p className="font-bold text-shoppyAccent">{success}</p>}
      {file && (
        <img src={URL.createObjectURL(file)} alt={file} className="w-96 pt-2" />
      )}
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
            value={product.title ?? ""}
            onChange={handleChange}
            placeholder="제품명"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />
          <input
            type="text"
            required
            name="price"
            value={product.price ?? ""}
            onChange={handleChange}
            placeholder="가격"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />
          <input
            type="text"
            required
            name="category"
            value={product.category ?? ""}
            onChange={handleChange}
            placeholder="카테고리"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />

          <input
            type="text"
            required
            name="description"
            value={product.description ?? ""}
            onChange={handleChange}
            placeholder="제품 설명"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />

          <input
            type="text"
            required
            name="options"
            value={product.options ?? ""}
            onChange={handleChange}
            placeholder="옵션들(','로 구분)"
            className="border-[0.5px] border-shoppyGray p-3 w-96"
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "업로드 중..." : "제품 등록하기"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewProduct;
