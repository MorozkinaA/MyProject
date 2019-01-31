package com.netcracker.server.dao;

import com.netcracker.shared.Customer;
import com.netcracker.shared.User;

import java.util.List;
import java.util.Map;

public interface LoginDAO {
    boolean isLogged(String login, String password);
    void addNewCustomer(Customer customer);
}
