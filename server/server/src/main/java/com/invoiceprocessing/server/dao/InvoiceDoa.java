package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDoa extends JpaRepository<Invoice, Long> {


}
