package com.ionicframework.360video;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class 360Video extends Plugin {

    @PluginMethod
    public void echo(PluginCall call) {
        Double latitude = call.getDouble("latitude");
        Double longitude = call.getDouble("longitude");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}
