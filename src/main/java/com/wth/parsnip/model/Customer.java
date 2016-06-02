package com.wth.parsnip.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="customer")
public class Customer {

	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonProperty("id")
    private long id;
    
    @Column(name="name", nullable=false)
    @JsonProperty("name")
    private String name;

    @Column(name="business_number", nullable=false)
    @JsonProperty("businessNumber")    
    private String businessNumber;
    
    @Column(name="street_address", nullable=false)
    @JsonProperty("streetAddress")    
    private String streetAddress;

    @Column(name="postal_code", nullable=false)
    @JsonProperty("postalCode")    
    private String postalCode;

    @Column(name="apartment_number", nullable=true)
    @JsonProperty("apartmentNumber")    
    private String apartmentNumber;

    @Column(name="city", nullable=false)
    @JsonProperty("city")    
    private String city;
    
    @Column(name="province", nullable=false)
    @JsonProperty("province")    
    private String province;

    @Column(name="country", nullable=false)
    @JsonProperty("country")    
    private String country;

    @Column(name="phone_number", nullable=false)
    @JsonProperty("phoneNumber")    
    private String phoneNumber;
    
    @Column(name="fax_number", nullable=true)
    @JsonProperty("faxNumber")    
    private String faxNumber;
    
    @Column(name="email_address", nullable=true)
    @JsonProperty("emailAddress")    
    private String emailAddress;
    
    @Column(name="website_url", nullable=true)
    @JsonProperty("websiteUrl")    
    private String websiteUrl;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBusinessNumber() {
		return businessNumber;
	}

	public void setBusinessNumber(String businessNumber) {
		this.businessNumber = businessNumber;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getApartmentNumber() {
		return apartmentNumber;
	}

	public void setApartmentNumber(String apartmentNumber) {
		this.apartmentNumber = apartmentNumber;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getFaxNumber() {
		return faxNumber;
	}

	public void setFaxNumber(String faxNumber) {
		this.faxNumber = faxNumber;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getWebsiteUrl() {
		return websiteUrl;
	}

	public void setWebsiteUrl(String websiteUrl) {
		this.websiteUrl = websiteUrl;
	}
}
