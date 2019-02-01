package com.exampleproject.database;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.User;
import org.springframework.stereotype.Component;

import javax.persistence.criteria.CriteriaBuilder;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Component
public class OracleDataBase implements DataBase<Map<String,? super Object>> {

    protected void checkOracleConnection() throws ClassNotFoundException {
        Class.forName("oracle.jdbc.driver.OracleDriver");
    }

    protected PreparedStatement prepareStatement(final String query) throws SQLException {
            Connection connection = DriverManager.getConnection(
                "jdbc:oracle:thin:@sql.edu-netcracker.com:1251:XE",
                "NN_14",
                "NN_14");
            return connection.prepareStatement(query);
    }

    public List<String> selectGenres() {
        List<String> genres = new ArrayList<String>();
        try {
            checkOracleConnection();
            PreparedStatement preparedStatement = prepareStatement("SELECT genre_name FROM genres");
            ResultSet set = preparedStatement.executeQuery();
            while(set.next()){
                String genre = set.getString("genre_name");
                genres.add(genre);
            }
//            preparedStatement.close();
//            set.close();
        }catch (SQLException ex){
            throw new RuntimeException(ex);
        }catch (ClassNotFoundException ex){
            throw new RuntimeException(ex);
        }
        return genres;
    }

    public User isLogged(List<String> logInfo) {
        User user = null;
        try{
            checkOracleConnection();
            PreparedStatement preparedStatement = prepareStatement("select role, user_name, user_surname" +
                    " from users where user_login = " + logInfo.get(0) +
                    "and user_password = " + logInfo.get(1).hashCode());
            ResultSet resultSet = preparedStatement.executeQuery();
            if(resultSet != null){
                user.setRole(resultSet.getString("role"));
                user.setName(resultSet.getString("user_name"));
                user.setSurname(resultSet.getString("user_surname"));
            }
        }catch (SQLException ex){
            throw new RuntimeException(ex);
        }catch (ClassNotFoundException ex){
            throw new RuntimeException(ex);
        }
        return user;
    }

    public List<Book> selectBooks() {
        List<Book> books = new ArrayList<Book>();
        try{
            checkOracleConnection();
            PreparedStatement preparedStatement = prepareStatement("SELECT ..");
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                Book book = new Book();
                book.setTitle(resultSet.getString("title"));
                book.setPublisher(resultSet.getString("publisher"));
                book.setPages(resultSet.getInt("pages"));
                book.setDescription(resultSet.getString("description"));
                book.setPrice(resultSet.getFloat("book_price"));
                book.setQty(resultSet.getInt("book_qty"));
                List<String> authors = new ArrayList<String>();
                authors.add(resultSet.getString("author_name") + resultSet.getString("author_surname"));
                List<String> genres = new ArrayList<String>();
            }
        }catch (SQLException ex){
            throw new RuntimeException(ex);
        }catch (ClassNotFoundException ex){
            throw new RuntimeException(ex);
        }
        return books;

    }
}
