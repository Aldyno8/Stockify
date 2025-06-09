import { PageTitle } from "../../atoms/PageTitle";
import { Restockingstat } from "../../moleculs/RestockingStat";
import { RestockingTab } from "../../moleculs/Table";
import { useOrder } from "../../../hooks/useOrder";
import { TabAction } from "../../moleculs/TabAction";
import { useState, useEffect } from "react";
import { OrderForm } from "../../moleculs/Form";

export const Restock = () => {
  const { orders, loading, fetchData } = useOrder();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [itemsToUpdate, setItemsToUpdate] = useState(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [itemToView, setItemToView] = useState(null);
  const [sortedProduct, setSortedProduct] = useState([]);
  const [filteredOrder, setFilteredOrder] = useState([]);

  useEffect(() => {
    setFilteredOrder(orders);
  }, [orders]);

  useEffect(() => {
    setSortedProduct(sortProducts());
  }, [filteredOrder]);

  const searchProduct = (term) => {
    return orders.filter((order) => {
      return Object.values(order).some((value) => {
        if (typeof value === "string" || typeof value === "number") {
          return value.toString().toLowerCase().includes(term.toLowerCase());
        }
        return false;
      });
    });
  };

  const sortProducts = (key = "product_name", order = "asc") => {
    if (!Array.isArray(filteredOrder)) return [];
    return [...filteredOrder].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (typeof valA === "string" && typeof valB === "string") {
        return order === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }

      if (valA instanceof Date || typeof valA === "number") {
        return order === "asc" ? valA - valB : valB - valA;
      }
      return 0;
    });
  };

  const handleSearch = (term) => {
    const filtered = searchProduct(term);
    setFilteredOrder(filtered);
  };

  const handleSort = (key, order) => {
    const sorted = sortProducts(key, order);
    setSortedProduct(sorted);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/order/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("suppression reussite");
        fetchData();
      } else {
        console.log("erreur lors de la suppression");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression", error);
    }
  };

  const handleEdit = (id) => {
    const items = orders.find((order) => order._id === id);
    setItemsToUpdate(items);
    setIsFormOpen(true);
  };

  const handleView = (id) => {
    const item = orders.find((item) => item._id === id);
    setItemToView(item);
    setIsCardOpen(true);
  };

  return (
    <div>
      <PageTitle
        title={"Restocking stock"}
        description={"manages restocking for all your products "}
      />
      <Restockingstat />
      <TabAction
        handleFormOpen={() => {
          setIsFormOpen(true);
          setItemsToUpdate(null);
        }}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <RestockingTab items={sortedProduct} />
      {isFormOpen && (
        <OrderForm
          handleSubmit={() => {
            setIsFormOpen(false);
            fetchData();
            setItemsToUpdate(null);
          }}
          handleFormclose={() => {
            setIsFormOpen(false);
            fetchData();
            setItemsToUpdate(null);
          }}
          itemToUpdate={itemsToUpdate}
          typeData={"order"}
        />
      )}
    </div>
  );
};
