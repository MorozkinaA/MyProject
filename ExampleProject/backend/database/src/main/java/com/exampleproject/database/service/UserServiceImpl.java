package com.exampleproject.database.service;

import com.exampleproject.database.dao.UserDAO;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {

    UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public void createCustomer(Customer customer) {
        userDAO.createCustomer(customer);
    }

    public boolean loginIsFree(String login) {
        return userDAO.loginIsFree(login);
    }

    public User isLogged(List<String> loginInfo) {
        return userDAO.isLogged(loginInfo);
    }
}
