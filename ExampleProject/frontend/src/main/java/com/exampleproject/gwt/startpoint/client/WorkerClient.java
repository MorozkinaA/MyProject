package com.exampleproject.gwt.startpoint.client;



import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import com.exampleproject.model.shared.User;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;
import sun.java2d.loops.GeneralRenderer;

import javax.print.attribute.standard.Media;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;


public interface WorkerClient extends RestService {

	@GET
	@Path("/login")
	void isLogged(List<String> logInfo, MethodCallback<User> callback);

	@GET
	@Path("/genres")
	void selectGenres(MethodCallback<List<Genre>> callback);


	@GET
	@Path("/books")
	void selectBooks(MethodCallback<List<Book>> callback);

	@GET
	@Path("/sort")
	void sortBooks(List<String> params, MethodCallback<List<Book>> callback);
}
