package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.Book;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

public class BookInfoView extends DialogBox {
    interface BookInfoViewUiBinder extends UiBinder<HorizontalPanel, BookInfoView> {
    }

    private static BookInfoViewUiBinder ourUiBinder = GWT.create(BookInfoViewUiBinder.class);

    @UiField
    Image booksPhoto;

    @UiField
    Label title;

    @UiField
    Label author;

    @UiField
    Label genre;

    @UiField
    Label publisher;

    @UiField
    Label pages;

    @UiField
    Label description;

    @UiField
    Label canBuy;

    @UiField
    Button toCart;

    @UiHandler("close")
    void onDismiss(ClickEvent event){
        hide();
    }

    @UiHandler("toCart")
    void addBookToCart(ClickEvent event){

    }

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public BookInfoView(Book book) {
        super(true, true);
        setWidget(ourUiBinder.createAndBindUi(this));
        setText(book.getTitle());
        setAnimationEnabled(true);

        booksPhoto.setUrl(book.getPhotoUrl());
        booksPhoto.setPixelSize(250, 400);
        title.setText(book.getTitle());
        author.setText(book.getAuthors().toString());
        genre.setText(book.getGenres().toString());
        publisher.setText(book.getPublisher());
        pages.setText(Integer.toString(book.getPages()));
        description.setText(book.getDescription());

        client.selectBookQty(book.getId(), new MethodCallback<Integer>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, Integer qty) {
                if(qty > 0){
                    //canBuy.setText("Available");
                    toCart.setVisible(true);
                }
                else{
                    canBuy.setText("Not available");
                }
            }
        });

        setSize("600", "450");
        center();
    }



}