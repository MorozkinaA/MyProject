package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.model.shared.Book;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.DialogBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public class BookInfoView extends DialogBox {
    interface BookInfoViewUiBinder extends UiBinder<VerticalPanel, BookInfoView> {
    }

    private static BookInfoViewUiBinder ourUiBinder = GWT.create(BookInfoViewUiBinder.class);

    public BookInfoView(Book book) {
        super.setWidget(ourUiBinder.createAndBindUi(this));
        setText(book.getTitle());
    }

    @UiHandler("close")
    void onDismiss(ClickEvent event){
        hide();
    }

//    @Override
//    public void setWidget(){
//
//    }


}