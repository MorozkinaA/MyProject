package com.netcracker.server.dao.book;

import com.netcracker.server.dao.BasicDAO;
import com.netcracker.shared.model.Book;
import org.hibernate.Criteria;
import org.hibernate.SQLQuery;

import java.util.List;

public class BookDaoImpl extends BasicDAO implements IBookDAO {
    @Override
    public void addBook(Book book) {
        persist(book);
    }

    @Override
    public List<Book> findAllBooks() {
        Criteria criteria = getSession().createCriteria(Book.class);
        return criteria.list();
    }

    @Override
    public List findBookByPrice(int min, int max) {
        SQLQuery query = getSession().createSQLQuery("select * from books" +
                "where book_price > " + min + " and < " + max);
        return query.list();
    }
}
