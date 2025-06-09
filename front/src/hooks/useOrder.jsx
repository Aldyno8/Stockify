import { useEffect, useState } from "react";

export const useOrder = () => {
  const [orders, setOrder] = useState([]);
  const [loading, setLoading] = useState(1);

  const fetchData = async () => {
    setLoading(1);
    try {
      const response = await fetch("http://localhost:3000/api/order/getAll");
      const data = await response.json();
      console.log(data)
      setOrder(data);
    } catch (error) {
      console.error("Erreur lors du chargement des commandes:", error);
    } finally {
      setLoading(0);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { orders, loading, fetchData };
};
