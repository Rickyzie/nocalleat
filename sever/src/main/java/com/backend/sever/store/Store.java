package com.backend.sever.store;

import lombok.Data;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "store")
@Data
public class Store {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "store_id")
	private Integer store_id;

	private String address;

	private String store_name;


}
