package com.exampleproject.database;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import com.exampleproject.model.shared.User;

import java.util.List;
import java.util.Map;
import java.util.Queue;

/**
 * Interface for implement work with database.
 */
public interface DataBase{

    User isLogged(List<String> logInfo);

    List<Genre> selectGenres();

    List<Book> selectBooks();

    List<Book> sortBooks(List<String> params);
}
