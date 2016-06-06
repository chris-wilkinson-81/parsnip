package com.wth.parsnip.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wth.parsnip.model.Person;
import com.wth.parsnip.model.form.PersonForm;
import com.wth.parsnip.repository.PersonRepository;

@RestController
@RequestMapping("/api/people")
public class PersonController {
	
	@Autowired
	private PersonRepository personRepository;

	@RequestMapping(value={"", "/"},method=RequestMethod.GET)
	public Iterable<Person> getPeople() {
		return this.personRepository.findAll();
	}
	
	@RequestMapping(value={"", "/"},method=RequestMethod.POST)
	public Person createPerson(@RequestBody PersonForm personForm) {
		Person newPerson = new Person(personForm);
		newPerson = this.personRepository.save(newPerson);
		
		return newPerson;
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)	
	public Person getPerson(@PathVariable("id") long id) {
		return this.personRepository.findOne(id);
	}
	
}
