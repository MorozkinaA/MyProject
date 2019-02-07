package com.exampleproject.gwt.startpoint.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;

public class AddBookView {
    interface AddBookViewUiBinder extends UiBinder<DivElement, AddBookView> {
    }

    private static AddBookViewUiBinder ourUiBinder = GWT.create(AddBookViewUiBinder.class);

    public AddBookView() {
        DivElement rootElement = ourUiBinder.createAndBindUi(this);
    }
}