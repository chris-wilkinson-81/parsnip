package com.wth.parsnip.repository;

import org.springframework.data.repository.CrudRepository;

import com.wth.parsnip.model.Customer;

public interface CustomerRepository extends CrudRepository<Customer,Long> {

}
