package com.wth.parsnip.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.wth.parsnip.model.Customer;
import com.wth.parsnip.repository.CustomerRepository;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	
	@Autowired
	private CustomerRepository customerRepository;

	@RequestMapping(value={"", "/"},method=RequestMethod.GET)
	public Iterable<Customer> getCustomers() {
		return this.customerRepository.findAll();
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)	
	public Customer create(@RequestBody Customer customer) {
		customer = this.customerRepository.save(customer);
		return customer;
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)	
	public Customer getCustomer(@PathVariable("id") long id) {
		return this.customerRepository.findOne(id);
	}
	
	public void setCustomerRepository(CustomerRepository customerRepository) {
		this.customerRepository = customerRepository;
	}
}
