package com.netcracker.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.*;
import com.netcracker.client.ShopService;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;

import java.util.ArrayList;
import java.util.List;

public class LoginView extends Composite {
    interface LoginViewUiBinder extends UiBinder<VerticalPanel, LoginView> {
    }

    private static LoginViewUiBinder ourUiBinder = GWT.create(LoginViewUiBinder.class);


    @UiField
    TextBox loginBox;

    @UiField
    TextBox passwordBox;

    @UiField
    Label errorLabel;

    @UiField
    Button loginButton;

    private boolean logged; //true if login and password are correct

    private ShopService shopService;

    @UiHandler("loginButton")
    void doClickLogin(ClickEvent event){
        if(loginBox.getText().length() == 0){
            errorLabel.setText("Пожалуйста, введите логин");
        }
        else if(passwordBox.getText().length() == 0){
            errorLabel.setText("Пожалуйста, введите пароль");
        }
        else if(loginBox.getText().length() < 5){
            errorLabel.setText("Логин слишком короткий");
        }
        else if(passwordBox.getText().length() < 5){
            errorLabel.setText("Пароль слишком короткий");
        }
        else{
            errorLabel.setText("");
            shopService.isLogged(loginBox.getText(), passwordBox.getText(), new MethodCallback<Boolean>() {
                @Override
                public void onFailure(Method method, Throwable throwable) {
                    GWT.log("ERROR");
                }

                @Override
                public void onSuccess(Method method, Boolean aBoolean) {
                    if(aBoolean){
                        //
                        RootPanel.get("gwtContainer").add(new MainView());
                    }
                }
            });
        }
    }

    public LoginView() {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));


    }


    public TextBox getLoginBox() {
        return loginBox;
    }

    public void setLoginBox(TextBox loginBox) {
        this.loginBox = loginBox;
    }

    public TextBox getPasswordBox() {
        return passwordBox;
    }

    public void setPasswordBox(TextBox passwordBox) {
        this.passwordBox = passwordBox;
    }

    public Label getErrorLabel() {
        return errorLabel;
    }

    public void setErrorLabel(Label errorLabel) {
        this.errorLabel = errorLabel;
    }
}