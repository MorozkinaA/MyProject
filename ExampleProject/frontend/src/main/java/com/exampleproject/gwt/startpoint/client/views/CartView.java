package com.exampleproject.gwt.startpoint.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.VerticalPanel;

public class CartView extends Composite {
    interface CartViewUiBinder extends UiBinder<VerticalPanel, CartView> {
    }

    private static CartViewUiBinder ourUiBinder = GWT.create(CartViewUiBinder.class);

    public CartView() {
        initWidget(this);
    }
}