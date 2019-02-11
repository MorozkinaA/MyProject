package com.exampleproject.web.rest.server;


import com.exampleproject.database.service.BookService;
import com.exampleproject.database.service.PurchaseService;
import com.exampleproject.database.service.UserService;
import com.exampleproject.model.shared.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Map;

@RestController
public class RestExample {


    BookService bookService;
    UserService userService;
    PurchaseService purchaseService;

    @Autowired
    public RestExample(BookService bookService, UserService userService, PurchaseService purchaseService) {
        this.bookService = bookService;
        this.userService = userService;
        this.purchaseService = purchaseService;
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
    public List<Book> sortBooks(@RequestBody Map<String, String> params) {
        return bookService.sortBooks(params);
    }

    @RequestMapping("/canSign")
    public boolean loginIsFree(@RequestBody String login){
        return userService.loginIsFree(login);
    }

    @RequestMapping("/bookQty")
    public Integer selectBookQty(@RequestBody Integer bookId){
        return bookService.selectBookQty(bookId);
    }

    @RequestMapping("/cart")
    public Cart getCart(@RequestBody User user){
        return userService.getCart(user);
    }

    @RequestMapping("/bookToCart")
    public void addBookToCart(@RequestBody Map<String, Integer> params){
        purchaseService.addBookToCart(params);
    }

    @RequestMapping("/addBook")
    public void addBook(@RequestBody Book book){
        bookService.addBook(book);
    }

    @RequestMapping("/bookFromCart")
    public void deleteBookFromCart(@RequestBody Map<String, Integer> params){
        purchaseService.deleteBookFromCart(params);
    }

    @RequestMapping("/changePassword")
    public void changePassword(@RequestBody Map<String, String> params){
        userService.changePassword(params);
    }

    @RequestMapping("/deleteBook")
    public void deleteBook(@RequestBody Book book){
        bookService.deleteBook(book);
    }
}
