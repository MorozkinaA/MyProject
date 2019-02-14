package com.exampleproject.database.dao;


import com.exampleproject.model.shared.*;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Repository("purchaseDAO")
@Component
@Transactional
public class PurchaseDAOImpl extends BasicDAO implements PurchaseDAO{

    @Autowired
    public PurchaseDAOImpl(final SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public void addBookToCart(Map<String, Integer > params) {
        Integer cartId  = params.get("cartId");
        Criteria criteria = getSession().createCriteria(Cart.class);
        criteria.add(Restrictions.eq("id", cartId));
        Integer bookId = params.get("bookId");
        Cart cart = (Cart)criteria.uniqueResult();
        Criteria criteria1 = getSession().createCriteria(Book.class);
        criteria1.add(Restrictions.eq("id", bookId));
        Book book = (Book)criteria1.uniqueResult();
        Set<Book> books = cart.getBooks();
        for(Book b : books){
            if(book.equals(b)){

            }
        }
        books.add(book);
        cart.setBooks(books);
        Float price = cart.getPrice();
        cart.setPrice(price + book.getPrice());
        int newQty = book.getQty() - 1;
        book.setQty(newQty);
        update(book);
        update(cart);
    }

    public void deleteBookFromCart(Map<String, Integer> params){
        Integer cartId  = params.get("cartId");
        Criteria criteria = getSession().createCriteria(Cart.class);
        criteria.add(Restrictions.eq("id", cartId));
        Integer bookId = params.get("bookId");
        Cart cart = (Cart)criteria.uniqueResult();
        Criteria criteria1 = getSession().createCriteria(Book.class);
        criteria1.add(Restrictions.eq("id", bookId));
        Book book = (Book)criteria1.uniqueResult();
        Set<Book> books = cart.getBooks();
        books.remove(book);
        cart.setBooks(books);
        Float price = cart.getPrice();
        cart.setPrice(price - book.getPrice());
        int newQty = book.getQty() + 1;
        book.setQty(newQty);
        update(book);
        update(cart);
    }

    public Set<Adress> selectAddresses(User user) {
        Criteria criteria = getSession().createCriteria(Customer.class);
        criteria.add(Restrictions.eq("user", user));
        Customer customer = (Customer)criteria.uniqueResult();
        return customer.getAdresses();
    }

    public void addAddress(Customer customer) {
        Set<Adress> adresses = customer.getAdresses();
        for(Adress a : adresses){
            persist(a);
        }
        update(customer);
    }

    public void createOrder(Order order) {
        persist(order);
    }
}
