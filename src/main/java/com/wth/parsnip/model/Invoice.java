package com.wth.parsnip.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="invoice")
public class Invoice {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonProperty("id")
    private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
}
