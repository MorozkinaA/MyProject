package com.exampleproject.engine;

import com.exampleproject.database.DataBase;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import com.exampleproject.model.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class DataBaseTest {

    private final DataBase dataBase;


    @Autowired
    public DataBaseTest(DataBase dataBase) {
        this.dataBase = dataBase;
    }

    public List<Genre> selectGenres(){
        return dataBase.selectGenres();
    }

    public User isLogged(List<String> logInfo){
        return dataBase.isLogged(logInfo);
    }

    public List<Book> selectBooks(){
        return dataBase.selectBooks();
    }

    public List<Book> sortBooks(List<String> params){
        return dataBase.sortBooks(params);
    }
}
