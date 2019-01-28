package com.netcracker.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.*;
import com.netcracker.client.views.MainView;


public class StartPoint implements EntryPoint {


    public void onModuleLoad() {

        MainView mainView = new MainView();
        RootPanel.get("gwtContainer").add(mainView);

    }
}
