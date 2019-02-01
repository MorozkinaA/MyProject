package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.ArrayList;
import java.util.List;

public class MainView extends Composite {
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

    @UiHandler("cart")
    void doClickCart(ClickEvent event){

    }

    Grid booksGrid;

    List<String> genres = new ArrayList<>();

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public MainView(){
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
        genreList.addItem("fiction");
        client.selectGenres(new MethodCallback<List<String>>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, List<String> list) {
                genres = list;
            }
        });
        for(String g : genres){
            genreList.addItem(g);
        }
        genreList.setVisibleItemCount(1);


        //booksGrid = new Grid(4, 5);
        // booksGrid.setWidget(1,1, new BookPreview(books.get(0)));
        //gridPanel.add(booksGrid);
        //booksGrid.setWidget(1, 1, new BookPreview(books.get(0)));
    }
}