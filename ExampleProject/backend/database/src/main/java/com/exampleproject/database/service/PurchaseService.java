package com.exampleproject.database.service;


import org.springframework.stereotype.Component;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Map;

@Component
public interface PurchaseService {
    void addBookToCart(Map<String, Integer> params);
    void deleteBookFromCart(Map<String, Integer> params);
}
