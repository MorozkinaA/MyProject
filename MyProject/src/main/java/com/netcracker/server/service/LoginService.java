package com.netcracker.server.service;

import com.netcracker.shared.Customer;
import com.netcracker.shared.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface LoginService {
    boolean isLogged(String login, String password);
    void addNewCustomer(Customer customer);
}
