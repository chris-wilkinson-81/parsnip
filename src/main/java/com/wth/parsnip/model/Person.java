package com.wth.parsnip.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.wth.parsnip.model.form.PersonForm;

@Entity
@Table(name="person")

public class Person {
	
	public enum Role {
		ADMIN,
		REGULAR
	}
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @JsonProperty("id")
    private long id;
	
    @Column(name="first_name", nullable=false)
    @JsonProperty("firstName")
	private String firstName;
    
    @Column(name="last_name", nullable=false)
    @JsonProperty("lastName")    
	private String lastName;
    
    @Column(name="email_address", nullable=false)
    @JsonProperty("emailAddress")       
	private String emailAddress;

    @Column(name="role", nullable=false)
    @JsonProperty("role")
    private Role role;
    
    //won't expose these via JSON
	private String passwordHash;
	private long createdDate;
	private long modifiedDate;
	private long lastLoginDate;
	
	public Person() {}
	
	public Person(PersonForm personForm) {
		this.firstName = personForm.getFirstName();
		this.lastName = personForm.getLastName();
		this.emailAddress = personForm.getEmailAddress();
		this.role = Role.valueOf(personForm.getRole());
		this.passwordHash = new BCryptPasswordEncoder().encode(personForm.getPassword());
		this.createdDate = new Date().getTime();
		this.modifiedDate = new Date().getTime();
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
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
	public String getPasswordHash() {
		return passwordHash;
	}
	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}
	public long getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(long createdDate) {
		this.createdDate = createdDate;
	}
	public long getModifiedDate() {
		return modifiedDate;
	}
	public void setModifiedDate(long modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
	public long getLastLoginDate() {
		return lastLoginDate;
	}
	public void setLastLoginDate(long lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
}
