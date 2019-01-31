package com.netcracker.server.dao;

public class Factory {
    private static BookDAO bookDAO = null;
    private static Factory instance = null;

    public static synchronized Factory getInstance(){
        if (instance == null){
            instance = new Factory();
        }
        return instance;
    }

    public BookDAO getStudentDAO(){
        if (bookDAO == null){
            bookDAO = new BookDAOImpl();
        }
        return bookDAO;
    }
}
