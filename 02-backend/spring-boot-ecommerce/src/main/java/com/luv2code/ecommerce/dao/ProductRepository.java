package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

// <Entity Type, Primary Key Type>
@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository <Product, Long> {
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);

}
