const url = "https://api.cloudinary.com/v1_1/hzxyensd5/image/upload";

export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
  return fetch(import.meta.env.VITE_CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => data.url);
}
