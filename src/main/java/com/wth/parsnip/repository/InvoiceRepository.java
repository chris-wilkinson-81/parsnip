package com.wth.parsnip.repository;

import org.springframework.data.repository.CrudRepository;

import com.wth.parsnip.model.Invoice;

public interface InvoiceRepository extends CrudRepository<Invoice,Long>{

}
