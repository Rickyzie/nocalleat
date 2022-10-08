package com.backend.sever.product;

import com.backend.sever.store.Store;
import com.backend.sever.store.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class ProductSignUpController {
    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(path="product/add") // Map ONLY POST Requests
    @ResponseBody
    public String addNewProduct (
            @RequestParam Integer product_id,
            @RequestParam String product_name,
            @RequestParam Integer price,
            @RequestParam Integer quantity,
            @RequestParam Integer store_id

    ) {
        Product n = new Product();
        n.setProduct_id(product_id);
        n.setProduct_name(product_name);
        n.setPrice(price);
        n.setQuantity(quantity);
        n.setStore_id(store_id);
        productRepository.save(n);
        return "Saved";
    }


    @RequestMapping(path="product/all")
    @ResponseBody
    public  Iterable<Product> findAll() {
        // This returns a JSON or XML with the users
        return productRepository.findAll();
    }
    @RequestMapping(path="product/storeId")
    @ResponseBody
    public List<Product> getProductBySoreId(
            @RequestParam Integer store_id
    ) {
        // This returns a JSON or XML with the users
        return productRepository.getProductByStoreId(store_id);
    }
}
