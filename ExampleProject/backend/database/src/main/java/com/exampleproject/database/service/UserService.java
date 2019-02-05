package com.exampleproject.database.service;

import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import org.springframework.stereotype.Component;

import java.util.List;


@Component
public interface UserService {
    void createCustomer(Customer customer);
    boolean loginIsFree(String login);
    User isLogged(List<String> loginInfo);
}
