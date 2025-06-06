import { useProduct } from "../../../hooks/useProduct";
import { PageTitle } from "../../atoms/PageTitle";
import { TabAction } from "../../moleculs/TabAction";
import { DataTable } from "../../moleculs/Table";
import { Form } from "../../moleculs/Form";
import { ProductCard } from "../../atoms/card";
import { useEffect, useState } from "react";

export const Product = () => {
  const { products, loading, fetchData } = useProduct();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [itemsToUpdate, setItemsToUpdate] = useState(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [itemToView, setItemToView] = useState(null);
  const [sortedProduct, setSortedProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    if (products.length > 0 && filteredProduct.length === 0) {
      setFilteredProduct(products);
    }
  }, [products]);
  
  useEffect(() => {
    setSortedProduct(sortProducts());
  }, [filteredProduct]);

  
  const searchProduct = (term) => {
    return products.filter((product) => {
      return Object.values(product).some((value) => {
        if (typeof value === "string" || typeof value === "number") {
          return value.toString().toLowerCase().includes(term.toLowerCase());
        }
        return false;
      });
    });
  };
  
  const sortProducts = (key = "productName", order = "asc") => {
    if (!Array.isArray(filteredProduct)) return [];
    return [...filteredProduct].sort((a, b) => {
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
    setFilteredProduct(filtered);
  };

  const handleSort = (key, order) => {
    const sorted = sortProducts(key, order);
    setSortedProduct(sorted);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/product/delete/${id}`,
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
    const items = products.find((product) => product._id === id);
    setItemsToUpdate(items);
    setIsFormOpen(true);
  };

  const handleView = (id) => {
    const item = products.find((item) => item._id === id);
    setItemToView(item);
    setIsCardOpen(true);
  };

  return (
    <>
      <PageTitle
        title="Finished product"
        description="Manage your finished product inventory"
      />
      <TabAction
        handleFormOpen={() => {
          setIsFormOpen(true);
          setItemsToUpdate(null);
        }}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <DataTable
        items={sortedProduct}
        loading={loading}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onView={handleView}
      />
      {isFormOpen && (
        <Form
          handleSubmit={() => {
            fetchData();
            setIsFormOpen(false);
            setItemsToUpdate(null);
          }}
          handleFormclose={() => {
            setIsFormOpen(false);
            setItemsToUpdate(null);
          }}
          itemToUpdate={itemsToUpdate}
          typeData={"product"}
        />
      )}
      {isCardOpen && (
        <ProductCard
          product={itemToView}
          onClose={() => setIsCardOpen(false)}
        />
      )}
    </>
  );
};
