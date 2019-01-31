package com.netcracker.server.service;

import com.netcracker.server.dao.LoginDAO;
import com.netcracker.shared.Customer;
import com.netcracker.shared.User;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LoginServiceImpl implements LoginService{

    @Autowired
    LoginDAO loginDAO;

    @Override
    public boolean isLogged(String login, String password) {
        return loginDAO.isLogged(login, password);
    }

    @Override
    public void addNewCustomer(Customer customer) {

    }
}
