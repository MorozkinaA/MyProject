package com.exampleproject.database.dao;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;

import java.util.List;
import java.util.Map;

public interface BookDAO {
    List<Genre> selectGenres();
    List<Book> selectBooks();
    List<Book> sortBooks(Map<String, String> params);
    Integer selectBookQty(Integer bookId);
    void addBook(Book book);
    void deleteBook(Book book);
}
