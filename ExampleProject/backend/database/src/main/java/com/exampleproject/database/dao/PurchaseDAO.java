package com.exampleproject.database.dao;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Cart;

import java.util.List;
import java.util.Map;

public interface PurchaseDAO {
    void addBookToCart(Map<String, Integer> params);
    //void selectBooksFromCart(Integer cartId);
    void deleteBookFromCart(Map<String, Integer> params);
}
