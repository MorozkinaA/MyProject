package com.exampleproject.database.service;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface BookService {
    List<Genre> selectGenres();
    List<Book> selectBooks();
    List<Book> sortBooks(List<String> params);
    Integer selectBookQty(Integer book_id);
}
