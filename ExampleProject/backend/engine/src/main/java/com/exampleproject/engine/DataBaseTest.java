package com.exampleproject.engine;

import com.exampleproject.database.DataBase;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class DataBaseTest {

    private final DataBase<Map<String, ? super Object>> dataBase;

    @Autowired
    public DataBaseTest(DataBase<Map<String, ? super Object>> dataBase) {
        this.dataBase = dataBase;
    }

    public List<String> selectGenres(){
        return dataBase.selectGenres();
    }

    public User isLogged(List<String> logInfo){
        return dataBase.isLogged(logInfo);
    }

    public List<Book> selectBooks(){
        return dataBase.selectBooks();
    }
}
