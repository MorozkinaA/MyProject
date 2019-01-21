package com.netcracker.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.*;
import com.netcracker.shared.model.Book;

public class BookProfile extends Composite {
    interface BookProfileUiBinder extends UiBinder<FlowPanel, BookProfile> {
    }

    private static BookProfileUiBinder ourUiBinder = GWT.create(BookProfileUiBinder.class);

    @UiField
    Image photo;
    @UiField
    Label title;
    @UiField
    Label author;
    @UiField
    Label price;
    @UiField
    Button buyBook;

    public BookProfile(Book book){
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
        photo.setUrl(book.getPhotoUrl());
        title.setText(book.getTitle());
        author.setText(book.getAuthors().toString());
        price.setText(Float.toString(book.getPrice()));
    }
}