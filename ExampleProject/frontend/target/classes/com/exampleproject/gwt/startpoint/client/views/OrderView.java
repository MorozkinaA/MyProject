package com.exampleproject.gwt.startpoint.client.views;

import com.exampleproject.model.shared.Adress;
import com.exampleproject.model.shared.Book;
import com.exampleproject.model.shared.Customer;
import com.exampleproject.model.shared.User;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.client.ui.*;

import java.util.HashSet;
import java.util.Set;


public class OrderView extends Composite {
    interface OrderViewUiBinder extends UiBinder<VerticalPanel, OrderView> {
    }

    private static OrderViewUiBinder ourUiBinder = GWT.create(OrderViewUiBinder.class);

    @UiField
    HorizontalPanel tablePanel;

    @UiField
    Button addAddressButton;

    @UiField
    Button chooseAddressButton;

    @UiField
    VerticalPanel newAddressPanel;

    @UiField
    TextBox countryBox;

    @UiField
    TextBox cityBox;

    @UiField
    TextBox streetBox;

    @UiField
    TextBox houseBox;

    @UiField
    TextBox flatBox;

    @UiField
    TextBox indexBox;

    @UiField
    Button addAddress;

    @UiField
    Label errorLabel;

    @UiField
    VerticalPanel chooseAddressPanel;

    CellTable<Book> table;

    public OrderView(User user) {
        super();
        initWidget(ourUiBinder.createAndBindUi(this));
        table = Table.booksTable();
        tablePanel.add(table);

        addAddressButton.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                newAddressPanel.setVisible(true);
            }
        });
        addAddress.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent clickEvent) {
                if(validation()){
                    String country = countryBox.getText();
                    String city = cityBox.getText();
                    String street = streetBox.getText();
                    String house = houseBox.getText();
                    int flat = Integer.parseInt(flatBox.getText());
                    String index = indexBox.getText();
                    Adress address = new Adress(country, city, street, house, flat, index);
                    Customer customer = user.getCustomer();
                    Set<Adress> adressSet = new HashSet<>();
                    customer.setAdresses(adressSet);
                }
            }
        });
    }

    boolean validation(){
        if(countryBox.getText().length() == 0){
            errorLabel.setText("Please, enter country");
            return false;
        }
        else if(cityBox.getText().length() == 0){
            errorLabel.setText("Please, enter city");
            return false;
        }
        else if(streetBox.getText().length() == 0){
            errorLabel.setText("Please, enter street");
            return false;
        }
        else if(houseBox.getText().length() == 0){
            errorLabel.setText("Please, enter house");
            return false;
        }
        else if(flatBox.getText().length() == 0){
            errorLabel.setText("Please, enter flat");
            return false;
        }
        else if(indexBox.getText().length() == 0){
            errorLabel.setText("Please, enter post index");
            return false;
        }
        return true;
    }
}