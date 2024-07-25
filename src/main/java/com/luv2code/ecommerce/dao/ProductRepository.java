package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

// <Entity Type, Primary Key Type>
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository <Product, Long> {

}
