package com.exampleproject.database.dao;

import com.exampleproject.model.shared.Author;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.awt.*;
import java.sql.PreparedStatement;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Pattern;

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
        books.get(0);
        for(Book b : books){
            Hibernate.initialize(b.getAuthors());
            Hibernate.initialize(b.getGenres());
        }
        return books;
    }

    public List<Book> sortBooks(Map<String, String> params) {
        Float minPrice = Float.parseFloat(params.get("minPrice"));
        Float maxPrice = Float.parseFloat(params.get("maxPrice"));
        String genre = params.get("genre");
        String photo = params.get("photo");

        Criteria c = getSession().createCriteria(Genre.class);
        c.add(Restrictions.like("genre", "%" + genre + "%"));

        Criteria criteria = getSession().createCriteria(Book.class);
        criteria.add(Restrictions.ge("price", minPrice));
        if(maxPrice != 0){
            criteria.add(Restrictions.le("price", maxPrice));
        }
//        criteria.add(Restrictions.like("genres", genre));
        if(photo != null){
            criteria.add(Restrictions.isNotNull("photoUrl"));
        }
        List<Book> books = criteria.list();
        for(Book b : books){
            Hibernate.initialize(b.getGenres());
            Hibernate.initialize(b.getAuthors());
        }
        return books;
//        String q = "SELECT * FROM books " +
//                "JOIN books_genres ON books.book_id = books_genres.book_id" +
//                "JOIN genres ON books_genres.genre_id = genres.genre_id " +
//                "WHERE book_price > :minPrice ";
//        if(maxPrice != 0)
//        String q = "SELECT * FROM books " +
//                "JOIN books_genres ON books.book_id = books_genres.book_id" +
//                "JOIN genres ON books_genres.genre_id = genres.genre_id " +
//                "WHERE book_price > " + minPrice;
//            if(maxPrice != 0){
//            q += " AND book_price < " + maxPrice;
//        }
//        if(!genre.equals("все")){
//            q += " AND genre = " + genre;
//        }
//        if(photo != null){
//            q += " AND photo IS NOT NULL";
//        }
//        SQLQuery query = getSession().createSQLQuery(q);
//        return (List<Book>)query.list();
    }

    public Integer selectBookQty(Integer bookId) {
        Criteria criteria = getSession().createCriteria(Book.class);
        criteria.add(Restrictions.eq("id", bookId));
        Book book = (Book)criteria.uniqueResult();
        return book.getQty();
    }

    public void addBook(Book book) {
        Set<Genre> genres = book.getGenres();
        Set<Author> authors = book.getAuthors();
        List<Genre> existedGenres = getSession().createCriteria(Genre.class).list();
        List<Author> existedAuthors = getSession().createCriteria(Author.class).list();

        for(Genre g : genres){
            int count = 0;
            for(Genre existG : existedGenres){
                if(!g.equals(existG)){
                    count++;
                }
            }
            if(count == existedGenres.size()){
                persist(g);
            }
        }

        for(Author a : authors){
            int count = 0;
            for(Author existA : existedAuthors){
                if(!a.equals(existA)){
                    count++;
                }
            }
            if(count == existedAuthors.size()){
                persist(a);
            }
        }

        persist(book);
    }

    public void deleteBook(Book book) {
        delete(book);
    }

    public void updateBook(Book book) {
        update(book);
    }
}
