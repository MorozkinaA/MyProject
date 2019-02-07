package com.exampleproject.database.dao;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;

import java.util.List;

public interface BookDAO {
    List<Genre> selectGenres();
    List<Book> selectBooks();
    List<Book> sortBooks(List<String> params);
    Integer selectBookQty(Integer book_id);
}
