package com.exampleproject.database.dao;

import com.exampleproject.model.shared.*;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface PurchaseDAO {
    void addBookToCart(Map<String, Integer> params);
    //void selectBooksFromCart(Integer cartId);
    void deleteBookFromCart(Map<String, Integer> params);
    Set<Adress> selectAddresses(User user);
    void addAddress(Customer customer);
    void createOrder(Order order);
}
