import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(360Video)
public class 360Video: CAPPlugin {

    @objc func openMap(_ call: CAPPluginCall) {
        let latitude = call.getString("latitude")
        let latitude = call.getNumber("longitude")
        call.success([
            "value": value
        ])
    }
}
