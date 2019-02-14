package com.exampleproject.database.service;


import com.exampleproject.model.shared.Adress;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.Order;
import com.exampleproject.model.shared.User;
import org.hibernate.usertype.CompositeUserType;
import org.springframework.stereotype.Component;

import javax.jws.soap.SOAPBinding;
import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Component
public interface PurchaseService {
    void addBookToCart(Map<String, Integer> params);
    void deleteBookFromCart(Map<String, Integer> params);
    //Set<Adress> selectAddresses(User user);
    void addAddress(Customer customer);
    void createOrder(Order order);
}
