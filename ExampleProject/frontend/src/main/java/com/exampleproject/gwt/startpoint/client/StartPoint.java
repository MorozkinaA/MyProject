package com.exampleproject.gwt.startpoint.client;


import com.exampleproject.gwt.startpoint.client.views.CreateAccountView;
import com.exampleproject.gwt.startpoint.client.views.LoginView;
import com.exampleproject.gwt.startpoint.client.views.MainView;
import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.ui.RootPanel;

import org.fusesource.restygwt.client.Defaults;

/**
 * Entry point classes define <code>onModuleLoad()</code>
 */
public class StartPoint implements EntryPoint {

    //private final WorkerClient client = GWT.create(WorkerClient.class);

    //private static final String HELLO_MESSAGE = "Hi, I'm your gwt application!";

    /**
     * This is the entry point method.
     */
    public void onModuleLoad() {

        Defaults.setServiceRoot(GWT.getHostPageBaseURL() + "backend");
        RootPanel.get().add(new MainView());
//
//        Button send = new Button("Send");
//        send.addClickHandler(new ClickHandler() {
//            public void onClick(ClickEvent event) {
//                client.get(new MethodCallback<TestDto>() {
//                    @Override
//                    public void onFailure(Method method, Throwable exception) {
//                        // TODO Auto-generated method stub
//                        Window.alert(exception.toString() + "\n" + exception.getMessage());
//                    }
//
//                    @Override
//                    public void onSuccess(Method method, TestDto response) {
//                        // TODO Auto-generated method stub
//                        Window.alert(response.getMessage());
//                    }
//
//                });
//            }
//        });
//        RootPanel.get().add(send);
//
//        Button testDb = new Button("Test DB");
//        testDb.addClickHandler(new ClickHandler() {
//            public void onClick(ClickEvent event) {
//                client.getDb(new MethodCallback<Boolean>() {
//                    @Override
//                    public void onFailure(Method method, Throwable exception) {
//                        // TODO Auto-generated method stub
//                        Window.alert(exception.toString() + "\n" + exception.getMessage());
//                    }
//
//                    @Override
//                    public void onSuccess(Method method, Boolean response) {
//                        // TODO Auto-generated method stub
//                        Window.alert(response.toString());
//                    }
//
//                });
//            }
//        });
//
//        RootPanel.get().add(testDb);
//
//        final Label label = new Label(HELLO_MESSAGE);
//        RootPanel.get().add(label);
//
//        final Button button = new Button("Click me");
//        button.addClickHandler(new ClickHandler() {
//            public void onClick(ClickEvent event) {
//                Window.alert("You press on me! Don't it anymore");
//            }
//        });
//        RootPanel.get().add(button);
    }
}
