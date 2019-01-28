package com.netcracker.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;

public class BookView extends Composite {
    interface BookViewUiBinder extends UiBinder<Widget, BookView> {
    }

    private static BookViewUiBinder ourUiBinder = GWT.create(BookViewUiBinder.class);

    public BookView() {
        super();
    }
}