import { useEffect, useState } from "react";

export const useProduct = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(1);

  const fetchData = async () => {
    setLoading(1);
    try {
      const response = await fetch("http://localhost:3000/api/product/getAll");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Erreur lors du chargement des produits", error);
    } finally {
      setLoading(0);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { products, loading, fetchData };
};
