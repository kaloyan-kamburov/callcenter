export interface BrowserPhoneConfig {
  loadAlternateLang: boolean;
  VoiceMailSubscribe: boolean;
  EnableTextMessaging: boolean;
  ChatEngine: string;
  WelcomeScreenAccept: string;
  profileName: string;
  wssServer: string;
  WebSocketPort: string;
  ServerPath: string;
  SipDomain: string;
  SipUsername: string;
  SipPassword: string;
}

export const fallbackBrowserPhoneConfig: BrowserPhoneConfig = {
  loadAlternateLang: true,
  VoiceMailSubscribe: false,
  EnableTextMessaging: false,
  ChatEngine: "SIMPLE",
  WelcomeScreenAccept: "yes",
  profileName: "",
  wssServer: "",
  WebSocketPort: "",
  ServerPath: "",
  SipDomain: "",
  SipUsername: "",
  SipPassword: "",
};
