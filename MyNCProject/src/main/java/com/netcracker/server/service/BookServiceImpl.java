package com.netcracker.server.service;


import com.netcracker.server.dao.BookDAO;
import com.netcracker.shared.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("bookService")
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    BookDAO bookDAO;

//    public BookServiceImpl(BookDAO bookDAO) {
//        this.bookDAO = bookDAO;
//    }

    @Override
    public void addBook(Book book){
        bookDAO.addBook(book);
    }

    @Override
    public List<Book> findAllBooks(){
        return bookDAO.findAllBooks();
    }

    @Override
    public List findBookByPrice(int min, int max){
        return bookDAO.findBookByPrice(min, max);
    }

    @Override
    public List<Book> findBooksInPage(int page) {
        return bookDAO.findBooksInPage(page);
    }

    @Override
    public long pagesQty() {
        return bookDAO.pagesQty();
    }
}
