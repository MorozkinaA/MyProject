package com.exampleproject.database.dao;


import com.exampleproject.model.shared.Cart;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import org.hibernate.Criteria;
import org.hibernate.NonUniqueResultException;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.object.SqlQuery;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository("userDAO")
@Component
@Transactional
public class UserDAOImpl extends BasicDAO implements UserDAO {

    @Autowired
    public UserDAOImpl(final SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public void createCustomer(Customer customer) {
        User user = customer.getUser();
        persist(user);
        persist(customer);
        Cart cart = new Cart(customer, 0);
    }

    public boolean loginIsFree(String login) {
        SQLQuery query = getSession().createSQLQuery("SELECT user_login FROM users");
        List<String> logins = query.list();
        for(String l : logins){
            if(l.equals(login)){
                return false;
            }
        }
        return true;
    }

    public User isLogged(List<String> logInfo) {
        String login = logInfo.get(0);
        String password = logInfo.get(1);
        User user;
//        SQLQuery query = getSession().createSQLQuery("SELECT * FROM users" +
//                " WHERE user_login = " + login + " AND user_password = " + password);
//        return (User)query.uniqueResult();
        Criteria criteria = getSession().createCriteria(User.class);
        criteria.add(Restrictions.eq("login", login));
        criteria.add(Restrictions.eq("password", password));
        try{
            user = (User)criteria.uniqueResult();
        }catch (NonUniqueResultException ex){
            user = null;
        }
        return user;
    }
//
//    public Cart getCart(User user) {
//        Criteria criteria = getSession().createCriteria(Cart.class);
//
//    }
}
