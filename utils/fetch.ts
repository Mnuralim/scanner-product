export const addNewProduct = async (barcodId: string, name: string, brand: string, url: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qrid: barcodId,
        name,
        imageUrl: url,
        brand,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
