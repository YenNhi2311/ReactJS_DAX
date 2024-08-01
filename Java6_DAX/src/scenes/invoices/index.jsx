import {
  Box,
  useTheme,
  MenuItem,
  Select,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import request from "../../config/ApiConfig/index";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [invoices, setInvoices] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [status, setStatus] = useState("");
  const [selectedInvoice, setSelectedInvoice] = useState(null); // State to hold selected invoice for detail view

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await request({
          method: "GET",
          path: "/api/orders",
        });

        const formattedData = response.map((invoice) => ({
          id: invoice.orderId,
          orderId: invoice.orderId,
          employee: invoice?.user?.fullname || "N/A",
          payment: invoice?.payment?.paymentName || "N/A",
          promotion: invoice?.promotion?.percents || "N/A",
          orderDate: new Date(invoice.orderDate).toLocaleDateString(),
          totalAmount: invoice.totalAmount.toFixed(2),
          shippingFee: invoice.shippingFee.toFixed(2),
          status: invoice.status,
          orderDetails: invoice.orderDetails || [], // Include order details
          user: invoice.user || {}, // Include user details
          address: invoice.address || {}, // Include address details
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

      const ordersToUpdate = invoices
        .filter((invoice) => selectedIds.includes(invoice.id))
        .map((invoice) => ({
          orderId: invoice.id,
          status: status,
        }));

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
        employee: invoice?.user?.fullname || "N/A",
        payment: invoice?.payment?.paymentName || "N/A",
        promotion: invoice?.promotion?.percents || "N/A",
        orderDate: new Date(invoice.orderDate).toLocaleDateString(),
        totalAmount: invoice.totalAmount.toFixed(2),
        shippingFee: invoice.shippingFee.toFixed(2),
        status: invoice.status,
        orderDetails: invoice.orderDetails || [], // Include order details
        user: invoice.user || {}, // Include user details
        address: invoice.address || {}, // Include address details
      }));

      setInvoices(formattedData);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedIds(invoices.map((invoice) => invoice.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleViewDetails = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleCloseDetails = () => {
    setSelectedInvoice(null);
  };

  return (
    <Box m="20px">
      <Header title="Hóa Đơn" subtitle="Bảng điều khiển > Hóa Đơn" />
      <Box display="flex" alignItems="center" mb="20px">
        <Typography variant="h6" sx={{ mr: "20px" }}>
          Cập nhật trạng thái:
        </Typography>
        <Select
          value={status}
          onChange={handleStatusChange}
          displayEmpty
          inputProps={{ "aria-label": "Select Status" }}
        >
          <MenuItem value="Chờ xác nhận">Chờ xác nhận</MenuItem>
          <MenuItem value="Đang vận chuyển">Đang vận chuyển</MenuItem>
          <MenuItem value="Đã nhận">Đã nhận</MenuItem>
          <MenuItem value="Đã hủy">Đã hủy</MenuItem>
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
                <TableCell>Thanh toán</TableCell>
                <TableCell>Ngày đặt</TableCell>
                <TableCell>Tổng tiền</TableCell>
                <TableCell>Phí giao hàng</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Chi tiết</TableCell> {/* New column */}
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
                  <TableCell>{invoice.payment}</TableCell>
                  <TableCell>{invoice.orderDate}</TableCell>
                  <TableCell>{invoice.totalAmount}</TableCell>
                  <TableCell>{invoice.shippingFee}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleViewDetails(invoice)}>
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Modal or detail view */}
      {selectedInvoice && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            zIndex: 1300,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Chi tiết hóa đơn #{selectedInvoice.orderId}
          </Typography>
          <Typography gutterBottom>
            <strong>Người dùng:</strong>{" "}
            {selectedInvoice.user.fullname || "N/A"}
          </Typography>
          <Typography gutterBottom>
            <strong>Địa chỉ:</strong>{" "}
            {selectedInvoice.address.fullAddress || "N/A"}
          </Typography>
          <Typography gutterBottom>
            <strong>Phương thức thanh toán:</strong>{" "}
            {selectedInvoice.payment || "N/A"}
          </Typography>
          <Typography gutterBottom>
            <strong>Tổng tiền:</strong> {selectedInvoice.totalAmount} VND
          </Typography>
          <Typography gutterBottom>
            <strong>Phí giao hàng:</strong> {selectedInvoice.shippingFee} VND
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Màu</TableCell>
                <TableCell>Số lượng</TableCell>
                <TableCell>Giá</TableCell>
                <TableCell>Phụ thu</TableCell>
                <TableCell>Thành tiền</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedInvoice.orderDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell>{detail.product?.name || "N/A"}</TableCell>
                  <TableCell>{detail.color?.color || "N/A"}</TableCell>
                  <TableCell>{detail.quantity}</TableCell>
                  <TableCell>{detail.unitPrice} VND</TableCell>
                  <TableCell>{detail.color.price || "0"}</TableCell>
                  <TableCell>
                    {(
                      Number(detail.unitPrice) * Number(detail.quantity) +
                      (Number(detail.color?.price) || 0)
                    ).toFixed(2)}{" "}
                    VND
                  </TableCell>{" "}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            onClick={handleCloseDetails}
            sx={{
              mt: 2,
              ml: "auto", // Thêm thuộc tính này để đẩy nút sang bên phải
              display: "block", // Đảm bảo nút hiển thị trên dòng riêng
              color: "blue",
            }}
          >
            Đóng
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Invoices;
