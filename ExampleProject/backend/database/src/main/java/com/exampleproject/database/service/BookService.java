package com.exampleproject.database.service;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface BookService {
    List<Genre> selectGenres();
    List<Book> selectBooks();
    List<Book> sortBooks(Map<String, String> params);
    Integer selectBookQty(Integer bookId);
    void addBook(Book book);
    void deleteBook(Book book);
}
