package com.exampleproject.web.rest.server;

import com.exampleproject.engine.DataBaseTest;
import com.exampleproject.model.shared.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@RestController
public class RestExample {

    private final ApplicationContext applicationContext;
    private final DataBaseTest dataBaseTest;

    @Autowired
    public RestExample(ApplicationContext applicationContext, DataBaseTest dataBaseTest) {
        this.applicationContext = applicationContext;
        this.dataBaseTest = dataBaseTest;
    }

    @RequestMapping("/login")
    public User isLogged(List<String> logInfo){
        User user = null;
        try{
            user = dataBaseTest.isLogged(logInfo);
        }catch (Exception ex){
            return null;
        }
        return user;
    }

    @RequestMapping("/genres")
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> selectGenres(){
        List<String> genres = null;
        try{
            genres = dataBaseTest.selectGenres();
        }catch (Exception ex){
            return null;
        }
        return genres;
    }

//    @RequestMapping("/test/{someText}")
//    public TestDto testAdditional(@PathVariable String someText) {
//        TestDto dto = createDto();
//        dto.setMessage("It's a test string from server and you've given me " + someText);
//        return dto;
//    }
//
//    protected TestDto createDto() {
//        return applicationContext.getBean(TestDto.class);
//    }

}
