package com.netcracker.server.dao.book;

import com.netcracker.shared.model.Book;

import java.util.List;

public interface IBookDAO {
    void addBook(Book book); //admins can add books
    List<Book> findAllBooks();
    List findBookByPrice(int min, int max);

}
