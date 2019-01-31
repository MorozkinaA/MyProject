package com.netcracker.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;

import java.awt.*;

public class BookView extends Composite {
    interface BookViewUiBinder extends UiBinder<VerticalPanel, BookView> {
    }

    private static BookViewUiBinder ourUiBinder = GWT.create(BookViewUiBinder.class);

    public BookView() {
        initWidget(this);
    }
}