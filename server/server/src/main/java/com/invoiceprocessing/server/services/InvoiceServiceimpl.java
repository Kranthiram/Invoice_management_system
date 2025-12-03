package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.InvoiceDoa;
import com.invoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceimpl implements  InvoiceService{

    @Autowired
    InvoiceDoa invoiceDoa;
    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDoa.save(invoice);
        return invoice;
    }

    @Override
    public List<Invoice> getInvoices() {
        return invoiceDoa.findAll();
    }

    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = invoiceDoa.findById(id).get();
        invoiceDoa.delete(invoice);
        return invoice;
    }


}
