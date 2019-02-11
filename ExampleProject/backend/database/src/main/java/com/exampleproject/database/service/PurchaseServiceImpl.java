package com.exampleproject.database.service;


import com.exampleproject.database.dao.PurchaseDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

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
}
