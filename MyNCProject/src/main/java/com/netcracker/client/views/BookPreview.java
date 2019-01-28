package com.netcracker.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.*;
import com.netcracker.shared.Book;



public class BookPreview extends Composite {
    interface BookPreviewUiBinder extends UiBinder<FlowPanel, BookPreview> {
    }

    private static BookPreviewUiBinder ourUiBinder = GWT.create(BookPreviewUiBinder.class);

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


    public BookPreview(Book book) {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
        photo.setUrl(book.getPhotoUrl());
        photo.setPixelSize(200, 350);
        title.setText(book.getTitle());
        author.setText(book.getAuthors().toString());
        author.setText(book.getAuthors().toString());
        price.setText(Float.toString(book.getPrice()));
    }
}