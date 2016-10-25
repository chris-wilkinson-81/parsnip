package com.wth.parsnip.model;

import javax.persistence.Entity;
import javax.persistence.MappedSuperclass;
import javax.persistence.Table;

@Entity
@Table(name="carrier")
public class Carrier extends Business {

}
