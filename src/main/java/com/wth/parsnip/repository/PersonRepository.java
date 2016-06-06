package com.wth.parsnip.repository;

import org.springframework.data.repository.CrudRepository;

import com.wth.parsnip.model.Person;

public interface PersonRepository extends CrudRepository<Person,Long> {

}
