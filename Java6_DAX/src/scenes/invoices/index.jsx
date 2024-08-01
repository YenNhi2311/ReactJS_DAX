import { Box, useTheme, MenuItem, Select, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import request from "../../config/ApiConfig/index";
import { useEffect, useState } from "react";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [invoices, setInvoices] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await request({
          method: "GET",
          path: "/api/orders",
        });

        // Kiểm tra cấu trúc của response
        console.log("API Response:", response);

        const formattedData = response.map((invoice) => ({
          id: invoice.orderId, // Đảm bảo ID là số hoặc chuỗi
          orderId: invoice.orderId,
          employee: invoice?.user?.fullname || 'N/A',
          payment: invoice?.payment?.paymentName || 'N/A',
          promotion: invoice?.promotion?.percents || 'N/A',
          orderDate: new Date(invoice.orderDate).toLocaleDateString(),
          totalAmount: invoice.totalAmount.toFixed(2), // Đảm bảo định dạng chính xác
          shippingFee: invoice.shippingFee.toFixed(2), // Đảm bảo định dạng chính xác
          status: invoice.status,
        }));

        setInvoices(formattedData);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      if (selectedIds.length === 0) {
        alert("Vui lòng chọn ít nhất một hóa đơn.");
        return;
      }

      if (!status) {
        alert("Vui lòng chọn trạng thái.");
        return;
      }

      const ordersToUpdate = invoices.filter(invoice => selectedIds.includes(invoice.id)).map(invoice => ({
        orderId: invoice.id,
        status: status,
      }));

      console.log("Orders to Update:", ordersToUpdate);

      await request({
        method: "POST",
        path: "/api/orders/updateStatus",
        data: ordersToUpdate,
      });

      // Refresh data after update
      const updatedResponse = await request({
        method: "GET",
        path: "/api/orders",
      });

      const formattedData = updatedResponse.map((invoice) => ({
        id: invoice.orderId,
        orderId: invoice.orderId,
        employee: invoice?.user?.fullname || 'N/A',
        payment: invoice?.payment?.paymentName || 'N/A',
        promotion: invoice?.promotion?.percents || 'N/A',
        orderDate: new Date(invoice.orderDate).toLocaleDateString(),
        totalAmount: invoice.totalAmount.toFixed(2),
        shippingFee: invoice.shippingFee.toFixed(2),
        status: invoice.status,
      }));

      setInvoices(formattedData);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedIds(invoices.map(invoice => invoice.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedIds(prevSelectedIds =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter(selectedId => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  return (
    <Box m="20px">
      <Header title="Hóa Đơn" subtitle="Bảng điều khiển > Hóa Đơn" />
      <Box
        display="flex"
        alignItems="center"
        mb="20px"
      >
        <Typography variant="h6" sx={{ mr: "20px" }}>
          Cập nhật trạng thái:
        </Typography>
        <Select
          value={status}
          onChange={handleStatusChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Select Status' }}
        >
          <MenuItem value="Pending">Chờ xác nhận</MenuItem>
          <MenuItem value="Shipped">Đang vận chuyển</MenuItem>
          <MenuItem value="Delivered">Đã nhận</MenuItem>
          <MenuItem value="Cancelled">Đã hủy</MenuItem>
          <MenuItem value="Refunded">Hoàn tiền</MenuItem>
          <MenuItem value="Returned">Hoàn trả</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateStatus}
          sx={{ ml: "20px" }}
        >
          Cập nhật trạng thái
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiTableContainer-root": {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={handleSelectAll}
                    checked={selectedIds.length === invoices.length}
                  />
                </TableCell>
                <TableCell>Mã</TableCell>
                <TableCell>Tên khách hàng</TableCell>
                <TableCell>Giảm giá (%)</TableCell>
                <TableCell>Thanh toán</TableCell>
                <TableCell>Ngày đặt</TableCell>
                <TableCell>Tổng tiền</TableCell>
                <TableCell>Phí giao hàng</TableCell>
                <TableCell>Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedIds.includes(invoice.id)}
                      onChange={() => handleSelectRow(invoice.id)}
                    />
                  </TableCell>
                  <TableCell>{invoice.orderId}</TableCell>
                  <TableCell>{invoice.employee}</TableCell>
                  <TableCell>{invoice.promotion}</TableCell>
                  <TableCell>{invoice.payment}</TableCell>
                  <TableCell>{invoice.orderDate}</TableCell>
                  <TableCell>{invoice.totalAmount}</TableCell>
                  <TableCell>{invoice.shippingFee}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Invoices;
