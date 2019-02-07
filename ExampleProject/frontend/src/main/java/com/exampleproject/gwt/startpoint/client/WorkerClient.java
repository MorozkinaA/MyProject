package com.exampleproject.gwt.startpoint.client;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.Genre;
import com.exampleproject.model.shared.User;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;
import javax.ws.rs.*;
import java.util.List;


public interface WorkerClient extends RestService {

	@POST
	@Path("/login")
	void isLogged(List<String> logInfo, MethodCallback<User> callback);

	@GET
	@Path("/genres")
	void selectGenres(MethodCallback<List<Genre>> callback);


	@GET
	@Path("/books")
	void selectBooks(MethodCallback<List<Book>> callback);

	@POST
	@Path("/addCustomer")
	void createCustomer(Customer customer,MethodCallback<Void> callback);

	@POST
	@Path("/sort")
	void sortBooks(List<String> params, MethodCallback<List<Book>> callback);

	@POST
	@Path("/canSign")
	void loginIsFree(String login, MethodCallback<Boolean> callback);

	@POST
	@Path("/bookQty")
	void selectBookQty(Integer book_id, MethodCallback<Integer> callback);
}
