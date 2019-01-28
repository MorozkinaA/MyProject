package com.netcracker.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.*;
import com.netcracker.client.BookService;
import com.netcracker.shared.Book;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.ArrayList;
import java.util.List;


public class MainView extends Composite{
    interface MainViewUiBinder extends UiBinder<Widget, MainView> {
    }

    private static MainViewUiBinder ourUiBinder = GWT.create(MainViewUiBinder.class);

    @UiField
    TextBox minPriceBox;

    @UiField
    TextBox maxPriceBox;

    @UiField
    ListBox genreList;

    @UiField
    CheckBox withPhoto;

    @UiField
    Grid booksGrid;

    @UiHandler("login")
    void openLoginForm(ClickEvent event){

        //DynamicForm form = new DynamicForm();
    }

    List<Book> books = new ArrayList<>();
    private BookService service = GWT.create(BookService.class);

    public MainView() {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
        //will be replaced with genres from database
        genreList.addItem("fantasy");
        genreList.addItem("history");
        genreList.addItem("horror");
        genreList.setVisibleItemCount(1);
        service.findAllBooks((new MethodCallback<List<Book>>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                GWT.log("no books");
            }

            @Override
            public void onSuccess(Method method, List<Book> res) {
                books = res;
            }
        }));
        //will be replaced
        for(Book b : books){
            booksGrid.setWidget(1,1, new BookPreview(b));
        }



    }
}