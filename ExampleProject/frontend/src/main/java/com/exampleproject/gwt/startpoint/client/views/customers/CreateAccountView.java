package com.exampleproject.gwt.startpoint.client.views.customers;

import com.exampleproject.gwt.startpoint.client.WorkerClient;
import com.exampleproject.gwt.startpoint.client.views.MainView;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.*;
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
                    RootPanel.get().clear();
                    RootPanel.get().add(new MainView(user));
                }
            });
        }
    }

    public CreateAccountView() {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
    }


    boolean validation(){
//        String validLogin = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
//                "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
//        Pattern pattern = Pattern.compile(validLogin, Pattern.CASE_INSENSITIVE);
        if(nameBox.getText().length() == 0){
            errorLabel.setText("Please, enter name");
            valid = false;
            return false;
        }
        else if (surnameBox.getText().length() ==0) {
            errorLabel.setText("Please, enter surname");
            valid = false;
        }
        else if(emailBox.getText().length() == 0){
            errorLabel.setText("Plese, enter e-mail");
            valid = false;
        }
        else if(loginBox.getText().length() == 0){
            errorLabel.setText("Please, enter login");
            valid = false;
        }
        else if(loginBox.getText().length() < 10){
            errorLabel.setText("Login should consist of more then 10 symbols");
            valid = false;
        }
        else if(passwordBox.getText().length() == 0){
            errorLabel.setText("Please, enter password");
            valid = false;
        }
        else if(passwordBox.getText().length() < 7){
            errorLabel.setText("Password should consist of more then 6 symbols");
            passwordBox.setText("");
            valid = false;
        }
        else if(confirmPasswordBox.getText().length() == 0){
            errorLabel.setText("Please, repeat password");
            valid = false;
        }
        else if(!confirmPasswordBox.getText().equals(passwordBox.getText())){
            errorLabel.setText("Passwords are not equal");
            passwordBox.setText("");
            confirmPasswordBox.setText("");
            valid = false;
        }
        else{
            client.loginIsFree(loginBox.getText(), new MethodCallback<Boolean>() {
                @Override
                public void onFailure(Method method, Throwable throwable) {
                    Window.alert(throwable.toString() + "\n" + throwable.getMessage());
                }

                @Override
                public void onSuccess(Method method, Boolean aBoolean) {
                    valid = aBoolean;
                    if(aBoolean == false){
                        errorLabel.setText("This login is already used. Enter another one.");
                    }
                }
            });
        }
        return valid;
    }
}