import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";

const Component = styled(Box)({
  marginTop: 20,
  "& > p": {
    fontSize: 26,
    marginBottom: 10,
  },
  "& > div > div": {
    marginRight: 20,
    minWidth: 200,
  },
});

const defaultObj = {
  vendor: "",
  product: "",
  amount: 0,
  date: "",
  action: "pending",
};

const AddInvoice = ({ setAddInvoice }) => {
  const [invoice, setInvoice] = useState(defaultObj);

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prev) => ({ ...prev, [name]: value }));
  };

  const addNewInvoice = async () => {
    // prepare payload: ensure amount is a number and remove any id
    const payload = { ...invoice, amount: Number(invoice.amount) };
    delete payload.id; // ensure id isn't sent

    console.log("Payload ->", payload);

    try {
      await saveInvoice(payload);
      setAddInvoice(false);
    } catch (error) {
      console.error("Failed to save invoice:", error.response?.data || error.message);
      alert("Failed to save invoice. See console for details.");
    }
  };

  return (
    <Component>
      <Typography>Add Invoice</Typography>
      <Box>
        <TextField
          variant="standard"
          placeholder="Enter vendor name"
          onChange={onValueChange}
          name="vendor"
          value={invoice.vendor}
          autoComplete="off"
        />
        <TextField
          variant="standard"
          placeholder="Enter product name"
          onChange={onValueChange}
          name="product"
          value={invoice.product}
          autoComplete="off"
        />
        <TextField
          variant="standard"
          placeholder="Enter amount (in Rs)"
          type="number"
          onChange={onValueChange}
          name="amount"
          value={invoice.amount}
          autoComplete="off"
        />
        <TextField
          variant="standard"
          placeholder="Enter Date"
          type="date"
          onChange={onValueChange}
          name="date"
          value={invoice.date}
          autoComplete="off"
        />
        <Button variant="contained" onClick={addNewInvoice}>
          Add Invoice
        </Button>
      </Box>
    </Component>
  );
};

export default AddInvoice;
