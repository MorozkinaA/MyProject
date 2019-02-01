package com.exampleproject.gwt.startpoint.client;



import com.exampleproject.model.shared.User;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;

import javax.print.attribute.standard.Media;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;


public interface WorkerClient extends RestService {

//	@GET
//	@Path("/test")
//	void get(MethodCallback<TestDto> callback);
//
//	@GET
//	@Path("/testDb")
//	void getDb(MethodCallback<Boolean> callback);

	@GET
	@Path("/login")
	void isLogged(List<String> logInfo, MethodCallback<User> callback);

	@GET
	@Path("/genres")
	void selectGenres(MethodCallback<List<String>> callback);


}
