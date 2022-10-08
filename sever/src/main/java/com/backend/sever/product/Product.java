package com.backend.sever.product;

import lombok.Data;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "product")
@Data
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Integer product_id;

	private String product_name;

	private Integer price;

	private Integer quantity;

	private Integer store_id;








}
