package com.exampleproject.database;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import com.exampleproject.model.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import org.springframework.context.ApplicationContext;


@Component
public class OracleDataBase implements DataBase {

    private final ApplicationContext applicationContext;

    @Autowired
    public OracleDataBase(ApplicationContext applicationContext) {
        this.applicationContext = applicationContext;
    }

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

    public List<Genre> selectGenres() {
        List<Genre> genres = new ArrayList<Genre>();
        try {
            checkOracleConnection();
            PreparedStatement preparedStatement = prepareStatement("SELECT genre_name FROM genres");
            ResultSet set = preparedStatement.executeQuery();
            while(set.next()){
                Genre g = createGenre();
                g.setGenre(set.getString("genre_name"));
                genres.add(g);
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
        return getBooks("SELECT * FROM" +
                " books, authors, genres " +
                "WHERE books.author_id = authors.author_id " +
                "AND books.genre_id = genres.genre_id");
    }

    public List<Book> sortBooks(List<String> params) {
        String minPrice = params.get(0);
        String maxPrice = params.get(1);
        String genre = params.get(2);
        String isPhoto = params.get(3);
        String query = "SELECT * FROM" +
                " books, authors, genres" +
                " WHERE books.author_id = authors.author_id" +
                " AND books.genre_id = genres.genre_id" +
                " AND books.book_price > " + minPrice +
                " AND books.book_price < " + maxPrice +
                " AND books.book_genre = " + genre;
        if(isPhoto == null){
            query += " AND books.photo = null";
        }
        return getBooks(query);
    }


    protected List<Book> getBooks(String query){
        List<Book> books = new ArrayList<Book>();
        try{
            checkOracleConnection();
            PreparedStatement preparedStatement = prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                Book book = createBook();
                book.setTitle(resultSet.getString("title"));
                book.setPublisher(resultSet.getString("publisher"));
                book.setPages(resultSet.getInt("pages"));
                book.setDescription(resultSet.getString("description"));
                book.setPrice(resultSet.getFloat("book_price"));
                book.setQty(resultSet.getInt("book_qty"));
                book.setPhotoUrl(resultSet.getString("photo"));
                book.setAuthorName(resultSet.getString("author_name"));
                book.setAuthorSurname(resultSet.getString("author_surname"));
                book.setGenre(resultSet.getString("genre_name"));
                books.add(book);
            }
        }catch (SQLException ex){
            throw new RuntimeException(ex);
        }catch (ClassNotFoundException ex){
            throw new RuntimeException(ex);
        }
        return books;
    }

    protected Genre createGenre() {
        return applicationContext.getBean(Genre.class);
    }

    protected Book createBook(){
        return applicationContext.getBean(Book.class);
    }
}
