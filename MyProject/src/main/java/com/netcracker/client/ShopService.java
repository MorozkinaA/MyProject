package com.netcracker.client;

import com.netcracker.shared.Book;
import com.netcracker.shared.User;
import oracle.jdbc.proxy.annotation.Post;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import java.util.List;

@Path("rest/")
public interface ShopService extends RestService {

    @POST
    @Path("books")
    void findAllBooks(MethodCallback<List<Book>> callback);

    @POST
    @Path("login")
    void isLogged(String login, String password, MethodCallback<Boolean> callback);
}

