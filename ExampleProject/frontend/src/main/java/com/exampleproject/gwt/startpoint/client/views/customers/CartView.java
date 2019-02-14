package com.exampleproject.gwt.startpoint.client.views.customers;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.gwt.startpoint.client.views.Table;
import com.exampleproject.model.shared.*;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;


import java.util.*;

public class CartView extends DialogBox {
    interface CartViewUiBinder extends UiBinder<VerticalPanel, CartView> {
    }

    private static CartViewUiBinder ourUiBinder = GWT.create(CartViewUiBinder.class);

    @UiField
    Button deleteButton;

    @UiField
    HorizontalPanel booksPanel;

    @UiField
    Label priceLabel;

    @UiField
    Button placeOrder;

//    @UiField
//    Button addAddress;
//
//    @UiField
//    Button chooseAddress;
//
//    @UiField
//    VerticalPanel addressPanel;
//
//    @UiField
//    Button confirmOrder;

    @UiHandler("close")
    void closeView(ClickEvent event){
        hide();
    }

    User user;

    private final WorkerClient client = GWT.create(WorkerClient.class);
    CellTable<Book> table = new CellTable<>();
    List<Book> books = new ArrayList<>();

    public CartView(User user) {
        super(false, true);
        this.user = user;
        setWidget(ourUiBinder.createAndBindUi(this));
    }

    @Override
    public void setWidget(Widget w) {
        super.setWidget(w);
        setAnimationEnabled(true);
        setText("Cart");
        addCartPainting();
        setSize("600", "300");
        center();
    }

    void addCartPainting(){
        client.getCart(user, new MethodCallback<Cart>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, Cart cart) {
                if(cart.getBooks().size() == 0){
                    Label label = new Label("Your cart is empty");
                    priceLabel.setText("0");
                    booksPanel.add(label);
                }
                else{
                    priceLabel.setText(Float.toString(cart.getPrice()));
                    books.addAll(cart.getBooks());
                    table = Table.booksTable();
                    placeOrder.setVisible(true);
                    placeOrder.addClickHandler(new ClickHandler() {
                        @Override
                        public void onClick(ClickEvent clickEvent) {
                            hide();
                            new OrderView(user, cart);
                        }
                    });

                    addDeletePossibility(cart);

                    table.setRowCount(cart.getBooks().size(), true);
                    table.setRowData(0, books);
                    booksPanel.add(table);
                }
            }
        });
    }

    void addDeletePossibility(Cart cart){
        SingleSelectionModel<Book> selectionModel = new SingleSelectionModel<Book>();
        table.setSelectionModel(selectionModel);
        selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
            @Override
            public void onSelectionChange(SelectionChangeEvent selectionChangeEvent) {
                Book selected = selectionModel.getSelectedObject();
                deleteButton.addClickHandler(new ClickHandler() {
                    @Override
                    public void onClick(ClickEvent clickEvent) {
                        if(selected == null){
                            Window.alert("Please, choose book you want to delete");
                        }
                        else{
                            Map<String, Integer> params = new HashMap<>();
                            params.put("cartId", cart.getId());
                            params.put("bookId", selected.getId());
                            client.deleteBookFromCart(params, new MethodCallback<Void>() {
                                @Override
                                public void onFailure(Method method, Throwable throwable) {
                                    Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                                }

                                @Override
                                public void onSuccess(Method method, Void aVoid) {
                                    table.removeFromParent();
                                    booksPanel.add(table);
                                }
                            });
                            table.redraw();
                        }
                    }
                });
            }
        });

    }


}