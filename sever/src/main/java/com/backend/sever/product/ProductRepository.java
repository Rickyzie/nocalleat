package com.backend.sever.product;

import com.backend.sever.store.Store;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ProductRepository extends CrudRepository<Product, Integer> {
    @Query(value = "SELECT * FROM product p WHERE p.store_id = :store_id",
            nativeQuery = true)
    List<Product> getProductByStoreId(@Param("store_id") Integer store_id);

}
