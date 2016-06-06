package com.wth.parsnip.model.form;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PersonForm {
	
    @JsonProperty("firstName")
	private String firstName;
    
    @JsonProperty("lastName")
	private String lastName;
    
    @JsonProperty("emailAddress")
	private String emailAddress;

    @JsonProperty("role")
    private String role;
    
    @JsonProperty("password")
	private String password;
    
    @JsonProperty("passwordConfirm")
	private String passwordConfirm;
    
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPasswordConfirm() {
		return passwordConfirm;
	}
	public void setPasswordConfirm(String passwordConfirm) {
		this.passwordConfirm = passwordConfirm;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
