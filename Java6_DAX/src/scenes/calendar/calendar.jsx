import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../component/Header";
import { useLocation } from 'react-router-dom';

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const location = useLocation();
  const product = location.state?.product || {};

  const handleFormSubmit = (values) => {
    // Xử lý dữ liệu khi submit form, ví dụ gửi dữ liệu lên server
    console.log(values);
  };

  const initialValues = {
    id: product.id || '',
    name: product.name || '',
    description: product.description || '',
    colors: product.colors || '',
    price: product.price || '',
    category: product.category || '',
    imgUrl: product.imgUrl || '',
    createdAt: product.createdAt || '',
    updatedAt: product.updatedAt || ''
  };

  return (
    <Box m="20px">
      <Header title="Sửa sản phẩm" subtitle="Chỉnh sửa thông tin sản phẩm" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mã sản phẩm"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.id}
                name="id"
                error={!!touched.id && !!errors.id}
                helperText={touched.id && errors.id}
                sx={{ gridColumn: "span 2" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tên sản phẩm"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Mô tả"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Màu sắc"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.colors}
                name="colors"
                error={!!touched.colors && !!errors.colors}
                helperText={touched.colors && errors.colors}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Giá"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Danh mục"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ảnh"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.imgUrl}
                name="imgUrl"
                error={!!touched.imgUrl && !!errors.imgUrl}
                helperText={touched.imgUrl && errors.imgUrl}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ngày tạo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.createdAt}
                name="createdAt"
                error={!!touched.createdAt && !!errors.createdAt}
                helperText={touched.createdAt && errors.createdAt}
                sx={{ gridColumn: "span 4" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Ngày cập nhật"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.updatedAt}
                name="updatedAt"
                error={!!touched.updatedAt && !!errors.updatedAt}
                helperText={touched.updatedAt && errors.updatedAt}
                sx={{ gridColumn: "span 4" }}
                disabled
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Cập nhật sản phẩm
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  id: yup.string().required("required"),
  name: yup.string().required("required"),
  description: yup.string().required("required"),
  colors: yup.string().required("required"),
  price: yup.string().required("required"),
  category: yup.string().required("required"),
  imgUrl: yup.string().required("required"),
  createdAt: yup.string().required("required"),
  updatedAt: yup.string().required("required"),
});

export default Form;
