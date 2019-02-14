package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.*;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.HasKeyboardSelectionPolicy;
import com.google.gwt.user.cellview.client.TextColumn;
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

    private final WorkerClient client = GWT.create(WorkerClient.class);
    CellTable<Book> table = new CellTable<>();
    List<Book> books = new ArrayList<>();

    public CartView(User user) {
        super(false, true);
        setWidget(ourUiBinder.createAndBindUi(this));
        setAnimationEnabled(true);
        setText("Cart");

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

                    addDeletePossibility(cart);

                    table.setRowCount(cart.getBooks().size(), true);
                    table.setRowData(0, books);
                    booksPanel.add(table);
                }
            }
        });

        placeOrder.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                OrderView orderView = new OrderView(user);
            }
        });
//        placeOrder.addClickHandler(new ClickHandler() {
//            @Override
//            public void onClick(ClickEvent clickEvent) {
//                chooseAddress.setVisible(true);
//                addAddress.setVisible(true);
//                chooseAddress.addClickHandler(new ClickHandler() {
//                    @Override
//                    public void onClick(ClickEvent clickEvent) {
//                        addressPanel.clear();
//                        client.selectAddresses(user, new MethodCallback<Set<Adress>>() {
//                            @Override
//                            public void onFailure(Method method, Throwable throwable) {
//                                Window.alert("Please, choose book you want to delete");
//                            }
//
//                            @Override
//                            public void onSuccess(Method method, Set<Adress> adresses) {
//                                if(adresses.size() == 0){
//                                    addressPanel.add(new Label("You didn't add addresses earlier"));
//                                }
//                                else{
//                                    for(Adress a : adresses){
//
//                                    }
//                                }
//                            }
//                        });
//                    }
//                });
//                addAddress.addClickHandler(new ClickHandler() {
//                    @Override
//                    public void onClick(ClickEvent clickEvent) {
//                        addressPanel.clear();
//                        VerticalPanel verticalPanel = new VerticalPanel();
//                    }
//                });
//            }
//        });

        setSize("600", "300");
        center();
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