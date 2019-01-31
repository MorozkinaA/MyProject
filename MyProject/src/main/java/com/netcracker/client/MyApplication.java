package com.netcracker.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.ui.*;
import com.netcracker.client.views.LoginView;
import com.netcracker.client.views.MainView;

public class MyApplication implements EntryPoint {
    public void onModuleLoad() {
        RootPanel.get("gwtContainer").add(new MainView());
    }
}
