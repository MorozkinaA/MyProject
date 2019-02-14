package com.exampleproject.database.service;


import com.exampleproject.database.dao.PurchaseDAO;
import com.exampleproject.model.shared.Adress;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.Order;
import com.exampleproject.model.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Service("purchaseService")
@Transactional
public class PurchaseServiceImpl implements PurchaseService {
    PurchaseDAO purchaseDAO;

    @Autowired
    public PurchaseServiceImpl(PurchaseDAO purchaseDAO) {
        this.purchaseDAO = purchaseDAO;
    }

    public void addBookToCart(Map<String, Integer> params) {
        purchaseDAO.addBookToCart(params);
    }

    public void deleteBookFromCart(Map<String, Integer> params) {
        purchaseDAO.deleteBookFromCart(params);
    }

//    public Set<Adress> selectAddresses(User user) {
//        return purchaseDAO.selectAddresses(user);
//    }

    public void addAddress(Customer customer) {
        purchaseDAO.addAddress(customer);
    }

    public void createOrder(Order order) {
        purchaseDAO.createOrder(order);
    }
}
