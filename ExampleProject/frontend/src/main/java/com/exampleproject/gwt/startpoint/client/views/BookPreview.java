package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.model.shared.Book;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.*;


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
    @UiField
    Button moreInfo;


    public BookPreview(Book book) {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
        if(book.getPhotoUrl() == null){
            photo.setUrl("https://smvape.com.ua/wp-content/uploads/2018/12/no_photo.jpg");
        }
        else{
            photo.setUrl(book.getPhotoUrl());
        }
        photo.setPixelSize(150, 250);
        title.setText(book.getTitle());
        author.setText(book.getAuthorName() + " " + book.getAuthorSurname());
        price.setText(Float.toString(book.getPrice()) + " руб.");

        moreInfo.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                new BookInfoView(book);
            }
        });
    }
}