package com.wth.parsnip.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.wth.parsnip.model.Carrier;
import com.wth.parsnip.repository.CarrierRepository;

@RestController
@RequestMapping("/api/carriers")
public class CarrierController {
	
	@Autowired
	private CarrierRepository carrierRepository;

	@RequestMapping(value={"", "/"},method=RequestMethod.GET)
	public Iterable<Carrier> getCarriers() {
		return this.carrierRepository.findAll();
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)	
	public Carrier create(@RequestBody Carrier carrier) {
		carrier = this.carrierRepository.save(carrier);
		return carrier;
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)	
	public Carrier update(@RequestBody Carrier carrier) {
		carrier = this.carrierRepository.save(carrier);
		return carrier;
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)	
	public Carrier getCarrier(@PathVariable("id") long id) {
		return this.carrierRepository.findOne(id);
	}

	public void setCarrierRepository(CarrierRepository carrierRepository) {
		this.carrierRepository = carrierRepository;
	}
}
