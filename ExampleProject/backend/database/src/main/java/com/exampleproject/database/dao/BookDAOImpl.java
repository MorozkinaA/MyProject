package com.exampleproject.database.dao;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.sql.PreparedStatement;
import java.util.List;

@Repository("bookDAO")
@Component
@Transactional
public class BookDAOImpl extends BasicDAO implements BookDAO{

    @Autowired
    public BookDAOImpl(final SessionFactory sessionFactory) {
        super(sessionFactory);
    }

    public List<Genre> selectGenres() {
        Criteria criteria = this.getSession().createCriteria(Genre.class);
        List<Genre> genres = criteria.list();
        return genres;
    }

    public List<Book> selectBooks() {
        Criteria criteria =  this.getSession().createCriteria(Book.class);
        List<Book> books = criteria.list();
        books.get(1);
        return books;
//        SQLQuery query = getSession().createSQLQuery("SELECT * FROM books");
//        List<Book> books = (List<Book>)query.list();
//        books.get(1);
//        return books;
    }

    public List<Book> sortBooks(List<String> params) {
        Float minPrice = Float.parseFloat(params.get(0));
        Float maxPrice = Float.parseFloat(params.get(1));
        String genre = params.get(2);
        String photo = params.get(3);

        //PreparedStatement preparedStatement =
        String q = "SELECT * FROM books " +
                "JOIN books_genres ON books.book_id = books_genres.book_id" +
                "JOIN genres ON books_genres.genre_id = genres.genre_id " +
                "WHERE book_price > " + minPrice;
        if(maxPrice != 0){
            q += " AND book_price < " + maxPrice;
        }
        if(!genre.equals("все")){
            q += " AND genre = " + genre;
        }
        if(photo != null){
            q += " AND photo IS NOT NULL";
        }
        SQLQuery query = getSession().createSQLQuery(q);
        return (List<Book>)query.list();
    }

    public Integer selectBookQty(Integer book_id) {
        Criteria criteria = getSession().createCriteria(Book.class);
        criteria.add(Restrictions.eq("id", book_id));
        Book book = (Book)criteria.uniqueResult();
        return book.getQty();
    }
}
