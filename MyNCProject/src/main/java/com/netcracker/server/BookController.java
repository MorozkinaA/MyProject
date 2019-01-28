package com.netcracker.server;

import com.netcracker.server.service.BookService;
import com.netcracker.shared.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    @Autowired
     BookService bookService;


//    @Autowired
//    BookService bookService;

    @RequestMapping("/books")
    public List<Book> findAllBooks(){
        return bookService.findAllBooks();
    }

}
