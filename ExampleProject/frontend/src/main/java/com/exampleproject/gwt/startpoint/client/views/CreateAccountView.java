package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.DivElement;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;
import org.fusesource.restygwt.client.Method;
import org.fusesource.restygwt.client.MethodCallback;


public class CreateAccountView extends Composite {
    interface CreateAccountViewUiBinder extends UiBinder<VerticalPanel, CreateAccountView> {
    }

    private static CreateAccountViewUiBinder ourUiBinder = GWT.create(CreateAccountViewUiBinder.class);

    @UiField
    TextBox nameBox;

    @UiField
    TextBox surnameBox;

    @UiField
    TextBox emailBox;

    @UiField
    TextBox loginBox;

    @UiField
    TextBox passwordBox;

    @UiField
    TextBox confirmPasswordBox;

    @UiField
    Label errorLabel;

    boolean valid = true;

    private final WorkerClient client = GWT.create(WorkerClient.class);

    @UiHandler("signUpButton")
    void doSignUp(ClickEvent event){
        if(validation()){
            User user = new User("customer", nameBox.getText(), surnameBox.getText(), loginBox.getText(), Integer.toString(passwordBox.getText().hashCode()));
            Customer customer = new Customer(user, 0, emailBox.getText());
            client.createCustomer(customer, new MethodCallback<Void>() {
                @Override
                public void onFailure(Method method, Throwable throwable) {
                    Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                }

                @Override
                public void onSuccess(Method method, Void aVoid) {

                }
            });
        }
    }

    public CreateAccountView() {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));

    }


    boolean validation(){
        if(nameBox.getText().length() == 0){
            errorLabel.setText("Пожалуйста, введите имя");
            valid = false;
        }
        else if (surnameBox.getText().length() ==0) {
            errorLabel.setText("Пожалуйста, введите фамилию");
            valid = false;
        }
        else if(emailBox.getText().length() == 0){
            errorLabel.setText("Пожалуйста, заполните поле e-mail");
            valid = false;
        }
        else if(loginBox.getText().length() == 0){
            errorLabel.setText("Пожалуйста, заполните поле логина");
            valid = false;
        }
        else if(loginBox.getText().length() < 10){
            errorLabel.setText("Логин должен содержать больше 10 символов");
            valid = false;
        }
        else if(passwordBox.getText().length() == 0){
            errorLabel.setText("Пожалуйста, заполните поле пароля");
            valid = false;
        }
        else if(passwordBox.getText().length() < 7){
            errorLabel.setText("Пароль должен содержать больше 6 символов");
            passwordBox.setText("");
            valid = false;
        }
        else if(confirmPasswordBox.getText().length() == 0){
            errorLabel.setText("Пожалуйста, подтвердите пароль");
            valid = false;
        }
        else if(!confirmPasswordBox.getText().equals(passwordBox.getText())){
            errorLabel.setText("Пароли не совпадают");
            passwordBox.setText("");
            confirmPasswordBox.setText("");
            valid = false;
        }
        boolean canSign = true;
        client.loginIsFree(loginBox.getText(), new MethodCallback<Boolean>() {
            @Override
            public void onFailure(Method method, Throwable throwable) {
                Window.alert(throwable.toString() + "\n" + throwable.getMessage());
            }

            @Override
            public void onSuccess(Method method, Boolean aBoolean) {
                valid = aBoolean;
                if(aBoolean == false){
                    errorLabel.setText("Этот логин уже занят. Придумайте другой");
                }
            }
        });
        return valid;
    }
}