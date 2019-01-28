package com.netcracker.client;

import com.netcracker.shared.Book;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.util.List;

public interface BookService extends RestService {

    @GET
    @Path("/books")
//    @Produces(MediaType.APPLICATION_JSON)
//    @Consumes(MediaType.APPLICATION_JSON)
    void findAllBooks(MethodCallback<List<Book>> callback);
}

