package com.wth.parsnip.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.wth.parsnip.model.Invoice;
import com.wth.parsnip.repository.InvoiceRepository;

@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
	
	@Autowired
	private InvoiceRepository invoiceRepository;

	@RequestMapping(value={"", "/"},method=RequestMethod.GET)
	public Iterable<Invoice> getCustomers() {
		return this.invoiceRepository.findAll();
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)	
	public Invoice create(@RequestBody Invoice invoice) {
		invoice = this.invoiceRepository.save(invoice);
		return invoice;
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)	
	public Invoice update(@RequestBody Invoice invoice) {
		invoice = this.invoiceRepository.save(invoice);
		return invoice;
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)	
	public Invoice getCustomer(@PathVariable("id") long id) {
		return this.invoiceRepository.findOne(id);
	}

	public void setInvoiceRepository(InvoiceRepository invoiceRepository) {
		this.invoiceRepository = invoiceRepository;
	}
}
