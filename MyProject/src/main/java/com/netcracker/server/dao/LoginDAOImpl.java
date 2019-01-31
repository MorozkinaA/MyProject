package com.netcracker.server.dao;

import com.netcracker.server.config.HibernateUtil;
import com.netcracker.shared.Customer;
import com.netcracker.shared.User;

import java.util.List;
import java.util.Map;

public class LoginDAOImpl implements LoginDAO {
    @Override
    public boolean isLogged(String login, String password) {
        User user = (User)HibernateUtil.getSessionFactory().openSession().createSQLQuery("select * from user where user_login = "
                + login + " and user_password = " + password);
        if(user == null){
            return false;
        }
        else{
            return true;
        }
    }

    @Override
    public void addNewCustomer(Customer customer) {

    }
}
