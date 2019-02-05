package com.exampleproject.web.rest.server;


import com.exampleproject.database.service.BookService;
import com.exampleproject.database.service.UserService;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.Genre;
import com.exampleproject.model.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@RestController
public class RestExample {


    BookService bookService;
    UserService userService;

    @Autowired
    public RestExample(BookService bookService, UserService userService){
        this.bookService = bookService;
        this.userService = userService;
    }

    @RequestMapping("/login")
    public User isLogged(@RequestBody List<String> logInfo) {
        return userService.isLogged(logInfo);
    }


    @RequestMapping("/genres")
    public List<Genre> selectGenres(){
        return bookService.selectGenres();
    }

    @RequestMapping("/books")
    public List<Book> selectBooks(){
        return bookService.selectBooks();
    }

    @RequestMapping("/addCustomer")
    public void createCustomer(@RequestBody Customer customer){
        userService.createCustomer(customer);
    }

    @RequestMapping("/sort")
    public List<Book> sortBooks(@RequestBody List<String> params) {
        return bookService.sortBooks(params);
    }

    @RequestMapping("/canSign")
    public boolean loginIsFree(@RequestBody String login){
        return userService.loginIsFree(login);
    }


}
