package com.netcracker.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.*;

public class LoginForm extends Composite {
    interface LoginFormUiBinder extends UiBinder<VerticalPanel, LoginForm> {
    }

    private static LoginFormUiBinder ourUiBinder = GWT.create(LoginFormUiBinder.class);

    @UiField
    TextBox loginBox;

    @UiField
    TextBox passwordBox;

    @UiField
    Label errorLabel;

    private boolean logged; //true if login and password are correct

    public LoginForm() {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
    }

    @UiHandler("loginButton")
    void doClickLogin(ClickEvent event){
        //
    }

    @UiHandler("loginBox")
    void rightLoginEntered(ValueChangeEvent<String> event){
        if(event.getValue().length() == 0){
            errorLabel.setText("Пожалуйста, заполните поле логина");
        }
        else{
            //
        }
    }


}