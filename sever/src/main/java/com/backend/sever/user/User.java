package com.backend.sever.user;

import lombok.Data;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "user")
@Data
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer user_id;

	private String user_name;

	private String user_address;

	private String email;

	private String password;

	private float longtitude;

	private float latitude;
}
