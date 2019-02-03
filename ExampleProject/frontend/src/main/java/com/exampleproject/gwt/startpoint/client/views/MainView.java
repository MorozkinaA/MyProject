package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
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
    VerticalPanel booksTable;

    @UiHandler("cart")
    void doClickCart(ClickEvent event){

    }

    @UiHandler("sort")
    void doSorting(ClickEvent event){
        String minPrice = minPriceBox.getValue();
        String maxPrice = maxPriceBox.getValue();
        String genre = genreList.getSelectedItemText();
        String photo = "ph";
        if(!withPhoto.isEnabled()){
            photo = null;
        }
        List<String> params = new ArrayList<>();
        params.add(minPrice);
        params.add(maxPrice);
        params.add(genre);
        params.add(photo);
        client.sortBooks(params, new MethodCallback<List<Book>>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, List<Book> list) {
                grid.clear();
                int i = 0;
                for(int row = 0; row < grid.getRowCount(); row++){
                    for(int col = 0; col < grid.getColumnCount(); col++){
                        grid.setWidget(row, col, new BookPreview(list.get(i)));
                        i++;

                    }
                }
            }
        });
    }

    Grid grid = new Grid(4, 5);

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public MainView(){
        super();
        initWidget(ourUiBinder.createAndBindUi(this));

        client.selectGenres(new MethodCallback<List<Genre>>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, List<Genre> list) {
                for(Genre g : list){
                    genreList.addItem(g.getGenre());
                }
            }
        });
        genreList.setVisibleItemCount(1);

        //grid = new Grid(4,5);
        client.selectBooks(new MethodCallback<List<Book>>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, List<Book> list) {
                int i = 0;
                for(int row = 0; row < grid.getRowCount(); row++){
                    for(int col = 0; col < grid.getColumnCount(); col++){
                        grid.setWidget(row, col, new BookPreview(list.get(i)));
                        i++;

                    }
                }
            }
        });
        grid.setCellSpacing(3);
        booksTable.add(grid);




    }
}