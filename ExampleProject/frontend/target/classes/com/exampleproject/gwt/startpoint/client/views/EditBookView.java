package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

import java.util.HashSet;
import java.util.Set;

public class EditBookView {
    interface EditBookViewUiBinder extends UiBinder<DivElement, EditBookView> {
    }

    private static EditBookViewUiBinder ourUiBinder = GWT.create(EditBookViewUiBinder.class);

    public EditBookView(Book book) {
        Set<Genre> genres = book.getGenres();
        VerticalPanel genrePanel = new VerticalPanel();
        for(Genre g : genres){
            TextBox textBox = new TextBox();
        }


    }
}