package com.netcracker.server.dao;

import com.netcracker.server.config.HibernateUtil;
import com.netcracker.shared.Book;
import org.hibernate.*;

import org.hibernate.criterion.Projections;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository("bookDAO")
@Transactional
public class BookDAOImpl extends BasicDAO implements BookDAO {

    @Override
    public void addBook(Book book) {
        persist(book);
    }

    @Override
    public List<Book> findAllBooks() {
        Criteria criteria = HibernateUtil.getSessionFactory().openSession().createCriteria(Book.class);
        return criteria.list();
//        SQLQuery query = getSession().createSQLQuery("select * from books");
//        List<Book> list = (List<Book>)query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP).list();
//        return  list;
    }

    @Override
    public List findBookByPrice(int min, int max) {
        SQLQuery query = getSession().createSQLQuery("select * from books" +
                "where book_price > " + min + " and < " + max);
        return query.list();
    }

    @Override
    public List<Book> findBooksInPage(int page) {
        //NativeQuery query = getSession().createNativeQuery("SELECT * FROM(SELECT * FROM BOOKS ORDER BY BOOK_ID) WHERE ROWNUM BETWEEN 20 * " + page + " AND 20 * (" + page + " + 1);", Book.class);
//        Query query = manager.createNativeQuery("select * from books", Book.class);
//        return query.getResultList();
        SQLQuery query = getSession().createSQLQuery("select * from BOOKS");
        List<Book> list = query.setResultTransformer(Criteria.ALIAS_TO_ENTITY_MAP).list();
        return list;
    }

    @Override
    public long pagesQty() {
        Criteria criteria = getSession().createCriteria(Book.class);
        Object res = criteria.setProjection(Projections.rowCount()).uniqueResult();
        return Long.parseLong(res.toString()) / 20;
    }

}
