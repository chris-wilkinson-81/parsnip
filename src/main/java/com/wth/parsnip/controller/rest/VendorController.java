package com.wth.parsnip.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.wth.parsnip.model.Vendor;
import com.wth.parsnip.repository.VendorRepository;

@RestController
@RequestMapping("/api/vendors")
public class VendorController {
	
	@Autowired
	private VendorRepository vendorRepository;

	@RequestMapping(value={"", "/"},method=RequestMethod.GET)
	public Iterable<Vendor> getVendors() {
		return this.vendorRepository.findAll();
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)	
	public Vendor create(@RequestBody Vendor vendor) {
		vendor = this.vendorRepository.save(vendor);
		return vendor;
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)	
	public Vendor update(@RequestBody Vendor vendor) {
		vendor = this.vendorRepository.save(vendor);
		return vendor;
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)	
	public Vendor getVendor(@PathVariable("id") long id) {
		return this.vendorRepository.findOne(id);
	}
}
