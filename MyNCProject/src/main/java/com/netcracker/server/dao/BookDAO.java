package com.netcracker.server.dao;

import com.netcracker.shared.Book;

import java.util.List;

public interface BookDAO {
    void addBook(Book book); //admins can add books
    List<Book> findAllBooks();
    List findBookByPrice(int min, int max);
    List<Book> findBooksInPage(int page);

    long pagesQty();
}
