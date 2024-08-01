import React, { useEffect, useState } from 'react';
import { Box, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        const dataWithId = response.data.map((product) => ({
          id: product.id,
          name: product.name,
          description: product.description,
          colors: product.colorProducts && product.colorProducts.length ? product.colorProducts.map(colorProduct => colorProduct.color).join(", ") : "N/A",
          price: product.price,
          category: product.category ? product.category.categoryName : "N/A",
          imgUrl: `/assets/img/${product.imgUrl}`,
          createdAt: product.createdAt ? new Date(product.createdAt).toLocaleString() : "N/A",
          updatedAt: product.updatedAt ? new Date(product.updatedAt).toLocaleString() : "N/A"
        }));
        setProducts(dataWithId);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleRowDoubleClick = (params) => {
    navigate(`/admin/calendar/${params.row.id}`, { state: { product: params.row } });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Tên sản phẩm", flex: 1 },
    { field: "description", headerName: "Mô tả", flex: 1 },
    { field: "colors", headerName: "Màu sắc", flex: 1 },
    { field: "price", headerName: "Giá", flex: 1 },
    { field: "category", headerName: "Danh mục", flex: 1 },
    { field: "imgUrl", headerName: "URL Ảnh", flex: 1, renderCell: (params) => (
      <img src={params.value} alt="Product" style={{ width: '100%', height: 'auto' }} />
    ) },
    { field: "createdAt", headerName: "Ngày tạo", flex: 1 },
    { field: "updatedAt", headerName: "Ngày cập nhật", flex: 1 }
  ];

  return (
    <Box m="20px">
      <Header title="Sản Phẩm" subtitle="Bảng điều khiển > Sản Phẩm" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={products}
          columns={columns}
          onRowDoubleClick={handleRowDoubleClick}
        />
      </Box>
    </Box>
  );
};

export default Products;
