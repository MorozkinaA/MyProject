package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.Author;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Genre;
import com.google.gwt.aria.client.TextboxRole;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.i18n.server.MessageFormatUtils;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.HashSet;
import java.util.Set;

public class AddBookView extends DialogBox {
    interface AddBookViewUiBinder extends UiBinder<VerticalPanel, AddBookView> {
    }

    private static AddBookViewUiBinder ourUiBinder = GWT.create(AddBookViewUiBinder.class);

    @UiField
    TextBox titleBox;

    @UiField
    TextBox authorsNameBox;

    @UiField
    TextBox authorsSurnameBox;

    @UiField
    TextBox genreBox;

    @UiField
    TextBox pagesBox;

    @UiField
    TextBox publisherBox;

    @UiField
    TextBox qtyBox;

    @UiField
    TextBox priceBox;

    @UiField
    TextArea descriptionBox;

    @UiField
    TextBox photoBox;

    @UiField
    Button addBookButton;

    @UiField
    Label errorLabel;

    @UiHandler("close")
    void closeView(ClickEvent event){
        hide();
    }

    private final WorkerClient client = GWT.create(WorkerClient.class);

    public AddBookView() {
        super(false, true);
        setWidget(ourUiBinder.createAndBindUi(this));
    }


    @Override
    public void setWidget(Widget w) {
        super.setWidget(w);
        setAnimationEnabled(true);
        setText("Add new book");
        addBookButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                if(validation()){
                    Set<Author> authors = new HashSet<>();
                    authors.add(new Author(authorsNameBox.getText(), authorsSurnameBox.getText()));
                    Set<Genre> genres = new HashSet<>();
                    genres.add(new Genre(genreBox.getText()));
                    Book book = new Book(titleBox.getText(), publisherBox.getText(), Integer.parseInt(pagesBox.getText()),
                            descriptionBox.getText(), Float.parseFloat(priceBox.getText()),
                            Integer.parseInt(qtyBox.getText()), photoBox.getText(), genres, authors);
                    client.addBook(book, new MethodCallback<Void>() {
                        @Override
                        public void onFailure(Method method, Throwable throwable) {
                            Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                        }

                        @Override
                        public void onSuccess(Method method, Void aVoid) {
                            Window.alert("Book was added");
                            hide(true);
                        }
                    });
                }

            }
        });
        setSize("500", "500");
        center();
    }


    boolean validation(){
        if(titleBox.getText().length() == 0){
            errorLabel.setText("Please, enter title");
            return false;
        }
        else if(authorsNameBox.getText().length() == 0){
            errorLabel.setText("Please, enter author's name");
            return false;
        }
        else if(authorsSurnameBox.getText().length() == 0){
            errorLabel.setText("Please, enter author's surname");
            return false;
        }
        else if(genreBox.getText().length() == 0){
            errorLabel.setText("Please, enter genre");
            return false;
        }
        else if(publisherBox.getText().length() == 0){
            errorLabel.setText("Please, enter publisher");
            return false;
        }
        else if(priceBox.getText().length() == 0){
            errorLabel.setText("Please, enter book's price");
            return false;
        }
        try{
            Integer.parseInt(pagesBox.getText());
        }catch (NumberFormatException ex){
            errorLabel.setText("Please, enter integer value in price's field");
            return false;
        }
        try{
            Integer.parseInt(qtyBox.getText());
        }catch (NumberFormatException ex){
            errorLabel.setText("Please, enter integer value in qty field");
            return false;
        }
        try{
            Float.parseFloat(priceBox.getText());
        }catch (NumberFormatException ex){
            errorLabel.setText("Please, enter number in price field");
            return false;
        }
        return true;
    }

    public Button getAddBookButton() {
        return addBookButton;
    }



}