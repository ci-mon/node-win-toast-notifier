import { Notification } from "./notification.cjs";
import { NotifierSettings } from "./notifierSettings.cjs";
export declare class Notifier {
    private readonly _notifierPath;
    private _process?;
    private _onReady?;
    private readonly _onReadyPromise;
    private _config;
    private _notifications;
    constructor(settings: NotifierSettings);
    private _startService;
    _waitForReady(): Promise<void>;
    private _getHeaders;
    private _getUrl;
    private _lastStatusMessageNumber;
    private _subscribeForEvents;
    close(): Promise<void>;
    notify(xml: string): Promise<Notification>;
    remove(notification: Notification): Promise<void>;
}
