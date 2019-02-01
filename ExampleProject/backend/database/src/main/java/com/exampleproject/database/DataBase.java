package com.exampleproject.database;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.User;

import java.util.List;
import java.util.Map;

/**
 * Interface for implement work with database.
 */
public interface DataBase<T> {

    User isLogged(List<String> logInfo);

    List<String> selectGenres();

    List<Book> selectBooks();
}
