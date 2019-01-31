package com.netcracker.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.*;
import com.netcracker.client.ShopService;
import com.netcracker.shared.Book;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.ArrayList;
import java.util.List;

public class MainView  extends Composite {
    interface MainViewUiBinder extends UiBinder<VerticalPanel, MainView> {
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
    VerticalPanel gridPanel;

    Grid booksGrid;

    List<Book> books = new ArrayList<>();
    private ShopService service = GWT.create(ShopService.class);
    public MainView(){
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
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

        //booksGrid = new Grid(4, 5);
       // booksGrid.setWidget(1,1, new BookPreview(books.get(0)));
        //gridPanel.add(booksGrid);
        //booksGrid.setWidget(1, 1, new BookPreview(books.get(0)));
    }
}