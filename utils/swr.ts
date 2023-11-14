import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

interface IProductQuery {
  boycot?: string;
  name?: string;
  limit?: string;
}

export const useProduct = (qrid?: string, query?: IProductQuery) => {
  let nameQuery = "";
  let boycotQuery = "";
  let limitQuery = "";
  if (query?.name) {
    nameQuery = query.name;
  }
  if (query?.boycot) {
    boycotQuery = query.boycot;
  }
  if (query?.limit) {
    limitQuery = query.limit;
  }

  const { data, isLoading, mutate } = useSWR(qrid ? [`${process.env.API_URL}/products/${qrid}`] : [`${process.env.API_URL}/products/?boycot=${boycotQuery}&name=${nameQuery}&limit=${limitQuery}`], ([url]) => fetcher(url));
  return {
    product: qrid ? data?.data?.product : data?.data?.products,
    isLoading,
    mutate,
  };
};
