package com.netcracker.server;

import com.google.gwt.editor.client.Editor;
import com.netcracker.server.service.BookService;
import com.netcracker.server.service.LoginService;
import com.netcracker.shared.Book;
import com.netcracker.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import java.util.List;

@RestController
public class ShopController {

    @Autowired
    BookService bookService;

    @Autowired
    LoginService loginService;


    @GetMapping
    @Path("books")
    public List<Book> findAllBooks(){
        return bookService.findAllBooks();
    }

    @GetMapping("login")
    public boolean isLogged(String login, String password){
        return loginService.isLogged(login, password);
    }

}
